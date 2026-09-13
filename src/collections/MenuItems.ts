import type { CollectionConfig } from 'payload';

// Dish / drink (Menurio itemtype=3)
export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'slug',
    defaultColumns: ['slug', 'category', 'price'],
    pagination: { defaultLimit: 50 }
  },
  fields: [
    { name: 'menurioId', type: 'number', unique: true },
    { name: 'slug', type: 'text', required: true },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'menu-sections',
      required: true,
      hasMany: false
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'active', type: 'checkbox', defaultValue: true },
    { name: 'price', type: 'text', admin: { description: 'e.g. 4.50 — currency € is added by the frontend' } },
    { name: 'image', type: 'text' },
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true }
  ]
};
