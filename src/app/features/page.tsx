import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Mechanics - Incluesion",
  description: "Explore the HorseSense mechanics and case-based gameplay of Incluesion's satirical workplace mystery game",
};

export default function Features() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Game Mechanics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Some tools are too old to have instructions. Some truths, too quiet to explain themselves. 
              Explore the core mechanics that power your investigation.
            </p>
          </div>
        </div>
      </section>

      {/* HorseSense Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel p-12 rounded-3xl text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">HorseSense</h2>
            <p className="text-white/80 text-lg mb-6">
              The emotional compass and narrative engine of Incluesion. When something feels &quot;off,&quot; trust your instincts.
            </p>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/70">Costs 15 minutes of investigation time—choose wisely</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/70">Requires written justification—why did you trust this moment?</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white/70">Unlocks hidden NPCs, timeline markers, and horse references</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Mechanics Grid */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gameplay Loop */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Emotional Gameplay Loop</h3>
              <p className="text-white/70 mb-4">
                Navigate through dynamic emotional states: Perceive → Attune → Probe → Disrupt → Interpret → Accumulate.
              </p>
              <p className="text-white/60 text-sm">
                Rewards presence over precision, insight over instruction.
              </p>
            </div>

            {/* Case Structure */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Time-Limited Cases</h3>
              <p className="text-white/70 mb-4">
                20-30 minute episodes. Start with the outcome, work backward through contradictory testimonies. 8 hours to investigate.
              </p>
              <p className="text-white/60 text-sm">
                Each conversation costs 5 minutes. Each movement costs time. Choose carefully.
              </p>
            </div>

            {/* Investigation Tools */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Timeline Reconstruction</h3>
              <p className="text-white/70 mb-4">
                Drag key data points to the timeline. Lock in events. Activate HorseSense. Piece together what went wrong.
              </p>
              <p className="text-white/60 text-sm">
                NPCs only appear once they&apos;ve been &quot;named&quot; in other data fragments.
              </p>
            </div>

            {/* Mysterious Rewards */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Ambiguous Rewards</h3>
              <p className="text-white/70 mb-4">
                Complete cases to receive seemingly meaningless objects: paperweights, mugs, horse figurines.
              </p>
              <p className="text-white/60 text-sm">
                Something that seems like it should matter. But doesn&apos;t. Or does it?
              </p>
            </div>

            {/* The Horse Mystery */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">The Horse</h3>
              <p className="text-white/70 mb-4">
                You hear mention of it. Sometimes you glimpse it through frosted glass. A bridle in the breakroom. A hoofprint in the stairwell.
              </p>
              <p className="text-white/60 text-sm">
                What the horse means is left deliberately unclear. For now.
              </p>
            </div>

            {/* Disoriented Awareness */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Disoriented Awareness</h3>
              <p className="text-white/70 mb-4">
                Sit with ambiguity. Find clarity without closure. Value reflection over certainty. Learn to detect subtle exclusions.
              </p>
              <p className="text-white/60 text-sm">
                The emotional target state where real learning happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equine-Assisted Learning Context */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Inspired by Equine-Assisted Learning
            </h2>
            <div className="space-y-4 text-white/70">
              <p>
                Horses, as prey animals, are acutely responsive to body language, emotion, and intention. 
                They cannot be &quot;managed&quot; through force or facade—they respond only to authenticity.
              </p>
              <p>
                Incluesion mirrors this EAL journey: you think you are learning about others, but you are really learning about yourself. 
                The game develops relational intelligence by recognizing how your energy, mood, and attentiveness affect outcomes.
              </p>
              <p className="text-white/60 text-sm italic text-center mt-6">
                &quot;Some say these qualities are best understood not by titles, but by watching who can walk calmly beside a horse.&quot;
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
              Ready to Trust Your HorseSense?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              The office is waiting. The dysfunction is constant. Someone needs to investigate. 
              Will you learn to see what others cannot?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Begin Investigation
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Get Access
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
