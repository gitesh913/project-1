# Keval Timber Store (KTS) - Project Instructions

## Brand Identity
- **Aesthetic:** Modern Industrial Luxury (High-end architectural studio feel).
- **Colors:** 
  - Warm Ivory (`#F9F8F6`)
  - Burnt Umber (`#4B3621`)
  - Deep Onyx (`#121212`)
  - Timber Gold (`#D4B483`) - Primary accent/logo color.
- **Typography:** 'Cormorant Garamond' (Headings), 'Inter' (Technical body text).

## Hero Section Logic
- **Scroll Sync:** GSAP ScrollTrigger scrubbing the 3D video.
- **Sequence:** 
  - 0-50%: Clear wood-chopping animation.
  - 50-100%: Gradual transition to deep blur (50px) and dimmed background.
- **Branding:** "Keval Timber Store" (Primary) and "Since 1990" (Secondary) must remain crisp and clear over the blurred video.
- **Performance:** Scroll height set to `300vh` for a fast, punchy intro.

## Technical Constraints
- **Smooth Scroll:** Lenis integrated with GSAP Ticker for high-inertia, premium feel.
- **Animations:** Use `gsap.context()` for all ScrollTriggers to ensure clean lifecycle management.
- **Mobile Optimization:** 
  - Archive cards use `w-fit` with dynamic width calculation to prevent background dead space.
  - Typography scales down (`text-5xl` for mobile hero) to maintain luxury balance.

## Project Context
- **Hero Video:** Located at `/public/assets/hero-video.mp4` (Starts from 3s mark).
- **Logo:** Located at `/public/assets/logo-new.jpeg` (Circular crop with no background).
