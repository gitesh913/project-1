export default function Contact() {
  return (
    <section className="bg-brand-onyx px-10 py-32 text-brand-ivory border-t border-brand-ivory/10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-umber">Inquiry</span>
        <h2 className="mt-4 text-7xl font-serif uppercase tracking-tight">Begin Your Commission</h2>
        <p className="mt-8 text-lg font-sans opacity-60">
          Tell us about your project. Our artisans will guide you from wood selection to the final oil rub.
        </p>

        <form className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-60">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-brand-ivory/20 py-4 focus:outline-none focus:border-brand-umber transition-colors font-serif text-xl"
              placeholder="E.g. Alexander Sterling"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-60">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-brand-ivory/20 py-4 focus:outline-none focus:border-brand-umber transition-colors font-serif text-xl"
              placeholder="alex@studio.com"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-60">The Project</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-brand-ivory/20 py-4 focus:outline-none focus:border-brand-umber transition-colors font-serif text-xl resize-none"
              placeholder="Describe your vision..."
            />
          </div>
          <div className="md:col-span-2 flex justify-center mt-10">
            <button className="group flex items-center gap-4 border border-brand-ivory/30 px-12 py-5 uppercase tracking-[0.3em] text-xs hover:bg-brand-ivory hover:text-brand-onyx transition-all">
              Send Commission Brief
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
