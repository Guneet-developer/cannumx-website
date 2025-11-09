'use client'

import { useState } from 'react'
import { useTheme } from '../../components/ThemeContext'

const faqs = [
  { question: 'Who are we?', answer: 'CannumX is a team of builders, dreamers, and problem solvers focused on AI, automation, and technology.' },
  { question: 'What does we do?', answer: 'We build systems, products, and automations that multiply human potential through AI and tech.' },
  { question: 'Who are our typical clients?', answer: 'Startups, small businesses, and enterprises looking to scale with AI and automation.' },
  { question: 'How much does it cost to build an AI solution with CannumX?', answer: 'Costs vary based on project scope; contact us for a free quote.' },
  { question: 'How long does a typical project take?', answer: 'Depends on complexity, but most projects take 4-12 weeks.' },
  { question: 'What technology we use?', answer: 'We use cutting-edge tech like AI models, cloud platforms (AWS, GCP), and modern frameworks.' },
  { question: 'Can we integrate our services with clients existing systems?', answer: 'Yes, we specialize in seamless integrations.' },
  { question: 'What\'s our approach to data security?', answer: 'We prioritize security with encryption, compliance, and best practices.' },
  { question: 'Do we provide consultation to the businesses and their teams and how?', answer: 'Yes, we offer free strategy calls and ongoing consultation.' },
  { question: 'Why us?', answer: 'We focus on execution, innovation, and long-term partnerships.' }
]

export default function FAQ() {
  const { theme } = useTheme()
  const [search, setSearch] = useState('')
  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()))

  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-black'
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white'
  const cardText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} py-24 transition-all duration-1000 ease-in-out`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">Frequently Asked Questions</h1>
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full p-4 ${cardBg} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} rounded-lg ${textColor} ${theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-600'} focus:border-blue-500 transition-all duration-500 ease-in-out`}
          />
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className={`${cardBg} p-6 rounded-lg shadow-lg`}>
              <h3 className="text-xl font-medium mb-4">{faq.question}</h3>
              <p className={cardText}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}