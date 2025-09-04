import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function ContactCard() {
  return (
    <Section className="bg-brand-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-brand-text-2 max-w-2xl mx-auto">
            N&apos;hésitez pas à nous contacter pour un devis gratuit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-primary mr-2" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text-2 mb-4">
                  Appelez-nous directement pour une intervention rapide
                </p>
                <Button asChild className="w-full">
                  <a href="tel:+33600000000" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+33 6 00 00 00 00</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-brand-primary mr-2" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text-2 mb-4">
                  Envoyez-nous un message pour un devis ou des questions
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a 
                    href="https://wa.me/33600000000?text=Bonjour, je souhaite obtenir un devis pour l'entretien de mon jardin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Envoyer un message</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-primary mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text-2 mb-4">
                  Écrivez-nous pour des demandes détaillées
                </p>
                <a 
                  href="mailto:contact@lesjardinsdevie.fr"
                  className="text-brand-primary hover:text-brand-primary-600 font-semibold transition-colors"
                >
                  contact@lesjardinsdevie.fr
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Horaires */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-brand-primary mr-2" />
                  Horaires d&apos;ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-brand-text-2">Lundi - Vendredi</span>
                    <span className="font-semibold text-brand-text">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-text-2">Samedi</span>
                    <span className="font-semibold text-brand-text">8h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-text-2">Dimanche</span>
                    <span className="font-semibold text-brand-text">Fermé</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-brand-primary-100 rounded-card">
                  <p className="text-brand-text text-sm">
                    <strong>Urgences :</strong> Disponible 7j/7 pour les interventions urgentes
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Button asChild size="lg" className="w-full">
                <a href="/contact" className="flex items-center justify-center space-x-2">
                  <span>Demander un devis gratuit</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
