export default function IndustriesGrid() {
  const industries = [
    'E-commerce',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Technology',
  ]

  return (
    <section className="bg-gradient-to-br from-black via-navy to-accent/10 text-white py-20 relative fade-on-scroll">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-glow/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-navy/50 to-secondary/20 border border-accent/20 rounded-2xl text-center shadow-lg hover-glow hover:scale-110 hover:bg-gradient-to-br hover:from-accent/20 hover:to-glow/20 hover:text-white transition-all duration-500 cursor-pointer"
            >
              <span className="font-semibold">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}