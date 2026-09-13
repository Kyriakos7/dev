import type { CollectionConfig } from 'payload'

export const MenuSections: CollectionConfig = {
  slug: 'menu-sections',
  admin: {
    useAsTitle: 'name_el',
    defaultColumns: ['name_el', 'name_en', 'order'],
    listSearchableFields: ['name_el', 'name_en'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'name_el', type: 'text', required: true, label: 'Title (EL)' },
    { name: 'name_en', type: 'text', label: 'Title (EN)' },
    { name: 'description_el', type: 'textarea', label: 'Description (EL)' },
    { name: 'description_en', type: 'textarea', label: 'Description (EN)' },
    { name: 'slug', type: 'text', admin: { description: 'Auto-filled by seed; safe to edit' } },
    { name: 'order', type: 'number', defaultValue: 0, admin: { description: 'Display order (low first)' } },
    { name: 'image', type: 'text', admin: { description: 'Absolute image URL' } },
    { name: 'menurioId', type: 'number', unique: true, admin: { description: 'Original Menurio catalog id' } },
  ],
}
