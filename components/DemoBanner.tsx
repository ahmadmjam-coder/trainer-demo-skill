export default function DemoBanner() {
  return (
    <div
      role="banner"
      style={{
        background:    'var(--color-primary)',
        color:         'var(--color-primary-fg)',
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
