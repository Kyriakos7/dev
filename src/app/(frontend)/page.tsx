import { getMenu } from '@/lib/getMenu'
import MenuApp from '@/components/MenuApp'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  const data = await getMenu()

  return (
    <main>
      <div className="orbs" aria-hidden>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>
      <div className="noise" aria-hidden />
      <div className="shell">
        {data.counts.items === 0 && (
          <div className="empty" style={{ marginTop: 24 }}>
            The CMS is empty. Run <code>npm run seed</code> to populate it from the Menurio snapshot,
            then refresh. Manage content at <a href="/admin">/admin</a>.
          </div>
        )}
        <MenuApp data={data} />
      </div>
    </main>
  )
}
