import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WOOD_TYPES = [
  { name: 'Teak', origin: 'Burma', density: '630-720 kg/m³', image: '/assets/teak.webp' },
  { name: 'Rosewood', origin: 'East India', density: '750-850 kg/m³', image: '/assets/rosewood.jpeg' },
  { name: 'Mahogany', origin: 'Honduras', density: '500-650 kg/m³', image: '/assets/mahogany.jpeg' },
  { name: 'Ebony', origin: 'Sri Lanka', density: '1100-1300 kg/m³', image: '/assets/ebony.jpeg' },
];

export default function KtsArchive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Use a context to handle cleanup and responsive refreshes
    const ctx = gsap.context(() => {
      const totalWidth = section.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollDistance = totalWidth - windowWidth;

      gsap.to(section, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden bg-[#2D231E] text-brand-ivory">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-fit flex-row relative">
          {/* Intro Slide */}
          <div className="flex h-screen w-screen flex-shrink-0 flex-col justify-center px-8 md:px-20">
            <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter text-[#D4B483]">The KTS Archive</h2>
            <p className="mt-4 text-base md:text-xl font-sans max-w-xs md:max-w-md uppercase tracking-widest text-brand-ivory/60">
              A curated selection of the world's most exceptional timber.
            </p>
          </div>
          
          {/* Wood Slides */}
          {WOOD_TYPES.map((wood, index) => (
            <div key={index} className="flex h-screen w-screen flex-shrink-0 items-center justify-center px-6 md:px-20">
              <div className="group relative h-[65vh] md:h-[70vh] w-[90vw] md:w-[60vw] overflow-hidden bg-brand-onyx transition-all duration-700 md:hover:w-[70vw]">
                <img 
                  src={wood.image} 
                  alt={wood.name}
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-brand-ivory">
                  <span className="text-[10px] md:text-sm font-sans uppercase tracking-[0.3em] opacity-60">Origin: {wood.origin}</span>
                  <h3 className="mt-2 text-4xl md:text-6xl font-serif">{wood.name}</h3>
                  <div className="mt-6 flex items-center gap-4 md:gap-8 opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-60">Grain Density</p>
                      <p className="text-sm md:text-lg font-sans">{wood.density}</p>
                    </div>
                    <button className="border border-brand-ivory/30 px-4 md:px-6 py-1.5 md:py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-ivory hover:text-brand-onyx transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
