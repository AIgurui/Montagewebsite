'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/marketing/australia', label: 'Australia', featured: true },
  { href: '/marketing/markets', label: 'Markets' },
  { href: '/marketing/fertilizers', label: 'Fertilizers' },
  { href: '/marketing/about', label: 'About' },
  { href: '/marketing/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex items-center justify-between py-3 px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-8 flex-1">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-neutral-900" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/montage-oil-logo.png" alt="Montage" width={132} height={28} className="h-6 md:h-7 w-auto" />
            <span className="sr-only">Montage</span>
          </Link>
          <nav className="hidden gap-4 lg:gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={l.featured ? "text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors whitespace-nowrap" : "text-sm text-neutral-900 hover:text-brand-700 transition-colors whitespace-nowrap"}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://calendly.com/zakiullah-montageoil/30min" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex rounded-xl bg-brand-600 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-brand-700 focus-visible:shadow-focus transition-colors whitespace-nowrap">Book a Call</a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900 hover:text-brand-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className={l.featured ? "text-base font-semibold text-brand-600 hover:text-brand-700 py-2 transition-colors" : "text-base text-neutral-900 hover:text-brand-700 py-2 transition-colors"}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/zakiullah-montageoil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-3 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
