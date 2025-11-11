import Link from 'next/link'

const links = [
  { href: '/marketing/fertilizers', label: 'Fertilizers' },
  { href: '/marketing/origination', label: 'Origination' },
  { href: '/marketing/capabilities', label: 'Capabilities' },
  { href: '/marketing/energy', label: 'Energy' },
  { href: '/marketing/about', label: 'About' },
  { href: '/marketing/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold tracking-tight text-neutral-900">
          Montage<span className="text-brand-600">Oil</span> DMCC
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-brand-700">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/marketing/contact" className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 focus-visible:shadow-focus">Contact</Link>
      </div>
    </header>
  )
}
