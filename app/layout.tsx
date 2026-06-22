import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sentient Connect™ | AURA Genesis™',
    template: '%s | Sentient Connect™',
  },
  description:
    'Sentient Connect™ is the human-centered operating framework powered by AURA Genesis™, SentientOS™, and MIND | BODY | SPIRIT TRIANGULATION™.',
  keywords: [
    'Sentient Connect™',
    'AURA Genesis™',
    'SentientOS™',
    'AI orchestration',
    'MIND | BODY | SPIRIT TRIANGULATION™',
    'human performance',
    'business operations',
    'behavioral intelligence',
  ],
  authors: [{ name: 'Sentient Connect LLC' }],
  creator: 'Sentient Connect LLC',
  publisher: 'Sentient Connect LLC',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Sentient Connect™ | AURA Genesis™',
    description:
      'A human-centered operating framework powered by AURA Genesis™, SentientOS™, and MIND | BODY | SPIRIT TRIANGULATION™.',
    siteName: 'Sentient Connect™',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentient Connect™ | AURA Genesis™',
    description:
      'A human-centered operating framework powered by AURA Genesis™, SentientOS™, and MIND | BODY | SPIRIT TRIANGULATION™.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
