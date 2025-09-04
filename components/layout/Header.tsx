'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Zones d\'intervention', href: '/zones' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-line">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Navigation principale">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">LJ</span>
              </div>
              <span className="font-display text-xl font-semibold text-brand-text">
                Les jardins de vie
              </span>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-text-2 hover:text-brand-text transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Appeler */}
          <div className="hidden md:flex items-center">
            <Button asChild>
              <a href="tel:+33600000000" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Appeler</span>
              </a>
            </Button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-brand-text-2 hover:text-brand-text transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Menu mobile ouvert */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-line">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-brand-text-2 hover:text-brand-text transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <a href="tel:+33600000000" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Appeler maintenant</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
