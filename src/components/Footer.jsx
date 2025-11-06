import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Aurora Restaurant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 ring-1 ring-white/20 transition hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 ring-1 ring-white/20 transition hover:bg-white/20">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 ring-1 ring-white/20 transition hover:bg-white/20">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
