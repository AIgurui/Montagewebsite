import Link from 'next/link'
import Image from 'next/image'
import { ButtonPrimary, ButtonSecondary } from '../Button'

export default function UreaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600">
      <div className="absolute inset-0 bg-[url('/Landing Page background image for the first header tile.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-brand-800/60 to-transparent" />

      <div className="relative container px-4 py-16 text-white sm:px-6 md:py-28 min-h-[60vh] flex flex-col justify-center">
        <h1 className="max-w-4xl font-inter text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Urea for Australian Agriculture
        </h1>

        <p className="mt-3 md:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          Direct urea supply from established sources. Flexible programs tailored to Australian agricultural needs.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link href="#contact-form">
            <ButtonPrimary className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">Get in Touch</ButtonPrimary>
          </Link>
        </div>

        <a href="#contact-form" aria-label="Scroll to contact form" className="group absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full bg-yellow-400 p-2 sm:p-2.5 md:p-3 text-brand-900 shadow-lg hover:bg-yellow-300 focus-visible:shadow-focus transition-all hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition group-hover:translate-y-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
