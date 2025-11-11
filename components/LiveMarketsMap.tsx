'use client'

import { useEffect, useState, useRef } from 'react'
import { geoPath, geoEquirectangular } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'

type Region = {
  name: string
  color: string
  countries: string[]
}

type RegionsData = {
  regions: Region[]
}

type City = {
  name: string
  country: string
  lat: number
  lon: number
  timezone: string
  isCapital: boolean
}

type WorldData = Topology & {
  objects: {
    countries: GeometryCollection
  }
}

export default function LiveMarketsMap() {
  const [regionsData, setRegionsData] = useState<RegionsData | null>(null)
  const [cities, setCities] = useState<City[]>([])
  const [worldData, setWorldData] = useState<WorldData | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isPaused, setPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // Fetch regions data
  useEffect(() => {
    fetch('/regions.json')
      .then((res) => res.json())
      .then((data) => setRegionsData(data as RegionsData))
      .catch((err) => console.error('Failed to load regions:', err))
  }, [])

  // Fetch cities data
  useEffect(() => {
    fetch('/cities.json')
      .then((res) => res.json())
      .then((data) => setCities(data as City[]))
      .catch((err) => console.error('Failed to load cities:', err))
  }, [])

  // Fetch world topology data
  useEffect(() => {
    fetch('/world-110m.json')
      .then((res) => res.json())
      .then((data) => setWorldData(data as WorldData))
      .catch((err) => console.error('Failed to load world data:', err))
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

  // Map dimensions
  const width = 1200
  const height = 675 // 16:9 aspect ratio

  // Setup projection and path generator
  const projection = geoEquirectangular()
    .scale(width / (2 * Math.PI))
    .translate([width / 2, height / 2])

  const pathGenerator = geoPath().projection(projection)

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

  // Convert lat/lon to SVG coordinates using projection
  const projectPoint = (lat: number, lon: number) => {
    const coords = projection([lon, lat])
    return coords ? { x: coords[0], y: coords[1] } : null
  }

  // Get local time for a city
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

  // Convert TopoJSON to GeoJSON features
  const countries =
    worldData
      ? feature(worldData, worldData.objects.countries).features
      : []

  // Create a map of country names to region colors
  const countryToColor = new Map<string, string>()
  const defaultLandColor = '#d1d5db' // Neutral gray for non-operational countries

  regionsData?.regions.forEach((region) => {
    region.countries.forEach((country) => {
      countryToColor.set(country, region.color)
    })
  })

  // Get color for a country
  const getCountryColor = (countryName: string | undefined): string => {
    if (!countryName) return defaultLandColor
    return countryToColor.get(countryName) || defaultLandColor
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ display: 'block' }}
      >
        {/* Ocean background (brand navy) */}
        <rect width={width} height={height} fill="#0a1628" />

        {/* Land masses with borders - colored by region */}
        {countries.map((country, i) => {
          const countryName = (country.properties as any)?.name as string | undefined
          const fillColor = getCountryColor(countryName)
          const isOperational = countryToColor.has(countryName || '')

          return (
            <path
              key={`country-${i}`}
              d={pathGenerator(country) || ''}
              fill={fillColor}
              stroke="#1e293b"
              strokeWidth={0.3}
              strokeLinejoin="round"
              opacity={isOperational ? 0.85 : 0.6}
            />
          )
        })}

        {/* Day/night overlay with animated terminator */}
        <defs>
          <linearGradient id="dayNightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="rgba(10, 22, 40, 0.7)"
            />
            <stop
              offset={`${((sunLon + 180 - 90 + 360) % 360) / 3.6}%`}
              stopColor="rgba(10, 22, 40, 0.4)"
            />
            <stop
              offset={`${((sunLon + 180) % 360) / 3.6}%`}
              stopColor="rgba(255, 193, 7, 0.15)"
            />
            <stop
              offset={`${((sunLon + 180 + 90) % 360) / 3.6}%`}
              stopColor="rgba(10, 22, 40, 0.4)"
            />
            <stop
              offset="100%"
              stopColor="rgba(10, 22, 40, 0.7)"
            />
          </linearGradient>

          <radialGradient id="twilightGlow">
            <stop offset="0%" stopColor="rgba(255, 193, 7, 0.4)" />
            <stop offset="40%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Apply day/night overlay */}
        <rect
          width={width}
          height={height}
          fill="url(#dayNightGradient)"
          className="transition-all duration-1000"
        />

        {/* Twilight glow at terminator */}
        <ellipse
          cx={((sunLon + 180) % 360) / 360 * width}
          cy={height / 2}
          rx={width * 0.25}
          ry={height * 0.8}
          fill="url(#twilightGlow)"
          opacity={0.3}
          className="transition-all duration-1000"
        />

        {/* City markers - Melbourne only */}
        {cities
          .filter((city) => city.country === 'Australia')
          .map((city) => {
            const point = projectPoint(city.lat, city.lon)
            if (!point) return null

            const localTime = getLocalTime(city.timezone)
            const markerColor = '#14b8a6' // Teal for Melbourne

            return (
              <g key={`${city.name}-${city.country}`} transform={`translate(${point.x}, ${point.y})`}>
                {/* Pulsing ring (disabled if reduced motion) */}
                {!prefersReducedMotion && !isPaused && (
                  <circle
                    r={5}
                    fill={markerColor}
                    opacity={0.4}
                    className="animate-ping"
                  />
                )}
                {/* Main marker dot */}
                <circle
                  r={3}
                  fill={markerColor}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  className={!prefersReducedMotion && !isPaused ? 'animate-pulse' : ''}
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                />
                {/* Label background */}
                <rect
                  x={-28}
                  y={8}
                  width={56}
                  height={24}
                  rx={3}
                  fill="rgba(0, 0, 0, 0.75)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth={0.5}
                />
                {/* City name */}
                <text
                  y={19}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={9}
                  fontWeight="600"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                >
                  {city.name}
                </text>
                {/* Local time */}
                <text
                  y={28}
                  textAnchor="middle"
                  fill={markerColor}
                  fontSize={8}
                  fontWeight="bold"
                  fontFamily="monospace"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                >
                  {localTime}
                </text>
              </g>
            )
          })}
      </svg>

      {/* Legend */}
      <div className="absolute top-4 left-4 rounded-lg bg-black/60 px-4 py-3 backdrop-blur-sm">
        <div className="text-xs font-bold text-white/90 mb-2">Operational Regions</div>
        <div className="space-y-1.5">
          {regionsData?.regions.map((region) => (
            <div key={region.name} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: region.color }}
              />
              <span className="text-xs text-white/80">{region.name}</span>
            </div>
          ))}
        </div>
      </div>

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
