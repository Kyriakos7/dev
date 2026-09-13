import type { CollectionConfig } from 'payload'

export const MenuCategories: CollectionConfig = {
  slug: 'menu-categories',
  admin: {
    useAsTitle: 'name_el',
    defaultColumns: ['name_el', 'section', 'order'],
    listSearchableFields: ['name_el', 'name_en'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'menu-sections',
      required: true,
      hasMany: false,
      admin: { description: 'Parent section (Menurio catalog)' },
    },
    { name: 'name_el', type: 'text', required: true, label: 'Name (EL)' },
    { name: 'name_en', type: 'text', label: 'Name (EN)' },
    { name: 'description_el', type: 'textarea', label: 'Description (EL)' },
    { name: 'description_en', type: 'textarea', label: 'Description (EN)' },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'image', type: 'text' },
    { name: 'menurioId', type: 'number', unique: true },
  ],
}
