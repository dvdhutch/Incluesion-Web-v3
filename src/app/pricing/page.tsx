import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Plans - Incluesion",
  description: "Choose your access level to Incluesion's satirical workplace mystery game",
};

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Access the Investigation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your desk awaits. The files are piling up. Choose your level of access to the liminal corporate world where dysfunction is the only constant.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Plan */}
            <div className="glass-panel p-8 rounded-2xl relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Solo Investigator</h3>
                <p className="text-white/70 mb-6">For individual players exploring workplace mysteries</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-white/70">/month</span>
                </div>
                <p className="text-sm text-white/60">Single player access</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Access to 12 core cases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Full HorseSense mechanics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Progress tracking & reflection logs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Monthly case releases</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200">
                Start Investigating
              </button>
            </div>

            {/* Team Plan */}
            <div className="glass-panel p-8 rounded-2xl relative border-2 border-blue-400/50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Investigation Team</h3>
                <p className="text-white/70 mb-6">For teams exploring dysfunction together</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-white/70">/month</span>
                </div>
                <p className="text-sm text-white/60">Up to 25 investigators</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">All Solo Investigator features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Access to 30+ cases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Collaborative investigation tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Team reflection dashboards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Priority access to new cases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Facilitated debrief sessions</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-200">
                Assemble Your Team
              </button>
            </div>

            {/* Organization Plan */}
            <div className="glass-panel p-8 rounded-2xl relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Organization</h3>
                <p className="text-white/70 mb-6">For organizations ready to face their dysfunction</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <p className="text-sm text-white/60">Unlimited investigators</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">All Investigation Team features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Custom cases based on your org</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Dedicated Incluesion consultant</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">White-label deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Priority investigation support</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200">
                Contact Incluesion HQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-white/70">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-white/70">
                We offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                What kind of support do you offer?
              </h3>
              <p className="text-white/70">
                All plans include comprehensive support. Starter includes email support, Professional adds priority support, and Enterprise includes 24/7 phone support with a dedicated success manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of professionals who are transforming their leadership skills with Incluesion.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
