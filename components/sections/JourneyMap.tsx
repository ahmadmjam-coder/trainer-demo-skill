import React from 'react'

type PhaseItem = { label: React.ReactNode }

type Phase = {
  num: string
  weeks: React.ReactNode
  name: string
  tagline: string
  items: PhaseItem[]
}

const phases: Phase[] = [
  {
    num: '1',
    weeks: <><span className="text-mono-num">1–4</span></>,
    name: 'الأساس',
    tagline: 'نقطة البداية وأول حركة منتظمة',
    items: [
      { label: 'الأسبوع الأول: قياسات الوزن والمحيط + تحديد أوقات الحركة حسب جدولك الفعلي' },
      { label: 'حركة واحدة بنفس الوقت كل مرة — حتى تصير جزء من اليوم مش قرار جديد' },
      { label: 'تسجيل أسبوعي: وزن صباحي + محيط الخصر — مقارنة أسبوع بأسبوع مش يوم بيوم' },
      { label: 'تواصل ثابت كل أسبوع: مراجعة الأرقام والتأكد إن الخطة ماشية مع ظروفك' },
    ],
  },
  {
    num: '2',
    weeks: <><span className="text-mono-num">5–8</span></>,
    name: 'الزخم',
    tagline: 'طبقة جديدة فوق ما ثبت',
    items: [
      { label: 'بنضيف تعديل على الشدة أو توزيع الأكل — حسب إيش أثبت نفسه بالمرحلة الأولى' },
      { label: 'بتبدأ تشوف نمط: إيش بيزبط معك وإيش لأ ولَيش — مش مجرد إحساس' },
      { label: <>التسجيل: منحنى الـ <span className="text-mono-num">4</span> أسابيع — الاتجاه هو اللي بيحكي مش رقم يوم وحد</> },
      { label: <>مقارنة أسابيع <span className="text-mono-num">5–8</span> بأسابيع <span className="text-mono-num">1–4</span> في التواصل الأسبوعي</> },
    ],
  },
  {
    num: '3',
    weeks: <><span className="text-mono-num">9–12</span></>,
    name: 'الترسيخ',
    tagline: 'الخطة تحت ضغط الحياة الحقيقية',
    items: [
      { label: 'بنجرّب الخطة مع سفر، مناسبات، وأسابيع شغل أكثر من المعتاد' },
      { label: 'القياس: قديش بترجع لمسارك بعد أسبوع صعب — هاد هو الثبات الحقيقي' },
      { label: 'قرارات مستقلة: شو تاكل برا، شو تعمل لو فاتتك تمرين' },
      { label: <>الأسبوع <span className="text-mono-num">12</span>: مقارنة قياسات البداية بقياسات النهاية بالأرقام</> },
    ],
  },
]

export default function JourneyMap() {
  return (
    <section id="journey-map" className="section section-alt">
      <div className="container-page">

        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-12)', maxWidth: '32em' }}>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   600,
              fontSize:     '0.8125rem',
              color:        'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}
          >
            خطوة بخطوة
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
            رحلة الـ <span className="text-mono-num">12</span> أسبوع
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            كل أسبوع إلو هدف محدد — مش كل إشي مرة وحدة.
          </p>
        </div>

        {/* Journey — one unified shape, three internal phases */}
        <div className="journey-container">
          <div className="journey-columns">
            {phases.map((phase, i) => (
              <div key={i} className="journey-column">

                {/* Phase label + week range */}
                <div
                  style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <span
                    className="text-mono-num"
                    style={{
                      display:        'inline-flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      width:          '2rem',
                      height:         '2rem',
                      borderRadius:   'var(--radius-full)',
                      background:     'var(--color-accent)',
                      color:          'var(--color-accent-fg)',
                      fontWeight:     700,
                      fontSize:       '0.875rem',
                      flexShrink:     0,
                    }}
                  >
                    {phase.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.8125rem',
                      fontWeight: 600,
                      color:      'var(--color-muted-fg)',
                    }}
                  >
                    أسابيع {phase.weeks}
                  </span>
                </div>

                {/* Phase title */}
                <h3
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontWeight:   700,
                    fontSize:     '1.25rem',
                    color:        'var(--color-fg)',
                    lineHeight:   1.3,
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {phase.name}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily:   'var(--font-body)',
                    fontSize:     '0.875rem',
                    color:        'var(--color-muted-fg)',
                    lineHeight:   1.6,
                    marginBottom: 'var(--space-5)',
                  }}
                >
                  {phase.tagline}
                </p>

                {/* Divider */}
                <div
                  style={{
                    borderTop:    '1px solid var(--color-border)',
                    marginBottom: 'var(--space-5)',
                  }}
                />

                {/* Items */}
                <ul
                  style={{
                    listStyle:     'none',
                    padding:       0,
                    margin:        0,
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           'var(--space-3)',
                  }}
                >
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display:    'flex',
                        gap:        'var(--space-3)',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          flexShrink:   0,
                          width:        '6px',
                          height:       '6px',
                          borderRadius: 'var(--radius-full)',
                          background:   'var(--color-accent)',
                          marginTop:    '0.55em',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize:   '0.9375rem',
                          color:      'var(--color-fg)',
                          lineHeight: 1.7,
                        }}
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
