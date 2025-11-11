import Link from 'next/link'
import { site } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-black/40 py-10 text-sm text-slate-400">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {year} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/marketing/contact" className="hover:text-white">Contact</Link>
          <a href="/brochure.pdf" className="hover:text-white" target="_blank">Company Brochure</a>
          <Link href="/safety" className="hover:text-white">Safety & Compliance</Link>
        </div>
      </div>
    </footer>
  )
}

