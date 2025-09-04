import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getServiceBySlug, getAllServices } from '@/content/services'
import { generatePageMetadata, serviceJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { Scissors, TreePine, Trash2, Wrench, Leaf, Hammer, Check, ArrowLeft } from 'lucide-react'

export const revalidate = 86400 // ISR 24h

interface ServicePageProps {
  params: {
    slug: string
  }
}

const iconMap = {
  Scissors,
  TreePine,
  Trash2,
  Wrench,
  Leaf,
  Hammer,
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Service non trouvé',
    }
  }

  return generatePageMetadata()
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap]
  const jsonLd = serviceJsonLd(service.title)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Section className="bg-brand-surface">
          <Container>
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center text-brand-primary hover:text-brand-primary-600 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux services
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div>
                    <h1 className="font-display text-4xl font-bold text-brand-text">
                      {service.title}
                    </h1>
                    {service.price && (
                      <p className="text-xl text-brand-primary font-semibold mt-2">
                        {service.price}
                      </p>
                    )}
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-brand-text-2 mb-6">
                    {service.longDescription}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button asChild size="lg">
                    <a href={`tel:${siteConfig.tel}`}>
                      Appeler pour un devis
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
                    <CardTitle>Ce que nous incluons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-text-2">{feature}</span>
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
                        <span className="text-brand-text-2">Devis gratuit et sans engagement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Déplacement gratuit dans votre région</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Assurance RC Pro</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Intervention rapide</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-brand-text-2">Équipe professionnelle et expérimentée</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
