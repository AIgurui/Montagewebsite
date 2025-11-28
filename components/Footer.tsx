import Link from 'next/link'
import { site } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-200 bg-white py-8 text-neutral-900">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">© {year} {site.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <Link href="/marketing/contact" className="hover:text-brand-700 transition-colors">Contact</Link>
          <a href="/brochure/Montage_Products.pdf" className="hover:text-brand-700 transition-colors" target="_blank" rel="noopener noreferrer">Product Portfolio</a>
          <Link href="/marketing/privacy" className="hover:text-brand-700 transition-colors">Privacy Policy</Link>
          <Link href="/marketing/terms" className="hover:text-brand-700 transition-colors">Terms of Use</Link>
          <Link href="/marketing/supplier-code" className="hover:text-brand-700 transition-colors">Supplier Code</Link>
          <Link href="/marketing/whistleblower" className="hover:text-brand-700 transition-colors">Whistleblower</Link>
          <Link href="/marketing/modern-slavery" className="hover:text-brand-700 transition-colors">Modern Slavery Statement</Link>
        </div>
      </div>
    </footer>
  )
}
