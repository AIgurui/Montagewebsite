import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Fertilizers. Intelligence. Reach.`,
    template: `%s — ${site.name}`,
  },
  description: 'Global fertilizer and energy trading with disciplined risk, transparent execution, and a partnership-first approach.',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
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
