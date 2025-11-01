export default function Pricing() {
  const pricingPlans = [
    {
      title: 'Business Consultancy',
      price: '$50/hour',
      desc: 'Expert consultation to solve business problems, provide strategic guidance, and help with growth and scaling.',
      features: ['One-on-one meetings', 'Problem-solving sessions', 'Business strategy advice'],
    },
    {
      title: 'AI Consultancy',
      price: '$70/hour',
      desc: 'Specialized AI consulting to integrate modern technology, optimize operations, and stay ahead of trends.',
      features: ['AI implementation guidance', 'Technology awareness sessions', 'Custom AI solutions'],
    },
    {
      title: 'AI Automation One Month Plan',
      price: '$250/month',
      desc: 'Comprehensive AI automation package for one month, tailored to your business needs.',
      features: [
        'AI chatbot integration on site',
        'AI customer support for calling and WhatsApp and for site',
        'AI marketing and personalized email sending to customers',
        'AI consulting meeting 45 minutes every week',
        'E-commerce abandoned cart recovery and AI integration according to business needs',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/20 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-glow/10 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 text-white drop-shadow-2xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          Our Pricing Plans
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto">
          Choose the perfect plan to elevate your business with CannumX's premium services. Transparent pricing, exceptional results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-gray-800/20 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl border border-accent/20 hover:shadow-glow hover:scale-105 hover:rotate-1 transition-all duration-700 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent group-hover:text-glow transition-colors duration-300">{plan.title}</h2>
              <p className="text-3xl md:text-4xl font-extrabold mb-6 text-accent drop-shadow-lg">{plan.price}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{plan.desc}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="group-hover:text-gray-200 transition-colors duration-300">{feature}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-accent to-secondary text-primary font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-glow hover:scale-110 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent block text-center"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400 mb-4">Our agent will reach out to you personally and talk about everything. They will set up a meeting with us when you click "Get Started" on the pricing page.</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-glow to-secondary text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}