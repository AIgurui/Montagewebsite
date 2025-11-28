import Link from 'next/link'
import { site } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-200 bg-white py-10 text-sm text-neutral-900">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {year} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/marketing/contact" className="hover:text-brand-700">Contact</Link>
          <a href="/brochure/Montage_Products.pdf" className="hover:text-brand-700" target="_blank">Company Brochure</a>
          <Link href="/marketing/privacy" className="hover:text-brand-700">Privacy Policy</Link>
          <Link href="/marketing/terms" className="hover:text-brand-700">Terms of Use</Link>
          <Link href="/marketing/supplier-code" className="hover:text-brand-700">Supplier Code</Link>
          <Link href="/marketing/whistleblower" className="hover:text-brand-700">Whistleblower</Link>
          <Link href="/marketing/modern-slavery" className="hover:text-brand-700">Modern Slavery</Link>
          <Link href="/safety" className="hover:text-brand-700">Safety & Compliance</Link>
        </div>
      </div>
    </footer>
  )
}
