import React from 'react'

type Item = { badge: React.ReactNode; label: string }

type Answer = {
  num: string
  title: React.ReactNode
  body: string
  items: Item[]
}

const answers: Answer[] = [
  {
    num: '1',
    title: 'الخطة مبنية على أسبوعك الحقيقي',
    body: 'في الأسبوع الأول بنحكي عن جدولك الفعلي وبنبني الخطة حوله:',
    items: [
      { badge: 'أيام',   label: 'أيام التدريب اللي بتناسبك' },
      { badge: 'الوقت',  label: 'الأوقات اللي بتقدر تتحرك فيها' },
      { badge: 'القيود', label: 'شغل، سفر، مواعيد — كلها محسوبة' },
    ],
  },
  {
    num: '2',
    title: 'تواصل أسبوعي ثابت على قياسات، مش على إحساس',
    body: 'كل أسبوع في تواصل ثابت — نفس الخطوات بغض النظر عن شو كان الأسبوع:',
    items: [
      { badge: 'قياسات', label: 'بتبعت أرقام الأسبوع' },
      { badge: 'مراجعة', label: 'بنشوف مع بعض شو صار' },
      { badge: 'تعديل',  label: 'الخطة بتتكيّف إذا الظروف اتغيّرت' },
    ],
  },
  {
    num: '3',
    title: (
      <>
        <span className="text-mono-num">12</span> أسبوع على ثلاث مراحل
      </>
    ),
    body: 'كل مرحلة أربع أسابيع، وما في انتقال لمرحلة ثانية قبل ما الأولى تتثبّت:',
    items: [
      {
        badge: <>أسابيع <span className="text-mono-num">{'1–4'}</span></>,
        label: 'الأساس: عادة وحدة بتتثبّت قبل ما نضيف غيرها',
      },
      {
        badge: <>أسابيع <span className="text-mono-num">{'5–8'}</span></>,
        label: 'الزخم: بنبني على اللي أجا ماشي',
      },
      {
        badge: <>أسابيع <span className="text-mono-num">{'9–12'}</span></>,
        label: 'الترسيخ: بتصير تمشي فيها بدون ما تحسب كل خطوة',
      },
    ],
  },
]

export default function TheMethod() {
  return (
    <section id="the-method" className="section">
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
            هيك بنشتغل
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
            ثلاثة أشياء بتشتغل بشكل مختلف
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            مش وعود — هيكل واضح وآلية متابعة منضبطة.
          </p>
        </div>

        {/* Answer cards */}
        <div className="method-cards">
          {answers.map((answer) => (
            <div
              key={answer.num}
              className="card"
              style={{ borderTop: '3px solid var(--color-accent)' }}
            >
              <span
                className="text-mono-num"
                style={{
                  display:      'block',
                  fontSize:     '2rem',
                  fontWeight:   700,
                  color:        'var(--color-accent)',
                  lineHeight:   1,
                  marginBottom: 'var(--space-4)',
                }}
              >
                {answer.num}
              </span>
              <h3
                style={{
                  fontFamily:   'var(--font-display)',
                  fontWeight:   700,
                  fontSize:     '1.125rem',
                  color:        'var(--color-fg)',
                  lineHeight:   1.4,
                  marginBottom: 'var(--space-3)',
                }}
              >
                {answer.title}
              </h3>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.9375rem',
                  color:        'var(--color-muted-fg)',
                  lineHeight:   1.85,
                  marginBottom: 'var(--space-4)',
                }}
              >
                {answer.body}
              </p>

              <ul
                style={{
                  listStyle:     'none',
                  padding:       0,
                  margin:        0,
                  borderTop:     '1px solid var(--color-border)',
                  paddingTop:    'var(--space-4)',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           'var(--space-3)',
                }}
              >
                {answer.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display:    'flex',
                      gap:        'var(--space-3)',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        flexShrink:      0,
                        fontFamily:      'var(--font-body)',
                        fontSize:        '0.75rem',
                        fontWeight:      600,
                        color:           'var(--color-accent)',
                        backgroundColor: 'var(--color-accent-tint)',
                        borderRadius:    'var(--radius-full)',
                        paddingBlock:    'var(--space-1)',
                        paddingInline:   'var(--space-3)',
                        whiteSpace:      'nowrap',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   '0.875rem',
                        color:      'var(--color-fg)',
                        lineHeight: 1.6,
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
    </section>
  )
}
