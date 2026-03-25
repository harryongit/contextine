import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const awards = [
  {
    text: "America's Best Startup Employers",
    icon: (
      <div className="w-10 h-10 bg-black flex items-center justify-center font-serif text-white text-2xl font-bold rounded-lg border-2 border-dashed border-gray-400">
        F
      </div>
    ),
    rotation: -3,
    color: '#FFE4E6'
  },
  {
    text: "SMBTech 50 Honoree",
    icon: (
      <div className="w-10 h-10 bg-black flex flex-col items-center justify-center text-white rounded-lg">
        <span className="font-bold text-[0.85rem] leading-none tracking-wide">GGV</span>
        <span className="text-[0.4rem] uppercase opacity-80 mt-0.5 tracking-widest">Capital</span>
      </div>
    ),
    rotation: 2,
    color: '#E5F1FC'
  },
  {
    text: "Best Software Awards for Highest Satisfaction Products",
    icon: (
      <div className="w-10 h-10 rounded-full bg-[#12213F] flex items-center justify-center text-white font-bold text-xl border-2 border-[#12213F]">
        G<span className="text-[0.6rem] relative -top-1 ml-0.5">2</span>
      </div>
    ),
    rotation: -2,
    color: '#E7F6EF'
  },
  {
    text: "Most Promising AI Startups",
    icon: (
      <div className="w-10 h-10 bg-[#005FF9] flex items-center justify-center rounded-lg shadow-inner">
        <span className="text-white font-bold text-[0.45rem] tracking-widest uppercase">Insider</span>
      </div>
    ),
    rotation: 4,
    color: '#FEF3C7'
  },
  {
    text: "Next Billion Dollar Startups",
    icon: (
      <div className="w-10 h-10 bg-black flex items-center justify-center font-serif text-white text-2xl font-bold rounded-lg box-border border-b-4 border-gray-700">
        F
      </div>
    ),
    rotation: -4,
    color: '#FCF1FF'
  },
  {
    text: "Rocket List of 100 Most Exciting Tech Companies",
    icon: (
      <div className="w-10 h-10 bg-[#FFE500] flex items-center justify-center rounded-lg border-2 border-black">
        <span className="text-black font-bold text-[0.8rem] tracking-tight">otta</span>
      </div>
    ),
    rotation: 3,
    color: '#DBEAFE'
  }
];

export default function CheckOutAwards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const doodleMove = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-b-[3px] border-[#0B1521] border-dashed">
      
      {/* Background Doodles */}
      <motion.div style={{ x: doodleMove }} className="absolute top-[10%] left-[5%] text-[#1E956C]/10 pointer-events-none z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M 50 100 Q 100 0 150 100 T 250 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div style={{ x: doodleMove, rotate: 180 }} className="absolute bottom-[20%] right-[0%] text-[#6A47B2]/10 pointer-events-none z-0 max-w-xs">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M 50 100 Q 100 0 150 100 T 250 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0B1521] mb-6 tracking-tight leading-[1.1] inline-block relative"
          >
            Don't believe us? <br className="md:hidden" />
            Check out our <span className="text-[#1A4A85] relative inline-block">awards!
              {/* Hand-drawn scribble under awards */}
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className="absolute -bottom-2 left-0 w-full h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 Q 25 0 50 12 T 100 5 L 80 15" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#334155] text-lg md:text-[1.15rem] font-medium max-w-[800px] mx-auto leading-[1.7]"
          >
            Join a team that is recognized by top organizations and media outlets for our innovative compliance automation platform, exemplary GRC leadership, and notable growth.
          </motion.p>
        </div>

        {/* Awards 'Sticker' Badges Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={{
                  hidden: { opacity: 0, scale: 0.8, rotate: 0 },
                  visible: { opacity: 1, scale: 1, rotate: award.rotation, transition: { type: 'spring', stiffness: 200, damping: 15 } }
              }}
              whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
              className="group relative bg-white border-2 border-[#0B1521] rounded-2xl p-2 pr-6 flex items-center gap-4 transition-all duration-300 shadow-[4px_4px_0_0_#0B1521] hover:shadow-[6px_6px_0_0_#0B1521] cursor-pointer"
            >
              {/* Background color accent that slides in */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ backgroundColor: award.color }}></div>
              
              {/* White deeply-rounded square to hold the individual icon */}
              <div className="bg-white border-2 border-[#0B1521] rounded-xl p-1 shadow-[2px_2px_0_0_#0B1521] z-10 transition-transform group-hover:-rotate-3">
                <div className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-lg">
                  {award.icon}
                </div>
              </div>
              
              {/* Award Text */}
              <span className="text-[#0B1521] font-bold text-sm md:text-[0.95rem] tracking-tight z-10 max-w-[180px] leading-snug">
                {award.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
