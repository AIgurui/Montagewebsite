import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/marketing/australia', label: '🇦🇺 Australia', featured: true },
  { href: '/marketing/fertilizers', label: 'Fertilizers' },
  { href: '/marketing/origination', label: 'Origination' },
  { href: '/marketing/capabilities', label: 'Capabilities' },
  { href: '/marketing/territories', label: 'Territories' },
  { href: '/marketing/energy', label: 'Energy' },
  { href: '/marketing/about', label: 'About' },
  { href: '/marketing/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-neutral-900">
          <Image src="/montage-oil-logo.png" alt="Montage Oil" width={132} height={28} className="h-7 w-auto" />
          <span className="sr-only">Montage Oil DMCC</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.featured ? "text-sm font-semibold text-brand-600 hover:text-brand-700" : "text-sm text-neutral-700 hover:text-brand-700"}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="https://calendly.com/zakiullah-montageoil/30min" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 focus-visible:shadow-focus">Start a Conversation</a>
      </div>
    </header>
  )
}
