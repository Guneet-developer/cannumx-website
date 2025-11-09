'use client'

import { useState } from 'react'
import { useTheme } from '@/components/ThemeContext'
import Link from 'next/link'


const services = [
  {
    id: 'web-development',
    title: '🖥️ Web Development',
    description: 'Modern, responsive, high-performance websites.',
    details: [
      { title: 'Custom Website Design & Development', desc: 'Beautifully crafted, lightning-fast websites tailored to your brand.' },
      { title: 'Landing Page Development (for Ads / Marketing)', desc: 'High-converting pages that drive action from ads and campaigns.' },
      { title: 'E-Commerce Websites (Shopify, WooCommerce, Custom)', desc: 'Secure, scalable online stores with seamless shopping experiences.' },
      { title: 'Portfolio & Personal Branding Sites', desc: 'Showcase your work with elegant, professional designs.' },
      { title: 'Web Portals and Dashboards', desc: 'Interactive platforms for data management and user engagement.' },
      { title: 'Progressive Web Apps (PWAs)', desc: 'App-like web experiences with offline capabilities.' },
      { title: 'Website Redesign & Optimization', desc: 'Revamp existing sites for better speed, UX, and conversions.' },
      { title: 'API Integration & Backend Development', desc: 'Seamless data flow and robust server-side functionality.' },
      { title: 'Multi-language / Multi-region Websites', desc: 'Global websites with localization and regional adaptations.' },
      { title: 'Web Maintenance & Support', desc: 'Ongoing updates, security patches, and technical assistance.' }
    ]
  },
  {
    id: 'ai-automation',
    title: '🧠 AI & Automation',
    description: 'Intelligent systems that save time, money, and manpower.',
    details: [
      { title: 'AI Chatbots & Virtual Assistants', desc: '24/7 customer support with intelligent responses.' },
      { title: 'AI Video Generation (Auto-Editing, Script-to-Video Tools)', desc: 'Create engaging videos from scripts with AI automation.' },
      { title: 'Workflow Automation (CRM, Marketing, HR)', desc: 'Streamline business processes across departments.' },
      { title: 'Data Analysis & AI Insights Dashboards', desc: 'Turn raw data into actionable insights with AI.' },
      { title: 'Machine Learning Model Development', desc: 'Custom ML models for predictive and analytical tasks.' },
      { title: 'Voice Assistants & Voice Command Systems', desc: 'Hands-free interaction with voice-enabled AI.' },
      { title: 'AI-Powered Email or Chat Automation', desc: 'Smart, personalized communication automation.' },
      { title: 'Image & Video Recognition Solutions', desc: 'Advanced media processing and recognition.' },
      { title: 'Predictive Analytics Tools', desc: 'Forecast trends and outcomes with data-driven predictions.' },
      { title: 'AI Integration with existing business tools (Slack, Notion, Google Sheets, etc.)', desc: 'Enhance productivity by integrating AI into your workflows.' }
    ]
  },
  {
    id: 'saas-product',
    title: '🛒 SaaS & Product Development',
    description: 'Build your own software business with our team.',
    details: [
      { title: 'Full SaaS Product Development (from idea to deployment)', desc: 'End-to-end SaaS solutions from concept to launch.' },
      { title: 'MVP Development for Startups', desc: 'Quick, functional prototypes to validate ideas.' },
      { title: 'Dashboard Design & Admin Panels', desc: 'Intuitive interfaces for management and analytics.' },
      { title: 'Subscription Billing & Payment Integration', desc: 'Seamless monetization with secure payment systems.' },
      { title: 'Multi-Tenant Architecture Setup', desc: 'Scalable systems for multiple users or clients.' },
      { title: 'Custom CRM / ERP Systems', desc: 'Tailored business management and resource planning.' },
      { title: 'API Development & Integration', desc: 'Connect systems with robust, secure APIs.' },
      { title: 'Scalable Cloud Infrastructure (AWS, Azure, GCP)', desc: 'Reliable, high-performance cloud hosting.' },
      { title: 'Product Maintenance & Feature Scaling', desc: 'Ongoing support and growth for your product.' }
    ]
  },
  {
    id: 'app-development',
    title: '📱 App Development',
    description: 'World-class mobile experiences for iOS, Android & Web.',
    details: [
      { title: 'Android & iOS App Development', desc: 'Native apps optimized for performance and user experience.' },
      { title: 'Cross-Platform App Development (React Native / Flutter)', desc: 'Cost-effective apps that work on multiple platforms.' },
      { title: 'App UI/UX Design', desc: 'Engaging, user-friendly interfaces for mobile apps.' },
      { title: 'API & Backend Development', desc: 'Robust backends to support app functionality.' },
      { title: 'App Store Optimization', desc: 'Increase visibility and downloads on app stores.' },
      { title: 'App Automation (AI-based notifications, smart recommendations)', desc: 'Intelligent features for personalized user experiences.' },
      { title: 'Integration with AI models (voice, image, personalization, etc.)', desc: 'Advanced AI capabilities in your apps.' }
    ]
  },
  {
    id: 'branding-creative',
    title: '🎨 Branding & Creative',
    description: 'Build a brand that people remember.',
    details: [
      { title: 'Logo & Visual Identity Design', desc: 'Unique logos and brand visuals that stand out.' },
      { title: 'Brand Strategy & Positioning', desc: 'Develop a strong market presence and identity.' },
      { title: 'UI/UX Design for Web & Mobile', desc: 'Seamless, intuitive designs for digital platforms.' },
      { title: 'Social Media Content Design', desc: 'Engaging visuals for social media campaigns.' },
      { title: 'Ad Creatives (Static, Carousel, Video)', desc: 'Compelling ads that drive engagement.' },
      { title: 'Copywriting & Brand Voice Development', desc: 'Consistent, impactful messaging.' },
      { title: 'Pitch Deck & Investor Presentation Design', desc: 'Professional presentations to attract investors.' }
    ]
  },
  {
    id: 'digital-marketing',
    title: '🚀 Digital Marketing & Growth',
    description: 'Scale your business with performance and precision.',
    details: [
      { title: 'SEO (Search Engine Optimization)', desc: 'Improve search rankings and organic traffic.' },
      { title: 'Google Ads & Meta Ads Setup', desc: 'Targeted advertising for maximum ROI.' },
      { title: 'Performance Marketing Campaigns', desc: 'Data-driven campaigns that deliver results.' },
      { title: 'Social Media Strategy & Management', desc: 'Build communities and engage audiences.' },
      { title: 'Email Marketing Automation', desc: 'Nurture leads with automated email sequences.' },
      { title: 'Influencer Marketing Strategy', desc: 'Leverage influencers for brand promotion.' },
      { title: 'Conversion Rate Optimization', desc: 'Boost conversions with optimized strategies.' },
      { title: 'Content Strategy & Blogs', desc: 'Create valuable content to attract and retain users.' },
      { title: 'Analytics & Reporting', desc: 'Track performance with detailed insights.' }
    ]
  },
  {
    id: 'cloud-security',
    title: '☁️ Cloud, Security & Tech Infrastructure',
    description: 'Scalable, secure, enterprise-grade systems.',
    details: [
      { title: 'Cloud Migration & Deployment', desc: 'Seamlessly move to cloud infrastructure.' },
      { title: 'DevOps Setup (CI/CD pipelines, Docker, Kubernetes)', desc: 'Efficient development and deployment processes.' },
      { title: 'Website & App Performance Optimization', desc: 'Enhance speed, reliability, and user experience.' },
      { title: 'Cybersecurity & Data Protection', desc: 'Protect your assets with advanced security measures.' },
      { title: 'Hosting & Server Management', desc: 'Reliable hosting solutions and server administration.' },
      { title: 'Database Design & Optimization', desc: 'Efficient data storage and retrieval systems.' },
      { title: 'API Security & Authentication Systems', desc: 'Secure integrations and user authentication.' },
      { title: 'Backup & Disaster Recovery Solutions', desc: 'Ensure business continuity with robust backups.' }
    ]
  }
]

export default function Services() {
  const { theme } = useTheme()
  const [selectedService, setSelectedService] = useState(services[0])

  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-black'
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white'
  const cardText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} py-24 transition-all duration-1000 ease-in-out`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">What CannumX Builds</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Integrated Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <h2 className="text-xl font-medium mb-6">Our Services</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedService.id === service.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : `${textColor} hover:bg-blue-500 hover:text-white`
                      }`}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Organized Content Area */}
          <div className="lg:col-span-3">
            <div className={`${cardBg} p-8 rounded-lg shadow-lg animate-fade-in-up transition-all duration-1000 ease-out`}>
              <h2 className="text-3xl font-light mb-4">{selectedService.title}</h2>
              <p className={`text-lg mb-8 ${cardText}`}>{selectedService.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedService.details.map((detail, index) => (
                  <div key={index} className={`p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <h3 className="text-lg font-medium mb-2">{detail.title}</h3>
                    <p className={cardText}>{detail.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-light mb-6">Let’s build something extraordinary together.</h2>
          <Link
            href="https://calendly.com/cannumx"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 hover:scale-110 transition-all duration-700 ease-in-out shadow-xl hover:shadow-blue-500/60 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </div>
    </div>
  )
}