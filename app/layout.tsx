import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CannumX - AI & Automation Solutions',
  description: 'Elevate your business with AI consulting, automation, and growth strategies.',
  keywords: 'AI, automation, web development, SaaS, app development, branding, digital marketing',
  authors: [{ name: 'CannumX Team' }],
  creator: 'CannumX',
  publisher: 'CannumX',
  metadataBase: new URL('https://cannumx-website.vercel.app'), // Replace with your actual domain
  openGraph: {
    title: 'CannumX - AI & Automation Solutions',
    description: 'Elevate your business with AI consulting, automation, and growth strategies.',
    url: 'https://cannumx-website.vercel.app',
    siteName: 'CannumX',
    images: [
      {
        url: '/images/og-image.png', // Add an og-image.png in public/images
        width: 1200,
        height: 630,
        alt: 'CannumX - AI & Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CannumX - AI & Automation Solutions',
    description: 'Elevate your business with AI consulting, automation, and growth strategies.',
    images: ['/images/og-image.png'],
    creator: '@cannumx', // Replace with your Twitter handle
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}