import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let ctx: gsap.Context;

    const onMetadata = () => {
      const duration = video.duration;
      const startTime = 3; 
      
      video.currentTime = startTime;
      video.pause();

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          }
        });

        // Set initial clear state
        tl.set(video, { filter: "blur(0px) brightness(1)", scale: 1 }, 0);

        // 0% -> 10%: Title fades in
        tl.fromTo(titleRef.current, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 1 }, 
          0
        );

        // 0% -> 80%: Video plays (Chopping phase) - taking up more of the scroll
        tl.to(video, {
          currentTime: duration,
          ease: "none",
          duration: 8,
        }, 0);

        // 80% -> 100%: Quick, subtle Blur transition at the very end
        tl.to(video, {
          filter: "blur(20px) brightness(0.5)",
          scale: 1.02,
          duration: 2,
        }, 8);
      });
    };

    if (video.readyState >= 1) {
      onMetadata();
    } else {
      video.addEventListener('loadedmetadata', onMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-onyx">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 px-6">
          <div ref={titleRef} className="text-center space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-brand-ivory tracking-tighter uppercase leading-none">
              Keval Timber Store
            </h1>
            <p className="text-[#D4B483] font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.6em] sm:tracking-[1em] opacity-80 pl-[0.6em] sm:pl-[1em]">
              Since 1990
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
