'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

type Market = {
  name: string
  city: string
  lat: number
  lon: number
  region: string
  priority: boolean
  timezone: string
}

export default function LiveMarketsMap() {
  const [markets, setMarkets] = useState<Market[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isPaused, setPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch markets data
  useEffect(() => {
    fetch('/markets.json')
      .then((res) => res.json())
      .then((data) => setMarkets(data))
      .catch((err) => console.error('Failed to load markets:', err))
  }, [])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Intersection Observer to pause when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPaused(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Update clock every second when not paused
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion])

  // Calculate sun terminator (day/night line)
  // Simplified calculation: sun is at longitude based on UTC time
  const getSunLongitude = (date: Date) => {
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const timeInHours = hours + minutes / 60
    // Sun moves 15 degrees per hour, noon UTC = 0 degrees
    return ((timeInHours - 12) * 15) % 360
  }

  const sunLon = getSunLongitude(currentTime)

  // Convert lat/lon to x/y percentage for positioning
  const toXY = (lat: number, lon: number) => {
    // Simple equirectangular projection
    const x = ((lon + 180) / 360) * 100
    const y = ((90 - lat) / 180) * 100
    return { x: `${x}%`, y: `${y}%` }
  }

  // Get local time for a market
  const getLocalTime = (timezone: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: timezone,
      }).format(currentTime)
    } catch {
      return '--:--'
    }
  }

  // Calculate if a location is in daylight
  const isInDaylight = (lon: number) => {
    // Simplified: location is in daylight if within ~90 degrees of sun
    const diff = Math.abs(((lon - sunLon + 540) % 360) - 180)
    return diff < 90
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#0a1628] shadow-2xl"
    >
      {/* World map background */}
      <div className="absolute inset-0">
        <Image
          src="/map.png"
          alt="World map"
          fill
          className="object-cover opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          priority
        />
      </div>

      {/* Day/night overlay with animated terminator */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(90deg,
            rgba(10, 22, 40, 0.7) 0%,
            rgba(10, 22, 40, 0.4) ${((sunLon + 180 - 90 + 360) % 360) / 3.6}%,
            rgba(255, 193, 7, 0.15) ${((sunLon + 180) % 360) / 3.6}%,
            rgba(10, 22, 40, 0.4) ${((sunLon + 180 + 90) % 360) / 3.6}%,
            rgba(10, 22, 40, 0.7) 100%
          )`,
        }}
      />

      {/* Twilight glow at terminator */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 800px 2000px at ${((sunLon + 180) % 360) / 3.6}% 50%,
            rgba(255, 193, 7, 0.4),
            transparent 40%
          )`,
        }}
      />

      {/* Aspect ratio container */}
      <div className="aspect-[16/9] w-full" />

      {/* Market markers */}
      {markets.map((market) => {
        const { x, y } = toXY(market.lat, market.lon)
        const localTime = getLocalTime(market.timezone)
        const inDaylight = isInDaylight(market.lon)

        return (
          <div
            key={market.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            {/* Pulsing marker dot */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                {/* Pulse animation (disabled if reduced motion) */}
                {!prefersReducedMotion && !isPaused && (
                  <div
                    className={`absolute inset-0 h-3 w-3 rounded-full animate-ping ${
                      inDaylight ? 'bg-yellow-400/50' : 'bg-blue-400/50'
                    }`}
                  />
                )}
                {/* Main dot */}
                <div
                  className={`h-3 w-3 rounded-full shadow-lg ${
                    market.priority
                      ? inDaylight
                        ? 'bg-yellow-400 shadow-yellow-400/50'
                        : 'bg-blue-400 shadow-blue-400/50'
                      : inDaylight
                      ? 'bg-yellow-300 shadow-yellow-300/50'
                      : 'bg-blue-300 shadow-blue-300/50'
                  } ${!prefersReducedMotion && !isPaused ? 'animate-pulse' : ''}`}
                />
              </div>
              {/* Label with local time */}
              <div className="mt-2 flex flex-col items-center whitespace-nowrap">
                <div
                  className={`text-xs font-bold drop-shadow-lg ${
                    inDaylight ? 'text-yellow-100' : 'text-blue-100'
                  }`}
                >
                  {market.city}
                </div>
                <div
                  className={`text-[10px] font-mono drop-shadow ${
                    inDaylight ? 'text-yellow-200/80' : 'text-blue-200/80'
                  }`}
                >
                  {localTime}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* UTC clock in corner */}
      <div className="absolute bottom-4 right-4 rounded-lg bg-black/40 px-3 py-2 backdrop-blur-sm">
        <div className="text-xs text-white/60">UTC</div>
        <div className="font-mono text-sm font-bold text-white">
          {currentTime.toISOString().slice(11, 16)}
        </div>
      </div>
    </div>
  )
}
