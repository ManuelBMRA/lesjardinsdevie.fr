import { Card, CardContent } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Star } from 'lucide-react'

const avis = [
  {
    nom: 'Marie L.',
    ville: 'Paris',
    note: 5,
    commentaire: 'Service impeccable ! Mon jardin n\'a jamais été aussi beau. Intervention rapide et professionnelle. Je recommande vivement.',
  },
  {
    nom: 'Jean-Pierre M.',
    ville: 'Boulogne-Billancourt',
    note: 5,
    commentaire: 'Excellent rapport qualité-prix. L\'équipe est très professionnelle et respectueuse. Mon jardin est maintenant parfaitement entretenu.',
  },
  {
    nom: 'Sophie D.',
    ville: 'Issy-les-Moulineaux',
    note: 4,
    commentaire: 'Très satisfaite du service. Ponctualité, propreté et résultat au rendez-vous. Je fais appel à eux régulièrement maintenant.',
  },
]

export default function Avis() {
  return (
    <Section className="bg-brand-ivory">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-brand-text-2 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {avis.map((avis, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                {/* Étoiles */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < avis.note
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Commentaire */}
                <blockquote className="text-brand-text-2 mb-4 italic">
                  &ldquo;{avis.commentaire}&rdquo;
                </blockquote>

                {/* Auteur */}
                <div className="text-sm">
                  <div className="font-semibold text-brand-text">{avis.nom}</div>
                  <div className="text-brand-text-2">{avis.ville}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-brand-text-2">
            <span className="text-2xl font-bold text-brand-primary">4,8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span>sur 5 (127 avis)</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
