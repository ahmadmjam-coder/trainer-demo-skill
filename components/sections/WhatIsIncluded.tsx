import React from 'react'

type ProgramComponent = {
  tag:   string
  title: React.ReactNode
  body:  React.ReactNode
}

const items: ProgramComponent[] = [
  {
    tag:   'الأسبوع الأول',
    title: 'أسبوع الاستقبال',
    body: (
      <>
        أول أسبوع بنحكي عن جدولك الفعلي — أيام الشغل، المواعيد، والقيود
        اللي عندك. وبنقيس الوزن ومحيط الخصر كنقطة بداية موثّقة.
      </>
    ),
  },
  {
    tag:   'التخطيط',
    title: 'خطة مبنية على أسبوعك',
    body: (
      <>
        أيام التدريب وأوقاتها بتتحدد حسب أسبوعك الحقيقي — مش حسب نموذج
        جاهز. سفر وشغل زيادة وأيام ضغط، كلها محسوبة من أول يوم.
      </>
    ),
  },
  {
    tag:   'التغذية',
    title: 'خطة وجبات',
    body: (
      <>
        توزيع وجبات حسب وقتك ومواعيدك — مش نظام ثابت بيتجاهل يومك.
        بيتعدل مع الوقت حسب إيش أثبت نفسه معك.
      </>
    ),
  },
  {
    tag:   'القياس',
    title: 'تسجيل أسبوعي',
    body: (
      <>
        كل أسبوع بتسجّل وزن الصبح ومحيط الخصر. المقارنة بتكون أسبوع
        بأسبوع مش يوم بيوم — هيك بيظهر الاتجاه الحقيقي.
      </>
    ),
  },
  {
    tag:   'المتابعة',
    title: 'تواصل أسبوعي ثابت',
    body: (
      <>
        كل أسبوع في تواصل مباشر — بنراجع الأرقام مع بعض وبنشوف إيش
        صار. لو الظروف اتغيّرت، بتتعدل الخطة معها.
      </>
    ),
  },
  {
    tag:   'الهيكل',
    title: (
      <>
        <span className="text-mono-num">3</span> مراحل منظّمة
      </>
    ),
    body: (
      <>
        الـ <span className="text-mono-num">12</span> أسبوع مقسّمين على{' '}
        <span className="text-mono-num">3</span> مراحل —{' '}
        <span className="text-mono-num">4</span> أسابيع لكل مرحلة. كل
        مرحلة إلها هدف واضح، وما بنحكي انتهت حتى تتثبّت.
      </>
    ),
  },
]

function IncludedCard({ item }: { item: ProgramComponent }) {
  return (
    <div className="card">

      {/* Category tag */}
      <span
        style={{
          display:         'inline-block',
          fontFamily:      'var(--font-body)',
          fontSize:        '0.75rem',
          fontWeight:      600,
          color:           'var(--color-primary)',
          backgroundColor: 'var(--color-muted)',
          borderRadius:    'var(--radius-full)',
          paddingBlock:    'var(--space-1)',
          paddingInline:   'var(--space-3)',
          marginBottom:    'var(--space-4)',
        }}
      >
        {item.tag}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily:   'var(--font-display)',
          fontWeight:   700,
          fontSize:     '1.125rem',
          lineHeight:   1.35,
          color:        'var(--color-fg)',
          marginBottom: 'var(--space-4)',
        }}
      >
        {item.title}
      </h3>

      {/* Divider */}
      <div
        aria-hidden
        style={{
          borderTop:    '1px solid var(--color-border)',
          marginBottom: 'var(--space-4)',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.9375rem',
          lineHeight: 1.85,
          color:      'var(--color-muted-fg)',
          margin:     0,
        }}
      >
        {item.body}
      </p>

    </div>
  )
}

export default function WhatIsIncluded() {
  return (
    <section id="whats-included" className="section section-alt">
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
            مكونات البرنامج
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
            شو بيشمل البرنامج
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            هاي العناصر موجودة في كل برنامج — مش إضافات اختيارية.
          </p>
        </div>

        {/* 2-column card grid — equal heights via CSS Grid stretch */}
        <div className="included-cards">
          {items.map((item, i) => (
            <IncludedCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}
