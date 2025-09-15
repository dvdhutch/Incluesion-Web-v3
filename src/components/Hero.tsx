"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export default function Hero() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [progress, setProgress] = React.useState(0);
  const [compositeWidth, setCompositeWidth] = React.useState<number>(1200);
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  const jobTitles = ["Managers", "Executives", "VPs", "Directors", "Sales Reps"];

  // Typewriter effect
  React.useEffect(() => {
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
  }, [displayedText, currentTitleIndex, isDeleting, jobTitles]);

  React.useEffect(() => {
    const recomputeWidth = () => {
      const viewport = typeof window !== "undefined" ? window.innerWidth : 1200;
      const sideMargin = 32; // ~16px on each side
      const max = 1600; // optional hard cap
      const target = Math.max(600, Math.min(viewport - sideMargin, max));
      setCompositeWidth(target);
    };

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      // Normalize progress across the tall section with sticky viewport
      // 0 when section top hits viewport top, 1 when section has scrolled
      // past by (sectionHeight - viewportHeight)
      const denom = Math.max(1, rect.height - viewportHeight);
      const raw = (0 - rect.top) / denom;
      setProgress(clamp(raw, 0, 1));
    };
    recomputeWidth();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("resize", recomputeWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("resize", recomputeWidth);
    };
  }, []);

  // Translate triangles apart as progress goes 0 → 1
  const maxOffsetPx = Math.round(compositeWidth * 0.25); // slide distance relative to width
  const easing = (t: number) => 1 - Math.pow(1 - t, 2); // ease-out
  const eased = easing(progress);
  const leftTx = -maxOffsetPx * eased;
  const rightTx = maxOffsetPx * eased;
  // Slight inward overlap at the start to make triangles feel tighter together
  const inwardPx = Math.round(compositeWidth * 0.2); // pull halves inward (~35% of width)
  const leftInward = inwardPx * (1 - eased);
  const rightInward = -inwardPx * (1 - eased);
  const titleOpacity = clamp(progress * 1.4, 0, 1);
  const titleTranslateY = (1 - titleOpacity) * 16; // slight rise-in

  // Size for each triangle (half of composite). Adjust aspect ratio as needed.
  const halfWidth = Math.round(compositeWidth / 2);
  const TRI_ASPECT = 0.7; // height = width * 0.7
  const triHeight = Math.round(halfWidth * TRI_ASPECT);

  return (
    <section ref={sectionRef} className="relative min-h-[160vh] overflow-visible">
      {/* Intro header and waitlist form */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 pt-8 pb-0 -mb-2 text-center">
        <h1 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[3rem] font-semibold tracking-tight text-white">
          Leadership Games for{" "}
          <span className="relative inline-block min-w-[180px] text-left">
            <span className="inline-block">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </h1>
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
      {/* Triangles stack */}
      {/* Sticky viewport for triangles */}
      <div className="pointer-events-none sticky top-0 h-screen flex items-center justify-center">
        <div className="relative" style={{ width: compositeWidth, height: triHeight }}>
          {/* Left triangle (swapped) */}
          <div
            className="absolute left-1/2 top-1/2 will-change-transform overflow-hidden"
            style={{ 
              transform: `translate(-100%, -50%) translateX(${leftTx + leftInward}px)`,
              width: halfWidth,
              height: triHeight
            }}
          >
            <Image
              src="/inclusion_triangle2.png"
              alt="Triangle left (swapped)"
              width={halfWidth}
              height={triHeight}
              priority
              style={{ 
                marginLeft: '-3px',
                width: halfWidth + 3,
                height: triHeight
              }}
            />
          </div>

          {/* Right triangle (swapped) */}
          <div
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ transform: `translate(0, -50%) translateX(${rightTx + rightInward}px)` }}
          >
            <Image
              src="/inclusion_triangle1.png"
              alt="Triangle right (swapped)"
              width={halfWidth}
              height={triHeight}
              priority
            />
          </div>
        </div>
        
        {/* Slide to continue button */}
        <div 
          className="fixed bottom-10 left-1/2 z-50"
          style={{ 
            opacity: progress > 0 ? 0 : 1, // Fade out immediately when scrolling starts
            transform: `translate(-50%, ${progress * 20 - 15}px)`, // Start 5px higher
            transition: "opacity 200ms ease-out, transform 200ms ease-out"
          }}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white/90 transition-colors duration-300">
            <span className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              Slide to begin
            </span>
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Revealed text */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 pt-[100vh] pb-24 text-center"
        style={{ opacity: titleOpacity, transform: `translateY(${titleTranslateY}px)`, transition: "opacity 200ms ease-out, transform 200ms ease-out" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          The Team Imploded.<br />Anna Resigned.
        </h1>
        <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          A satirical mystery game where you investigate workplace dysfunction in a liminal corporate world. 
          Play as an anonymous Investigator, piece together what went wrong, and discover what the horse means.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Start Investigating
          </a>
          <a
            href="/features"
            className="inline-flex items-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Learn About HorseSense
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Smooth GPU-accelerated transforms */
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}


