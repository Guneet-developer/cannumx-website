'use client'

import { useState } from 'react'

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
      const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
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
    <div className="min-h-screen bg-gradient-to-br from-navy via-secondary/20 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)] opacity-50"></div>
      <div className="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-glow rounded-full animate-bounce"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-6xl font-bold text-center mb-10 text-white drop-shadow-2xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          Get In Touch
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to revolutionize your business? Let's connect and build the future together.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-gray-800/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-accent/20 hover:shadow-glow transition-all duration-500">
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
                className="w-full bg-gradient-to-r from-accent to-secondary text-navy font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Send Message
              </button>
              {status && <p className="text-center text-accent mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}