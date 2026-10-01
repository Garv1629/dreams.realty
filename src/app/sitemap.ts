import { MetadataRoute } from 'next'
import { MOCK_PROPERTIES } from '@/data/properties'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dreamsrealty.co.in'

  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/property-for-sale',
    '/property-for-rent',
    '/properties-by-location',
    '/properties-by-developers',
    '/buy-sell',
    '/blog',
    '/career',
    '/guidelines-value',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const propertyRoutes = MOCK_PROPERTIES.map((property) => ({
    url: `${baseUrl}/property/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...propertyRoutes]
}
