'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} className="relative h-[120vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity, scale, filter }} 
          className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8"
          >
            Available for work
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
              className="text-[12vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tighter text-white"
            >
              FRONTEND
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.4 }}
              className="text-[12vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tighter text-white text-transparent [-webkit-text-stroke:2px_white]"
            >
              DEVELOPER
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="mt-8 text-lg md:text-2xl text-neutral-400 max-w-2xl font-light"
          >
            I craft clean, modern, and animated web applications that users love. Specializing in React and Next.js.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
