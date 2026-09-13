import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Users } from './src/collections/Users'
import { Venue } from './src/collections/Venue'
import { MenuSections } from './src/collections/MenuSections'
import { MenuCategories } from './src/collections/MenuCategories'
import { MenuItems } from './src/collections/MenuItems'
import { Media } from './src/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function resolveServerURL(): string {
  if (process.env.NEXT_PUBLIC_SERVER_URL) return process.env.NEXT_PUBLIC_SERVER_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

const rawDbUrl = process.env.DATABASE_URL || 'file:./dev.db'
const isPostgres =
  rawDbUrl.startsWith('postgres://') || rawDbUrl.startsWith('postgresql://')

// SQLite via libsql: resolve `file:` URLs to an ABSOLUTE path so every
// runtime (tsx seed, `next dev`, `next start`, Vercel) opens the same file
// regardless of working directory.
function resolveSqliteUrl(url: string): string {
  const p = url.startsWith('file:') ? url.slice('file:'.length) : url
  if (p === ':memory:') return 'file::memory:'
  return `file:${path.resolve(dirname, p)}`
}

// Local dev defaults to a SQLite file in the project root.
// Production (Vercel + Neon) sets DATABASE_URL=postgresql://... and we
// automatically switch to the Postgres adapter — no code change needed.
//
// Schema is managed via versioned migration files (see src/migrations/),
// one set per dialect because migration SQL differs between SQLite/Postgres:
//   - src/migrations/sqlite    (local dev)
//   - src/migrations/postgres  (Neon production)
// `push: false` so dev boots never silently alter the schema — always
// `npm run migrate:create` + `npm run migrate` after collection changes.
// Run `npm run migrate` after a fresh clone, before `npm run seed`.
const db = isPostgres
  ? postgresAdapter({
      pool: {
        connectionString: rawDbUrl,
      },
      migrationDir: path.resolve(dirname, 'src/migrations/postgres'),
      push: false,
    })
  : sqliteAdapter({
      client: {
        url: resolveSqliteUrl(rawDbUrl),
      },
      migrationDir: path.resolve(dirname, 'src/migrations/sqlite'),
      push: false,
    })

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me-please-1234567890',
  serverURL: resolveServerURL(),
  editor: lexicalEditor(),
  db,
  collections: [Users, Venue, MenuSections, MenuCategories, MenuItems, Media],
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
  },
  cors: ['http://localhost:3000'],
  csrf: [],
})
