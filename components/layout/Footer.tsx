import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">
                Les jardins de vie
              </h3>
              <div className="space-y-2 text-sm">
                <p>{siteConfig.address}</p>
                <p>
                  <a href={`tel:${siteConfig.tel}`} className="hover:text-brand-ivory transition-colors">
                    {siteConfig.tel}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-ivory transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">
                Liens utiles
              </h3>
              <nav className="space-y-2">
                <Link href="/services" className="block text-sm hover:text-brand-ivory transition-colors">
                  Nos services
                </Link>
                <Link href="/zones" className="block text-sm hover:text-brand-ivory transition-colors">
                  Zones d&apos;intervention
                </Link>
                <Link href="/contact" className="block text-sm hover:text-brand-ivory transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Informations légales */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">
                Informations légales
              </h3>
              <div className="space-y-2 text-sm">
                <p>SIRET: {siteConfig.siret}</p>
                <p>Assurance RC Pro</p>
                <p>Déclaré en activité</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-brand-line">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p>&copy; 2024 Les jardins de vie. Tous droits réservés.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/mentions-legales" className="hover:text-brand-ivory transition-colors">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="hover:text-brand-ivory transition-colors">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
