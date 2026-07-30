// Null values are placeholder slots. Replace with real client stories before publishing.
// The card layout adapts automatically — no redesign needed when real quotes drop in.

type Testimonial = {
  name:       string | null
  occupation: string | null
  quote:      string | null
}

const testimonials: Testimonial[] = [
  { name: null, occupation: null, quote: null },
  { name: null, occupation: null, quote: null },
  { name: null, occupation: null, quote: null },
]

function Ph({ label }: { label: string }) {
  return (
    <span
      style={{
        display:      'inline-block',
        padding:      'var(--space-1) var(--space-2)',
        background:   'var(--color-muted)',
        border:       '1px dashed var(--color-border)',
        borderRadius: 'var(--radius-sm)',
        color:        'var(--color-muted-fg)',
        fontFamily:   'var(--font-body)',
        fontSize:     '0.8125rem',
        lineHeight:   1.5,
      }}
    >
      {label}
    </span>
  )
}

function AvatarPlaceholder() {
  return (
    <div
      aria-hidden
      style={{
        flexShrink:     0,
        width:          '2.75rem',
        height:         '2.75rem',
        borderRadius:   'var(--radius-full)',
        background:     'var(--color-muted)',
        border:         '1px dashed var(--color-border)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        color:          'var(--color-muted-fg)',
      }}
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="card" style={{ borderTop: '3px solid var(--color-accent)' }}>

      {/* Identity row */}
      <div
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          'var(--space-3)',
          marginBottom: 'var(--space-5)',
        }}
      >
        <AvatarPlaceholder />
        <div>
          <div style={{ marginBottom: 'var(--space-1)' }}>
            {t.name !== null ? (
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize:   '0.9375rem',
                  color:      'var(--color-fg)',
                  lineHeight: 1.3,
                }}
              >
                {t.name}
              </span>
            ) : (
              <Ph label="الاسم الأول" />
            )}
          </div>
          <div>
            {t.occupation !== null ? (
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.8125rem',
                  color:      'var(--color-muted-fg)',
                }}
              >
                {t.occupation}
              </span>
            ) : (
              <Ph label="المهنة" />
            )}
          </div>
        </div>
      </div>

      {/* Quote area */}
      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>

        {/* Decorative opening mark */}
        <div
          aria-hidden
          style={{
            fontFamily:   'var(--font-display)',
            fontSize:     '2.25rem',
            lineHeight:   1,
            color:        'var(--color-accent)',
            marginBottom: 'var(--space-2)',
          }}
        >
          &ldquo;
        </div>

        {/* Quote slot — sized to hold 2–4 lines without overflow */}
        {t.quote !== null ? (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9375rem',
              color:      'var(--color-fg)',
              lineHeight: 1.8,
              margin:     0,
            }}
          >
            {t.quote}
          </p>
        ) : (
          <div
            style={{
              padding:      'var(--space-4)',
              background:   'var(--color-muted)',
              border:       '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-md)',
              color:        'var(--color-muted-fg)',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.875rem',
              lineHeight:   1.75,
            }}
          >
            كلام العميل بشهادته — اقتباس مباشر من تجربته مع البرنامج
          </div>
        )}
      </div>

    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container-page">

        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-10)', maxWidth: '34em' }}>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   600,
              fontSize:     '0.8125rem',
              color:        'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}
          >
            شو رح يقولوا
          </p>
          <h2
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   800,
              fontSize:     'clamp(1.5rem, 3vw, 2rem)',
              lineHeight:   1.35,
              color:        'var(--color-fg)',
              marginBottom: 'var(--space-4)',
            }}
          >
            هون رح يحكوا ناس عملوا البرنامج
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            بعد ما يكمل العملاء برنامج الـ{' '}
            <span className="text-mono-num">12</span> أسبوع، رح تتملا هالكروت
            بقصصهم الحقيقية — بكلامهم هم ومش بكلامنا.
          </p>
        </div>

        {/* Placeholder notice */}
        <div
          style={{
            padding:      'var(--space-4) var(--space-5)',
            background:   'var(--color-muted)',
            border:       '1px dashed var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.875rem',
              color:      'var(--color-muted-fg)',
              lineHeight: 1.7,
              margin:     0,
            }}
          >
            <span
              style={{
                fontFamily:      'var(--font-display)',
                fontWeight:      600,
                color:           'var(--color-fg)',
                marginInlineEnd: 'var(--space-2)',
              }}
            >
              كروت تجريبية —
            </span>
            الأسماء والمهن والاقتباسات مكانات فاضية. رح تتملا بشهادات حقيقية قبل النشر.
          </p>
        </div>

        {/* Cards grid — equal heights via CSS Grid stretch */}
        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

      </div>
    </section>
  )
}
