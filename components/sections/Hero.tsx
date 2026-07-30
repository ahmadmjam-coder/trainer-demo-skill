import Image from 'next/image'

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
          color:      'var(--color-primary-fg)',
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
          color:      'rgba(255,255,255,0.75)',
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
    <section id="hero" className="hero-section">
      {/* Generated background image — demo placeholder, not a real photo */}
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/hero-bg-2.png"
          alt="مساحة تدريب هادئة وخالية — صورة توضيحية للعرض فقط"
          fill
          sizes="100vw"
          quality={85}
          priority
          className="hero-bg-img"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/*
       * Gradient scrim — navy-tinted, tuned per breakpoint.
       * The image right side is already near-black; scrim adds WCAG safety margin.
       * Mobile  (0.93 bottom): white H1 contrast > 20:1
       * Desktop (0.90 right):  white H1 contrast > 15:1
       */}
      <div className="hero-scrim" aria-hidden="true" />

      {/* Demo marker — flags the image as AI-generated placeholder imagery */}
      <div
        role="note"
        aria-label="تنبيه: هذه صورة توضيحية مولّدة بالذكاء الاصطناعي"
        style={{
          position:       'absolute',
          bottom:         'var(--space-4)',
          insetInlineEnd: 'var(--space-4)',
          zIndex:         3,
          /* #AD3D00 matches DemoBanner — intentional scaffolding signal */
          background:     '#AD3D00',
          color:          '#ffffff',
          fontFamily:     'var(--font-body)',
          fontSize:       '0.6875rem',
          fontWeight:     500,
          paddingBlock:   'var(--space-1)',
          paddingInline:  'var(--space-2)',
          borderRadius:   'var(--radius-sm)',
        } as React.CSSProperties}
      >
        صورة توضيحية — AI generated
      </div>

      {/* Content */}
      <div className="container-page hero-content">
        <div className="hero-text">
          {/* Trainer label — accent-tint (cream) reads at ~9:1 on dark scrim */}
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   600,
              fontSize:     '0.8125rem',
              color:        'var(--color-accent-tint)',
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
              color:        'var(--color-primary-fg)',
              marginBottom: 'var(--space-6)',
              textWrap:     'balance',
            } as React.CSSProperties}
          >
            جرّبت قبل وما زبطت — هالمرة <Num>12</Num> أسبوع بنظام وحدا بيتابعك كل أسبوع
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontWeight:   400,
              fontSize:     '1.0625rem',
              lineHeight:   1.85,
              color:        'rgba(255,255,255,0.87)',
              marginBottom: 'var(--space-8)',
            }}
          >
            مخصص للموظفين اللي جرّبوا قبل وما كمّلوا — في خطة واضحة
            ومتابعة أسبوعية مبنية على قياسات حقيقية، مش وعود فاضية.
          </p>

          <div>
            <a href="#lead-capture" className="btn-hero-cta">
              سجّل اهتمامك — ابدأ الآن
            </a>
          </div>
        </div>

        {/* Stats row */}
        <hr
          style={{
            border:       'none',
            borderTop:    '1px solid rgba(255,255,255,0.22)',
            marginTop:    'var(--space-12)',
            marginBottom: 'var(--space-10)',
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-10)' }}>
          <StatItem number="4"  label="أسابيع لكل مرحلة"   />
          <StatItem number="12" label="أسبوعاً بخطة واضحة" />
          <StatItem number="3"  label="مراحل برنامج منظّمة" />
        </div>
      </div>
    </section>
  )
}
