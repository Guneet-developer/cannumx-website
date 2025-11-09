import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CannumX - AI Automation for Businesses',
  description: 'Elevate your business with AI consulting, automation, and growth strategies.',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'AI consulting, business automation, AI solutions, CannumX',
  openGraph: {
    title: 'CannumX - AI Automation for Businesses',
    description: 'Transform your operations with cutting-edge AI.',
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
      <body className={`${inter.className} bg-[#0a0a0a] text-white overflow-x-hidden scroll-smooth`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}