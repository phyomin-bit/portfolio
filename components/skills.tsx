'use client';

import { motion } from 'motion/react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Next.js',
  'React Router', 'React Hook Form', 'Redux', 'Zustand', 'Axios',
  'SWR', 'Shadcn UI', 'Vite', 'Git', 'GitHub', 'Node.js', 'Express.js', 'MongoDB'
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="skills" className="py-32 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-16 uppercase"
        >
          Tech Stack
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              className="px-6 py-4 rounded-full border border-white/20 bg-neutral-900/30 text-white font-medium text-lg cursor-default transition-colors duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
