import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import KtsArchive from './components/KtsArchive';
import Atelier from './components/Atelier';
import SustainabilityTracker from './components/SustainabilityTracker';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Force ScrollTrigger to recalculate once all components are rendered
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-brand-onyx">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 md:px-10 py-4 md:py-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 md:h-28 md:w-28 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/assets/logo-new.jpeg" 
                alt="Keval Timber Store" 
                className="h-[120%] w-auto object-contain contrast-110 brightness-105 scale-125" 
                style={{ clipPath: 'circle(40%)' }}
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-12 text-[10px] md:text-[13px] uppercase tracking-[0.15em] md:tracking-[0.25em] text-[#D4B483] font-bold">
            <a href="#archive" className="hover:text-brand-ivory transition-colors duration-300">Archive</a>
            <a href="#atelier" className="hover:text-brand-umber transition-colors duration-300">Atelier</a>
            <a href="#ethics" className="hover:text-brand-ivory transition-colors duration-300">Ethics</a>
            <button className="hidden sm:block border-2 border-[#D4B483]/50 px-8 py-2 hover:bg-[#D4B483] hover:text-brand-onyx transition-all duration-300">
              Commission
            </button>
          </div>
        </nav>

        <Hero />
        
        <div id="archive">
          <KtsArchive />
        </div>

        <div id="atelier">
          <Atelier />
        </div>

        <div id="ethics">
          <SustainabilityTracker />
        </div>

        <Contact />

        <footer className="bg-brand-onyx py-10 px-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-brand-ivory/40">
          <p>© 2026 Keval Timber Store. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Atelier Journal</span>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}

export default App;
