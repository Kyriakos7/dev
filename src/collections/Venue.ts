import type { CollectionConfig } from 'payload'

export const Venue: CollectionConfig = {
  slug: 'venue',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'city', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'address', type: 'text' },
    { name: 'city', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'currency', type: 'text', defaultValue: '€' },
    { name: 'hours', type: 'text' },
    { name: 'description_el', type: 'textarea' },
    { name: 'description_en', type: 'textarea' },
    { name: 'heroImage', type: 'text', admin: { description: 'Absolute image URL (e.g. Menurio storage URL)' } },
  ],
}
