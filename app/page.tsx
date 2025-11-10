

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from '../components/ThemeContext'


export default function Home() {
  const { theme } = useTheme()
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const videoSrc = theme === 'dark' ? '/videos/hero-bg.mp4' : '/videos/hero-bg-light.mp4'
  const bgColor = theme === 'dark' ? 'bg-gradient-to-r from-black via-gray-900 to-black' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-black'
  const sectionBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const cardText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  const services = [
    { title: 'AI Consulting', desc: 'Tailored AI strategies for your business.', icon: '🤖' },
    { title: 'Automation', desc: 'Streamline operations with smart tools.', icon: '⚙️' },
    { title: 'Marketing', desc: 'AI-driven campaigns for growth.', icon: '📈' },
    { title: 'Development', desc: 'Custom websites and apps.', icon: '🌐' },
  ]

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-all duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          key={theme}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} transition-all duration-1000 ease-out`}></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} rounded-full opacity-70 animate-pulse transition-all duration-2000 ease-in-out`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-light mb-6 drop-shadow-2xl animate-fade-in transition-all duration-1000 ease-out">
            Elevate Your Business with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-lg animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.2s' }}>
            Make your business work for you while you sleep.
          </p>
          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.4s' }}>
            CannumX delivers cutting-edge AI consulting, automation, and growth strategies to transform your operations.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/contact"
              className={`px-8 py-4 rounded-full font-medium transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              Get Started
            </Link>
            <Link
              href="https://calendly.com/info-cannumx/30min"
              className={`px-8 py-4 rounded-full font-medium transition-all duration-700 ease-in-out ${theme === 'dark' ? 'border border-white text-white hover:bg-white hover:text-black' : 'border border-black text-black hover:bg-black hover:text-white'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-24 ${sectionBg} relative transition-all duration-1000 ease-in-out`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-100/20 to-purple-100/20'} transition-opacity duration-1000 ease-in-out`}></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} rounded-full opacity-50 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 ${cardBg} rounded-lg hover-lift hover:border-2 hover:border-blue-500/60 transition-all duration-800 ease-in-out animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl mb-4 animate-bounce transition-all duration-1000 ease-in-out" style={{ animationDelay: `${index * 0.3}s` }}>{service.icon}</div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className={cardText}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Theme-Aware Colors */}
      <section className={`py-24 ${bgColor} relative transition-all duration-1000 ease-in-out overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 h-64 rounded-lg shadow-2xl hover:shadow-blue-500/60 transition-all duration-800 ease-in-out relative overflow-hidden animate-gradient-x">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                >
                  <source src="/videos/box-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 animate-pulse"></div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 animate-fade-in-up transition-all duration-1000 ease-out">
              <h2 className="text-3xl md:text-4xl font-light mb-8">Why CannumX?</h2>
              <p className={`leading-relaxed mb-8 transition-all duration-500 ease-in-out ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Built by founders, for founders. Transparent pricing, honest support, and automation that scales with you.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 hover:scale-110 transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Link Section (Replaced Testimonials) */}
      <section className={`py-24 ${sectionBg} relative transition-all duration-1000 ease-in-out`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-100/20 to-purple-100/20'} transition-opacity duration-1000 ease-in-out`}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">Look at the services we offer</h2>
          <div className="text-center">
            <Link
              href="/services"
              className={`px-8 py-4 rounded-full font-medium transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white text-center relative transition-all duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-1000 ease-in-out"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-8 animate-fade-in transition-all duration-1000 ease-out">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.3s' }}>Join leading companies using CannumX for AI-powered success.</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-medium hover:bg-blue-700 hover:scale-110 transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60 inline-block"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  )
}




