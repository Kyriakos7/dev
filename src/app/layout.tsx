import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kookoovaya Xanthi — Urban Gastronomy Menu',
  description:
    'All-day urban gastronomy in Xanthi: brunch, contemporary pizza, burgers, pasta, cocktails. CMS-driven menu (EL/EN).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  )
}
