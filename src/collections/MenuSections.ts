import type { CollectionConfig } from 'payload';

// Top-level menu (Menurio "catalog"): e.g. Καφέδες, Cocktails, Κρασιά…
export const MenuSections: CollectionConfig = {
  slug: 'menu-sections',
  admin: { useAsTitle: 'slug', defaultColumns: ['slug', 'order', 'updatedAt'] },
  fields: [
    { name: 'menurioId', type: 'number', unique: true, admin: { description: 'Original Menurio catalog id' } },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'active', type: 'checkbox', defaultValue: true },
    { name: 'image', type: 'text', admin: { description: 'Cover URL (Menurio storage or /media/…)' } },
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true }
  ]
};
