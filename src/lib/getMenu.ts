import config from '@payload-config'
import { getPayload } from 'payload'
import type { CategoryDTO, ItemDTO, MenuData, SectionDTO, VenueDTO } from '@/lib/menu'

function relId(v: unknown): string {
  // SQLite/Postgres numeric IDs come back as numbers (depth 0),
  // populated relations as objects — normalize everything to string.
  if (typeof v === 'string' || typeof v === 'number') return String(v)
  if (v && typeof v === 'object' && 'id' in (v as Record<string, unknown>)) {
    return String((v as Record<string, unknown>).id)
  }
  return ''
}

export async function getMenu(): Promise<MenuData> {
  const payload = await getPayload({ config })

  const logDbError = (scope: string) => (err: unknown) => {
    // Never break the public menu on a CMS hiccup, but always log server-side
    // so failures are visible in Vercel / dev logs instead of failing silently.
    console.error(`[menu] ${scope} query failed:`, err instanceof Error ? err.message : err)
    return { docs: [] as unknown[] }
  }

  const [venueRes, secRes, catRes, itemRes] = await Promise.all([
    payload.find({ collection: 'venue', limit: 1 }).catch(logDbError('venue')),
    payload.find({ collection: 'menu-sections', limit: 1000, sort: 'order' }).catch(logDbError('menu-sections')),
    payload.find({ collection: 'menu-categories', limit: 2000, sort: 'order' }).catch(logDbError('menu-categories')),
    payload.find({ collection: 'menu-items', limit: 5000, sort: 'order' }).catch(logDbError('menu-items')),
  ])

  const v = (venueRes.docs[0] ?? null) as unknown as VenueDTO | null
  const venue: VenueDTO = v ?? {
    name: 'Kookoovaya xanthi',
    address: 'Μαλετσίδου 2 67100 Xánthi, Greece',
    city: 'Xanthi',
    phone: '2541021223',
    currency: '€',
    hours: 'Monday – Sunday 10:00 – 03:00',
    description_el:
      'Urban Gastronomy στην είσοδο της Παλιάς Πόλης της Ξάνθης. All-day προορισμός για brunch, pizza contemporanea, burgers, pasta & cocktails.',
    description_en:
      'Urban Gastronomy at the entrance of the Old Town of Xanthi. All-day venue for brunch, contemporary pizza, burgers, pasta & cocktails.',
  }

  const sections = (secRes.docs as unknown as Array<SectionDTO & { id: string | number }>).map((s) => ({
    ...s,
    id: String(s.id),
    categories: [] as Array<CategoryDTO & { items: ItemDTO[] }>,
  }))

  const catsBySection = new Map<string, Array<CategoryDTO & { items: ItemDTO[] }>>()
  for (const raw of catRes.docs as unknown as Array<Record<string, unknown>>) {
    const sectionId = relId(raw.section)
    const c = {
      id: String(raw.id),
      sectionId,
      name_el: String(raw.name_el ?? ''),
      name_en: (raw.name_en as string) ?? null,
      description_el: (raw.description_el as string) ?? null,
      description_en: (raw.description_en as string) ?? null,
      order: (raw.order as number) ?? 0,
      image: (raw.image as string) ?? null,
      items: [] as ItemDTO[],
    }
    if (!catsBySection.has(sectionId)) catsBySection.set(sectionId, [])
    catsBySection.get(sectionId)!.push(c)
  }

  const itemsByCategory = new Map<string, ItemDTO[]>()
  for (const raw of itemRes.docs as unknown as Array<Record<string, unknown>>) {
    const categoryId = relId(raw.category)
    const it: ItemDTO = {
      id: String(raw.id),
      categoryId,
      name_el: String(raw.name_el ?? ''),
      name_en: (raw.name_en as string) ?? null,
      description_el: (raw.description_el as string) ?? null,
      description_en: (raw.description_en as string) ?? null,
      price: String(raw.price ?? ''),
      order: (raw.order as number) ?? 0,
      image: (raw.image as string) ?? null,
    }
    if (!itemsByCategory.has(categoryId)) itemsByCategory.set(categoryId, [])
    itemsByCategory.get(categoryId)!.push(it)
  }

  for (const list of catsBySection.values()) {
    list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    for (const c of list) {
      const items = itemsByCategory.get(c.id) ?? []
      items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      c.items = items
    }
  }

  sections.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  for (const s of sections) {
    s.categories = catsBySection.get(s.id) ?? []
  }

  let categories = 0
  let items = 0
  for (const s of sections) {
    categories += s.categories.length
    for (const c of s.categories) items += c.items.length
  }

  return { venue, sections, counts: { sections: sections.length, categories, items } }
}
