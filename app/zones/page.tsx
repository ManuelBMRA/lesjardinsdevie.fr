import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getAllZones } from '@/content/zones'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { MapPin, Users, Map } from 'lucide-react'

export const revalidate = 86400 // ISR 24h

export const metadata: Metadata = generateSEOMetadata({
  title: 'Zones d\'intervention - Les jardins de vie',
  description: 'Découvrez toutes nos zones d\'intervention : Paris, Boulogne-Billancourt, Issy-les-Moulineaux et bien d\'autres. Déplacement gratuit dans votre région.',
  url: 'https://lesjardinsdevie.fr/zones'
})

export default function ZonesPage() {
  const zones = getAllZones()

  return (
    <>
      <Header />
      <main>
        <Section className="bg-brand-surface">
          <Container>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Zones d&apos;intervention
              </h1>
              <p className="text-xl text-brand-text-2 max-w-3xl mx-auto">
                Nous intervenons dans votre région avec déplacement gratuit.
                Découvrez toutes les villes que nous desservons.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zones.map((zone) => (
                <Card key={zone.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-brand-primary mr-2" />
                      <CardTitle className="text-xl">{zone.ville}</CardTitle>
                    </div>
                    <CardDescription>
                      {zone.departement} - {zone.codePostal}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-text-2 mb-4 text-sm">
                      {zone.description}
                    </p>
                    
                    {zone.population && (
                      <div className="flex items-center text-sm text-brand-text-2 mb-4">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{zone.population.toLocaleString()} habitants</span>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="font-semibold text-brand-text mb-2 text-sm">Services disponibles :</h4>
                      <div className="flex flex-wrap gap-1">
                        {zone.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-block bg-brand-primary-100 text-brand-primary text-xs px-2 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/zones/${zone.slug}`}
                      className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 font-semibold transition-colors text-sm"
                    >
                      Voir les détails
                      <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-ivory">
          <Container>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-brand-text mb-6">
                Votre ville n&apos;est pas listée ?
              </h2>
              <p className="text-lg text-brand-text-2 mb-8 max-w-2xl mx-auto">
                Nous intervenons dans un rayon de 15km autour de Paris.
                Contactez-nous pour vérifier si nous pouvons nous déplacer chez vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33600000000"
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary-600 transition-colors"
                >
                  Appeler pour vérifier
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-brand-secondary text-brand-secondary font-semibold rounded-xl hover:bg-brand-ivory transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
