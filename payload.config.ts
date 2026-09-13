import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Users } from './src/collections/Users';
import { Media } from './src/collections/Media';
import { MenuSections } from './src/collections/MenuSections';
import { Categories } from './src/collections/Categories';
import { MenuItems } from './src/collections/MenuItems';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || 'kazanoba-dev-secret-change-me-please-32chars',
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./dev.db'
    }
  }),
  // Bilingual venue: Greek default, English secondary — mirrors Menurio el/en.
  localization: {
    defaultLocale: 'el',
    fallback: true,
    locales: [
      { label: 'Ελληνικά', code: 'el' },
      { label: 'English', code: 'en' }
    ]
  },
  collections: [Users, Media, MenuSections, Categories, MenuItems],
  typescript: {
    outputFile: path.resolve(dirname, 'src', 'payload-types.ts')
  },
  graphQL: { disable: true }
});
