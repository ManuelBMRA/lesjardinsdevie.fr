import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Scissors, TreePine, Trash2, Wrench, Leaf, Hammer } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Tonte & Entretien',
    description: 'Tonte régulière, désherbage et entretien de votre pelouse pour un jardin impeccable.',
  },
  {
    icon: TreePine,
    title: 'Élagage & Taille',
    description: 'Taille des haies, élagage des arbres et arbustes pour une croissance harmonieuse.',
  },
  {
    icon: Trash2,
    title: 'Débroussaillage',
    description: 'Nettoyage des espaces verts, évacuation des déchets verts et remise en état.',
  },
  {
    icon: Wrench,
    title: 'Petits Travaux',
    description: 'Réparations diverses, installation de clôtures et aménagements extérieurs.',
  },
  {
    icon: Leaf,
    title: 'Plantation',
    description: 'Plantation d\'arbres, arbustes et fleurs selon vos souhaits et la saison.',
  },
  {
    icon: Hammer,
    title: 'Maçonnerie Légère',
    description: 'Petits travaux de maçonnerie, pose de dalles et aménagements paysagers.',
  },
]

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Nos services
          </h2>
          <p className="text-lg text-brand-text-2 max-w-2xl mx-auto">
            Des services complets pour l&apos;entretien et l&apos;aménagement de votre jardin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-brand-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 font-semibold transition-colors"
          >
            Voir tous nos services
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  )
}
