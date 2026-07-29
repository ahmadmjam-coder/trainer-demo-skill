function Num({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-mono-num" aria-label={String(children)}>
      {children}
    </span>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <span
        className="text-mono-num"
        style={{
          display:    'block',
          fontWeight: 700,
          fontSize:   '1.875rem',
          color:      'var(--color-primary)',
          lineHeight: 1.15,
        }}
      >
        {number}
      </span>
      <span
        style={{
          display:    'block',
          fontFamily: 'var(--font-body)',
          fontSize:   '0.875rem',
          color:      'var(--color-muted-fg)',
          marginTop:  'var(--space-1)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="container-page"
        style={{
          paddingTop:    'var(--space-20)',
          paddingBottom: 'var(--space-16)',
        }}
      >
        {/* Two-column grid: text right, image left (RTL column order) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 'var(--space-12)', alignItems: 'stretch', marginBottom: 'var(--space-16)' }}
        >
          {/* Text column — first in DOM = visual right in RTL */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Trainer label */}
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontWeight:   600,
                fontSize:     '0.8125rem',
                color:        'var(--color-accent)',
                marginBottom: 'var(--space-5)',
              }}
            >
              كابتن ياسر — مدرب شخصي معتمد
            </p>

            <h1
              style={{
                fontFamily:   'var(--font-display)',
                fontWeight:   800,
                fontSize:     'clamp(1.75rem, 4vw, 3rem)',
                lineHeight:   1.35,
                color:        'var(--color-fg)',
                marginBottom: 'var(--space-6)',
                maxWidth:     '14em',
                textWrap:     'balance',
              } as React.CSSProperties}
            >
              جرّبت قبل وما زبطت — هالمرة <Num>12</Num> أسبوع بنظام وحدا بيتابعك كل أسبوع
            </h1>

            {/* Subheadline — Palestinian colloquial */}
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontWeight:   400,
                fontSize:     '1.0625rem',
                lineHeight:   1.85,
                color:        'var(--color-muted-fg)',
                marginBottom: 'var(--space-8)',
              }}
            >
              مخصص للموظفين اللي جرّبوا قبل وما كمّلوا — في خطة واضحة
              ومتابعة أسبوعية مبنية على قياسات حقيقية، مش وعود فاضية.
            </p>

            {/* CTA — single anchor per approved anti-pattern rule */}
            <div>
              <a href="#lead-form" className="btn-primary">
                سجّل اهتمامك — ابدأ الآن
              </a>
            </div>
          </div>

          {/* Image placeholder — second in DOM = visual left in RTL */}
          <div
            style={{
              background:     'var(--color-muted)',
              borderRadius:   'var(--radius-2xl)',
              border:         '2px dashed var(--color-border)',
              minHeight:      '360px',
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            'var(--space-3)',
              color:          'var(--color-muted-fg)',
            }}
          >
            <ImageIcon />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.875rem',
                color:      'var(--color-muted-fg)',
              }}
            >
              صورة المدرب
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border:       'none',
            borderTop:    '1px solid var(--color-border)',
            marginBottom: 'var(--space-10)',
          }}
        />

        {/* Stats row */}
        <div
          style={{
            display:  'flex',
            flexWrap: 'wrap',
            gap:      'var(--space-10)',
          }}
        >
          <StatItem number="4"        label="أسابيع لكل مرحلة" />
          <StatItem number="12"       label="أسبوعاً بخطة واضحة" />
          <StatItem number="3"        label="مراحل برنامج منظّمة" />
        </div>
      </div>
    </section>
  )
}

function ImageIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}
