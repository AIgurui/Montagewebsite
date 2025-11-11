import Image from 'next/image'

export default function NextSection({ to, className = '' }: { to: string; className?: string }) {
  if (!to) return null
  return (
    <a
      href={`#${to}`}
      className={`group absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full bg-brand-600 p-2.5 md:p-3 text-white shadow-lg hover:bg-brand-700 focus-visible:shadow-focus transition-all hover:scale-110 ${className}`}
      aria-label="Go to next section"
    >
      <Image src="/ship.svg" alt="" width={20} height={20} className="opacity-90 transition group-hover:translate-y-0.5 w-5 h-5 md:w-5 md:h-5" />
    </a>
  )
}

