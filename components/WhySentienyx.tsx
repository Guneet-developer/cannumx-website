export default function WhySentienyx() {
  return (
    <section className="bg-gradient-to-br from-navy via-black to-secondary/20 text-white py-20 relative slide-up-on-scroll">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Why Choose Sentienyx?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Enterprise-Trusted</h3>
            <p className="text-gray-300">Proven track record with leading enterprises worldwide, delivering scalable solutions.</p>
          </div>
          <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Futuristic Innovation</h3>
            <p className="text-gray-300">Cutting-edge AI technologies for the future of business, staying ahead of the curve.</p>
          </div>
          <div className="text-center p-8 bg-navy/50 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 hover-glow hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Premium Quality</h3>
            <p className="text-gray-300">Delivering excellence in every solution we provide, with a focus on value and results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}