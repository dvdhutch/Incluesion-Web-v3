import Image from "next/image";

interface CharacterProps {
  name: string;
  imageSrc: string;
  dialogue: string;
  bubblePosition: "left" | "right";
  role?: string;
}

export default function Character({ name, imageSrc, dialogue, bubblePosition, role }: CharacterProps) {
  const isLeftBubble = bubblePosition === "left";
  
  return (
    <div className={`group flex ${isLeftBubble ? 'flex-row' : 'flex-row-reverse'} md:flex-col items-center ${isLeftBubble ? 'justify-start' : 'justify-end'} md:justify-center relative w-full md:w-auto my-5 transition-all duration-300 animate-float hover:z-30 hover:scale-105 md:hover:scale-115 hover:animate-none hover:drop-shadow-[0_12px_38px_rgba(255,255,255,0.35)] group-hover/characters:opacity-40 hover:!opacity-100`}>
      <div className="flex flex-col items-center transition-all duration-300 flex-shrink-0 relative group-hover/characters:scale-95 group-hover/characters:brightness-75 group-hover/characters:contrast-90 group-hover/characters:grayscale group-hover:scale-110 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150 group-hover:grayscale-0 hover:!grayscale-0 hover:!brightness-110 hover:!contrast-105 hover:!saturate-115">
        {/* Glow effect */}
        <div className="absolute top-1/4 bottom-1/4 left-1/4 right-1/4 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl scale-110 opacity-0 group-hover:opacity-90 group-hover:scale-[1.2] transition-all duration-300 -z-10"></div>
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={300}
          className="w-56 h-84 object-contain transition-all duration-300 brightness-75 contrast-75 grayscale-[0.3] group-hover/characters:brightness-50 group-hover/characters:contrast-75 group-hover/characters:grayscale group-hover:scale-110 group-hover:brightness-150 group-hover:contrast-125 group-hover:saturate-150 group-hover:grayscale-0 hover:!grayscale-0 hover:!brightness-115 hover:!contrast-110 hover:!saturate-120"
        />
      </div>
      
      {/* Speech Bubble */}
      <div className={`relative md:absolute ${isLeftBubble ? 'md:left-full md:ml-6' : 'md:right-full md:mr-6'} md:top-1/2 md:-translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform ${isLeftBubble ? 'md:translate-x-2 md:group-hover:translate-x-0' : 'md:-translate-x-2 md:group-hover:translate-x-0'} pointer-events-none ${isLeftBubble ? 'ml-4 md:ml-6' : 'mr-4 md:mr-6'} flex items-center z-10`}>
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 min-w-[200px]">
          {/* Speech bubble arrow */}
          <div className={`absolute ${isLeftBubble ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 -translate-y-1/2 w-4 h-4 bg-white/95 rotate-45 ${isLeftBubble ? 'border-l border-b' : 'border-r border-t'} border-white/20`}></div>
          
          <h3 className="font-bold text-gray-900 text-sm mb-1">{name}</h3>
          {role && <p className="text-gray-600 text-xs mb-2 font-medium">{role}</p>}
          <p className="text-gray-700 text-xs leading-relaxed">
            {dialogue}
          </p>
        </div>
      </div>
    </div>
  );
}
