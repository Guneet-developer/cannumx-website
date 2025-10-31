'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/login')
  }, [session, status, router])

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/20 to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Welcome to Your Dashboard, {session?.user?.name}!</h1>
        <p className="text-gray-300">Access your appointments, projects, and more.</p>
      </div>
    </div>
  )
}
