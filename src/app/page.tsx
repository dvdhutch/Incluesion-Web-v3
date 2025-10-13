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
            <div className="flex flex-col md:flex-row gap-4 justify-center items-start mb-54">
              {/* Camille Owens */}
              <div className="group flex flex-row md:flex-col items-center justify-start md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Camille_Owens.png"
                    alt="Camille Owens"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on left, bubble on right */}
                <div className="relative md:absolute md:left-full md:ml-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0 pointer-events-none ml-4 md:ml-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - left side on mobile and desktop */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-b border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Camille Owens</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Devin Lin */}
              <div className="group flex flex-row-reverse md:flex-col items-center justify-end md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Devin_Lin.png"
                    alt="Devin Lin"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on right, bubble on left */}
                <div className="relative md:absolute md:right-full md:mr-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:-translate-x-2 md:group-hover:translate-x-0 pointer-events-none mr-4 md:mr-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - right side on mobile and desktop */}
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-t border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Devin Lin</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hannah Kwong */}
              <div className="group flex flex-row md:flex-col items-center justify-start md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Hannah_Kwong.png"
                    alt="Hannah Kwong"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on left, bubble on right */}
                <div className="relative md:absolute md:left-full md:ml-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0 pointer-events-none ml-4 md:ml-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - left side on mobile and desktop */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-b border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Hannah Kwong</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Jules Mehta */}
              <div className="group flex flex-row-reverse md:flex-col items-center justify-end md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Jules_Mehta.png"
                    alt="Jules Mehta"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on right, bubble on left */}
                <div className="relative md:absolute md:right-full md:mr-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:-translate-x-2 md:group-hover:translate-x-0 pointer-events-none mr-4 md:mr-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - right side on mobile and desktop */}
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-t border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Jules Mehta</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Melissa Epps */}
              <div className="group flex flex-row md:flex-col items-center justify-start md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Melissa_Epps.png"
                    alt="Melissa Epps"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on left, bubble on right */}
                <div className="relative md:absolute md:left-full md:ml-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0 pointer-events-none ml-4 md:ml-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - left side on mobile and desktop */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-b border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Melissa Epps</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reggie Polk */}
              <div className="group flex flex-row-reverse md:flex-col items-center justify-end md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Reggie_Polk.png"
                    alt="Reggie Polk"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on right, bubble on left */}
                <div className="relative md:absolute md:right-full md:mr-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:-translate-x-2 md:group-hover:translate-x-0 pointer-events-none mr-4 md:mr-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - right side on mobile and desktop */}
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-t border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Reggie Polk</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terry Bloom */}
              <div className="group flex flex-row md:flex-col items-center justify-start md:justify-center relative w-full md:w-auto">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/images/characters/Terry_Bloom.png"
                    alt="Terry Bloom"
                    width={200}
                    height={300}
                    className="w-56 h-84 object-contain"
                  />
                </div>
                
                {/* Speech Bubble - Character on left, bubble on right */}
                <div className="relative md:absolute md:left-full md:ml-6 md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0 pointer-events-none ml-4 md:ml-6 flex items-center z-10">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
                    {/* Speech bubble arrow - left side on mobile and desktop */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-b border-white/20"></div>
                    
                    <h3 className="font-bold text-gray-900 text-sm mb-2">Terry Bloom</h3>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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


