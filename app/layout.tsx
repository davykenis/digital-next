import type { Metadata } from 'next'
import { Bebas_Neue, Outfit } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Digital Next | The Podcast of Tomorrow',
  description: 'Business en IT samen brengen om de toekomst van de digitale wereld te shapen. Een video podcast met round table discussies over digitale innovatie in België.',
  keywords: ['podcast', 'digital', 'IT', 'business', 'België', 'innovatie', 'technologie'],
  openGraph: {
    title: 'Digital Next | The Podcast of Tomorrow',
    description: 'Business en IT samen brengen om de toekomst van de digitale wereld te shapen.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}

