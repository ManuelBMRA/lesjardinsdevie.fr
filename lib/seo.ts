import { Metadata } from 'next'

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
  name: "Les jardins de vie",
  tel: "+33600000000",
  street: "123 Rue de la Nature",
  city: "Paris",
  postal: "75000",
  lat: 48.8566,
  lng: 2.3522,
  url: "https://lesjardinsdevie.fr",
  sameAs: [
    "https://www.google.com/maps/place/Les+jardins+de+vie",
    "https://www.facebook.com/lesjardinsdevie",
  ],
  areaServed: [
    "Paris",
    "Boulogne-Billancourt",
    "Issy-les-Moulineaux",
    "Vanves",
    "Malakoff",
    "Clamart",
    "Meudon",
    "Sèvres",
    "Chaville",
    "Vélizy-Villacoublay"
  ],
  hours: "Mo-Fr 08:00-18:00,Sa 08:00-16:00"
}
