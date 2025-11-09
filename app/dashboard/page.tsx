'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [connectedServices, setConnectedServices] = useState<string[]>([])
  const [workflows, setWorkflows] = useState<{ name: string; steps: string[] }[]>([])
  const [newWorkflow, setNewWorkflow] = useState({ name: '', steps: [''] })

  const services = ['AI Chatbot', 'Business Analytics', 'Idea Generator', 'Email Automator']

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/login')
  }, [session, status, router])

  const toggleService = (service: string) => {
    setConnectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const addWorkflow = () => {
    if (newWorkflow.name && newWorkflow.steps.some(step => step.trim())) {
      setWorkflows([...workflows, { ...newWorkflow, steps: newWorkflow.steps.filter(step => step.trim()) }])
      setNewWorkflow({ name: '', steps: [''] })
    }
  }

  const addStep = () => {
    setNewWorkflow({ ...newWorkflow, steps: [...newWorkflow.steps, ''] })
  }

  const updateStep = (index: number, value: string) => {
    const updatedSteps = [...newWorkflow.steps]
    updatedSteps[index] = value
    setNewWorkflow({ ...newWorkflow, steps: updatedSteps })
  }

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/20 to-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Welcome to Your Dashboard, {session?.user?.name}!</h1>
        <p className="text-gray-300 mb-8">Integrate and automate your AI services in one place.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* AI Service Integrator */}
          <div className="bg-primary/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">AI Service Integrator</h2>
            <p className="text-gray-300 mb-4">Connect and manage multiple AI services.</p>
            <div className="space-y-2">
              {services.map(service => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={connectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="form-checkbox"
                  />
                  <span className="text-gray-300">{service}</span>
                </label>
              ))}
            </div>
            <p className="mt-4 text-gray-400">Connected: {connectedServices.join(', ') || 'None'}</p>
          </div>

          {/* Workflow Builder */}
          <div className="bg-primary/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Workflow Builder</h2>
            <input
              type="text"
              placeholder="Workflow Name"
              value={newWorkflow.name}
              onChange={(e) => setNewWorkflow({ ...newWorkflow, name: e.target.value })}
              className="w-full p-3 mb-3 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400"
            />
            {newWorkflow.steps.map((step, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Step ${index + 1} (e.g., Generate Idea)`}
                value={step}
                onChange={(e) => updateStep(index, e.target.value)}
                className="w-full p-3 mb-2 bg-white/10 border border-accent/30 rounded-lg text-white placeholder-gray-400"
              />
            ))}
            <button onClick={addStep} className="bg-secondary text-white px-4 py-2 rounded-lg mr-2 hover:scale-105 transition-all duration-300">
              Add Step
            </button>
            <button onClick={addWorkflow} className="bg-accent text-primary px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300">
              Create Workflow
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-accent mb-2">Your Workflows</h3>
              {workflows.map((wf, index) => (
                <div key={index} className="bg-white/10 p-3 rounded-lg mb-2">
                  <p className="font-semibold text-white">{wf.name}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {wf.steps.map((step, i) => <li key={i}>{step}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-primary/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Quick Actions</h2>
            <div className="space-y-4">
              <a href="/contact" className="block bg-accent text-primary px-4 py-2 rounded-lg text-center font-semibold hover:scale-105 transition-all duration-300">
                Contact Us
              </a>
              <a href="https://calendly.com/cannumx" target="_blank" className="block bg-secondary text-white px-4 py-2 rounded-lg text-center font-semibold hover:scale-105 transition-all duration-300">
                Book Appointment
              </a>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="bg-primary/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Progress Tracker</h2>
            <p className="text-gray-300">Services connected: {connectedServices.length}</p>
            <p className="text-gray-300">Workflows created: {workflows.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}