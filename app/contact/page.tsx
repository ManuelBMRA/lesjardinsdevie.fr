import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'

export const revalidate = 86400 // ISR 24h

export const metadata: Metadata = generatePageMetadata()

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="bg-brand-surface">
          <Container>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-brand-text-2 max-w-3xl mx-auto">
                Demandez un devis gratuit pour l&apos;entretien de votre jardin.
                Nous vous recontacterons rapidement.
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire de contact */}
              <div>
                <ContactForm />
              </div>

              {/* Informations de contact */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-text mb-6">
                    Nos coordonnées
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-text mb-1">Téléphone</h3>
                        <p className="text-brand-text-2 mb-2">
                          Appelez-nous directement pour une intervention rapide
                        </p>
                        <a 
                          href={`tel:${siteConfig.tel}`} 
                          className="text-brand-primary font-semibold hover:underline"
                        >
                          {siteConfig.tel}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-text mb-1">WhatsApp</h3>
                        <p className="text-brand-text-2 mb-2">
                          Envoyez-nous un message pour un devis ou des questions
                        </p>
                        <a 
                          href={`https://wa.me/${siteConfig.tel.replace('+', '')}?text=Bonjour, je souhaite obtenir un devis pour l'entretien de mon jardin`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-primary font-semibold hover:underline"
                        >
                          Envoyer un message
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-text mb-1">Adresse</h3>
                        <p className="text-brand-text-2">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-text mb-1">Horaires</h3>
                        <div className="text-brand-text-2 space-y-1">
                          <p>{siteConfig.hours}</p>
                          <p>SIRET : {siteConfig.siret}</p>
                        </div>
                        <p className="text-sm text-brand-text-2 mt-2">
                          <strong>Urgences :</strong> Disponible 7j/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-ivory p-6 rounded-card">
                  <h3 className="font-display text-xl font-semibold text-brand-text mb-4">
                    Pourquoi nous choisir ?
                  </h3>
                  <ul className="space-y-2 text-brand-text-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Devis gratuit et sans engagement
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Déplacement gratuit dans votre région
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Intervention rapide
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Assurance RC Pro
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      Équipe professionnelle et expérimentée
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
