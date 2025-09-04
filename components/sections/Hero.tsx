import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

interface HeroProps {
  ville?: string
}

export default function Hero({ ville = 'Votre ville' }: HeroProps) {
  return (
    <Section className="bg-brand-surface">
      <Container>
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-brand-primary-100 px-4 py-2 text-sm text-brand-text mb-6">
            <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
            Déplacement gratuit autour de <span className="ml-1 font-semibold">{ville}</span>
          </div>

          {/* Titre principal */}
          <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-text mb-6 text-balance">
            Les jardins de vie
          </h1>

          {/* Sous-titre */}
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-brand-text-2 mb-8 text-balance">
            Entretien jardin, multi-services & petits travaux — {ville} et alentours.
          </p>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-base text-brand-text-2 mb-10">
            Élagage, tonte, haies, débroussaillage, petites maçonneries. Intervention rapide, devis gratuit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <a href="tel:+33600000000" className="flex items-center space-x-2">
                <span>Appeler maintenant</span>
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="/contact" className="flex items-center space-x-2">
                <span>Demander un devis</span>
              </a>
            </Button>
          </div>

          {/* Preuves sociales */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-brand-text-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Assuré RC pro</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Déplacement offert</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Avis 4,8/5</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
