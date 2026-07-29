import type { Metadata } from 'next'
import { Cairo, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import { buildThemeCss } from '@/lib/theme'
import './globals.css'

// next/font requires literal option values (static analysis constraint).
// Variable names must match fontConfig.*variable in lib/theme.ts.
const cairo = Cairo({
  variable: '--font-display',
  subsets:  ['arabic'],
  weight:   ['400', '500', '600', '700', '800'],
  display:  'swap',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-body',
  subsets:  ['arabic'],
  weight:   ['300', '400', '500', '600'],
  display:  'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'كابتن ياسر — برنامج التحول ١٢ أسبوع',
  description: 'برنامج تحول مُهيكل للموظفين — قياس حقيقي، نتيجة تبقى',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [
    cairo.variable,
    ibmPlexSansArabic.variable,
    ibmPlexMono.variable,
  ].join(' ')

  return (
    <html lang="ar" dir="rtl" className={fontClasses}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root { ${buildThemeCss()} }` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
