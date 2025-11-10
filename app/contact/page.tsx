'use client'

import { useState } from 'react'
import { useTheme } from '../../components/ThemeContext'
import Link from 'next/link'

export default function Contact() {
  const { theme } = useTheme()
  const videoSrc = theme === 'dark' ? '/videos/contact-bg.mp4' : '/videos/contact-bg-light.mp4'
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  const formBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
  const formBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
  const formText = theme === 'dark' ? 'text-white' : 'text-black'
  const placeholderColor = theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-600'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    company: '',
    website: '',
    phone: '',
    companySize: '',
    revenue: '',
    help: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const response = await fetch('https://formspree.io/f/mdkynlbj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setStatus('Message sent!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          role: '',
          company: '',
          website: '',
          phone: '',
          companySize: '',
          revenue: '',
          help: ''
        })
      } else {
        setStatus('Error sending message.')
      }
    } catch (error) {
      setStatus('Error sending message.')
    }
  }

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} py-12 relative transition-all duration-1000 ease-in-out`}>
      <video
        key={theme}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/5' : 'bg-white/5'} transition-all duration-1000 ease-out`}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-12 pt-8 animate-fade-in transition-all duration-1000 ease-out">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="animate-fade-in-up transition-all duration-1000 ease-out">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name <span className="text-red-500" title="Compulsory field">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name <span className="text-gray-500">(Optional)</span></label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500" title="Compulsory field">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Role with Organisation <span className="text-red-500" title="Compulsory field">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company or Business Name <span className="text-red-500" title="Compulsory field">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Website <span className="text-gray-500">(Optional)</span></label>
                  <input
                    type="url"
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-500" title="Compulsory field">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Size <span className="text-red-500" title="Compulsory field">*</span>
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                    required
                  >
                    <option value="">Select Company Size</option>
                    <option value="Just me">Just me</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Annual Revenue <span className="text-gray-500">(Optional)</span></label>
                <input
                  type="text"
                  name="revenue"
                  placeholder="Annual Revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  How Can We Help You? <span className="text-red-500" title="Compulsory field">*</span>
                </label>
                <textarea
                  name="help"
                  placeholder="How can we help you?"
                  value={formData.help}
                  onChange={handleChange}
                  className={`w-full p-3 ${formBg} border ${formBorder} rounded-lg ${formText} ${placeholderColor} focus:border-blue-500 transition-all duration-500 ease-in-out`}
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 text-center animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.5s' }}>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>or</p>
              <Link
                href="https://calendly.com/info-cannumx/30min"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call with Calendly
              </Link>
            </div>
            {status && <p className={`mt-4 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{status}</p>}
          </div>

          {/* Contact Information Section */}
          <div className="animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-light mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src={`/images/${theme === 'dark' ? 'mail.png' : 'mail-light.png'}`}
                  alt="Email"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">Email</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>info.cannum@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src="/images/phone.png"
                  alt="Phone"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>+1-234-567-8900</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src={`/images/${theme === 'dark' ? 'youtube.png' : 'youtube-light.png'}`}
                  alt="YouTube"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">YouTube</p>
                  <Link href="https://youtube.com/@fluxo.cannumx?si=PshKZDEoTf8iezgK" className="hover:underline text-blue-500">Visit Channel</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src={`/images/${theme === 'dark' ? 'instagram.png' : 'instagram-light.png'}`}
                  alt="Instagram"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">Instagram</p>
                  <Link href="https://www.instagram.com/fluxor.grow?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:underline text-blue-500">Follow Us</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src={`/images/${theme === 'dark' ? 'linkdin.png' : 'linkdin-light.png'}`}
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <Link href="https://linkedin.com" className="hover:underline text-blue-500">Connect</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-opacity-50 rounded-lg transition-all duration-300 hover:bg-opacity-75">
                <img
                  src={`/images/${theme === 'dark' ? 'x.png' : 'x-light.png'}`}
                  alt="X (Twitter)"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium">X (Twitter)</p>
                  <Link href="https://x.com/CannumX?t=a4TZyle2WVtCgH6Ytf69Pw&s=09" className="hover:underline text-blue-500">Follow</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}