/**
 * Kookoovaya Xanthi — CMS seed.
 *
 * Populates Venue + menu-sections + menu-categories + menu-items from the
 * Menurio page (https://app.menurio.com/kookoovaya-xanthi).
 *
 * DB selection is automatic (see payload.config.ts):
 *   - no DATABASE_URL (or file:...)  -> local SQLite (dev.db)
 *   - DATABASE_URL=postgresql://...  -> Neon Postgres (production)
 *
 * Usage (Windows PowerShell, from project root):
 *   npm run seed                    # migrate (if needed) + upsert full menu (safe to re-run)
 *   npm run seed:fresh              # migrate (if needed) + WIPE menu + reseed
 *
 *   # seed Neon production (upsert, keeps existing users):
 *   $env:DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.neon.tech/DBNAME?sslmode=require"
 *   $env:PAYLOAD_SECRET="your-production-secret"
 *   npm run seed
 *
 *   # reset / refresh Neon production (drop everything + migrate + reseed):
 *   $env:DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx.neon.tech/DBNAME?sslmode=require"
 *   $env:PAYLOAD_SECRET="your-production-secret"
 *   npm run migrate:fresh
 *   npm run seed
 *
 * Flags:
 *   --fresh          delete all venue/sections/categories/items first
 *                     (content-level reset; users are kept)
 *   --no-migrate     skip applying pending migrations first (default: migrate)
 *   --live           refetch live from Menurio API (default: try live, fallback to snapshot)
 *   --snapshot-only  skip network, use bundled src/seed/menu-snapshot.json
 */
import dotenv from 'dotenv'
dotenv.config()

// Set before Payload init so the seed never "pushes" schema implicitly —
// schema changes come only from versioned files in src/migrations/*.
process.env.PAYLOAD_MIGRATING = 'true'

import { getPayload } from 'payload'
import config from '../../payload.config'
import snapshot from './menu-snapshot.json' with { type: 'json' }

const MENURIO_BASE = 'https://app.menurio.com/api'
const COMPANY_ID = 55
const args = new Set(process.argv.slice(2))
const FRESH = args.has('--fresh')
const NO_MIGRATE = args.has('--no-migrate')
const SNAPSHOT_ONLY = args.has('--snapshot-only')

type Snapshot = typeof snapshot

function slugify(s: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\u0370-\u03ff]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

async function fetchLive(): Promise<Snapshot | null> {
  if (SNAPSHOT_ONLY) return null
  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }
    const pickTr = (trs: any, locale: string, field: string, fb: any) => {
      const hit = Array.isArray(trs) ? trs.find((x) => x?.locale === locale) : null
      return (hit?.[field] ?? fb ?? '') as string
    }
    const abs = (u: string | null) => {
      if (!u) return null
      return u.startsWith('/') ? `https://app.menurio.com${u}` : u
    }
    const catEl: any = await fetch(`${MENURIO_BASE}/el/frontcatalogs/${COMPANY_ID}`, {
      headers,
    }).then((r) => {
      if (!r.ok) throw new Error(`catalogs el ${r.status}`)
      return r.json()
    })
    const catEn: any = await fetch(`${MENURIO_BASE}/en/frontcatalogs/${COMPANY_ID}`, {
      headers,
    })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
    const enById = new Map<number, any>((catEn?.catalogs ?? []).map((c: any) => [c.id, c]))
    const sections: any[] = []
    for (const c of catEl.catalogs ?? []) {
      const en = enById.get(c.id)
      const raw: any[] = await fetch(`${MENURIO_BASE}/el/frontcatalogcategories/${c.id}`, {
        headers,
      }).then((r) => {
        if (!r.ok) throw new Error(`categories ${c.id} ${r.status}`)
        return r.json()
      })
      const categories = []
      for (const s of raw) {
        const items = []
        let io = 0
        for (const it of s.catalogitems ?? []) {
          io++
          items.push({
            menurioId: it.id,
            order: it.ordernum ?? io,
            name_el: pickTr(it.translations, 'el', 'name', it.name),
            name_en: pickTr(it.translations, 'en', 'name', it.name),
            desc_el: pickTr(it.translations, 'el', 'description', it.description) ?? '',
            desc_en: pickTr(it.translations, 'en', 'description', it.description) ?? '',
            price: String(it.price ?? '').trim(),
            image: abs(it.image),
          })
        }
        categories.push({
          menurioId: s.id,
          order: s.ordernum ?? 0,
          name_el: pickTr(s.translations, 'el', 'name', s.name),
          name_en: pickTr(s.translations, 'en', 'name', s.name),
          desc_el: pickTr(s.translations, 'el', 'description', s.description) ?? '',
          desc_en: pickTr(s.translations, 'en', 'description', s.description) ?? '',
          image: abs(s.image),
          items,
        })
      }
      sections.push({
        menurioId: c.id,
        order: c.ordernum ?? 0,
        name_el: pickTr(c.translations, 'el', 'name', c.name),
        name_en: pickTr(c.translations, 'en', 'name', en?.name ?? c.name),
        desc_el: pickTr(c.translations, 'el', 'description', c.description) ?? '',
        desc_en: pickTr(c.translations, 'en', 'description', en?.description ?? c.description) ?? '',
        image: abs(c.image),
        categories,
      })
      // be nice to the API
      await new Promise((r) => setTimeout(r, 200))
    }
    sections.sort((a, b) => a.order - b.order)
    return {
      source: 'https://app.menurio.com/kookoovaya-xanthi',
      exportedAt: new Date().toISOString(),
      venue: (snapshot as Snapshot).venue,
      sections,
    } as Snapshot
  } catch (e) {
    console.warn('[seed] live Menurio fetch failed, falling back to snapshot:', (e as Error).message)
    return null
  }
}

async function wipe(payload: Awaited<ReturnType<typeof getPayload>>) {
  console.log('[seed] --fresh: wiping menu collections…')
  for (const collection of ['menu-items', 'menu-categories', 'menu-sections', 'venue'] as const) {
    let total = 0
    // paginate defensively (works on SQLite + Postgres)
    for (;;) {
      const found = await payload.find({ collection: collection as any, limit: 500, page: 1 })
      if (found.docs.length === 0) break
      for (const d of found.docs) {
        await payload.delete({ collection: collection as any, id: d.id })
        total++
      }
      if (!found.hasNextPage) break
    }
    console.log(`[seed]   cleared ${collection}: ${total}`)
  }
}

async function upsertByMenurioId(
  payload: Awaited<ReturnType<typeof getPayload>>,
  collection: 'menu-sections' | 'menu-categories' | 'menu-items',
  menurioId: number,
  data: Record<string, unknown>,
) {
  const found = await payload.find({
    collection: collection as any,
    where: { menurioId: { equals: menurioId } },
    limit: 1,
  } as any)
  if (found.docs.length > 0) {
    return payload.update({
      collection: collection as any,
      id: found.docs[0].id,
      data: data as any,
    })
  }
  return payload.create({ collection: collection as any, data: data as any })
}

async function main() {
  const dbUrl = process.env.DATABASE_URL || 'file:./dev.db'
  const target = dbUrl.startsWith('postgres') ? 'Postgres (Neon?)' : 'SQLite (local)'
  console.log(`[seed] target DB: ${target}`)
  console.log(`[seed] fresh=${FRESH} migrate=${!NO_MIGRATE} snapshotOnly=${SNAPSHOT_ONLY}`)

  const live = await fetchLive()
  const data: Snapshot = live ?? (snapshot as Snapshot)
  console.log(
    `[seed] source: ${live ? 'LIVE Menurio API' : 'bundled snapshot'} (${data.sections.length} sections)`,
  )

  const payload = await getPayload({ config })

  // Apply any pending migrations first, so `npm run seed` alone is enough
  // on a fresh database (local SQLite or brand-new Neon Postgres).
  if (!NO_MIGRATE) {
    try {
      console.log('[seed] applying pending migrations (if any)…')
      await (payload.db as unknown as { migrate: () => Promise<void> }).migrate()
    } catch (e) {
      console.warn(
        '[seed] WARNING: migrate() failed, continuing with seed anyway:',
        (e as Error).message,
      )
    }
  }

  if (FRESH) await wipe(payload)

  // --- venue (single) ---
  const existingVenue = await payload.find({ collection: 'venue', limit: 1 })
  const venueData = {
    name: data.venue.name,
    slug: data.venue.slug,
    address: data.venue.address,
    city: data.venue.city,
    phone: data.venue.phone,
    currency: data.venue.currency,
    hours: data.venue.hours,
    description_el: data.venue.description_el,
    description_en: data.venue.description_en,
  }
  if (existingVenue.docs.length > 0 && !FRESH) {
    await payload.update({ collection: 'venue', id: existingVenue.docs[0].id, data: venueData })
    console.log('[seed] venue updated')
  } else if (existingVenue.docs.length === 0) {
    await payload.create({ collection: 'venue', data: venueData })
    console.log('[seed] venue created')
  } else {
    await payload.create({ collection: 'venue', data: venueData })
    console.log('[seed] venue re-created after wipe')
  }

  // --- sections / categories / items ---
  let nSec = 0
  let nCat = 0
  let nItem = 0
  const sortedSections = [...data.sections].sort((a, b) => a.order - b.order)
  for (const s of sortedSections) {
    const sec = (await upsertByMenurioId(payload, 'menu-sections', s.menurioId, {
      name_el: s.name_el,
      name_en: s.name_en || s.name_el,
      description_el: s.desc_el || '',
      description_en: s.desc_en || s.desc_el || '',
      slug: slugify(s.name_en || s.name_el) || `section-${s.menurioId}`,
      order: s.order,
      image: s.image || '',
      menurioId: s.menurioId,
    })) as unknown as { id: string }
    nSec++
    const sortedCats = [...s.categories].sort((a, b) => a.order - b.order)
    for (const c of sortedCats) {
      const cat = (await upsertByMenurioId(payload, 'menu-categories', c.menurioId, {
        section: sec.id,
        name_el: c.name_el,
        name_en: c.name_en || c.name_el,
        description_el: c.desc_el || '',
        description_en: c.desc_en || c.desc_el || '',
        order: c.order,
        image: c.image || '',
        menurioId: c.menurioId,
      })) as unknown as { id: string }
      nCat++
      const sortedItems = [...c.items].sort((a, b) => a.order - b.order)
      for (const it of sortedItems) {
        if (!it.name_el && !it.name_en) continue
        await upsertByMenurioId(payload, 'menu-items', it.menurioId, {
          category: cat.id,
          name_el: it.name_el || it.name_en,
          name_en: it.name_en || it.name_el,
          description_el: it.desc_el || '',
          description_en: it.desc_en || it.desc_el || '',
          price: it.price || '—',
          order: it.order,
          image: it.image || '',
          menurioId: it.menurioId,
        })
        nItem++
      }
    }
    console.log(`[seed] section "${s.name_el}" → ${(s.categories ?? []).length} cats`)
  }

  console.log(`[seed] DONE — sections=${nSec} categories=${nCat} items=${nItem}`)
  if (typeof (payload as any).destroy === 'function') await (payload as any).destroy()
  process.exit(0)
}

main().catch(async (e) => {
  console.error('[seed] FAILED:', e)
  process.exit(1)
})
