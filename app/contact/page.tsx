'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/xnnodwzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Try again.')
      }
    } catch (error) {
      setStatus('Error sending message.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/20 to-black py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-10 text-white drop-shadow-2xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          Get In Touch
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
          Ready to revolutionize your business? Let's connect and build the future together.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-white/10 to-gray-800/20 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl border border-accent/20 hover:shadow-glow transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20"
                  placeholder="+1 1234567890"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:bg-white/20 resize-none"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-secondary text-primary font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Send Message
              </button>
              {status && <p className="text-center text-accent mt-4">{status}</p>}
            </form>
          </div>
        </div>

        {/* OR Section with Calendly */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">OR</p>
          <Link
            href="https://calendly.com/sentienyx/30min"
            className="inline-block bg-gradient-to-r from-secondary to-glow text-white px-8 py-4 rounded-full font-bold shadow-lg hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Appointment with Calendly
          </Link>
        </div>
      </div>
    </div>
  )
}