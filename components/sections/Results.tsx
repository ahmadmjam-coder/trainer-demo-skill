// Null values are placeholder slots. Replace each null with real client data before publishing.
// No redesign needed — the card layout adapts automatically to real values.

type ClientResult = {
  name:            string | null
  job:             string | null
  weightStart:     number | null
  weightEnd:       number | null
  waistStart:      number | null
  waistEnd:        number | null
  weeksConsistent: number | null
  quote:           string | null
}

const clients: ClientResult[] = [
  {
    name: null, job: null,
    weightStart: null, weightEnd: null,
    waistStart: null, waistEnd: null,
    weeksConsistent: null, quote: null,
  },
  {
    name: null, job: null,
    weightStart: null, weightEnd: null,
    waistStart: null, waistEnd: null,
    weeksConsistent: null, quote: null,
  },
  {
    name: null, job: null,
    weightStart: null, weightEnd: null,
    waistStart: null, waistEnd: null,
    weeksConsistent: null, quote: null,
  },
]

// Visually distinct placeholder token — dashed border + muted tint signals "not real data" in the UI.
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

function PersonIcon() {
  return (
    <svg
      width="22" height="22" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MetricRow({
  label,
  unit,
  start,
  end,
}: {
  label: string
  unit:  string
  start: number | null
  end:   number | null
}) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: '1fr auto auto',
        gap:                 'var(--space-4)',
        alignItems:          'center',
        paddingBlock:        'var(--space-3)',
        borderBottom:        '1px solid var(--color-border)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.875rem',
          color:      'var(--color-fg)',
        }}
      >
        {label}
        <span
          style={{
            marginInlineStart: 'var(--space-1)',
            fontSize:          '0.75rem',
            color:             'var(--color-muted-fg)',
          }}
        >
          ({unit})
        </span>
      </span>
      {start !== null ? (
        <span
          className="text-mono-num"
          style={{ fontSize: '0.9375rem', color: 'var(--color-muted-fg)' }}
        >
          {start}
        </span>
      ) : (
        <Ph label="—" />
      )}
      {end !== null ? (
        <span
          className="text-mono-num"
          style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-success)' }}
        >
          {end}
        </span>
      ) : (
        <Ph label="—" />
      )}
    </div>
  )
}

function ResultCard({ client }: { client: ClientResult }) {
  return (
    <div
      className="card"
      style={{ borderTop: '3px solid var(--color-accent)' }}
    >
      {/* Identity */}
      <div
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          'var(--space-3)',
          marginBottom: 'var(--space-5)',
        }}
      >
        <div
          aria-hidden
          style={{
            flexShrink:     0,
            width:          '2.5rem',
            height:         '2.5rem',
            borderRadius:   'var(--radius-full)',
            background:     'var(--color-muted)',
            border:         '1px dashed var(--color-border)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          'var(--color-muted-fg)',
          }}
        >
          <PersonIcon />
        </div>
        <div>
          <div style={{ marginBottom: 'var(--space-1)' }}>
            {client.name !== null ? (
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize:   '0.9375rem',
                  color:      'var(--color-fg)',
                  lineHeight: 1.3,
                }}
              >
                {client.name}
              </span>
            ) : (
              <Ph label="اسم العميل" />
            )}
          </div>
          <div>
            {client.job !== null ? (
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.8125rem',
                  color:      'var(--color-muted-fg)',
                }}
              >
                {client.job}
              </span>
            ) : (
              <Ph label="المهنة والقطاع" />
            )}
          </div>
        </div>
      </div>

      {/* Metrics table */}
      <div
        style={{
          border:       '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--space-5)',
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr auto auto',
            gap:                 'var(--space-4)',
            padding:             'var(--space-2) var(--space-3)',
            background:          'var(--color-section-alt)',
            borderRadius:        'var(--radius-lg) var(--radius-lg) 0 0',
            borderBottom:        '1px solid var(--color-border)',
          }}
        >
          {(['القياس', 'البداية', 'النهاية'] as const).map((col) => (
            <span
              key={col}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.75rem',
                fontWeight: 600,
                color:      'var(--color-muted-fg)',
              }}
            >
              {col}
            </span>
          ))}
        </div>

        {/* Weight + waist rows */}
        <div style={{ paddingInline: 'var(--space-3)' }}>
          <MetricRow label="الوزن"    unit="كغ" start={client.weightStart} end={client.weightEnd} />
          <MetricRow label="الخصر"   unit="سم" start={client.waistStart}  end={client.waistEnd}  />

          {/* Consistency — single value, full width */}
          <div style={{ paddingBlock: 'var(--space-3)' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.875rem',
                color:      'var(--color-fg)',
              }}
            >
              الثبات:{' '}
              {client.weeksConsistent !== null ? (
                <>
                  <span
                    className="text-mono-num"
                    style={{ fontWeight: 600, color: 'var(--color-primary)' }}
                  >
                    {client.weeksConsistent}
                  </span>
                  {' '}
                </>
              ) : (
                <><Ph label="—" />{' '}</>
              )}
              <span style={{ color: 'var(--color-muted-fg)' }}>
                أسبوع من <span className="text-mono-num">12</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
        {client.quote !== null ? (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9375rem',
              color:      'var(--color-fg)',
              lineHeight: 1.75,
              margin:     0,
              fontStyle:  'italic',
            }}
          >
            "{client.quote}"
          </p>
        ) : (
          <div
            style={{
              padding:      'var(--space-3)',
              background:   'var(--color-muted)',
              border:       '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-md)',
              color:        'var(--color-muted-fg)',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.875rem',
              lineHeight:   1.7,
            }}
          >
            اقتباس قصير من العميل يوصف تجربته بكلامه
          </div>
        )}
      </div>
    </div>
  )
}

export default function Results() {
  return (
    <section id="results" className="section">
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
            شو بيتسجّل
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
            وزن، خصر، وثبات
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            كل عميل رح يسجّل ثلاثة أرقام كل أسبوع: وزن الصبح، محيط الخصر،
            وعدد أسابيع الثبات. هون رح تنحكى قصص الأشخاص اللي
            يكملوا الـ <span className="text-mono-num">12</span> أسبوع.
          </p>
        </div>

        {/* Placeholder notice — visible to anyone who sees the page before real data drops in */}
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
              بطاقات تجريبية —
            </span>
            كل الأرقام والأسماء والاقتباسات هي مكانات فاضية.
            البيانات الحقيقية تُضاف قبل النشر.
          </p>
        </div>

        {/* Cards grid — equal heights via CSS Grid stretch */}
        <div className="results-cards">
          {clients.map((client, i) => (
            <ResultCard key={i} client={client} />
          ))}
        </div>

      </div>
    </section>
  )
}
