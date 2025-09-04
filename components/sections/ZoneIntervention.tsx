import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { MapPin } from 'lucide-react'

const villes = [
  'Paris', 'Boulogne-Billancourt', 'Issy-les-Moulineaux', 'Vanves',
  'Malakoff', 'Clamart', 'Meudon', 'Sèvres', 'Chaville', 'Vélizy-Villacoublay'
]

export default function ZoneIntervention() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Zones d&apos;intervention
          </h2>
          <p className="text-lg text-brand-text-2 max-w-2xl mx-auto">
            Nous intervenons dans votre région avec déplacement gratuit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Liste des villes */}
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-brand-primary mr-2" />
              <h3 className="font-display text-xl font-semibold text-brand-text">
                Villes desservies
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {villes.map((ville, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-brand-text-2"
                >
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>{ville}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-brand-primary-100 rounded-card">
              <p className="text-brand-text text-sm">
                <strong>Déplacement gratuit</strong> dans un rayon de 15km autour de Paris.
                Au-delà, frais de déplacement selon distance.
              </p>
            </div>
          </div>

          {/* Carte placeholder */}
          <div className="bg-brand-ivory rounded-card p-8 text-center">
            <div className="w-full h-64 bg-brand-surface rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <p className="text-brand-text-2">
                  Carte interactive des zones d&apos;intervention
                </p>
                <p className="text-sm text-brand-text-2 mt-2">
                  (Intégration Google Maps ou OpenStreetMap)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/zones" 
            className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 font-semibold transition-colors"
          >
            Voir toutes nos zones d&apos;intervention
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  )
}
