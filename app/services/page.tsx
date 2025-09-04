import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getAllServices } from '@/content/services'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { Scissors, TreePine, Trash2, Wrench, Leaf, Hammer } from 'lucide-react'

export const revalidate = 86400 // ISR 24h

export const metadata: Metadata = generatePageMetadata()

const iconMap = {
  Scissors,
  TreePine,
  Trash2,
  Wrench,
  Leaf,
  Hammer,
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <>
      <Header />
      <main>
        <Section className="bg-brand-surface">
          <Container>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Nos services
              </h1>
              <p className="text-xl text-brand-text-2 max-w-3xl mx-auto">
                Des services complets pour l&apos;entretien et l&apos;aménagement de votre jardin.
                Intervention rapide, devis gratuit, déplacement offert.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-brand-primary" />
                      </div>
                      <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      {service.price && (
                        <p className="text-brand-primary font-semibold mb-4">
                          {service.price}
                        </p>
                      )}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 font-semibold transition-colors"
                      >
                        En savoir plus
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-ivory">
          <Container>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-brand-text mb-6">
                Besoin d&apos;un devis personnalisé ?
              </h2>
              <p className="text-lg text-brand-text-2 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour obtenir un devis gratuit adapté à vos besoins.
                Nous intervenons rapidement dans votre région.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.tel}`}
                  className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary-600 transition-colors"
                >
                  Appeler maintenant
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-brand-secondary text-brand-secondary font-semibold rounded-xl hover:bg-brand-ivory transition-colors"
                >
                  Demander un devis
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
