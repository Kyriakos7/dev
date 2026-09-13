// Live menu loader — reads the bilingual content from Payload (same app, SQLite)
// and falls back to the bundled snapshot when the CMS is empty/offline.
import type { MenuCategory, MenuItem, MenuSection } from '@/data/menu';

interface CmsDoc {
  id: string | number;
  menurioId?: number;
  slug?: string;
  order?: number;
  active?: boolean;
  image?: unknown;
  name?: unknown;
  description?: unknown;
  price?: unknown;
  section?: string | number | null;
  category?: string | number | null;
  notes?: { text?: unknown }[] | null;
}

const str = (v: unknown): string => (typeof v === 'string' ? v : '');

async function list(collection: string, locale: 'el' | 'en', limit: number, signal: AbortSignal): Promise<CmsDoc[]> {
  const res = await fetch(
    `/api/${collection}?locale=${locale}&limit=${limit}&sort=order&depth=0`,
    { headers: { Accept: 'application/json' }, signal }
  );
  if (!res.ok) throw new Error(`CMS ${collection} -> ${res.status}`);
  const json = (await res.json()) as { docs?: CmsDoc[] };
  return Array.isArray(json.docs) ? json.docs : [];
}

const num = (v: unknown, fb: number): number => (typeof v === 'number' ? v : fb);

/** Returns the CMS menu, or null when unavailable/empty (caller keeps snapshot). */
export async function fetchCmsMenu(signal: AbortSignal): Promise<MenuSection[] | null> {
  const [secEl, secEn, catEl, catEn, itemEl, itemEn] = await Promise.all([
    list('menu-sections', 'el', 100, signal),
    list('menu-sections', 'en', 100, signal),
    list('categories', 'el', 300, signal),
    list('categories', 'en', 300, signal),
    list('menu-items', 'el', 2000, signal),
    list('menu-items', 'en', 2000, signal)
  ]);

  if (!secEl.length || !itemEl.length) return null;

  const byMenurio = (docs: CmsDoc[]): Map<number, CmsDoc> => {
    const m = new Map<number, CmsDoc>();
    for (const d of docs) if (typeof d.menurioId === 'number') m.set(d.menurioId, d);
    return m;
  };
  const secEnBy = byMenurio(secEn);
  const catEnBy = byMenurio(catEn);
  const itemEnBy = byMenurio(itemEn);

  const sectionsById = new Map<string | number, MenuSection>();
  const sections: MenuSection[] = [...secEl]
    .sort((a, b) => num(a.order, 0) - num(b.order, 0))
    .map((s) => {
      const en = typeof s.menurioId === 'number' ? secEnBy.get(s.menurioId) : undefined;
      const section: MenuSection = {
        id: s.menurioId ?? 0,
        order: num(s.order, 0),
        slug: str(s.slug) || `s-${s.menurioId ?? s.id}`,
        image: str(s.image),
        name: { el: str(s.name), en: str(en?.name) || str(s.name) },
        description: { el: str(s.description), en: str(en?.description) },
        categories: []
      };
      sectionsById.set(s.id, section);
      return section;
    });

  const catsById = new Map<string | number, MenuCategory>();
  for (const c of [...catEl].sort((a, b) => num(a.order, 0) - num(b.order, 0))) {
    if (c.section == null) continue;
    const section = sectionsById.get(c.section);
    if (!section) continue;
    const en = typeof c.menurioId === 'number' ? catEnBy.get(c.menurioId) : undefined;
    const cat: MenuCategory = {
      id: c.menurioId ?? 0,
      active: c.active !== false,
      name: { el: str(c.name), en: str(en?.name) || str(c.name) },
      description: { el: str(c.description), en: str(en?.description) },
      image: str(c.image),
      notes: (c.notes ?? []).map((n, i) => {
        const enText = str(en?.notes?.[i]?.text);
        const elText = str(n?.text);
        return { el: elText, en: enText || elText };
      }),
      items: []
    };
    catsById.set(c.id, cat);
    section.categories.push(cat);
  }

  let itemCount = 0;
  for (const it of [...itemEl].sort((a, b) => num(a.order, 0) - num(b.order, 0))) {
    if (it.category == null) continue;
    const cat = catsById.get(it.category);
    if (!cat) continue;
    const en = typeof it.menurioId === 'number' ? itemEnBy.get(it.menurioId) : undefined;
    const item: MenuItem = {
      id: it.menurioId ?? 0,
      active: it.active !== false,
      name: { el: str(it.name), en: str(en?.name) || str(it.name) },
      description: { el: str(it.description), en: str(en?.description) },
      price: str(it.price),
      image: str(it.image)
    };
    cat.items.push(item);
    itemCount++;
  }

  if (!itemCount) return null;
  // Active items first, like the snapshot generator.
  for (const s of sections)
    for (const c of s.categories) c.items.sort((a, b) => Number(b.active ?? true) - Number(a.active ?? true));
  return sections;
}
