"use client";

import Image from "next/image";
import React from "react";
// Removed unused framer-motion imports since we switched to typewriter effect

interface HeroImageContainerProps {
  children: React.ReactNode;
}

function HeroImageContainer({ children }: HeroImageContainerProps) {
  return (
    <div className="relative w-full h-[80%] max-w-5xl mx-auto rounded-[20px] overflow-hidden">
      {children}
    </div>
  );
}

export default function Hero() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [tableLoaded, setTableLoaded] = React.useState(false);
  const [tableVisible, setTableVisible] = React.useState(false);
  const [silhouetteLoaded, setSilhouetteLoaded] = React.useState(false);
  const [personSittingLoaded, setPersonSittingLoaded] = React.useState(false);
  const [personSittingVisible, setPersonSittingVisible] = React.useState(false);
  const [cardsLoaded, setCardsLoaded] = React.useState(false);
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const [iconsLoaded, setIconsLoaded] = React.useState(false);
  const [iconsVisible, setIconsVisible] = React.useState(false);

  return (
    <section className="relative overflow-x-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Office background */}
      <div className="py-24 flex items-center justify-center">
        <HeroImageContainer>
          {/* Office background layer */}
          <Image
            src="/office background.png"
            alt="Office background"
            fill
            priority
            className="object-cover transition-opacity duration-200 ease-in-out"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: imageLoaded ? 0.5 : 0,
              borderTopLeftRadius: '20px'
            }}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Background silhouette layer */}
          <Image
            src="/background sillhoutte.png"
            alt="Background silhouette"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: silhouetteLoaded ? 1 : 0
            }}
            onLoad={() => setSilhouetteLoaded(true)}
          />
          
          {/* Table layer above background silhouette */}
          <Image
            src="/table.png"
            alt="Table"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: tableLoaded && tableVisible ? 1 : 0
            }}
            onLoad={() => {
              setTableLoaded(true);
              setTableVisible(true);
            }}
          />

          {/* Person sitting layer */}
          <Image
            src="/person sitting.png"
            alt="Person sitting"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: personSittingLoaded && personSittingVisible ? 1 : 0
            }}
            onLoad={() => {
              setPersonSittingLoaded(true);
              // Start fade-in after 0.4 second delay
              setTimeout(() => setPersonSittingVisible(true), 400);
            }}
          />

          {/* Cards layer */}
          <Image
            src="/cards.png"
            alt="Cards"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'calc(50% - 40px) center',
              opacity: cardsLoaded && cardsVisible ? 1 : 0
            }}
            onLoad={() => {
              setCardsLoaded(true);
              // Start fade-in after 0.5 second delay
              setTimeout(() => setCardsVisible(true), 500);
            }}
          />

          {/* Icons left layer */}
          <Image
            src="/left icons.png"
            alt="Icons Left"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'contain',
              objectPosition: 'left center',
              opacity: iconsLoaded && iconsVisible ? 1 : 0
            }}
            onLoad={() => {
              setIconsLoaded(true);
              // Start fade-in after 0.5 second delay
              setTimeout(() => setIconsVisible(true), 500);
            }}
          />

          {/* Icons right layer */}
          <Image
            src="/right icons.png"
            alt="Icons Right"
            fill
            priority
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ 
              objectFit: 'contain',
              objectPosition: 'right center',
              opacity: iconsLoaded && iconsVisible ? 1 : 0
            }}
            onLoad={() => {
              setIconsLoaded(true);
              // Start fade-in after 0.5 second delay
              setTimeout(() => setIconsVisible(true), 500);
            }}
          />
        </HeroImageContainer>
      </div>

      {/* Revealed text */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 pb-24 text-center">
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

    </section>
  );
}


