import fs from 'node:fs';
import path from 'node:path';

const rawDir = path.join(process.cwd(), 'data', 'raw');
const frontEl = JSON.parse(fs.readFileSync(path.join(rawDir, 'frontcatalogs-el.json'), 'utf8'));
const frontEnMap = new Map();
try {
  const frontEn = JSON.parse(fs.readFileSync(path.join(rawDir, 'frontcatalogs-en.json'), 'utf8'));
  for (const c of frontEn.catalogs) frontEnMap.set(c.id, c);
} catch {}

function pickTrans(translations, locale, fallback) {
  if (!translations || !translations.length) return fallback ?? '';
  const hit = translations.find((t) => t.locale === locale);
  if (hit) return hit.name ?? hit.description ?? fallback ?? '';
  return fallback ?? '';
}
function pickTransDesc(translations, locale, fallback) {
  if (!translations || !translations.length) return fallback ?? '';
  const hit = translations.find((t) => t.locale === locale);
  if (hit) return hit.description ?? fallback ?? '';
  return fallback ?? '';
}
function clean(s) {
  if (s == null) return '';
  return String(s).trim().replace(/\s+/g, ' ');
}

const sections = [];
for (const cat of [...frontEl.catalogs].sort((a,b)=>a.ordernum-b.ordernum)) {
  const en = frontEnMap.get(cat.id);
  const elCat = JSON.parse(fs.readFileSync(path.join(rawDir, `cat-${cat.id}-el.json`), 'utf8'));
  const enCatMap = new Map();
  try {
    const enCat = JSON.parse(fs.readFileSync(path.join(rawDir, `cat-${cat.id}-en.json`), 'utf8'));
    for (const c of enCat) enCatMap.set(c.id, c);
  } catch {}
  const categories = [];
  for (const group of elCat) {
    if (!group) continue;
    const enGroup = enCatMap.get(group.id);
    const catNameEl = clean(pickTrans(group.translations, 'el', group.name));
    const catNameEn = clean(enGroup ? pickTrans(enGroup.translations, 'en', enGroup.name) : pickTrans(group.translations,'en', group.name));
    const catDescEl = clean(pickTransDesc(group.translations, 'el', group.description));
    const catDescEn = clean(enGroup ? pickTransDesc(enGroup.translations,'en', enGroup.description) : pickTransDesc(group.translations,'en', group.description));
    const items = [];
    const notes = [];
    for (const it of (group.catalogitems || [])) {
      if (!it) continue;
      // build en lookup
      let enItem = null;
      if (enGroup && enGroup.catalogitems) enItem = enGroup.catalogitems.find((x)=>x.id===it.id);
      const nameEl = clean(pickTrans(it.translations,'el', it.name));
      const nameEn = clean(enItem ? pickTrans(enItem.translations,'en', enItem.name) : pickTrans(it.translations,'en', it.name));
      const descEl = clean(pickTransDesc(it.translations,'el', it.description));
      const descEn = clean(enItem ? pickTransDesc(enItem.translations,'en', enItem.description) : pickTransDesc(it.translations,'en', it.description));
      if (it.itemtype === 2) {
        if (nameEl || descEl) notes.push({ el: [nameEl, descEl].filter(Boolean).join(' — '), en: [nameEn, descEn].filter(Boolean).join(' — ') });
        continue;
      }
      if (it.itemtype !== 3) continue;
      if (!nameEl && !nameEn) continue;
      // skip obvious duplicates marked Copy with inactive? keep active only, already filtered
      items.push({
        id: it.id,
        active: it.active === 1,
        name: { el: nameEl || nameEn, en: nameEn || nameEl },
        description: { el: descEl, en: descEn },
        price: clean(it.price),
        image: clean(it.image),
      });
    }
    if (!items.length && !notes.length) continue;
    // active items first, keep original order otherwise
    items.sort((a, b) => Number(b.active ?? true) - Number(a.active ?? true));
    categories.push({
      id: group.id,
      active: group.active === 1,
      name: { el: catNameEl, en: catNameEn || catNameEl },
      description: { el: catDescEl, en: catDescEn },
      image: clean(group.image),
      notes,
      items,
    });
  }
  const nameEl = clean(pickTrans(cat.translations,'el', cat.name));
  const nameEn = clean(en ? pickTrans(en.translations,'en', en.name) : pickTrans(cat.translations,'en', cat.name));
  const descEl = clean(pickTransDesc(cat.translations,'el', cat.description));
  const descEn = clean(en ? pickTransDesc(en.translations,'en', en.description) : pickTransDesc(cat.translations,'en', cat.description));
  sections.push({
    id: cat.id,
    order: cat.ordernum,
    slug: 's-' + cat.id,
    image: clean(cat.image).replace(/^\//,'https://app.menurio.com/'),
    name: { el: nameEl, en: (nameEn && !nameEn.includes('Coffees - Coffees')) ? nameEn : nameEl },
    description: { el: descEl, en: descEn },
    categories,
  });
}

const totalItems = sections.reduce((a,s)=>a+s.categories.reduce((x,c)=>x+c.items.length,0),0);
console.log(`sections=${sections.length} totalItems=${totalItems}`);
for (const s of sections) {
  const n = s.categories.reduce((x,c)=>x+c.items.length,0);
  console.log(`- ${s.id} ${s.name.el} | ${s.categories.length} groups | ${n} items`);
}

// write web data (app lives at repo root)
const outDirWeb = path.join(process.cwd(), 'src', 'data');
fs.mkdirSync(outDirWeb, { recursive: true });
const ts = `// Auto-generated from Menurio API (https://app.menurio.com/kazanoba-tapas-bar-pr-gr)\n// Do not edit by hand — regenerate via: npm run generate:menu (see /data)\n// Source company: KAZANOBA TAPAS BAR | Pr gr, Xanthi, Greece. Currency: €\nexport type Locale = 'el' | 'en';\nexport interface Localized { el: string; en: string }\nexport interface MenuItem { id: number; active?: boolean; name: Localized; description: Localized; price: string; image: string }\nexport interface MenuNote { el: string; en: string }\nexport interface MenuCategory { id: number; active?: boolean; name: Localized; description: Localized; image: string; notes: MenuNote[]; items: MenuItem[] }\nexport interface MenuSection { id: number; order: number; slug: string; image: string; name: Localized; description: Localized; categories: MenuCategory[] }\nexport const CURRENCY = '€';\nexport const VENUE = { name: 'KAZANOBA TAPAS BAR', suffix: 'Pr·gr', city: 'Xanthi', country: 'Greece', postcode: '67100', sourceUrl: 'https://app.menurio.com/kazanoba-tapas-bar-pr-gr', currency: '€' } as const;\nexport const MENU: MenuSection[] = ${JSON.stringify(sections, null, 2)};\n`;
fs.writeFileSync(path.join(outDirWeb, 'menu.ts'), ts, 'utf8');

// write CMS seed json (same single app)
const outSeedDir = path.join(process.cwd(), 'src', 'seed');
fs.mkdirSync(outSeedDir, { recursive: true });
fs.writeFileSync(path.join(outSeedDir, 'menu.json'), JSON.stringify({ sections }, null, 2), 'utf8');
console.log('wrote src/data/menu.ts and src/seed/menu.json');
