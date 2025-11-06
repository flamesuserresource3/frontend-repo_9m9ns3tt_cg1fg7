import React from 'react';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import Experience from './components/Experience';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero />
      <Experience />
      <MenuShowcase />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
