'use client'

import { useState, FormEvent } from 'react'

// ─── SUBMIT STUB ──────────────────────────────────────────────────────────────
// Connect this function to your backend when ready.
// Options: Next.js API route at /api/lead, Formspree, or a CRM webhook.
// It receives the three fields as a plain object; add fetch() here.
//
// FILE:     components/sections/LeadCapture.tsx
// FUNCTION: handleSubmit  (line 18)
// ─────────────────────────────────────────────────────────────────────────────
function handleSubmit(data: { name: string; phone: string; goal: string }) {
  // STUB — data is not sent anywhere yet
  // eslint-disable-next-line no-console
  console.log('[LeadCapture] stub — replace this body to wire the form:', data)
}

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
// PLACEHOLDER — swap WHATSAPP_NUMBER for the trainer's real number before launch.
// Format: country code + number, no spaces or dashes. Israeli mobile example below.
const WHATSAPP_NUMBER = '972501234567' // ← PLACEHOLDER: +972-50-1234567

const goalOptions = [
  { value: 'weight',  label: 'خسارة وزن' },
  { value: 'muscle',  label: 'بناء عضلات وقوة' },
  { value: 'fitness', label: 'تحسين اللياقة العامة' },
  { value: 'other',   label: 'شي ثاني' },
]

// ─── WHATSAPP ICON ────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

// ─── FIELD LABEL ──────────────────────────────────────────────────────────────
function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display:      'block',
        fontFamily:   'var(--font-body)',
        fontWeight:   500,
        fontSize:     '0.9375rem',
        color:        'var(--color-fg)',
        marginBottom: 'var(--space-2)',
      }}
    >
      {children}
    </label>
  )
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function LeadCapture() {
  const [name,  setName]  = useState('')
  const [phone, setPhone] = useState('')
  const [goal,  setGoal]  = useState('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleSubmit({ name, phone, goal })
  }

  return (
    <section id="lead-capture" className="section section-alt">
      <div className="container-page">

        {/* Section header */}
        <div
          style={{
            marginBottom: 'var(--space-12)',
            textAlign:    'center',
          }}
        >
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   600,
              fontSize:     '0.8125rem',
              color:        'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}
          >
            خطوتك الأولى
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
            حكّيلي شو بدك تشتغل عليه
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              lineHeight: 1.85,
              color:      'var(--color-muted-fg)',
              maxWidth:   '32em',
              margin:     '0 auto',
            }}
          >
            باعثلنا بياناتك وبنتواصل معك خلال يوم — بدون التزام وبدون ضغط.
          </p>
        </div>

        {/* Form + WhatsApp wrapper — centered, constrained width */}
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>

          {/* Form card */}
          <div className="card">
            <form onSubmit={onSubmit} noValidate>

              {/* Name */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <FieldLabel htmlFor="lc-name">الاسم</FieldLabel>
                <input
                  id="lc-name"
                  type="text"
                  className="input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <FieldLabel htmlFor="lc-phone">رقم الهاتف</FieldLabel>
                <input
                  id="lc-phone"
                  type="tel"
                  className="input"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  autoComplete="tel"
                  dir="ltr"
                  pattern="^(\+972|00972|0)5[0-9]{8}$"
                />
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.8125rem',
                    color:      'var(--color-muted-fg)',
                    marginTop:  'var(--space-1)',
                    marginBottom: 0,
                  }}
                >
                  مثال: 0501234567 أو ‎+972501234567
                </p>
              </div>

              {/* Goal */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <FieldLabel htmlFor="lc-goal">شو هدفك الرئيسي؟</FieldLabel>
                <select
                  id="lc-goal"
                  value={goal}
                  onChange={e => setGoal(e.target.value)}
                  required
                  style={{
                    background:    'var(--color-card)',
                    color:         goal ? 'var(--color-fg)' : 'var(--color-muted-fg)',
                    border:        '1px solid var(--color-border)',
                    borderRadius:  'var(--radius-lg)',
                    paddingBlock:  'var(--space-3)',
                    paddingInline: 'var(--space-4)',
                    fontFamily:    'var(--font-body)',
                    fontSize:      '1rem',
                    width:         '100%',
                    cursor:        'pointer',
                    transition:    'border-color var(--motion-fast) var(--motion-ease)',
                  }}
                >
                  <option value="" disabled>
                    اختار هدفك
                  </option>
                  {goalOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                أرسل استفساري
              </button>

            </form>
          </div>

          {/* Divider */}
          <div
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        'var(--space-4)',
              marginBlock: 'var(--space-6)',
            }}
          >
            <div style={{ flex: 1, borderTop: '1px solid var(--color-border)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.875rem',
                color:      'var(--color-muted-fg)',
              }}
            >
              أو
            </span>
            <div style={{ flex: 1, borderTop: '1px solid var(--color-border)' }} />
          </div>

          {/* WhatsApp CTA */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.9375rem',
                color:        'var(--color-muted-fg)',
                marginBottom: 'var(--space-4)',
              }}
            >
              تحب تتواصل مباشرة؟ راسلني على واتساب
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل على واتساب"
              style={{ width: '100%' }}
            >
              <WhatsAppIcon />
              تواصل على واتساب
            </a>

            {/* PLACEHOLDER notice — remove when real number is set */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.75rem',
                color:      'var(--color-muted-fg)',
                marginTop:  'var(--space-3)',
                marginBottom: 0,
              }}
            >
              ⚠️ رقم واتساب placeholder (+972-50-1234567) — يحتاج استبدال قبل النشر
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
