'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
    >
      <div className={`pointer-events-auto flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-500 border ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/20 shadow-2xl shadow-white/5' : 'bg-transparent border-transparent'}`}>
        <a href="#" className="text-xl font-display font-bold text-white tracking-tighter">
          PHYOMIN
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
