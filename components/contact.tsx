'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="contact" className="py-32 bg-black relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            style={{ perspective: 1000 }}
          >
            <h2 className="text-[15vw] md:text-[12vw] font-display font-bold tracking-tighter uppercase leading-none text-white mb-8">
              LET&apos;S TALK
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-16 font-light"
          >
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:phyomin@innovix-solutions.com"
            className="group flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-bold text-2xl uppercase tracking-widest"
          >
            Send an Email
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="flex items-center gap-8 mt-32"
          >
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
