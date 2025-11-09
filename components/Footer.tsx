'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
  }, [])

  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} text-${theme === 'dark' ? 'white' : 'black'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="font-medium mb-4">CannumX</h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Building the future with AI and automation.</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>About</Link></li>
              <li><Link href="/contact" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Contact</Link></li>
              <li><Link href="/services" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Services</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="mailto:info.cannum@gmail.com" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Email</Link></li>
              <li><Link href="tel:+12345678900" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Phone</Link></li>
              <li><Link href="https://instagram.com" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>Instagram</Link></li>
              <li><Link href="https://youtube.com" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>YouTube</Link></li>
              <li><Link href="https://x.com" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>X (Twitter)</Link></li>
              <li><Link href="https://linkedin.com" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>© 2026 CannumX. All rights reserved. Made with ❤️ by CannumX</p>
        </div>
      </div>
    </footer>
  )
}