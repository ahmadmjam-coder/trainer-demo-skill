'use client'

import { useState, useEffect } from 'react'
import { headerVariant } from '@/lib/theme'

const isNavy = headerVariant === 'navy'

const navLinks = [
  { label: 'المنهجية',    href: '#the-method'    },
  { label: 'ماذا يشمل',   href: '#whats-included' },
  { label: 'أسئلة شائعة', href: '#faq'            },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Turn navy when the hero section fully leaves the viewport.
  // IntersectionObserver is more efficient than a scroll listener.
  useEffect(() => {
    if (isNavy) return
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
        if (!entry.isIntersecting) setMenuOpen(false)
      },
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Write the true sticky-bar height to --scroll-offset so every section[id]
  // gets the right scroll-margin-top. ResizeObserver keeps it accurate on resize.
  useEffect(() => {
    const bar = document.getElementById('sticky-header')
    if (!bar) return
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        '--scroll-offset',
        bar.offsetHeight + 'px',
      )
    })
    ro.observe(bar)
    document.documentElement.style.setProperty(
      '--scroll-offset',
      bar.offsetHeight + 'px',
    )
    return () => ro.disconnect()
  }, [])

  const headerClass = [
    'site-header',
    isNavy              ? 'site-header--navy'     : '',
    !isNavy && scrolled ? 'site-header--scrolled' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={headerClass}>
      {/* Desktop bar — 3-column grid: wordmark | nav | cta+burger */}
      <div
        className="container-page"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems:          'center',
          paddingBlock:        'var(--space-3)',
          gap:                 'var(--space-4)',
        }}
      >
        {/* Wordmark — inline-start (right in RTL) */}
        <a href="#hero" className="header-wordmark">
          كابتن ياسر
        </a>

        {/* Nav — center, hidden on mobile */}
        <nav aria-label="القائمة الرئيسية" className="header-nav-desktop">
          <ul role="list" className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* End column — inline-end (left in RTL) */}
        <div
          style={{
            justifySelf: 'end',
            display:     'flex',
            alignItems:  'center',
            gap:         'var(--space-2)',
          }}
        >
          <a href="#lead-capture" className="btn-header-cta">
            سجّل اهتمامك
          </a>

          <button
            className="header-hamburger"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? 'أغلق القائمة' : 'افتح القائمة'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="site-mobile-menu"
        className="header-mobile-menu"
        style={{ display: menuOpen ? 'block' : 'none' }}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="القائمة المحمولة">
          <ul role="list" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ padding: 'var(--space-3) var(--space-6) var(--space-4)' }}>
              <a
                href="#lead-capture"
                className="btn-primary header-mobile-cta"
                style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                onClick={() => setMenuOpen(false)}
              >
                سجّل اهتمامك
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="17" y1="5" x2="5" y2="17" />
          <line x1="5"  y1="5" x2="17" y2="17" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </>
      )}
    </svg>
  )
}
