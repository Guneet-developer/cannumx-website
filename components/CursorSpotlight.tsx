'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeContext'

export default function CursorSpotlight() {
  const { theme } = useTheme()
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [velocity, setVelocity] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isImportantHover, setIsImportantHover] = useState(false)  // New: Flag for important words (h1)
  const lastMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if ('ontouchstart' in window) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const vx = x - lastMousePos.current.x
      const vy = y - lastMousePos.current.y
      const speed = Math.sqrt(vx * vx + vy * vy)

      setMousePosition({ x, y })
      setVelocity(speed)
      setIsVisible(true)
      lastMousePos.current = { x, y }

      // Check for hover on interactive elements
      const target = e.target as HTMLElement
      const isInteractive = target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest('h1, h2, h3, h4, h5, h6')
      setIsHovering(!!isInteractive)

      // New: Check for important words (h1 elements)
      const isImportant = target?.tagName === 'H1' || target?.closest('h1')
      setIsImportantHover(!!isImportant)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
      setIsImportantHover(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Theme-aware colors: Clean and simple
  const cursorColor = theme === 'dark' ? '#ffffff' : '#3b82f6' // White in dark, blue in light
  const trailColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.3)'
  const spotlightColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.08)'

  // Subtle scaling based on velocity, hover, and important words
  const baseScale = 1 + velocity * 0.005
  const hoverScale = isHovering ? 0.3 : 0
  const importantScale = isImportantHover ? 0.5 : 0  // Extra scale for important words
  const scale = Math.min(baseScale + hoverScale + importantScale, 2)

  const glowSize = Math.min(20 + velocity * 0.1 + (isImportantHover ? 10 : 0), 50)  // Slightly bigger glow on important words

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} rounded-full`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: '8px',
          height: '8px',
          backgroundColor: cursorColor,
          boxShadow: `0 0 ${glowSize}px ${cursorColor}`,
        }}
      ></div>

      {/* Subtle Trailing Ring */}
      <div
        ref={trailRef}
        className={`fixed pointer-events-none z-[9998] transition-all duration-400 ease-out ${isVisible ? 'opacity-60' : 'opacity-0'} rounded-full border`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${scale * 1.2})`,
          width: '16px',
          height: '16px',
          borderColor: trailColor,
          borderWidth: '1px',
        }}
      ></div>

      {/* Soft Spotlight Glow */}
      <div
        ref={spotlightRef}
        className={`fixed pointer-events-none z-[9997] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      ></div>
    </>
  )
}