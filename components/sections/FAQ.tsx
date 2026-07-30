'use client'

import { useState } from 'react'

type FaqItem = {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: 'ما عندي وقت — أيام الشغل مليانة',
    a: 'عدد الجلسات ومدتها بيتحدد من الأسبوع الأول بناءً على جدولك — مش على افتراض وقت فاضي. في ناس شغلتهم ما تسمح إلا نص ساعة ٣ مرات بالأسبوع، وهاد كافي لبناء خطة حقيقية. ما في اشتراط مسبق بساعات معينة.',
  },
  {
    q: 'شو بصير لو سافرت أو كان الأسبوع ضغط؟',
    a: 'هاد السيناريو بيتحكى في البداية — لأنه واقعي ومتوقع، مش استثناء. لو صار في المنتصف، المراجعة الأسبوعية موجودة بالضبط لهاي الحالة. الخطة بتتأقلم مع اللي صار، ومش بتبدأ من الصفر.',
  },
  {
    q: 'لازم أشترك بنادي؟',
    a: 'مش شرط. هاد بيتحدد في أول أسبوع بناءً على إيش متاح إلك ووين. اللي بتنبنى عليه الخطة هو وضعك الفعلي — مش وضع مفترض.',
  },
  {
    q: 'لازم أوقف الأكل اللي أنا بحبو؟',
    a: 'ما في قائمة ممنوعات. خطة الأكل بتنبنى على عاداتك الحالية وتوقيت يومك — مش على نظام جاهز بدك تلتزمه وإلا كله ينهار. التعديلات بتجي تدريجياً وبناءً على إيش نجح فعلاً، لا على مبدأ الكل أو لا شي.',
  },
  {
    q: 'شو بصير لو ما التزمت أسبوع؟',
    a: 'أسبوع وحد ما بوقف المسيرة — هاد واقعي وبيصير لناس كثير. المراجعة الأسبوعية موجودة عشان نشوف كيف نرجع، مش عشان نحسب قديش انكسر. لو الانقطاع كان أطول من هيك، هاد الكلام بيصير في المكالمة التالية.',
  },
  {
    q: 'دفعت على برامج قبل وما استمريت — شو المختلف هون؟',
    a: 'سؤال منطقي وبيستاهل جواب واضح: ما في ضمان. الفرق هو في الهيكل — خطة بتتشكّل حول ظروفك الفعلية، ومتابعة دورية على أرقام مش على شعور. إذا وقفت قبل لأنك كنت لحالك بعد أول عقبة وما في حدا يرجعك للمسار، هاد الهيكل مصمّم لهاي المشكلة تحديداً. إذا في أسباب ثانية، الأفضل تنحكى في مكالمة الاستقبال — عشان نشوف إذا هاد المكان المناسب إلك أصلاً.',
  },
]

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        color:      'var(--color-accent)',
        transform:  open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform var(--motion-normal) var(--motion-ease)',
      }}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
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
            الأسئلة الحقيقية
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
            شو اللي في بالك قبل ما تقرر
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            أسئلة بتجي من ناس كثير — بتستاهل أجوبة مباشرة.
          </p>
        </div>

        {/* Accordion — no overflow:hidden anywhere, panels expand freely */}
        <div className="faq-list" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="faq-item" role="listitem">
                <button
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize:   '1rem',
                      lineHeight: 1.5,
                      color:      isOpen ? 'var(--color-primary)' : 'var(--color-fg)',
                    }}
                  >
                    {faq.q}
                  </span>
                  <Chevron open={isOpen} />
                </button>

                {isOpen && (
                  <div className="faq-panel">
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   '0.9375rem',
                        lineHeight: 1.85,
                        color:      'var(--color-muted-fg)',
                        margin:     0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
