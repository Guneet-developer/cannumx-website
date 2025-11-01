import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Providers } from './providers' // Add this import

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CannumX - AI Business Solutions',
  description: 'Elevate your business with AI consulting, automation, and growth strategies.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'AI consulting, business automation, AI solutions, CannumX',
  openGraph: {
    title: 'CannumX - AI Business Solutions',
    description: 'Transform your business with cutting-edge AI.',
    url: 'https://cannumx-website.vercel.app',
    siteName: 'CannumX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white overflow-x-hidden scroll-smooth`}>
        <Providers> {/* Use the Providers component */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}