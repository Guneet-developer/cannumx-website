'use client'

import { useTheme } from '../../components/ThemeContext'

export default function Policy() {
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-black'
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white'
  const cardText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} py-24 transition-all duration-1000 ease-in-out`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 animate-fade-in transition-all duration-1000 ease-out">CannumX – Service Terms & Agreement (Client Acceptance)</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className={`${cardText} leading-relaxed`}>
            By checking the box, the Client acknowledges, understands, and agrees to be bound by the following terms governing all AI, software, consulting, and digital services provided by CannumX (the "Agency").
          </p>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">1. Scope of Services</h2>
            <p className={cardText}>
              CannumX will provide the AI or business-related product/service as described in the Project Description.<br />
              Deliverables and functionality will match what is explicitly outlined therein.<br />
              Client acknowledges that outcomes may vary due to external factors such as available data, input quality, market conditions, and general technological limitations.<br />
              CannumX does not guarantee specific results, business outcomes, or performance levels.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">2. Payment Terms</h2>
            <p className={cardText}>
              The total project fee will be listed in the Project Description.<br />
              A 50% upfront payment is required before work begins.<br />
              The remaining 50% is due upon final delivery of the service.<br />
              Final delivery is deemed complete when the Client receives the deliverables in the agreed format.<br />
              All payments must be made using the method and currency specified in the Project Description.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">3. Subscription Terms (If Applicable)</h2>
            <p className={cardText}>
              Any subscription-based component will have its duration clearly stated.<br />
              The initial subscription term begins at activation.<br />
              Unless stated otherwise, subscriptions renew automatically for the same term unless written notice of non-renewal is provided at least 30 days before the current term ends.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">4. Refund Policy</h2>
            <p className={cardText}>
              All services become non-refundable once delivered and accepted.<br />
              No refunds will be issued except when required by law or explicitly mentioned in the Project Description.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">5. Client Responsibilities</h2>
            <p className={cardText}>
              Client must provide all necessary assets, data, access, feedback, and approvals.<br />
              A primary point of contact must be assigned by the Client.<br />
              Delays caused by the Client may result in timeline changes or extra fees.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">6. Limitation of Liability</h2>
            <p className={cardText}>
              CannumX is not liable for indirect, incidental, special, or consequential damages, including loss of profits, data, use, or goodwill.<br />
              Maximum liability for any claim will not exceed the total fees paid for the specific service involved.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">7. Intellectual Property</h2>
            <p className={cardText}>
              (Client must select one in the Project Description):<br />
              Full Ownership: Client receives full ownership of final deliverables once all fees are paid.<br />
              Licensed Use: CannumX retains ownership but grants the Client a non-exclusive, royalty-free, worldwide license for business use.<br />
              Limited Usage Rights: Client receives restricted rights only for the purpose/duration stated in the Project Description.<br />
              Additional Terms:<br />
              CannumX retains ownership of any pre-existing tools, frameworks, or IP integrated into the deliverables. A license is granted to the Client solely for using the final deliverables.<br />
              Client confirms they own or have rights to any content they supply to CannumX.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">8. Confidentiality</h2>
            <p className={cardText}>
              Both Parties agree to protect all confidential information received during the engagement.<br />
              Confidentiality obligations remain in effect for 3 years after termination unless otherwise stated.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">9. Termination</h2>
            <p className={cardText}>
              For Cause:<br />
              Either Party may terminate if the other fails to remedy a material breach within 14 days of written notice, or becomes insolvent.<br />
              For Convenience:<br />
              Client may terminate with 14 days’ written notice and must pay for completed work + non-cancellable costs.<br />
              Agency may terminate with 14 days’ written notice and will refund unearned fees for services not yet delivered.<br />
              Upon Termination:<br />
              All outstanding fees are immediately due.<br />
              Completed deliverables and paid work-in-progress will be transferred to Client.<br />
              All confidential information must be returned or destroyed.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">10. Governing Law & Jurisdiction</h2>
            <p className={cardText}>
              This Agreement is governed by the laws specified in the Project Description.<br />
              Disputes will be settled exclusively in the courts of the jurisdiction stated therein.
            </p>
          </div>

          <div className={`${cardBg} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-medium mb-4">11. General Provisions</h2>
            <p className={cardText}>
              This Agreement and the Project Description form the entire agreement between the Parties.<br />
              Changes must be made in writing and signed by both Parties.<br />
              If any provision becomes invalid, the remaining provisions will remain enforceable.<br />
              Notices must be delivered in writing.<br />
              Neither Party is liable for delays caused by events beyond reasonable control (Force Majeure).<br />
              Rights cannot be assigned without written consent from the other Party.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}