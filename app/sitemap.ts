import type { MetadataRoute } from 'next'
import { site } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '')
  const pages = ['', '/marketing/markets', '/marketing/fertilizers', '/marketing/fertilizers/urea', '/marketing/energy', '/marketing/origination', '/marketing/capabilities', '/marketing/about', '/marketing/contact', '/marketing/australia']
  const now = new Date()
  return pages.map((p) => ({ url: `${base}${p || '/'}`, lastModified: now, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 }))
}
