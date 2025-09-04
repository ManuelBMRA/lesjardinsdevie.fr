'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  telephone: z.string().min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères'),
  email: z.string().email('Adresse email invalide').optional().or(z.literal('')),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  honeypot: z.string().optional(), // Champ honeypot pour éviter les spams
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Vérification du honeypot
    const honeypot = formData.get('honeypot') as string
    if (honeypot) {
      // Si le honeypot est rempli, c'est probablement un bot
      return { success: false, error: 'Spam détecté' }
    }

    // Validation des données
    const validatedData = contactSchema.parse({
      nom: formData.get('nom'),
      telephone: formData.get('telephone'),
      email: formData.get('email'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot'),
    })

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Les jardins de vie <contact@lesjardinsdevie.fr>',
      to: ['contact@lesjardinsdevie.fr'],
      subject: `Nouveau message de contact - ${validatedData.nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${validatedData.nom}</p>
        <p><strong>Téléphone:</strong> ${validatedData.telephone}</p>
        ${validatedData.email ? `<p><strong>Email:</strong> ${validatedData.email}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Message envoyé depuis le site web Les jardins de vie</em></p>
      `,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return { success: false, error: 'Erreur lors de l\'envoi du message' }
    }

    return { success: true, data }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Données invalides', 
        fieldErrors: error.flatten().fieldErrors 
      }
    }
    
    console.error('Erreur contact form:', error)
    return { success: false, error: 'Une erreur est survenue' }
  }
}
