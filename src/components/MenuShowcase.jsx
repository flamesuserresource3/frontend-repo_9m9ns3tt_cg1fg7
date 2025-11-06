import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Charred Octopus',
    desc: 'Smoked paprika, lemon gel, fingerling potatoes',
    price: '$22',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Truffle Risotto',
    desc: 'Aged parmesan, wild mushrooms, black truffle',
    price: '$28',
    img: 'https://images.unsplash.com/photo-1544025162-9aa89c43f41f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Citrus Salmon',
    desc: 'Yuzu beurre blanc, charred greens, sesame',
    price: '$26',
    img: 'https://images.unsplash.com/photo-1526312426976-593c7a1cb5bf?q=80&w=1200&auto=format&fit=crop',
  },
];

const MenuShowcase = () => {
  return (
    <section id="menu" className="relative bg-zinc-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,197,94,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Chef's Highlights</h2>
            <p className="mt-2 max-w-xl text-white/70">
              A preview of our seasonal menu that celebrates local produce and bold flavor.
            </p>
          </div>
          <a href="#reserve" className="hidden rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur hover:bg-white/20 md:inline-block">
            Book Now
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-amber-300/20 px-3 py-1 text-sm font-semibold text-amber-300 ring-1 ring-amber-300/30">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
