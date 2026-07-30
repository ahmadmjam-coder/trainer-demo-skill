export default function DemoBanner() {
  return (
    <div
      role="banner"
      style={{
        /* #AD3D00 is intentionally outside theme.ts — scaffolding signal, removed before launch */
        background:    '#AD3D00',
        color:         '#ffffff',
        fontFamily:    'var(--font-body)',
        fontWeight:    500,
        fontSize:      '0.8125rem',
        textAlign:     'center',
        paddingBlock:  'var(--space-2)',
        paddingInline: 'var(--space-4)',
      }}
    >
      نموذج توضيحي — هذا الموقع لأغراض العرض فقط وليس خدمة حقيقية
    </div>
  )
}
