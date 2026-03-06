'use client';

import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Front End Developer',
    company: 'Innovix Solution Software house',
    period: 'Present',
    description: 'Specializing in React.js and Next.js to build modern web applications.',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    id: 2,
    role: 'Front End Developer',
    company: 'MMSIT Solution',
    period: '8 months',
    description: 'Worked on various projects and improved skills in modern web technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];

export function Experience() {
  const ease = [0.16, 1, 0.3, 1] as const;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-32 bg-black relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-24 uppercase"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-white origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
                  className="absolute left-0 md:left-[8px] top-2 w-8 h-8 rounded-full bg-black border-4 border-white flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 mt-2 md:mt-0 border border-white/10 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <span className="text-xl text-neutral-400 font-medium block mb-6">
                  {exp.company}
                </span>

                <p className="text-neutral-400 text-lg mb-8 max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-bold uppercase tracking-wider text-black bg-white px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
