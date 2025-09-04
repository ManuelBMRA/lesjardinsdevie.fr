export interface Service {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  price?: string
  image?: string
}

export const services: Service[] = [
  {
    id: 'tonte-entretien',
    title: 'Tonte & Entretien',
    slug: 'tonte-entretien',
    description: 'Tonte régulière, désherbage et entretien de votre pelouse pour un jardin impeccable.',
    longDescription: 'Nous proposons un service complet d\'entretien de pelouse incluant la tonte régulière, le désherbage, la fertilisation et l\'arrosage. Notre équipe s\'occupe de maintenir votre gazon en parfait état tout au long de l\'année.',
    icon: 'Scissors',
    features: [
      'Tonte régulière selon vos besoins',
      'Désherbage manuel et chimique',
      'Fertilisation et aération',
      'Réparation des zones abîmées',
      'Évacuation des déchets verts'
    ],
    price: 'À partir de 25€/h'
  },
  {
    id: 'elagage-taille',
    title: 'Élagage & Taille',
    slug: 'elagage-taille',
    description: 'Taille des haies, élagage des arbres et arbustes pour une croissance harmonieuse.',
    longDescription: 'Service professionnel d\'élagage et de taille pour maintenir la santé et l\'esthétique de vos arbres et arbustes. Nous respectons les cycles de croissance et les techniques appropriées pour chaque espèce.',
    icon: 'TreePine',
    features: [
      'Taille de formation et d\'entretien',
      'Élagage sécurisé des arbres',
      'Taille des haies et arbustes',
      'Nettoyage et évacuation',
      'Conseils d\'entretien'
    ],
    price: 'À partir de 35€/h'
  },
  {
    id: 'debroussaillage',
    title: 'Débroussaillage',
    slug: 'debroussaillage',
    description: 'Nettoyage des espaces verts, évacuation des déchets verts et remise en état.',
    longDescription: 'Service de débroussaillage complet pour nettoyer et remettre en état vos espaces verts. Nous nous occupons de l\'évacuation de tous les déchets verts et du nettoyage des zones envahies.',
    icon: 'Trash2',
    features: [
      'Nettoyage des zones envahies',
      'Débroussaillage mécanique et manuel',
      'Évacuation des déchets verts',
      'Remise en état des espaces',
      'Prévention des repousses'
    ],
    price: 'À partir de 30€/h'
  },
  {
    id: 'petits-travaux',
    title: 'Petits Travaux',
    slug: 'petits-travaux',
    description: 'Réparations diverses, installation de clôtures et aménagements extérieurs.',
    longDescription: 'Service de petits travaux pour tous vos besoins d\'aménagement extérieur. De l\'installation de clôtures aux réparations diverses, nous vous accompagnons dans vos projets.',
    icon: 'Wrench',
    features: [
      'Installation de clôtures',
      'Réparations diverses',
      'Aménagements extérieurs',
      'Petites constructions',
      'Maintenance préventive'
    ],
    price: 'À partir de 40€/h'
  },
  {
    id: 'plantation',
    title: 'Plantation',
    slug: 'plantation',
    description: 'Plantation d\'arbres, arbustes et fleurs selon vos souhaits et la saison.',
    longDescription: 'Service de plantation personnalisé selon vos envies et la saison. Nous vous conseillons sur le choix des plantes et nous occupons de leur plantation et de leur entretien initial.',
    icon: 'Leaf',
    features: [
      'Conseil en choix de plantes',
      'Plantation d\'arbres et arbustes',
      'Création de massifs floraux',
      'Aménagement paysager',
      'Suivi et entretien initial'
    ],
    price: 'À partir de 30€/h'
  },
  {
    id: 'maconnerie-legere',
    title: 'Maçonnerie Légère',
    slug: 'maconnerie-legere',
    description: 'Petits travaux de maçonnerie, pose de dalles et aménagements paysagers.',
    longDescription: 'Service de maçonnerie légère pour vos aménagements extérieurs. Pose de dalles, création d\'allées, petits murets et autres travaux de finition pour embellir votre jardin.',
    icon: 'Hammer',
    features: [
      'Pose de dalles et pavés',
      'Création d\'allées',
      'Petits murets et bordures',
      'Aménagements paysagers',
      'Travaux de finition'
    ],
    price: 'À partir de 45€/h'
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
