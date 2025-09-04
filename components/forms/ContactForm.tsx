'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { submitContactForm } from '@/lib/actions/contact'
import { Phone, Mail, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'

interface FormState {
  success: boolean
  error: string | null
  fieldErrors?: Record<string, string[] | undefined>
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ success: false, error: null })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormState({ success: false, error: null })

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setFormState({ success: true, error: null })
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      } else {
        setFormState({ 
          success: false, 
          error: result.error || 'Une erreur est survenue',
          fieldErrors: result.fieldErrors
        })
      }
    } catch (error) {
      setFormState({ 
        success: false, 
        error: 'Une erreur est survenue' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formState.success) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Message envoyé avec succès !</h3>
              <p className="text-green-700 text-sm mt-1">
                Nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demander un devis gratuit</CardTitle>
        <CardDescription>
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formState.error && (
          <div className="flex items-center space-x-3 mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <p className="text-red-700 text-sm">{formState.error}</p>
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-brand-text mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                className="w-full px-4 py-3 border border-brand-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                placeholder="Votre nom complet"
              />
              {formState.fieldErrors?.nom && (
                <p className="text-red-600 text-sm mt-1">{formState.fieldErrors.nom[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-brand-text mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                className="w-full px-4 py-3 border border-brand-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                placeholder="06 00 00 00 00"
              />
              {formState.fieldErrors?.telephone && (
                <p className="text-red-600 text-sm mt-1">{formState.fieldErrors.telephone[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
              Email (optionnel)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-brand-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="votre@email.com"
            />
            {formState.fieldErrors?.email && (
              <p className="text-red-600 text-sm mt-1">{formState.fieldErrors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-brand-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
              placeholder="Décrivez vos besoins : type de service, surface, fréquence, etc."
            />
            {formState.fieldErrors?.message && (
              <p className="text-red-600 text-sm mt-1">{formState.fieldErrors.message[0]}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-brand-line">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-brand-primary mb-2" />
              <p className="text-sm text-brand-text-2">Appel direct</p>
              <a href="tel:+33600000000" className="text-brand-primary font-semibold hover:underline">
                +33 6 00 00 00 00
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-6 w-6 text-brand-primary mb-2" />
              <p className="text-sm text-brand-text-2">WhatsApp</p>
              <a 
                href="https://wa.me/33600000000?text=Bonjour, je souhaite obtenir un devis pour l'entretien de mon jardin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-primary font-semibold hover:underline"
              >
                Envoyer un message
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 text-brand-primary mb-2" />
              <p className="text-sm text-brand-text-2">Email</p>
              <a href="mailto:contact@lesjardinsdevie.fr" className="text-brand-primary font-semibold hover:underline">
                contact@lesjardinsdevie.fr
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
