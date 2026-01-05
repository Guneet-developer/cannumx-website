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
      {/* Aurora Background */}
      <div className="aurora-bg fixed inset-0 z-0 pointer-events-none"></div>
      <style jsx global>{`
        .aurora-bg {
          background: linear-gradient(-45deg, #0f0f23, #1e1e3f, #2d1b69, #3b1c7a, #4a1d8c, #5a1e9e, #6a1fb0, #7a20c2, #8a21d4, #9a22e6, #aa23f8, #ba24fa, #ca25fc, #da26fe, #ea27ff, #fa28ff, #ff29ff, #ff2aff, #ff2bff, #ff2cff, #ff2dff, #ff2eff, #ff2fff, #ff30ff, #ff31ff, #ff32ff, #ff33ff, #ff34ff, #ff35ff, #ff36ff, #ff37ff, #ff38ff, #ff39ff, #ff3aff, #ff3bff, #ff3cff, #ff3dff, #ff3eff, #ff3fff, #ff40ff, #ff41ff, #ff42ff, #ff43ff, #ff44ff, #ff45ff, #ff46ff, #ff47ff, #ff48ff, #ff49ff, #ff4aff, #ff4bff, #ff4cff, #ff4dff, #ff4eff, #ff4fff, #ff50ff, #ff51ff, #ff52ff, #ff53ff, #ff54ff, #ff55ff, #ff56ff, #ff57ff, #ff58ff, #ff59ff, #ff5aff, #ff5bff, #ff5cff, #ff5dff, #ff5eff, #ff5fff, #ff60ff, #ff61ff, #ff62ff, #ff63ff, #ff64ff, #ff65ff, #ff66ff, #ff67ff, #ff68ff, #ff69ff, #ff6aff, #ff6bff, #ff6cff, #ff6dff, #ff6eff, #ff6fff, #ff70ff, #ff71ff, #ff72ff, #ff73ff, #ff74ff, #ff75ff, #ff76ff, #ff77ff, #ff78ff, #ff79ff, #ff7aff, #ff7bff, #ff7cff, #ff7dff, #ff7eff, #ff7fff, #ff80ff, #ff81ff, #ff82ff, #ff83ff, #ff84ff, #ff85ff, #ff86ff, #ff87ff, #ff88ff, #ff89ff, #ff8aff, #ff8bff, #ff8cff, #ff8dff, #ff8eff, #ff8fff, #ff90ff, #ff91ff, #ff92ff, #ff93ff, #ff94ff, #ff95ff, #ff96ff, #ff97ff, #ff98ff, #ff99ff, #ff9aff, #ff9bff, #ff9cff, #ff9dff, #ff9eff, #ff9fff, #ffa0ff, #ffa1ff, #ffa2ff, #ffa3ff, #ffa4ff, #ffa5ff, #ffa6ff, #ffa7ff, #ffa8ff, #ffa9ff, #ffaaff, #ffabff, #ffacff, #ffadff, #ffaeff, #ffafff, #ffb0ff, #ffb1ff, #ffb2ff, #ffb3ff, #ffb4ff, #ffb5ff, #ffb6ff, #ffb7ff, #ffb8ff, #ffb9ff, #ffbaff, #ffbbff, #ffbcff, #ffbdff, #ffbeff, #ffbfff, #ffc0ff, #ffc1ff, #ffc2ff, #ffc3ff, #ffc4ff, #ffc5ff, #ffc6ff, #ffc7ff, #ffc8ff, #ffc9ff, #ffcaff, #ffcbff, #ffccff, #ffcdff, #ffceff, #ffcfff, #ffd0ff, #ffd1ff, #ffd2ff, #ffd3ff, #ffd4ff, #ffd5ff, #ffd6ff, #ffd7ff, #ffd8ff, #ffd9ff, #ffdaff, #ffdbf, #ffdcf, #ffddf, #ffdef, #ffdff, #ffe0ff, #ffe1ff, #ffe2ff, #ffe3ff, #ffe4ff, #ffe5ff, #ffe6ff, #ffe7ff, #ffe8ff, #ffe9ff, #ffeaff, #ffebff, #ffecff, #ffedff, #ffeeff, #ffeff, #fff0ff, #fff1ff, #fff2ff, #fff3ff, #fff4ff, #fff5ff, #fff6ff, #fff7ff, #fff8ff, #fff9ff, #fffaff, #fffbff, #fffcf, #fffdf, #fffef, #fffff);
          background-size: 400% 400%;
          animation: aurora 20s ease infinite;
          opacity: 0.3;
          filter: blur(1px);
        }
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

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
            Elevate Your Business with CannumX
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