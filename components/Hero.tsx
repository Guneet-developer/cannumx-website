import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy via-secondary/20 to-black text-white py-40 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)]"></div>
      <div className="absolute top-10 left-10 particle"></div>
      <div className="absolute top-20 right-20 particle" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-4 text-center relative z-10 fade-on-scroll">
        <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-glow bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          Elevate Your Business with AI
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300 drop-shadow-lg leading-relaxed slide-up-on-scroll">
          Sentienyx: The ultimate business agency for AI consulting, automation, marketing, and growth. Transform your operations with cutting-edge technology and expert strategies.
        </p>
        <div className="flex justify-center space-x-6 slide-up-on-scroll">
          <Link
            href="/contact"
            className="btn-neon text-navy px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Get Started
          </Link>
          <Link
            href="https://calendly.com/sentienyx"
            className="bg-gradient-to-r from-secondary to-glow text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}