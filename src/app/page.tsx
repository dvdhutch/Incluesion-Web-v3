"use client";

import Hero from "@/components/Hero";
import Character from "@/components/Character";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [showIntro, setShowIntro] = React.useState(true);

  React.useEffect(() => {
    if (!showIntro) {
      return;
    }

    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [showIntro]);

  // Typewriter effect
  React.useEffect(() => {
    const jobTitles = ["Managers", "Executives", "VPs", "Directors", "Sales Reps"];
    const currentText = jobTitles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayedText, currentTitleIndex, isDeleting]);

  return (
    <div className="font-sans overflow-x-hidden">
      {showIntro && (
        <div className="triangle-intro-overlay">
          <Image
            src="/inclusion_triangle2.png"
            alt="Incluesion intro triangle top left"
            fill
            priority
            className="triangle-intro triangle-intro--top-left"
          />
          <Image
            src="/inclusion_triangle1.png"
            alt="Incluesion intro triangle bottom right"
            fill
            priority
            className="triangle-intro triangle-intro--bottom-right"
          />
        </div>
      )}

      <div
        className={`intro-content ${
          showIntro ? "intro-content--hidden" : "intro-content--visible"
        }`}
      >
        <Hero />
      
        {/* Game Features */}
        <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-start md:items-center mb-54 group/characters min-h-[460px] md:min-h-[520px] py-12 md:py-16 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 overflow-visible">
                <Character
                  name="Camille Owens"
                  imageSrc="/images/characters/Camille_Owens.png"
                  dialogue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  bubblePosition="left"
                />
              <Character
                name="Devon Lin"
                imageSrc="/images/characters/Devin_Lin.png"
                dialogue="Anna did mention something last week, but...it was probably nothing."
                bubblePosition="left"
                role="Logistics & Vendors"
              />
              <Character
                name="Hannah Kwong"
                imageSrc="/images/characters/Hannah_Kwong.png"
                dialogue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                bubblePosition="left"
              />
              <Character
                name="Jules Mehta"
                imageSrc="/images/characters/Jules_Mehta.png"
                dialogue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                bubblePosition="right"
              />
              <Character
                name="Ellen Kwong"
                imageSrc="/images/characters/Melissa_Epps.png"
                dialogue="I don't want to point fingers, but we all know who dropped the ball here."
                bubblePosition="left"
                role="Director, IACA"
              />
              <Character
                name="Reggie Polk"
                imageSrc="/images/characters/Reggie_Polk.png"
                dialogue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                bubblePosition="right"
              />
              <Character
                name="Terry Bloom"
                imageSrc="/images/characters/Terry_Bloom.png"
                dialogue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                bubblePosition="right"
              />
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

      {/* Leadership Games Section */}
        <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-8">
              Leadership Games for{" "}
              <span className="relative inline-block min-w-[180px] text-left">
                <span className="inline-block">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </h2>
            <form className="mt-4 mx-auto max-w-sm">
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-2 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                <input
                  id="waitlist-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/60 focus:outline-none"
                />
                <button
                  type="button"
                  className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Join waitlist
                </button>
              </div>
            </form>
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
      
        <style jsx global>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-float:nth-child(1) { animation-delay: 0s; }
          .animate-float:nth-child(2) { animation-delay: 0.8s; }
          .animate-float:nth-child(3) { animation-delay: 1.6s; }
          .animate-float:nth-child(4) { animation-delay: 2.4s; }
          .animate-float:nth-child(5) { animation-delay: 3.2s; }
          .animate-float:nth-child(6) { animation-delay: 0.4s; }
          .animate-float:nth-child(7) { animation-delay: 1.2s; }
        `}</style>
      </div>
    </div>
  );
}


