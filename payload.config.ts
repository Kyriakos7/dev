import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Users } from './src/collections/Users';
import { Media } from './src/collections/Media';
import { MenuSections } from './src/collections/MenuSections';
import { Categories } from './src/collections/Categories';
import { MenuItems } from './src/collections/MenuItems';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Same codebase, two databases:
//  - local dev  -> SQLite file  (DATABASE_URI=file:./dev.db)
//  - production -> Postgres     (DATABASE_URI=postgres://...)
const databaseUri = process.env.DATABASE_URL || process.env.DATABASE_URI || 'file:./dev.db';
const isPostgres = databaseUri.startsWith('postgres');

function resolveServerURL(): string {
  if (process.env.NEXT_PUBLIC_SERVER_URL) return process.env.NEXT_PUBLIC_SERVER_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000/'
}

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me-please-1234567890',
  serverURL: resolveServerURL(),
  editor: lexicalEditor(),
  db: isPostgres
    ? postgresAdapter({
        pool: { connectionString: databaseUri },
        // Postgres needs its own migration set (SQL dialect differs from SQLite).
        migrationDir: path.resolve(dirname, 'src', 'migrations-pg'),
      })
    : sqliteAdapter({
        client: { url: databaseUri },
        // Drizzle migration files for local/prod-sqlite deploys (see package.json scripts).
        migrationDir: path.resolve(dirname, 'src', 'migrations'),
      }),
  // Bilingual venue: Greek default, English secondary — mirrors Menurio el/en.
  localization: {
    defaultLocale: 'el',
    fallback: true,
    locales: [
      { label: 'Ελληνικά', code: 'el' },
      { label: 'English', code: 'en' }
    ]
  },
  collections: [Users, Media, MenuSections, Categories, MenuItems],
  typescript: {
    outputFile: path.resolve(dirname, 'src', 'payload-types.ts')
  },
  graphQL: { disable: true }
});
