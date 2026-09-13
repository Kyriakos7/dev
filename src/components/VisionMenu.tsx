'use client';

import { useEffect, useMemo, useState } from 'react';
import { MENU, VENUE, CURRENCY, type Locale, type MenuSection } from '@/data/menu';
import { fetchCmsMenu } from '@/lib/cms';
import { t } from '@/lib/i18n';

function norm(s: string): string {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function VisionMenu() {
  const [locale, setLocale] = useState<Locale>('el');
  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState<number | 'all'>('all');
  // Live CMS menu when available, bundled snapshot otherwise.
  const [menu, setMenu] = useState<MenuSection[]>(MENU);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 10000);
    fetchCmsMenu(ctrl.signal)
      .then((cms) => {
        if (cms) {
          setMenu(cms);
          setLive(true);
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('kazanoba-locale');
      if (saved === 'el' || saved === 'en') setLocale(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('kazanoba-locale', locale);
      document.documentElement.lang = locale;
    } catch {}
  }, [locale]);

  const totals = useMemo(() => {
    const dishes = menu.reduce(
      (a, s) => a + s.categories.reduce((x, c) => x + c.items.length, 0),
      0
    );
    return { sections: menu.length, dishes };
  }, [menu]);

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return menu.map((section) => {
      const inSection =
        !q ||
        norm(section.name.el).includes(q) ||
        norm(section.name.en).includes(q);
      const categories = section.categories
        .map((cat) => {
          const inCat =
            inSection ||
            norm(cat.name.el).includes(q) ||
            norm(cat.name.en).includes(q);
          const items = cat.items.filter((it) => {
            if (inSection || inCat) return true;
            if (!q) return true;
            return (
              norm(it.name.el).includes(q) ||
              norm(it.name.en).includes(q) ||
              norm(it.description.el).includes(q) ||
              norm(it.description.en).includes(q)
            );
          });
          return { ...cat, items };
        })
        .filter((c) => c.items.length > 0 || c.notes.length > 0);
      return { ...section, categories };
    }).filter((s) =>
      activeSection === 'all' ? s.categories.length > 0 : s.id === activeSection && s.categories.length > 0
    );
  }, [query, activeSection, menu]);

  const jumpTo = (id: number | 'all') => {
    setActiveSection(id);
    if (id !== 'all') {
      requestAnimationFrame(() => {
        document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* floating nav */}
      <div className="wrap" style={{ paddingBottom: 0 }}>
        <nav className="nav-float" aria-label="main">
          <div className="brand">
            {/* same logo as Menurio, kept local */}
            <img src="/logo.jpeg" alt="Kazanoba logo" />
            <div className="brand-name">
              <strong>KAZANOBA</strong>
              <span>{locale === 'el' ? 'TAPAS BAR · Pr·gr · Ξάνθη' : 'TAPAS BAR · Pr·gr · Xanthi'}</span>
            </div>
          </div>
          <label className="search" aria-label="search">
            <span aria-hidden>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(locale, 'searchPh')}
            />
          </label>
          <div className="seg" role="tablist" aria-label="language">
            <button className={locale === 'el' ? 'on' : ''} onClick={() => setLocale('el')}>ΕΛ</button>
            <button className={locale === 'en' ? 'on' : ''} onClick={() => setLocale('en')}>EN</button>
          </div>
        </nav>
        <label className="search mobile" aria-label="search-mobile">
          <span aria-hidden>⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(locale, 'searchMobilePh')}
          />
        </label>
      </div>

      <div className="wrap">
        {/* hero */}
        <header className="hero">
          <div className="hero-bg" style={{ backgroundImage: 'url(/header.jpeg)' }} />
          <div className="hero-inner">
            <img className="logo-3d" src="/logo.jpeg" alt="Kazanoba Tapas Bar logo" />
            <div>
              <span className="eyebrow">● {t(locale, 'tapasBar')}</span>
              <h1>
                KAZANOBA <span className="thin">Vision</span>
              </h1>
              <p className="sub">{t(locale, 'heroSub')}</p>
              <div className="stats">
                <span className="stat">◈ <strong>{totals.sections}</strong> {t(locale, 'sections')}</span>
                <span className="stat">✦ <strong>{totals.dishes}</strong> {t(locale, 'dishes')}</span>
                <span className="stat">€ <strong>{CURRENCY}</strong> {t(locale, 'currencyNote')}</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#menu">{t(locale, 'explore')} ↓</a>
                <a className="btn" href={VENUE.sourceUrl} target="_blank" rel="noreferrer">
                  {t(locale, 'openOriginal')} ↗
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* dock */}
        <div className="dock-wrap" id="menu">
          <div className="dock" role="tablist" aria-label="sections">
            <button
              className={activeSection === 'all' ? 'chip on' : 'chip'}
              onClick={() => jumpTo('all')}
            >
              ✦ {t(locale, 'all')} <small>{totals.dishes}</small>
            </button>
            {menu.map((s) => {
              const n = s.categories.reduce((a, c) => a + c.items.length, 0);
              return (
                <button
                  key={s.id}
                  className={activeSection === s.id ? 'chip on' : 'chip'}
                  onClick={() => jumpTo(s.id)}
                  title={locale === 'el' ? s.name.en : s.name.el}
                >
                  {s.name[locale]} <small>{n}</small>
                </button>
              );
            })}
          </div>
        </div>

        {/* sections */}
        {filtered.length === 0 ? (
          <div className="empty">
            <div style={{ fontSize: 28 }}>◌</div>
            <p style={{ fontWeight: 800 }}>{t(locale, 'noResults')}</p>
            <p>{t(locale, 'noResultsHint')}</p>
            <button className="btn" onClick={() => { setQuery(''); setActiveSection('all'); }}>
              {t(locale, 'clear')}
            </button>
          </div>
        ) : (
          filtered.map((section) => (
            <section className="section" id={`section-${section.id}`} key={section.id}>
              <div className="section-head">
                <img
                  className="thumb"
                  src={section.image.startsWith('http') ? section.image : '/logo.jpeg'}
                  alt=""
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo.jpeg'; }}
                />
                <div>
                  <h2>{section.name[locale]}</h2>
                  <p>
                    {section.description[locale] ||
                      (locale === 'el' ? section.description.en : section.description.el)}
                  </p>
                </div>
                <span className="count-badge">
                  {section.categories.reduce((a, c) => a + c.items.length, 0)} ★
                </span>
              </div>

              {section.categories.map((cat) => (
                <div className="cat" key={cat.id}>
                  <div className="cat-head">
                    <h3>{cat.name[locale] || cat.name.el}</h3>
                    <span>{cat.items.length}</span>
                  </div>
                  {(cat.description[locale] || cat.description.el) && (
                    <p className="cat-desc">{cat.description[locale] || cat.description.el}</p>
                  )}
                  {cat.notes.map((n, i) => (
                    <div className="note" key={i}>✎ {n[locale] || n.el}</div>
                  ))}
                  <div className="grid">
                    {cat.items.map((it) => (
                      <article className={it.active === false ? 'item dim' : 'item'} key={it.id}>
                        <div className="item-main">
                          <div className="item-name">{it.name[locale] || it.name.el}</div>
                          {(it.description[locale] || it.description.el) && (
                            <div className="item-desc">{it.description[locale] || it.description.el}</div>
                          )}
                        </div>
                        {it.price ? (
                          <span className="price">{it.price} {CURRENCY}</span>
                        ) : (
                          <span className="price" style={{ opacity: 0.55 }}>•</span>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))
        )}

        <footer className="footer">
          <img src="/logo.jpeg" alt="" width={40} height={40} style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,.2)' }} />
          <div style={{ flex: 1, minWidth: 220 }}>
            <div><strong>KAZANOBA TAPAS BAR</strong> · Xanthi 67100 · {t(locale, 'source')}: <a href={VENUE.sourceUrl} target="_blank" rel="noreferrer">menurio.com/kazanoba-tapas-bar-pr-gr</a></div>
            <div>{t(locale, 'reimagined')}</div>
            <div style={{ opacity: 0.7 }}>
              <span style={{ color: live ? '#30d158' : '#ffd60a' }}>●</span>{' '}
              {live ? t(locale, 'liveSrc') : t(locale, 'snapshotSrc')} · {t(locale, 'poweredBy')} · <a href="/admin">/admin</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
