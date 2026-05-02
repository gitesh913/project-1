import { motion } from 'framer-motion';

const STEPS = [
  { stage: 'Sourcing', label: 'Certified Forests', detail: '100% FSC-certified ethical logging.' },
  { stage: 'Seasoning', label: 'Air & Kiln Dried', detail: 'Stabilizing moisture levels for 24 months.' },
  { stage: 'Milling', label: 'Precision Cut', detail: 'Zero-waste industrial milling process.' },
  { stage: 'Finishing', label: 'Natural Oils', detail: 'VOC-free, plant-based protective layers.' },
];

export default function SustainabilityTracker() {
  return (
    <section className="bg-[#1A1F1C] px-10 py-32 text-brand-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-[#D4B483]">Ethics</span>
          <h2 className="mt-4 text-7xl font-serif uppercase tracking-tight">Tree-to-Table Journey</h2>
          <p className="mt-8 max-w-md text-lg font-sans leading-relaxed opacity-80 text-brand-ivory/80">
            Our commitment to the environment is as deep as the grains we carve. Every piece of timber is tracked from its roots to your home.
          </p>
        </div>

        <div className="space-y-12">
          {STEPS.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-8 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-[#D4B483] flex items-center justify-center text-xs font-serif group-hover:bg-[#D4B483] group-hover:text-brand-onyx transition-colors">
                  0{index + 1}
                </div>
                {index !== STEPS.length - 1 && (
                  <div className="w-px h-16 bg-[#D4B483]/20 mt-4" />
                )}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4B483] opacity-60">{step.stage}</span>
                <h3 className="text-2xl font-serif mt-1">{step.label}</h3>
                <p className="mt-2 text-sm font-sans opacity-60 text-brand-ivory/60">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
