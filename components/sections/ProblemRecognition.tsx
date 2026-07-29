const reasons = [
  {
    num: '1',
    title: 'البرنامج ما كان مصمّم لحياتك',
    body:
      'الخطة كانت مبنية على يوم مثالي ما عندك — ساعتين تدريب، وجبات مجهّزة، وما في ضغط شغل. أنت موظف عندك مواعيد وأولاد وزحمة. البرنامج ما أخد هالشي بالحسبان.',
  },
  {
    num: '2',
    title: 'ما كان في حدا بيتابعك فعلاً',
    body:
      'بعد الاشتراك: جروب واتساب هادي، ملف pdf بالخطة، وبعدين أنت لحالك. أسبوع صعب بالشغل أو سفرة — وما في حدا سائلك. وبهيك أسبوع انقطاع بيصير شهر.',
  },
  {
    num: '3',
    title: 'غيّرت كل شي دفعة وحدة',
    body:
      'نظام غذائي جديد، تدريب جديد، نوم منتظم — كلها مع بعض من اليوم الأول. أول صدمة: سفر، مرض، أو أسبوع ضغط — كل شي بيطير. الخطة ما كانت فيها مرونة تحمل الحياة الحقيقية.',
  },
]

export default function ProblemRecognition() {
  return (
    <section id="problem-recognition" className="section section-alt">
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
            قبل ما نحكي عن الحل
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
            شو اللي وقّف البرامج السابقة؟
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            معظم الناس اللي بيجوا عندي جرّبوا — مش مرة وحدة. وبعد شوي من الحكي بيطلع نفس الأسباب.
          </p>
        </div>

        {/* Reason cards */}
        <div className="reason-cards">
          {reasons.map((reason) => (
            <div key={reason.num} className="card">
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
                {reason.num}
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
                {reason.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.9375rem',
                  color:      'var(--color-muted-fg)',
                  lineHeight: 1.85,
                }}
              >
                {reason.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
