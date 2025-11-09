'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeContext'
import { usePathname } from 'next/navigation' // Add this import

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const pathname = usePathname() // Get current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  const activeColor = 'text-blue-400' // Color for active link

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-out ${isScrolled ? (theme === 'dark' ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/20' : 'bg-white/95 backdrop-blur-xl border-b border-gray-300 shadow-2xl shadow-gray-500/20') : 'bg-transparent border-transparent shadow-none'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-light transition-all duration-700 ease-in-out ${textColor} drop-shadow-lg`}>CannumX</Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${pathname === '/' ? activeColor : textColor} hover:text-blue-400`}>Home</Link></li>
          <li><Link href="/services" className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${pathname === '/services' ? activeColor : textColor} hover:text-blue-400`}>Services</Link></li>
          <li><Link href="/about" className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${pathname === '/about' ? activeColor : textColor} hover:text-blue-400`}>About</Link></li>
          <li><Link href="/contact" className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${pathname === '/contact' ? activeColor : textColor} hover:text-blue-400`}>Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button onClick={() => setThemeMenuOpen(!themeMenuOpen)} className={`${textColor} transition-all duration-500 ease-in-out hover:scale-110`}>
              🌙
            </button>
            {themeMenuOpen && (
              <div className={`absolute right-0 mt-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-xl p-2`}>
                <button onClick={() => { setTheme('dark'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-all duration-300 ease-in-out`}>Dark</button>
                <button onClick={() => { setTheme('light'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-all duration-300 ease-in-out`}>Light</button>
                <button onClick={() => { setTheme('system'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-all duration-300 ease-in-out`}>System</button>
              </div>
            )}
          </div>
          <button className={`md:hidden ${textColor} transition-all duration-500 ease-in-out hover:scale-110`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}