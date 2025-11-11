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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold tracking-tight text-white">
          Montage<span className="text-brand">Oil</span> DMCC
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-200 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/marketing/contact" className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-black">
          Contact
        </Link>
      </div>
    </header>
  )
}

