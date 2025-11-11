import Image from 'next/image'

export default function NextSection({ to, className = '' }: { to: string; className?: string }) {
  if (!to) return null
  return (
    <a
      href={`#${to}`}
      className={`group absolute bottom-6 right-6 inline-flex items-center justify-center rounded-full bg-brand-600 p-3 text-white shadow-card hover:bg-brand-700 focus-visible:shadow-focus ${className}`}
      aria-label="Go to next section"
    >
      <Image src="/ship.svg" alt="" width={20} height={20} className="opacity-90 transition group-hover:translate-y-0.5" />
    </a>
  )
}

