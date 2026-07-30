// Null values are placeholder slots. Replace with real trainer data before publishing.
// Photo must be a professional portrait — not a training or physique shot.

type TrainerData = {
  photo:           null           // always null — slot for a professional portrait only
  name:            string | null
  title:           string | null
  certifications:  [string | null, string | null]
  specializations: [string | null, string | null]
  bio:             string | null
}

const trainer: TrainerData = {
  photo:           null,
  name:            null,
  title:           null,
  certifications:  [null, null],
  specializations: [null, null],
  bio:             null,
}

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

function PhotoSlot() {
  return (
    <div
      style={{
        background:   'var(--color-muted)',
        border:       '2px dashed var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        display:      'grid',
        placeItems:   'center',
        padding:      'var(--space-12) var(--space-8)',
        gap:          'var(--space-4)',
        textAlign:    'center',
      }}
    >
      <svg
        width="44" height="44" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ color: 'var(--color-muted-fg)' }}
        aria-hidden="true"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 0 2-2l2-2h6l2 2h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize:   '0.9375rem',
            color:      'var(--color-fg)',
            margin:     0,
            lineHeight: 1.5,
          }}
        >
          صورة مهنية للمدرب
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.8125rem',
            color:      'var(--color-muted-fg)',
            margin:     0,
            marginTop:  'var(--space-1)',
            lineHeight: 1.5,
          }}
        >
          ليست صورة تمارين أو عرض عضلات
        </p>
      </div>
    </div>
  )
}

function CredCell({ value, label }: { value: string | null; label: string }) {
  return (
    <div
      style={{
        padding:      'var(--space-3) var(--space-4)',
        background:   'var(--color-muted)',
        border:       '1px dashed var(--color-border)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.75rem',
          color:      'var(--color-muted-fg)',
          margin:     0,
          lineHeight: 1.5,
        }}
      >
        {label}
      </p>
      <div style={{ marginTop: 'var(--space-1)' }}>
        {value !== null ? (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize:   '0.875rem',
              color:      'var(--color-fg)',
            }}
          >
            {value}
          </span>
        ) : (
          <Ph label="أضف هون" />
        )}
      </div>
    </div>
  )
}

export default function AboutTrainer() {
  return (
    <section id="about-trainer" className="section">
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
            المدرب الشخصي
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
            الشخص اللي رح يتابعك
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
            }}
          >
            البرنامج مش مجرد خطة مكتوبة — في متابعة شخصية ومراجعة قياسات كل أسبوع.
            هون بتتعرّف على المدرب اللي رح يكون معك من الأسبوع الأول للأسبوع{' '}
            <span className="text-mono-num">12</span>.
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
              ملف تجريبي —
            </span>
            الاسم والمسمى والشهادات والتخصصات والنبذة هي مكانات فاضية. تُضاف البيانات الحقيقية قبل النشر.
          </p>
        </div>

        {/* Main layout: photo column | info column */}
        <div className="trainer-layout">

          {/* Photo column */}
          <PhotoSlot />

          {/* Info column */}
          <div>

            {/* Name + title */}
            <div
              style={{
                paddingBottom: 'var(--space-6)',
                marginBottom:  'var(--space-6)',
                borderBottom:  '1px solid var(--color-border)',
              }}
            >
              <div style={{ marginBottom: 'var(--space-2)' }}>
                {trainer.name !== null ? (
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize:   '1.375rem',
                      color:      'var(--color-fg)',
                      lineHeight: 1.3,
                      margin:     0,
                    }}
                  >
                    {trainer.name}
                  </h3>
                ) : (
                  <Ph label="الاسم الكامل" />
                )}
              </div>
              <div>
                {trainer.title !== null ? (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.9375rem',
                      color:      'var(--color-muted-fg)',
                    }}
                  >
                    {trainer.title}
                  </span>
                ) : (
                  <Ph label="اللقب أو التخصص" />
                )}
              </div>
            </div>

            {/* Credentials grid */}
            <div
              style={{
                paddingBottom: 'var(--space-6)',
                marginBottom:  'var(--space-6)',
                borderBottom:  '1px solid var(--color-border)',
              }}
            >
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontWeight:   600,
                  fontSize:     '0.875rem',
                  color:        'var(--color-fg)',
                  margin:       0,
                  marginBottom: 'var(--space-4)',
                }}
              >
                الشهادات والتخصص
              </p>
              <div className="trainer-creds">
                <CredCell value={trainer.certifications[0]}  label="الشهادة الأولى"         />
                <CredCell value={trainer.certifications[1]}  label="الشهادة الثانية"        />
                <CredCell value={trainer.specializations[0]} label="مجال التخصص الأول"     />
                <CredCell value={trainer.specializations[1]} label="مجال التخصص الثاني"    />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontWeight:   600,
                  fontSize:     '0.875rem',
                  color:        'var(--color-fg)',
                  margin:       0,
                  marginBottom: 'var(--space-4)',
                }}
              >
                نبذة مختصرة
              </p>
              {trainer.bio !== null ? (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.9375rem',
                    color:      'var(--color-fg)',
                    lineHeight: 1.85,
                    margin:     0,
                  }}
                >
                  {trainer.bio}
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
                  نبذة شخصية عن المدرب — خلفيته في المجال وأسلوبه في التدريب، بكلامه هو
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
