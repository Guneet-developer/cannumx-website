export default function ServicesSection() {
  const services = [
    { title: 'AI Consulting & Implementation', desc: 'Expert guidance on integrating AI into your business operations for maximum efficiency.' },
    { title: 'Business Problem Solving', desc: 'Consultation meetings to identify and resolve core business challenges.' },
    { title: 'Automation Solutions', desc: 'Automate workflows, customer support, and services with cutting-edge AI tools.' },
    { title: 'Website Development', desc: 'Build modern, responsive websites tailored to your business needs.' },
    { title: 'Marketing & SEO Optimization', desc: 'Enhance visibility with generative SEO, email campaigns, and WhatsApp marketing.' },
    { title: 'Voice & Chat Bots', desc: 'Add intelligent AI bots to websites for seamless customer interactions.' },
    { title: 'Technology Awareness Consulting', desc: 'Keep your business ahead with insights on modern tech trends.' },
    { title: 'Scalable Growth Strategies', desc: 'Help businesses grow and scale with data-driven solutions.' },
    { title: 'Customer Support Automation', desc: 'Streamline support with AI-driven systems for better user experiences.' },
  ]

  return (
    <section className="bg-gradient-to-br from-black via-navy to-secondary/10 text-white py-24 relative fade-on-scroll">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-glow/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">Our Comprehensive Business Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-navy/50 to-secondary/20 backdrop-blur-md border border-accent/20 rounded-3xl shadow-xl hover-glow hover:scale-105 transition-all duration-700 group"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent group-hover:text-glow transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}