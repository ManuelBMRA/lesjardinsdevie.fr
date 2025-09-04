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
    ville: 'Paris',
    slug: 'paris',
    departement: 'Paris',
    codePostal: '75000',
    population: 2161000,
    description: 'Intervention dans tous les arrondissements de Paris pour l\'entretien de jardins privés et espaces verts.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 48.8566,
    lng: 2.3522
  },
  {
    ville: 'Boulogne-Billancourt',
    slug: 'boulogne-billancourt',
    departement: 'Hauts-de-Seine',
    codePostal: '92100',
    population: 121000,
    description: 'Service d\'entretien de jardins et espaces verts à Boulogne-Billancourt et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 48.8355,
    lng: 2.2413
  },
  {
    ville: 'Issy-les-Moulineaux',
    slug: 'issy-les-moulineaux',
    departement: 'Hauts-de-Seine',
    codePostal: '92130',
    population: 68000,
    description: 'Intervention rapide pour l\'entretien de jardins à Issy-les-Moulineaux.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux'],
    lat: 48.8219,
    lng: 2.2701
  },
  {
    ville: 'Vanves',
    slug: 'vanves',
    departement: 'Hauts-de-Seine',
    codePostal: '92170',
    population: 28000,
    description: 'Service d\'entretien de jardins et espaces verts à Vanves.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 48.8208,
    lng: 2.2900
  },
  {
    ville: 'Malakoff',
    slug: 'malakoff',
    departement: 'Hauts-de-Seine',
    codePostal: '92240',
    population: 31000,
    description: 'Intervention pour l\'entretien de jardins à Malakoff et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux'],
    lat: 48.8189,
    lng: 2.3000
  },
  {
    ville: 'Clamart',
    slug: 'clamart',
    departement: 'Hauts-de-Seine',
    codePostal: '92140',
    population: 54000,
    description: 'Service d\'entretien de jardins et espaces verts à Clamart.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 48.8028,
    lng: 2.2628
  },
  {
    ville: 'Meudon',
    slug: 'meudon',
    departement: 'Hauts-de-Seine',
    codePostal: '92190',
    population: 45000,
    description: 'Intervention pour l\'entretien de jardins à Meudon et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 48.8089,
    lng: 2.2350
  },
  {
    ville: 'Sèvres',
    slug: 'sevres',
    departement: 'Hauts-de-Seine',
    codePostal: '92310',
    population: 23000,
    description: 'Service d\'entretien de jardins et espaces verts à Sèvres.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux'],
    lat: 48.8239,
    lng: 2.2100
  },
  {
    ville: 'Chaville',
    slug: 'chaville',
    departement: 'Hauts-de-Seine',
    codePostal: '92370',
    population: 20000,
    description: 'Intervention pour l\'entretien de jardins à Chaville et ses environs.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation'],
    lat: 48.8089,
    lng: 2.1900
  },
  {
    ville: 'Vélizy-Villacoublay',
    slug: 'velizy-villacoublay',
    departement: 'Yvelines',
    codePostal: '78140',
    population: 22000,
    description: 'Service d\'entretien de jardins et espaces verts à Vélizy-Villacoublay.',
    services: ['Tonte', 'Élagage', 'Débroussaillage', 'Petits travaux', 'Plantation', 'Maçonnerie légère'],
    lat: 48.7819,
    lng: 2.1939
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
