# KAZANOBA Vision — Next.js (React + TS) + Payload CMS in ONE folder · EL/EN · SQLite local

A VisionOS-style reimagination of **KAZANOBA TAPAS BAR | Pr·gr (Xanthi)** —
same menu + same logo as https://app.menurio.com/kazanoba-tapas-bar-pr-gr — rebuilt better.
One Next.js project (per Payload docs): storefront + CMS admin + REST together, single `package.json` at root.

```
kariera/                  THE app
  payload.config.ts       Payload 3 + SQLite (dev.db) + localization el default / en
  src/app/(app)/          Vision menu (EL/EN, search, glass dock)
  src/app/(payload)/      /admin + /api (Payload)
  src/collections/        Users, Media, MenuSections, Categories, MenuItems
  src/data/menu.ts        14 sections · 512 items (generated, offline fallback)
  src/seed/               menu.json + seed.ts
  public/                 logo.jpeg + header.jpeg (same as original)
  data/
    raw/                  Menurio API snapshots (frontcatalogs el/en, categories, info.json)
    generate.mjs          rebuilds src/data/menu.ts + src/seed/menu.json
```

## Run

Requires **Node ^18.20.2 or >=20.9.0** (Node 20 LTS recommended — Next 15 + Payload 3 need it).

```bash
cp .env.example .env
npm install
npm run dev
# → menu  http://localhost:3000
# → admin http://localhost:3000/admin  (login: admin@kazanoba.local / kazanoba-vision-123 — change it)
```

`dev.db` (SQLite) ships pre-seeded: 14 sections · 40 categories · 512 items (EL+EN).
Re-seed anytime: `npm run seed` (idempotent on Menurio ids).

## Migrations (production)

Schema migrations live in `src/migrations/` (wired via `migrationDir` in `payload.config.ts`):

```bash
npm run migrate:create   # new migration after changing collections
npm run migrate:status   # which migrations have run
npm run migrate          # apply pending migrations (deploy step)
npm run migrate:down     # roll back last batch
npm run migrate:fresh    # ⚠ wipe DB + re-run all migrations (dev only)
```

Two things to know:
- Local `dev.db` was built by dev-mode auto-push, so `migrate:status` shows the initial migration as not-run — **don't run `migrate` against `dev.db`**, it would clash with existing tables. Migrations are for fresh/production databases.
- Migration SQL is dialect-specific: `src/migrations/` = SQLite, `src/migrations-pg/` = Postgres. Never mix them.

## Production runbook (Postgres + seed, step by step)

You need: Node 20+, a Postgres database (local Postgres, Neon, Supabase…), and this repo.

```powershell
# 0. Fresh shell in the project folder
cd C:\Users\Kousex\kariera
npm install

# 1. Production env — create .env.production (never commit it).
#    On Vercel + Neon this is automatic: DATABASE_URL comes from the integration
#    (use the POOLED Neon URL, with ?sslmode=require). NEXT_PUBLIC_SERVER_URL is
#    optional — the app falls back to Vercel's own domain automatically.
#    DATABASE_URL=postgres://user:password@host-pooler.neon.tech:5432/kazanoba?sslmode=require
#    PAYLOAD_SECRET=<64 hex chars — make one with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))">

# 2. Load it into this shell (Windows PowerShell: every new terminal needs this)
$env:DATABASE_URL = "postgres://user:password@host-pooler.neon.tech:5432/kazanoba?sslmode=require"
$env:PAYLOAD_SECRET = "<your-64-hex-secret>"

# 3. Create the Postgres migration set (first time only — writes src/migrations-pg/)
npm run migrate:create

# 4. Build the schema in production
npm run migrate

# 5. Seed the 14 sections · 40 categories · 512 items (EL+EN) into production
npm run seed
# Creates admin@kazanoba.local / kazanoba-vision-123 ONLY if no users exist yet —
# prefer creating your own first user at https://your-domain.com/admin, then seed.
# Afterwards change/delete the dev admin.

# 6. Run it
npm run build
npm run start   # serves menu (/) + admin (/admin) + api (/api) on port 3000
```

Later schema changes: edit collections → `migrate:create` (with prod env loaded) → deploy → `migrate`. To check what's applied: `migrate:status` (with prod env loaded).

Regenerate the menu from the Menurio snapshots: `npm run generate:menu`.
Regenerate the admin import map after adding custom admin components: `npm run generate:importmap`.

REST (localized): `/api/menu-sections?locale=el` · `?locale=en` · `/api/menu-items?locale=en&limit=100`

## Notes

- Menu mirrors the official Menurio catalog (14 sections, 512 dishes/drinks, €). Inactive rows are dimmed, never hidden, so no section is empty.
- Frontend reads **live from the CMS** (`/api/menu-sections|categories|menu-items?locale=el|en`, merged per language) and falls back to the bundled `src/data/menu.ts` snapshot when the CMS is empty/unreachable — the footer shows a green ● live / yellow ● snapshot dot.
- CMS uses `DATABASE_URL=file:./dev.db` locally (SQLite) and the pooled Neon URL in production (Postgres).
- Source: https://app.menurio.com/kazanoba-tapas-bar-pr-gr
