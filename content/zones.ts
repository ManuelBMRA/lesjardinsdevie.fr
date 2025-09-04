import { siteConfig } from '@/lib/config'

export interface Zone {
  ville: string
  slug: string
  departement: string
  codePostal: string
  population?: number
  description: string
  services: string[]
  lat: number
  lng: number
}

export const zones: Zone[] = [
  {
    ville: 'Sète',
    slug: 'sete',
    departement: 'Hérault',
    codePostal: '34200',
    population: 44000,
    description: 'Intervention dans tous les quartiers de Sète pour l\'entretien de jardins privés et espaces verts.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 43.4032,
    lng: 3.6966
  },
  {
    ville: 'Frontignan',
    slug: 'frontignan',
    departement: 'Hérault',
    codePostal: '34110',
    population: 23000,
    description: 'Service d\'entretien de jardins et espaces verts à Frontignan et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.4481,
    lng: 3.7544
  },
  {
    ville: 'Balaruc-les-Bains',
    slug: 'balaruc-les-bains',
    departement: 'Hérault',
    codePostal: '34540',
    population: 7000,
    description: 'Intervention rapide pour l\'entretien de jardins à Balaruc-les-Bains, notre ville de base.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 43.44,
    lng: 3.68
  },
  {
    ville: 'Balaruc-le-Vieux',
    slug: 'balaruc-le-vieux',
    departement: 'Hérault',
    codePostal: '34540',
    population: 2000,
    description: 'Service d\'entretien de jardins et espaces verts à Balaruc-le-Vieux.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.45,
    lng: 3.69
  },
  {
    ville: 'Bouzigues',
    slug: 'bouzigues',
    departement: 'Hérault',
    codePostal: '34140',
    population: 2000,
    description: 'Intervention pour l\'entretien de jardins à Bouzigues et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux'],
    lat: 43.4489,
    lng: 3.6589
  },
  {
    ville: 'Mèze',
    slug: 'meze',
    departement: 'Hérault',
    codePostal: '34140',
    population: 12000,
    description: 'Service d\'entretien de jardins et espaces verts à Mèze.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 43.4256,
    lng: 3.6089
  },
  {
    ville: 'Loupian',
    slug: 'loupian',
    departement: 'Hérault',
    codePostal: '34140',
    population: 2000,
    description: 'Intervention pour l\'entretien de jardins à Loupian et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.4411,
    lng: 3.6133
  },
  {
    ville: 'Gigean',
    slug: 'gigean',
    departement: 'Hérault',
    codePostal: '34770',
    population: 6000,
    description: 'Service d\'entretien de jardins et espaces verts à Gigean.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.5000,
    lng: 3.7167
  },
  {
    ville: 'Poussan',
    slug: 'poussan',
    departement: 'Hérault',
    codePostal: '34560',
    population: 6000,
    description: 'Intervention pour l\'entretien de jardins à Poussan et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 43.4833,
    lng: 3.6667
  },
  {
    ville: 'Marseillan',
    slug: 'marseillan',
    departement: 'Hérault',
    codePostal: '34340',
    population: 8000,
    description: 'Service d\'entretien de jardins et espaces verts à Marseillan.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.3567,
    lng: 3.5289
  },
  {
    ville: 'Villeveyrac',
    slug: 'villeveyrac',
    departement: 'Hérault',
    codePostal: '34560',
    population: 4000,
    description: 'Intervention pour l\'entretien de jardins à Villeveyrac et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 43.5000,
    lng: 3.6333
  }
]

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find(zone => zone.slug === slug)
}

export function getAllZones(): Zone[] {
  return zones
}

export function getZonesByDepartement(departement: string): Zone[] {
  return zones.filter(zone => zone.departement === departement)
}