'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    { title: 'AI Consulting & Implementation', desc: 'Expert guidance on integrating AI into your business operations for maximum efficiency.', icon: '🤖' },
    { title: 'Business Problem Solving', desc: 'Consultation meetings to identify and resolve core business challenges.', icon: '💡' },
    { title: 'Automation Solutions', desc: 'Automate workflows, customer support, and services with cutting-edge AI tools.', icon: '⚙️' },
    { title: 'Website Development', desc: 'Build modern, responsive websites tailored to your business needs.', icon: '🌐' },
    { title: 'Marketing & SEO Optimization', desc: 'Enhance visibility with generative SEO, email campaigns, and WhatsApp marketing.', icon: '📈' },
    { title: 'Voice & Chat Bots', desc: 'Add intelligent AI bots to websites for seamless customer interactions.', icon: '💬' },
    { title: 'Technology Awareness Consulting', desc: 'Keep your business ahead with insights on modern tech trends.', icon: '🔍' },
    { title: 'Scalable Growth Strategies', desc: 'Help businesses grow and scale with data-driven solutions.', icon: '📊' },
    { title: 'Customer Support Automation', desc: 'Streamline support with AI-driven systems for better user experiences.', icon: '🎧' },
  ]

  const industries = [
    'E-commerce', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Technology'
  ]

  const testimonials = [
    { name: 'John Doe', role: 'CEO, TechCorp', quote: 'CannumX transformed our operations with AI. Unmatched quality!' },
    { name: 'Jane Smith', role: 'Founder, StartupX', quote: 'Their automation solutions saved us time and money. Highly recommend!' },
  ]

  // Dynamic gradient based on scroll (darker colors)
  const gradientStyle = {
    background: `linear-gradient(135deg, #0f172a ${scrollY * 0.1}%, #581c87 ${scrollY * 0.2}%, #0e7490 ${scrollY * 0.3}%, #000000 ${scrollY * 0.4}%)`,
  }

  return (
    <div className={`bg-primary text-white min-h-screen transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Darker Scrolling Gradient and Particles */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={gradientStyle}>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-glow bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Elevate Your Business with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-300 drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            CannumX: The ultimate business agency for AI consulting, automation, marketing, and growth. Transform your operations with cutting-edge technology and expert strategies.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-secondary text-primary px-8 md:px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent animate-pulse"
            >
              Get Started
            </Link>
            <Link
              href="https://calendly.com/cannumx"
              className="bg-gradient-to-r from-secondary to-glow text-white px-8 md:px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Effects */}
      <section className="bg-gradient-to-br from-black via-primary to-secondary/10 py-16 md:py-24 relative animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-glow/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Our Comprehensive Business Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-gradient-to-br from-primary/50 to-secondary/20 backdrop-blur-md border border-accent/20 rounded-3xl shadow-xl hover-glow hover:scale-105 hover:rotate-1 transition-all duration-700 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-slow">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent group-hover:text-glow transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-primary via-black to-secondary/20 py-16 md:py-20 relative animate-on-scroll">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-accent font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CannumX Section */}
      <section className="bg-gradient-to-br from-primary via-black to-secondary/20 py-16 md:py-20 relative animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Why Choose CannumX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Enterprise-Trusted</h3>
              <p className="text-gray-300">Proven track record with leading enterprises worldwide, delivering scalable solutions.</p>
            </div>
            <div className="text-center p-6 md:p-8 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Futuristic Innovation</h3>
              <p className="text-gray-300">Cutting-edge AI technologies for the future of business, staying ahead of the curve.</p>
            </div>
            <div className="text-center p-6 md:p-8 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 hover:rotate-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent">Premium Quality</h3>
              <p className="text-gray-300">Delivering excellence in every solution we provide, with a focus on value and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gradient-to-br from-black via-primary to-accent/10 py-16 md:py-20 relative animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-gradient-to-br from-primary/50 to-secondary/20 border border-accent/20 rounded-2xl text-center shadow-lg hover-glow hover:scale-110 hover:bg-gradient-to-br hover:from-accent/20 hover:to-glow/20 hover:text-white transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
