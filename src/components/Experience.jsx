import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wine, UtensilsCrossed } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive Ambience',
    desc: 'A glass-inspired aesthetic with dynamic lighting and a living 3D cover that responds to your movement.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Seasonal Tasting',
    desc: 'Five-to-nine course tasting menus that elevate classic flavors with modern techniques.',
  },
  {
    icon: Wine,
    title: 'Curated Pairings',
    desc: 'Artful wine and zero-proof pairings selected by our sommeliers to complement each course.',
  },
];

const Experience = () => {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.05),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">The Aurora Experience</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            More than a meal—an avant‑garde journey for the senses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
                {React.createElement(f.icon, { className: 'h-6 w-6 text-amber-300' })}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
