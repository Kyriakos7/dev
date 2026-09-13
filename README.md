# 🦉 Kookoovaya Xanthi — visionOS Menu (Next.js + Payload CMS)

Recreation of **https://app.menurio.com/kookoovaya-xanthi** as a modern, CMS-driven project
with an **Apple Vision / visionOS** design language (frosted glass, depth, aurora orbs).

- **Stack:** React + Next.js (TypeScript, App Router) + Payload CMS v3
- **Local DB:** SQLite (`dev.db` in project root, git-ignored)
- **Prod DB:** Neon Postgres on Vercel — auto-selected via `DATABASE_URL` (you configure it yourself)
- **Menu:** 10 sections · 45 categories · 363 items (EL + EN), all editable in Payload Admin — nothing hardcoded
- **Seed:** pulls live from the Menurio API, falls back to bundled `src/seed/menu-snapshot.json`
- **Migrations:** versioned files in `src/migrations/` (one set per dialect: `sqlite/`, `postgres/`)

## 1) Quickstart (Windows PowerShell, everything happens in this folder)

```powershell
# 1. install
npm install

# 2. create schema in local SQLite (uses src/migrations/sqlite)
npm run migrate

# 3. seed local SQLite with the full Menurio menu (auto-migrates if needed)
npm run seed

# 4. run dev (site at http://localhost:3000, CMS at http://localhost:3000/admin)
npm run dev
```

Create your first admin user at `http://localhost:3000/admin` (Users collection).
Edit menu at `/admin` → `venue`, `menu-sections`, `menu-categories`, `menu-items`.
The homepage re-reads the CMS on every request (`force-dynamic`) — edits appear on refresh.
REST API is at `/api/*` (e.g. `/api/menu-sections?limit=5`), GraphQL playground at `/api/graphql`.

## 2) Project structure

```
payload.config.ts          # dual-DB config: SQLite local, Postgres when DATABASE_URL=postgres…
src/collections/           # Users, Venue, MenuSections, MenuCategories, MenuItems, Media
src/migrations/sqlite/     # versioned SQLite migrations (local dev)
src/migrations/postgres/   # versioned Postgres migrations (Neon prod)
src/app/(frontend)/page.tsx # CMS-driven homepage (server component)
src/components/MenuApp.tsx # visionOS UI: EL/EN toggle, search, chips, glass cards
src/app/globals.css         # Apple Vision design system (pure CSS, no Tailwind needed)
src/lib/getMenu.ts          # groups sections → categories → items from Payload
src/seed/seed.ts            # seed script (migrate + live Menurio API + snapshot fallback)
src/seed/menu-snapshot.json # full menu snapshot (10 sections / 363 items, EL+EN)
```

## 3) Seed Neon production from your machine (EXACT commands)

Prereqs: `npm install` done. Get your Neon connection string from
Neon Dashboard → your project → Connection string
(e.g. `postgresql://USER:PASSWORD@ep-xxxx.eu-central-1.aws.neon.tech/DBNAME?sslmode=require`)
and your production `PAYLOAD_SECRET` (the same value you set in Vercel env).

**Seed / update production (creates schema if needed + upserts menu — safe to re-run, keeps Users):**

```powershell
$env:DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.neon.tech/DBNAME?sslmode=require"
$env:PAYLOAD_SECRET="your-production-secret-32-chars-min"
npm run seed
```

**Reset / refresh production (drop ALL tables + migrate + reseed from Menurio):**

```powershell
$env:DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.neon.tech/DBNAME?sslmode=require"
$env:PAYLOAD_SECRET="your-production-secret-32-chars-min"
npm run migrate:fresh
npm run seed
```

Content-only refresh (keeps Users + schema, wipes just the menu and reseeds):

```powershell
$env:DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.neon.tech/DBNAME?sslmode=require"
$env:PAYLOAD_SECRET="your-production-secret-32-chars-min"
npm run seed:fresh
```

Notes:
- `npm run seed` = migrate pending files (correct dialect dir is picked automatically) + upsert by `menurioId`
- `npm run seed:fresh` = same, but deletes venue + all menu docs first (Users are kept)
- `npm run migrate:fresh` = drops the whole schema and re-applies all migrations (destroys Users too — then `npm run seed` repopulates the menu; recreate your admin user at `/admin`)
- After seeding, clear the PowerShell env vars:
  `Remove-Item Env:\DATABASE_URL; Remove-Item Env:\PAYLOAD_SECRET`
- To force snapshot (no network): `npx tsx src/seed/seed.ts --snapshot-only`
- To skip migrations in seed: add `--no-migrate`

## 4) Migrations

Schema is managed with versioned Payload/drizzle migrations — no `push`, no drift.
Because migration SQL differs per dialect, there is one set per database:

- `src/migrations/sqlite/` — applied when `DATABASE_URL` is `file:…` (or unset)
- `src/migrations/postgres/` — applied when `DATABASE_URL` starts with `postgres…`

`payload.config.ts` picks the directory automatically, so `npm run migrate`,
`npm run migrate:status` and `npm run seed` always target the correct set.

**After changing collections, create a migration for each dialect:**

```powershell
# 1. SQLite set (uses local .env → dev.db; no DB connection needed to generate)
npm run migrate:create -- <name>
# e.g. npm run migrate:create -- add-tags-to-items

# 2. Postgres set (dummy URL is enough — generation doesn't connect)
$env:DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kookoovaya"
npm run migrate:create -- <name>
Remove-Item Env:\DATABASE_URL

# 3. apply locally + commit both dirs
npm run migrate
```

Other scripts: `npm run migrate:status` (what's applied), `npm run migrate:down` (revert last batch).

## 5) Deploy to Vercel + Neon

1. Push this folder to GitHub.
2. Vercel → New Project → import repo. Framework: Next.js. Build: `npm run build`.
3. Vercel → Settings → Environment Variables:
   - `DATABASE_URL` = your Neon `postgresql://…?sslmode=require`
   - `PAYLOAD_SECRET` = long random string (32+ chars)
4. Redeploy, then run the **seed production** commands from §3 once from your machine
   (the seed applies the Postgres migrations automatically).
5. Visit `https://YOUR-APP.vercel.app` (menu) and `https://YOUR-APP.vercel.app/admin` (CMS).

## 6) Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next dev (http://localhost:3000) |
| `npm run build` / `npm start` | Production build / serve |
| `npm run migrate` | Apply pending migrations (auto picks sqlite/postgres set) |
| `npm run migrate:status` | Show applied vs pending migrations |
| `npm run migrate:create -- <name>` | Generate migration for current dialect (run once per dialect, see §4) |
| `npm run migrate:fresh` | Drop schema + re-apply all migrations (destructive) |
| `npm run migrate:down` | Revert last applied batch |
| `npm run seed` | Migrate (if needed) + upsert full menu into current DB |
| `npm run seed:fresh` / `npm run db:reset` | Migrate + wipe menu + reseed (keeps Users) |
| `npm run generate:types` | Regenerate `src/payload-types.ts` |

## 7) Source attribution

Menu content © Kookoovaya Xanthi via Menurio (`https://app.menurio.com/kookoovaya-xanthi`),
fetched at seed time from the public `api/el/frontcatalogs/55` + `frontcatalogcategories/:id`
endpoints (EL + EN translations preserved). Snapshot date in `menu-snapshot.json`.
