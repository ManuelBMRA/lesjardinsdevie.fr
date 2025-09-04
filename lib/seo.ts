import { Metadata } from 'next'
import { siteConfig } from './config'

export interface LocalBusinessData {
  name: string
  tel: string
  street: string
  city: string
  postal: string
  lat: number
  lng: number
  url: string
  sameAs: string[]
  areaServed: string[]
  hours?: string
}

export const localBusinessJsonLd = ({
  name,
  tel,
  street,
  city,
  postal,
  lat,
  lng,
  url,
  sameAs,
  areaServed,
  hours = "Mo-Fr 08:00-18:00",
}: LocalBusinessData) => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name,
  telephone: tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: street,
    addressLocality: city,
    postalCode: postal,
    addressCountry: "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: lat,
    longitude: lng
  },
  areaServed,
  openingHours: hours,
  url,
  sameAs,
  description: "Service d'entretien de jardins, élagage, tonte, débroussaillage et petits travaux. Intervention rapide, devis gratuit.",
  serviceType: [
    "Entretien de jardins",
    "Élagage",
    "Tonte",
    "Débroussaillage",
    "Petits travaux",
    "Plantation",
    "Maçonnerie légère"
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127"
  }
})

export function generateMetadata({
  title,
  description,
  url,
  image,
  ville,
}: {
  title: string
  description: string
  url: string
  image?: string
  ville?: string
}): Metadata {
  const fullTitle = ville ? `${title} - ${ville}` : title
  const fullDescription = ville ? `${description} - ${ville} et alentours` : description

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  }
}

export const defaultBusinessData: LocalBusinessData = {
  name: siteConfig.name,
  tel: siteConfig.tel,
  street: siteConfig.address.split(' ').slice(0, -2).join(' '), // Extrait la rue de l'adresse complète
  city: siteConfig.baseCity,
  postal: siteConfig.basePostal,
  lat: siteConfig.lat,
  lng: siteConfig.lng,
  url: siteConfig.url,
  sameAs: [...siteConfig.sameAs],
  areaServed: [...siteConfig.targetArea],
  hours: siteConfig.hours
}

export function generatePageMetadata(ville?: string) {
  const title = ville 
    ? siteConfig.titleTemplate.replace('{ville}', ville)
    : siteConfig.titleTemplate.replace(' | Jardinier à {ville} – Bassin de Thau', '')
  
  const description = ville
    ? siteConfig.descriptionTemplate.replace('{ville}', ville)
    : siteConfig.descriptionTemplate.replace(' à {ville}', '')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: ville ? `${siteConfig.url}/zones/${ville}` : siteConfig.url,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: ville ? `${siteConfig.url}/zones/${ville}` : siteConfig.url,
    },
  }
}

export const serviceJsonLd = (serviceName: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    telephone: siteConfig.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.split(' ').slice(0, -2).join(' '),
      addressLocality: siteConfig.baseCity,
      postalCode: siteConfig.basePostal,
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.lat,
      longitude: siteConfig.lng
    },
    areaServed: [...siteConfig.targetArea],
    openingHours: siteConfig.hours,
    url: siteConfig.url,
    sameAs: [...siteConfig.sameAs]
  },
  areaServed: [...siteConfig.targetArea],
  description: `Service d'${serviceName.toLowerCase()} proposé par ${siteConfig.name} dans le Bassin de Thau.`,
  serviceType: serviceName,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Devis gratuit"
  }
})
