import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-primary to-secondary/10 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-glow/5 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-4">CannumX</h3>
            <p className="text-gray-300">Elevating businesses with AI-powered solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-accent transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">AI Consulting</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Automation</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">Website Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
            <p className="text-gray-300">Email: info.cannumx@gmail.com</p>
            <p className="text-gray-300">Phone: +91-9729069718</p>
          </div>
        </div>
        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 CannumX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}