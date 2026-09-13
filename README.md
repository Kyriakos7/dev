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

Regenerate the menu from the Menurio snapshots: `npm run generate:menu`.
Regenerate the admin import map after adding custom admin components: `npm run generate:importmap`.

REST (localized): `/api/menu-sections?locale=el` · `?locale=en` · `/api/menu-items?locale=en&limit=100`

## Notes

- Menu mirrors the official Menurio catalog (14 sections, 512 dishes/drinks, €). Inactive rows are dimmed, never hidden, so no section is empty.
- Frontend reads **live from the CMS** (`/api/menu-sections|categories|menu-items?locale=el|en`, merged per language) and falls back to the bundled `src/data/menu.ts` snapshot when the CMS is empty/unreachable — the footer shows a green ● live / yellow ● snapshot dot.
- CMS uses `DATABASE_URI=file:./dev.db` locally. Production (Postgres etc.) is yours later.
- Source: https://app.menurio.com/kazanoba-tapas-bar-pr-gr
