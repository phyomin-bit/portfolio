'use client';

import { motion } from 'motion/react';

export function About() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="about" className="py-32 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-16 uppercase"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-6">
              Hello! I&apos;m a passionate Front End Developer with over 1 year of professional experience.
            </h3>
            <p className="text-neutral-400 text-lg">
              I specialize in building robust, scalable, and visually appealing web applications using modern technologies like React.js and Next.js. My journey started with a curiosity for how things work on the internet, and I&apos;ve been building ever since.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="text-6xl font-display font-bold text-white mb-2 relative z-10">1+</span>
            <span className="text-neutral-400 font-bold uppercase tracking-widest text-sm relative z-10">Years Experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="md:col-span-3 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Current Role</h4>
              <p className="text-neutral-400">Front End Developer at Innovix Solution Software house</p>
            </div>
            <div className="w-full md:w-[1px] h-[1px] md:h-16 bg-white/10" />
            <div className="flex-1 md:text-right">
              <h4 className="text-xl font-bold text-white mb-2">Previous Role</h4>
              <p className="text-neutral-400">Front End Developer at MMSIT Solution (8 months)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
