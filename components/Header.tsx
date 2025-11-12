'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeContext'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
  const bgDropdown = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu)
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-out ${isScrolled ? (theme === 'dark' ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/20' : 'bg-white/95 backdrop-blur-xl border-b border-gray-300 shadow-2xl shadow-gray-500/20') : 'bg-transparent border-transparent shadow-none'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="transition-all duration-700 ease-in-out drop-shadow-lg">
          <Image src="/images/logo.png" alt="CannumX" width={120} height={40} className="h-10 w-auto bg-transparent" />
        </Link>
        <ul className={`${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white dark:bg-gray-900 p-4 space-y-4 md:space-y-0 md:flex-row md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:p-0' : 'hidden md:flex space-x-8'}`}>
          <li><Link href="/" className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${textColor} hover:text-blue-400`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>

          {/* Company Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown('company')} className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${textColor} hover:text-blue-400`}>
              Company
            </button>
            {dropdownOpen === 'company' && (
              <div className={`absolute top-full mt-2 ${bgDropdown} border rounded-lg shadow-xl p-2 min-w-48 z-50`}>
                <Link href="/about" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>About</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Services</Link>
                <Link href="/contact" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Contact</Link>
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown('resources')} className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${textColor} hover:text-blue-400`}>
              Resources
            </button>
            {dropdownOpen === 'resources' && (
              <div className={`absolute top-full mt-2 ${bgDropdown} border rounded-lg shadow-xl p-2 min-w-48 z-50`}>
                <Link href="/faq" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>FAQ</Link>
              </div>
            )}
          </li>

          {/* Contact Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown('contact')} className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${textColor} hover:text-blue-400`}>
              Contact
            </button>
            {dropdownOpen === 'contact' && (
              <div className={`absolute top-full mt-2 ${bgDropdown} border rounded-lg shadow-xl p-2 min-w-48 z-50`}>
                <a href="mailto:info.cannum@gmail.com" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Email</a>
                <a href="tel:+12345678900" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Phone</a>
                <a href="https://instagram.com" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Instagram</a>
                <a href="https://youtube.com" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>YouTube</a>
                <a href="https://x.com" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>X (Twitter)</a>
                <a href="https://linkedin.com" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>LinkedIn</a>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown('services')} className={`transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl ${textColor} hover:text-blue-400`}>
              Services
            </button>
            {dropdownOpen === 'services' && (
              <div className={`absolute top-full mt-2 ${bgDropdown} border rounded-lg shadow-xl p-2 min-w-64 max-h-64 overflow-y-auto z-50`}>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Web Development</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>AI & Automation</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>SaaS & Product Development</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>App Development</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Branding & Creative</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Digital Marketing & Growth</Link>
                <Link href="/services" className={`block px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`} onClick={() => { setDropdownOpen(null); setIsMenuOpen(false); }}>Cloud, Security & Tech Infrastructure</Link>
              </div>
            )}
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button onClick={() => setThemeMenuOpen(!themeMenuOpen)} className={`${textColor} transition-all duration-500 ease-in-out hover:scale-110`}>
              🌙
            </button>
            {themeMenuOpen && (
              <div className={`absolute right-0 mt-2 ${bgDropdown} border rounded-lg shadow-xl p-2 z-50`}>
                <button onClick={() => { setTheme('dark'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`}>Dark</button>
                <button onClick={() => { setTheme('light'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`}>Light</button>
                <button onClick={() => { setTheme('system'); setThemeMenuOpen(false); }} className={`block w-full text-left px-4 py-2 ${textColor} ${hoverBg} transition-all duration-300 ease-in-out`}>System</button>
              </div>
            )}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${textColor} transition-all duration-500 ease-in-out hover:scale-110`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}