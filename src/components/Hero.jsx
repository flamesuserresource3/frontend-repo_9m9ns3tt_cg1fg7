import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-10 inset-y-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md/30"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-widest ring-1 ring-white/20">
            <span className="text-amber-300">New</span>
            <span className="text-white/80">Modern Gastronomy Experience</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-amber-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
            Aurora Restaurant
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Where digital art meets fine dining. Savor seasonal dishes crafted with care, in an immersive ambiance that feels out of this world.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reserve"
              className="group inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Explore Menu
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-white/80">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span className="text-sm">Rated 4.9/5 by 2,100+ guests</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
