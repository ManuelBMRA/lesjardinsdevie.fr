import type { MetadataRoute } from 'next'
import { getAllServices } from '@/content/services'
import { getAllZones } from '@/content/zones'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lesjardinsdevie.fr'
  
  // Pages statiques principales
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zones`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Pages de services
  const serviceRoutes = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Pages de zones
  const zoneRoutes = getAllZones().map((zone) => ({
    url: `${baseUrl}/zones/${zone.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes]
}
