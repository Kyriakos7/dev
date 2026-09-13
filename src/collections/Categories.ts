import type { CollectionConfig } from 'payload';

// Mid level (Menurio category with itemtype=1): e.g. "Σοκολάτες", "Signature Cocktails"
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'slug', defaultColumns: ['slug', 'section', 'order'] },
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
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'active', type: 'checkbox', defaultValue: true },
    { name: 'image', type: 'text' },
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      name: 'notes',
      type: 'array',
      fields: [
        { name: 'text', type: 'textarea', localized: true }
      ]
    }
  ]
};
