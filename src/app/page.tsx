import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      
      {/* Game Features */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Image
              src="/characters-01.png"
              alt="Illustration of diverse characters"
              width={1600}
              height={900}
              className="w-full h-auto rounded-2xl mb-8"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Welcome to the Investigation
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              You wake up at your desk. Your job is &quot;important.&quot; You receive a file. The team imploded. 
              Your task: piece together what went wrong in this liminal corporate world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-7 rounded-2xl text-center hover:translate-y-[-2px] transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">HorseSense Mechanics</h3>
              <p className="text-white/70">
                Trust your intuition when something feels &quot;off.&quot; Use HorseSense to probe deeper into workplace dysfunction and uncover hidden truths.
              </p>
            </div>
            
            <div className="glass-panel p-7 rounded-2xl text-center hover:translate-y-[-2px] transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Time-Limited Cases</h3>
              <p className="text-white/70">
                Navigate 8-hour investigations. Each conversation costs time. Every choice matters. Uncover the timeline of organizational breakdown.
              </p>
            </div>
            
            <div className="glass-panel p-7 rounded-2xl text-center hover:translate-y-[-2px] transition-transform duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Satirical Mystery</h3>
              <p className="text-white/70">
                Explore a world where dysfunction is constant and &quot;belonging&quot; is just another KPI. Question everything. Trust no one. Find the horse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32" style={{ 
        background: 'linear-gradient(to bottom, var(--background), #080808)',
        marginTop: '-1px'
      }}></div>

      {/* Footer / Call to Action */}
      <footer style={{ 
        backgroundColor: '#080808',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        marginTop: '-1px'
      }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-panel p-12 rounded-3xl hover:translate-y-[-2px] transition-transform duration-200">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Investigate?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Your desk is waiting. The files are piling up. Someone needs to figure out what went wrong. 
              Will you trust your HorseSense?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Join the Investigation
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Get Access
              </a>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center">
              <Image
                src="/incluesion_workdmark.png"
                alt="Incluesion wordmark"
                width={220}
                height={40}
                className="h-8 w-auto mb-4 opacity-70"
              />
              <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                © Incluesion, Inc. 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


