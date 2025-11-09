'use client'

import { useTheme } from '../../components/ThemeContext'
import Link from 'next/link'

export default function About() {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  const headingColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} py-24 relative transition-all duration-1000 ease-in-out`}>
      <video
        key={theme}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
      >
        <source src={`/videos/about-bg${theme === 'dark' ? '' : '-light'}.mp4`} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/5' : 'bg-white/5'} transition-all duration-1000 ease-out`}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">About CannumX</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="animate-fade-in-up transition-all duration-1000 ease-out">
            <p className={`${headingColor} leading-relaxed text-lg`}>
              CannumX was born from obsession — not luck. An obsession with building, with creating impact, and with pushing boundaries of what’s possible through AI and technology.
              <br /><br />
              We’re not another agency doing copy-paste work. We’re a team of young builders, dreamers, and problem solvers who believe in speed, precision, and results. Our mission is simple — to build systems, products, and automations that multiply human potential.
              <br /><br />
              At the core of CannumX lies a mindset: “If it can be built, we’ll build it — smarter, faster, and better.”
              <br /><br />
              We don’t care about titles or trends. We care about execution, innovation, and domination.
              <br /><br />
              Our founder and team share a common philosophy — that real success isn’t built on comfort, but on consistency, clarity, and courage.
              <br /><br />
              We’ve spent years learning how the digital world truly works — from AI and automation to branding, communication, and human psychology.
              <br /><br />
              And that’s why every project we touch reflects both — logic and emotion, precision and creativity.
              <br /><br />
              CannumX is where ambition meets engineering. Where ideas become systems. Where small startups turn into unstoppable brands.
            </p>
          </div>
          <div className="animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-light mb-8">⚡ What We Stand For</h2>
            <ul className={`${headingColor} list-disc list-inside space-y-2`}>
              <li>Relentless innovation</li>
              <li>Brutal honesty & clarity</li>
              <li>Execution speed over perfection</li>
              <li>Long-term partnerships over one-time gigs</li>
              <li>Turning ideas into automated systems that scale</li>
            </ul>
          </div>
          <div className="animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-light mb-8">💬 In simple words:</h2>
            <p className={`${headingColor} leading-relaxed`}>
              We’re not here to “sell services.” We’re here to build legacies — one business, one system, one project at a time.
            </p>
          </div>
          <div className="animate-fade-in-up transition-all duration-1000 ease-out" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-3xl font-light mb-8">🧩 Founder’s Note</h2>
            <p className={`${headingColor} leading-relaxed`}>
              I started CannumX because I was tired — tired of seeing mediocre agencies with no real vision, tired of watching businesses struggle because of outdated systems and lazy execution.
              <br /><br />
              I wanted to build something different — something that moves fast, thinks ahead, and builds things that actually matter.
              <br /><br />
              To me, CannumX isn’t just a company — it’s a reflection of an obsession. An obsession with excellence, precision, and results.
              <br /><br />
              I believe real success doesn’t come from comfort — it comes from discipline, hunger, and clarity of purpose.
              <br /><br />
              We live in a world that rewards the bold — the ones who take action faster than anyone else. And that’s exactly what we do here.
              <br /><br />
              We don’t wait for the future — we build it.
              <br /><br />
              Every line of code, every product, every strategy we create comes from one thought: “How can we make this more efficient, more intelligent, more powerful?”
              <br /><br />
              I’ve always believed that if something can be done, it can be done better. That’s the CannumX mindset.
              <br /><br />
              We’re not here for fame. We’re here for impact — to build things that make people say, “How the hell did they do that?”
              <br /><br />
              This is just the start. The empire we’re building won’t be built on hype — it’ll be built on results, innovation, and unmatched speed.
              <br /><br />
              — Guneet, Founder & CEO, CannumX
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-light text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img src="/images/guneet.png" alt="Guneet" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Guneet</h3>
              <p className={`${headingColor} mb-4`}>Founder & CEO</p>
              <Link href="https://linkedin.com" className="inline-flex items-center space-x-2 hover:underline text-blue-500">
                <img src="/images/linkdin-about.png" alt="LinkedIn" className="w-6 h-6" />
                <span>LinkedIn</span>
              </Link>
            </div>
            <div className="text-center">
              <img src="/images/akhil.png" alt="Akhil" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Akhil</h3>
              <p className={`${headingColor} mb-4`}>COO & Co-founder</p>
              <Link href="https://linkedin.com" className="inline-flex items-center space-x-2 hover:underline text-blue-500">
                <img src="/images/linkdin-about.png" alt="LinkedIn" className="w-6 h-6" />
                <span>LinkedIn</span>
              </Link>
            </div>
            <div className="text-center">
              <img src="/images/taras.png" alt="Taras" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Taras</h3>
              <p className={`${headingColor} mb-4`}>CMO & Co-founder</p>
              <Link href="https://linkedin.com" className="inline-flex items-center space-x-2 hover:underline text-blue-500">
                <img src="/images/linkdin-about.png" alt="LinkedIn" className="w-6 h-6" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}