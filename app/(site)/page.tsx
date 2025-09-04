import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Avis from '@/components/sections/Avis'
import ZoneIntervention from '@/components/sections/ZoneIntervention'
import ContactCard from '@/components/sections/ContactCard'
import { generateMetadata as generateSEOMetadata, defaultBusinessData, localBusinessJsonLd } from '@/lib/seo'

export const revalidate = 86400 // ISR 24h

export const metadata: Metadata = generateSEOMetadata({
  title: 'Les jardins de vie - Jardinier & petits travaux',
  description: 'Élagage, tonte, haies, débroussaillage, petites maçonneries. Intervention rapide, devis gratuit. Déplacement gratuit dans votre région.',
  url: 'https://lesjardinsdevie.fr',
  ville: 'Paris'
})

export default function HomePage() {
  const jsonLd = localBusinessJsonLd(defaultBusinessData)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero ville="Paris" />
        <ServicesGrid />
        <Avis />
        <ZoneIntervention />
        <ContactCard />
      </main>
      <Footer />
    </>
  )
}
