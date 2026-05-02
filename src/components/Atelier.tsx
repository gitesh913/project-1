import { motion } from 'framer-motion';

const PRODUCTS = [
  { title: 'The Monolith Table', category: 'Dining', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', size: 'large' },
  { title: 'Sintra Chair', category: 'Seating', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { title: 'Arc Credenza', category: 'Storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { title: 'SUHAGE', category: 'Handcrafted Kikkar', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800', size: 'medium' },
  { title: 'Obelisk Stool', category: 'Seating', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { title: 'Vesta Console', category: 'Living', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800', size: 'medium' },
];

export default function Atelier() {
  return (
    <section className="bg-[#E5DED0] px-6 md:px-10 py-20 md:py-32 text-brand-onyx">
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-brand-umber">Showcase</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-serif uppercase tracking-tight">The Atelier</h2>
        </div>
        <p className="max-w-xs text-xs md:text-sm font-sans leading-relaxed opacity-70">
          Where raw potential meets architectural precision. Each piece is a unique commission, crafted for longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative overflow-hidden bg-brand-onyx/5 ${
              product.size === 'large' ? 'sm:col-span-2 lg:row-span-2 h-[500px] md:h-[800px]' : 
              product.size === 'medium' ? 'h-[400px] md:h-[500px]' : 'h-[300px] md:h-[350px]'
            }`}
          >
            <img 
              src={product.image} 
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100 text-brand-ivory">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#D4B483]">{product.category}</span>
              <h3 className="text-xl md:text-2xl font-serif mt-1">{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
