'use client'

import { useMemo, useState } from 'react'
import type { Lang, MenuData } from '@/lib/menu'
import { t } from '@/lib/menu'

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\u0370-\u03ff]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export default function MenuApp({ data }: { data: MenuData }) {
  const [lang, setLang] = useState<Lang>('el')
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<string | null>(null)

  const q = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!q) return data.sections
    return data.sections
      .map((s) => ({
        ...s,
        categories: s.categories
          .map((c) => ({
            ...c,
            items: c.items.filter((it) => {
              const hay = [it.name_el, it.name_en, it.description_el, it.description_en]
                .filter(Boolean)
                .join(' ')
                .toLowerCase()
              return hay.includes(q)
            }),
          }))
          .filter(
            (c) =>
              c.items.length > 0 ||
              [c.name_el, c.name_en].filter(Boolean).join(' ').toLowerCase().includes(q),
          ),
      }))
      .filter((s) => s.categories.length > 0)
  }, [data.sections, q])

  const shownItems = filtered.reduce(
    (n, s) => n + s.categories.reduce((a, c) => a + c.items.length, 0),
    0,
  )

  return (
    <>
      {/* top floating nav */}
      <nav className="nav" aria-label="Top">
        <div className="brand">
          <div className="orb-logo" aria-hidden>
            🦉
          </div>
          <div>
            <div className="brand-name">{data.venue.name}</div>
            <div className="brand-sub">Urban Gastronomy · Xanthi</div>
          </div>
        </div>
        <div className="nav-spacer" />
        <div className="seg" role="group" aria-label="Language">
          <button aria-pressed={lang === 'el'} onClick={() => setLang('el')}>
            ΕΛ
          </button>
          <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
        <a className="pill-link" href="#menu">
          {lang === 'el' ? 'Μενού' : 'Menu'} · {data.counts.items}
        </a>
      </nav>

      {/* hero */}
      <header className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">
              <span className="dot" /> {lang === 'el' ? 'Ανοιχτά · 10:00 – 03:00' : 'Open · 10:00 – 03:00'}
            </span>
            <h1>
              {lang === 'el' ? (
                <>
                  <span className="thin">Kookoovaya</span>
                  <br />
                  <span className="grad">Xanthi Menu</span>
                </>
              ) : (
                <>
                  <span className="thin">Urban</span> <span className="grad">Gastronomy</span>
                  <br />
                  Xanthi Menu
                </>
              )}
            </h1>
            <p className="lede">{t(data.venue.description_el, data.venue.description_en, lang)}</p>
            <div className="meta-row">
              <span className="meta">📍 {data.venue.address}</span>
              <a className="meta" href={`tel:+30${(data.venue.phone || '').replace(/\s/g, '')}`}>
                📞 <small>{lang === 'el' ? 'τηλ.' : 'tel.'}</small> {data.venue.phone}
              </a>
              <span className="meta">
                🕙 <small>{lang === 'el' ? 'ωράριο' : 'hours'}</small> {data.venue.hours}
              </span>
            </div>
          </div>
          <aside className="hero-card" aria-label="Highlights">
            <h3>{lang === 'el' ? 'Στιγμιότυπο' : 'At a glance'}</h3>
            <div className="big">{data.counts.items} πιάτα &amp; ροφήματα</div>
            <p>
              {lang === 'el'
                ? `${data.counts.sections} ενότητες · ${data.counts.categories} κατηγορίες. Όλο το περιεχόμενο έρχεται ζωντανά από το Payload CMS — καμία τιμή δεν είναι hardcoded.`
                : `${data.counts.sections} sections · ${data.counts.categories} categories. All content is served live from Payload CMS — nothing is hardcoded.`}
            </p>
            <div className="stat-grid">
              <div className="stat">
                <b>{data.counts.sections}</b>
                <span>{lang === 'el' ? 'Ενότητες' : 'Sections'}</span>
              </div>
              <div className="stat">
                <b>{data.counts.categories}</b>
                <span>{lang === 'el' ? 'Κατηγορίες' : 'Groups'}</span>
              </div>
              <div className="stat">
                <b>{data.venue.currency || '€'}</b>
                <span>{lang === 'el' ? 'Νόμισμα' : 'Currency'}</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      {/* toolbar */}
      <div className="toolbar" id="menu">
        <label className="search">
          <span aria-hidden>⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'el' ? 'Αναζήτηση πιάτου… π.χ. burrata, πίτσα' : 'Search dishes… e.g. burrata, pizza'}
            aria-label={lang === 'el' ? 'Αναζήτηση' : 'Search'}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear"
              style={{
                background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
                color: '#fff', borderRadius: 999, width: 26, height: 26, cursor: 'pointer',
              }}
            >
              ×
            </button>
          )}
        </label>
        <span className="count">
          {q
            ? lang === 'el'
              ? `${shownItems} αποτελέσματα`
              : `${shownItems} results`
            : lang === 'el'
              ? `${data.counts.items} είδη`
              : `${data.counts.items} items`}
        </span>
      </div>

      {/* section chips */}
      <div className="chips" role="navigation" aria-label="Sections">
        {data.sections.map((s, i) => {
          const id = `s-${slugify(t(s.name_el, s.name_en, 'en') || s.id)}-${i}`
          return (
            <a
              key={s.id}
              href={`#${id}`}
              className={active === s.id ? 'chip active' : 'chip'}
              onClick={() => setActive(s.id)}
            >
              {t(s.name_el, s.name_en, lang)}
            </a>
          )
        })}
      </div>

      {/* sections */}
      {filtered.length === 0 && (
        <div className="empty">
          {lang === 'el'
            ? 'Δεν βρέθηκε τίποτα. Δοκίμασε άλλη λέξη — ή καθάρισε την αναζήτηση.'
            : 'Nothing found. Try another keyword — or clear the search.'}
        </div>
      )}

      {filtered.map((s, si) => {
        const id = `s-${slugify(t(s.name_el, s.name_en, 'en') || s.id)}-${data.sections.indexOf(s)}`
        const n = s.categories.reduce((a, c) => a + c.items.length, 0)
        return (
          <section className="section" id={id} key={s.id}>
            <div className="section-head">
              <div className="section-index">{String(si + 1).padStart(2, '0')}</div>
              <div>
                <h2>{t(s.name_el, s.name_en, lang)}</h2>
                {(s.description_el || s.description_en) && <p>{t(s.description_el, s.description_en, lang)}</p>}
              </div>
              <span className="section-count">{n} items</span>
            </div>

            {s.categories.map((c) => (
              <div className="cat" key={c.id}>
                <div className="cat-head">
                  <h3>{t(c.name_el, c.name_en, lang)}</h3>
                  {(c.description_el || c.description_en) && <p>{t(c.description_el, c.description_en, lang)}</p>}
                </div>
                <div className="items">
                  {c.items.map((it) => (
                    <article className="item" key={it.id}>
                      <div className="item-top">
                        <h4 className="item-name">{t(it.name_el, it.name_en, lang)}</h4>
                        <span className="price">
                          {it.price} {data.venue.currency || '€'}
                        </span>
                      </div>
                      {(it.description_el || it.description_en) && (
                        <p className="item-desc">{t(it.description_el, it.description_en, lang)}</p>
                      )}
                      {lang === 'en' && it.name_el && it.name_en && it.name_el !== it.name_en && (
                        <div className="item-alt">{it.name_el}</div>
                      )}
                      {lang === 'el' && it.name_en && it.name_el !== it.name_en && (
                        <div className="item-alt">{it.name_en}</div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )
      })}

      {/* footer */}
      <footer className="footer">
        <div>
          <h4>{data.venue.name}</h4>
          <p>
            {data.venue.address} · {data.venue.city}
            <br />
            {lang === 'el' ? 'Τηλέφωνο' : 'Phone'}:{' '}
            <a href={`tel:+30${(data.venue.phone || '').replace(/\s/g, '')}`}>{data.venue.phone}</a>
            <br />
            {data.venue.hours}
          </p>
          <p style={{ fontSize: 13 }}>
            {lang === 'el'
              ? 'Πηγή μενού: Menurio. Επεξεργάσιμο από το CMS στο /admin → menu-sections / menu-categories / menu-items.'
              : 'Menu source: Menurio. Editable in the CMS at /admin → menu-sections / menu-categories / menu-items.'}
          </p>
        </div>
        <div>
          <h4>{lang === 'el' ? 'Διαχείριση' : 'Manage'}</h4>
          <p>
            <a href="/admin">Payload Admin →</a>
            <br />
            <a href="/api/menu-sections?limit=5">API: menu-sections</a>
            <br />
            <a href="/api/menu-items?limit=5">API: menu-items</a>
          </p>
        </div>
      </footer>
      <div className="footnote">
        visionOS-style concept · Next.js + Payload CMS · SQLite local / Neon Postgres prod · {data.counts.items} items live from CMS
      </div>

      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        ↑
      </button>
    </>
  )
}
