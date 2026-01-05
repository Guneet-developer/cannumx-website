'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeContext'

export default function CursorSpotlight() {
  const { theme } = useTheme()
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Disable on touch devices for performance
    if ('ontouchstart' in window) return

    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Update positions immediately for smooth following
      setMousePosition({ x, y })
      setIsVisible(true)

      // Delayed trail for elegance
      setTimeout(() => setTrailPosition({ x, y }), 50)

      // Check for hover on interactive elements
      const target = e.target as HTMLElement
      const isInteractive = target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest('a, button, h1, h2, h3')
      setIsHovering(!!isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
    }

    // Throttle for performance (optional, but ensures 60fps)
    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => handleMouseMove(e))
    }

    window.addEventListener('mousemove', throttledMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  // Theme-aware colors
  const cursorColor = theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
  const trailColor = theme === 'dark' ? 'bg-blue-200' : 'bg-blue-400'
  const spotlightColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${cursorColor} rounded-full shadow-lg ${isHovering ? 'w-8 h-8 scale-125' : 'w-4 h-4'}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)', // Perfect centering for smooth follow
        }}
      ></div>

      {/* Trailing Ring */}
      <div
        ref={trailRef}
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${isVisible ? 'opacity-60' : 'opacity-0'} ${trailColor} rounded-full border-2 border-white/50 ${isHovering ? 'w-12 h-12' : 'w-6 h-6'}`}
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className={`fixed pointer-events-none z-[9997] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 80%)`,
          filter: 'blur(30px)',
        }}
      ></div>
    </>
  )
}