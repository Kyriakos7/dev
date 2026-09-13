export type Lang = 'el' | 'en'

export interface VenueDTO {
  name: string
  address?: string | null
  city?: string | null
  phone?: string | null
  currency?: string | null
  hours?: string | null
  description_el?: string | null
  description_en?: string | null
  heroImage?: string | null
}

export interface SectionDTO {
  id: string
  name_el: string
  name_en?: string | null
  description_el?: string | null
  description_en?: string | null
  slug?: string | null
  order?: number | null
  image?: string | null
}

export interface CategoryDTO {
  id: string
  sectionId: string
  name_el: string
  name_en?: string | null
  description_el?: string | null
  description_en?: string | null
  order?: number | null
  image?: string | null
}

export interface ItemDTO {
  id: string
  categoryId: string
  name_el: string
  name_en?: string | null
  description_el?: string | null
  description_en?: string | null
  price: string
  order?: number | null
  image?: string | null
}

export interface MenuData {
  venue: VenueDTO
  sections: Array<
    SectionDTO & {
      categories: Array<CategoryDTO & { items: ItemDTO[] }>
    }
  >
  counts: { sections: number; categories: number; items: number }
}

export function t(el: unknown, en: unknown, lang: Lang): string {
  const a = typeof el === 'string' ? el.trim() : ''
  const b = typeof en === 'string' ? en.trim() : ''
  if (lang === 'en') return b || a
  return a || b
}
