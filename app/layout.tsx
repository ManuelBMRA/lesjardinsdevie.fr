import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Les jardins de vie - Jardinier & petits travaux',
    template: '%s | Les jardins de vie',
  },
  description: 'Élagage, tonte, haies, débroussaillage, petites maçonneries. Intervention rapide, devis gratuit. Déplacement gratuit dans votre région.',
  keywords: ['jardinier', 'entretien jardin', 'élagage', 'tonte', 'haies', 'débroussaillage', 'petits travaux'],
  authors: [{ name: 'Les jardins de vie' }],
  creator: 'Les jardins de vie',
  publisher: 'Les jardins de vie',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lesjardinsdevie.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lesjardinsdevie.fr',
    siteName: 'Les jardins de vie',
    title: 'Les jardins de vie - Jardinier & petits travaux',
    description: 'Élagage, tonte, haies, débroussaillage, petites maçonneries. Intervention rapide, devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Les jardins de vie - Jardinier & petits travaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les jardins de vie - Jardinier & petits travaux',
    description: 'Élagage, tonte, haies, débroussaillage, petites maçonneries. Intervention rapide, devis gratuit.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
