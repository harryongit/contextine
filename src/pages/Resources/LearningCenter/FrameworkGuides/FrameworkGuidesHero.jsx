import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FrameworkGuidesHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const shapeY1 = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const shapeY3 = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const shapeY4 = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  return (
    <div
      ref={containerRef}
      className="bg-[#E5F1FC] pt-16 pb-12 md:pt-24 md:pb-16 font-sans relative overflow-hidden"
    >

      {/* Background Doodle */}
      <motion.div
        style={{ y: shapeY1 }}
        className="absolute top-[30%] text-[#1A4A85] pointer-events-none opacity-20 z-0"
      >
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
          <path
            d="M -100 200 C 100 0, 300 400, 600 100"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
        </svg>
      </motion.div>

      {/* Background Shapes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end pointer-events-none w-full h-[220px] md:h-[300px] overflow-hidden">

        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient id="fadeBlueGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#1A4A85" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#1A4A85" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1A4A85" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div style={{ y: shapeY1, rotate: shapeY1 }} className="absolute left-[-5%] bottom-[-30px] w-64 md:w-80 h-64 md:h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="url(#fadeBlueGrad)" d="M100 0 L115 70 L180 40 L140 100 L180 160 L115 130 L100 200 L85 130 L20 160 L60 100 L20 40 L85 70 Z" />
          </svg>
        </motion.div>

        <motion.div style={{ y: shapeY2 }} className="absolute left-[25%] bottom-0 w-56 md:w-72 h-56 md:h-72">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="url(#fadeBlueGrad)" d="M0 200 C0 89.54 89.54 0 200 0 L200 200 Z" />
          </svg>
        </motion.div>

        <motion.div style={{ y: shapeY3 }} className="absolute left-[50%] bottom-0 w-80 md:w-[26rem] h-48 md:h-56">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path fill="url(#fadeBlueGrad)" d="M0 100 A 100 100 0 0 1 200 100 Z" />
          </svg>
        </motion.div>

        <motion.div style={{ y: shapeY4 }} className="absolute left-[75%] bottom-[-20px] w-60 md:w-80 h-60 md:h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <rect x="20" y="20" width="160" height="160" rx="30" fill="url(#fadeBlueGrad)" />
          </svg>
        </motion.div>

      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[460px]">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[48%] mb-10 md:mb-0 md:pr-14"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border-2 border-[#1A4A85] text-[#1A4A85] text-xs font-bold uppercase tracking-wider mb-6 shadow-[2px_2px_0_0_#1A4A85]">
            Framework Guides
          </div>
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] font-extrabold text-[#0B1521] mb-5 leading-[1.1] tracking-tight">
            Compliance <span className="text-[#1A4A85]">Framework</span> Guides
          </h1>

          <p className="text-[#202939] text-[0.95rem] md:text-[1.05rem] font-medium leading-[1.6]">
            Navigate the complexities of global compliance with ease. Our framework guides
            provide clear, actionable roadmaps to achieve and maintain certifications like
            SOC2, ISO27001, PCI-DSS, and more.
          </p>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-[52%] flex justify-center md:justify-end gap-4"
        >
          <div className="w-[180px] md:w-[260px] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-lg border-2 border-[#0B1521] hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=700&fit=crop"
              alt="Knowledge"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[140px] md:w-[200px] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-lg border-2 border-[#0B1521] hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=700&fit=crop"
              alt="Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
