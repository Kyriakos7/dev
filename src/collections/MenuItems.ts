import type { CollectionConfig } from 'payload'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name_el',
    defaultColumns: ['name_el', 'price', 'category'],
    listSearchableFields: ['name_el', 'name_en', 'description_el', 'description_en'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'menu-categories',
      required: true,
      hasMany: false,
    },
    { name: 'name_el', type: 'text', required: true, label: 'Name (EL)' },
    { name: 'name_en', type: 'text', label: 'Name (EN)' },
    { name: 'description_el', type: 'textarea', label: 'Description (EL)' },
    { name: 'description_en', type: 'textarea', label: 'Description (EN)' },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: { description: 'Display price, e.g. 12,50 — currency comes from venue' },
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'image', type: 'text' },
    { name: 'tags', type: 'text', hasMany: true, admin: { description: 'Optional tags' } },
    { name: 'menurioId', type: 'number', unique: true },
  ],
}
