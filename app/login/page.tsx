'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

    if (session) {
      router.push('/dashboard')
    }
  }, [session, router])

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>

  const gradientStyle = {
    background: `linear-gradient(135deg, #0f172a ${scrollY * 0.1}%, #581c87 ${scrollY * 0.2}%, #0e7490 ${scrollY * 0.3}%, #000000 ${scrollY * 0.4}%)`,
  }

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden scroll-smooth" style={gradientStyle}>
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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-glow bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Welcome to CannumX
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sign in to access your dashboard or sign up to get started.
          </p>
          {!session ? (
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => signIn('google')}
                className="w-full bg-gradient-to-r from-accent to-secondary text-primary px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent animate-pulse"
              >
                Login with Google
              </button>
              <button
                onClick={() => signIn('google')}
                className="w-full bg-gradient-to-r from-secondary to-glow text-white px-6 py-4 rounded-full font-bold shadow-2xl hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary animate-pulse"
              >
                Sign Up with Google
              </button>
            </div>
          ) : (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-white mb-4">Welcome, {session.user?.name}!</p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:scale-110 transition-all duration-300"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}