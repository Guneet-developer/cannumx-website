export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-primary to-black py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-pink-500/20 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 text-white drop-shadow-lg animate-fade-in">About CannumX</h1>

        <section className="mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">About Us</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            CannumX is an AI automation agency founded by Guneet Taneja with Co-founder Akhil. We are a team of ambitious and obsessed people trying to help businesses adapt the new technology and solve their business problems. We are a team of people who are really advanced in AI, tech and business skills which are determined to help you and your business!
          </p>
        </section>

        <section className="mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How We Are Going to Help You</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            We are here to help you with all your business problems. We provide AI consulting, automation solutions, website development, marketing, and more. Our goal is to make your business more efficient and profitable using cutting-edge technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-accent">AI Consulting</h3>
              <p className="text-gray-300">Get expert advice on integrating AI into your operations for better decision-making and efficiency.</p>
            </div>
            <div className="p-6 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-accent">Automation Solutions</h3>
              <p className="text-gray-300">Automate repetitive tasks with AI tools to save time and reduce costs.</p>
            </div>
            <div className="p-6 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-accent">Website Development</h3>
              <p className="text-gray-300">Build modern, responsive websites tailored to your business needs.</p>
            </div>
            <div className="p-6 bg-primary/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-accent">Marketing & SEO</h3>
              <p className="text-gray-300">Enhance your online presence with AI-driven marketing and SEO strategies.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Our Mission</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Our mission is to empower businesses with AI technology, helping them stay ahead in a rapidly evolving digital world. We believe in innovation, quality, and delivering results that matter.
          </p>
        </section>

        <section className="animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Contact Us</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Ready to get started? Reach out to us for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent to-secondary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover-glow hover:scale-110 transition-all duration-500"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  )
}