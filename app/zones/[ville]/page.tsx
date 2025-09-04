import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ContactCard from '@/components/sections/ContactCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getZoneBySlug, getAllZones } from '@/content/zones'
import { generatePageMetadata, defaultBusinessData, localBusinessJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { MapPin, Users, Check, ArrowLeft } from 'lucide-react'

export const revalidate = 86400 // ISR 24h

interface ZonePageProps {
  params: {
    ville: string
  }
}

export async function generateStaticParams() {
  const zones = getAllZones()
  return zones.map((zone) => ({
    ville: zone.slug,
  }))
}

export async function generateMetadata({ params }: ZonePageProps): Promise<Metadata> {
  const zone = getZoneBySlug(params.ville)
  
  if (!zone) {
    return {
      title: 'Zone non trouvée',
    }
  }

  return generatePageMetadata(zone.ville)
}

export default function ZonePage({ params }: ZonePageProps) {
  const zone = getZoneBySlug(params.ville)

  if (!zone) {
    notFound()
  }

  const businessData = {
    ...defaultBusinessData,
    city: zone.ville,
    lat: zone.lat,
    lng: zone.lng,
    areaServed: [zone.ville]
  }

  const jsonLd = localBusinessJsonLd(businessData)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero ville={zone.ville} />
        
        <Section>
          <Container>
            <div className="mb-8">
              <Link
                href="/zones"
                className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux zones d&apos;intervention
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="font-display text-3xl font-bold text-brand-text mb-6">
                  Jardinier à {zone.ville}
                </h1>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-brand-text-2">
                    {zone.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MapPin className="h-5 w-5 text-brand-primary mr-2" />
                        Localisation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-text-2">
                        {zone.ville}, {zone.departement}
                      </p>
                      <p className="text-brand-text-2">
                        {zone.codePostal}
                      </p>
                    </CardContent>
                  </Card>

                  {zone.population && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Users className="h-5 w-5 text-brand-primary mr-2" />
                          Population
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-brand-text-2">
                          {zone.population.toLocaleString()} habitants
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href={`tel:${siteConfig.tel}`}>
                      Appeler maintenant
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">
                      Demander un devis
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Services disponibles à {zone.ville}</CardTitle>
                    <CardDescription>
                      Découvrez tous les services que nous proposons dans votre ville
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {zone.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-text-2">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Pourquoi nous choisir ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Déplacement gratuit à {zone.ville}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Devis gratuit et sans engagement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Intervention rapide</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Assurance RC Pro</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        <ServicesGrid />
        <ContactCard />
      </main>
      <Footer />
    </>
  )
}
