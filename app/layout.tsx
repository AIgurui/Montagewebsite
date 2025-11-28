import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Global Fertilizer Trading`,
    template: `%s — ${site.name}`,
  },
  description: 'Global fertilizer trading with disciplined risk, transparent execution, and a partnership-first approach.',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="min-h-screen font-inter">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              url: site.url,
              contactPoint: [{ '@type': 'ContactPoint', email: site.email, contactType: 'customer service' }],
            }),
          }}
        />
      </body>
    </html>
  )
}
