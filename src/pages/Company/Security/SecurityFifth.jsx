import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Industry-leading vulnerability testing',
    desc: 'To ensure safety, we run internal vulnerability assessments after every major release on all platforms, conduct external VAPT assessments twice a year, and track all remediations.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 50 15 L 85 85 L 15 85 Z" stroke="#0B1521" strokeWidth="8" strokeLinejoin="round" />
        <path d="M 50 40 L 50 65" stroke="#0B1521" strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="75" r="4" fill="#0B1521" />
      </svg>
    ),
    color: '#FFE4E6' // pastel pink
  },
  {
    title: 'Certified security team',
    desc: 'Our in-house VAPT experts hold certifications like CEH, CCNA, and EJPT, and follow CREST-backed standards for global compatibility.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <circle cx="50" cy="40" r="20" stroke="#0B1521" strokeWidth="8" />
        <path d="M 30 85 C 30 65 70 65 70 85" stroke="#0B1521" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
    color: '#FEF3C7' // pastel yellow
  },
  {
    title: 'Comprehensive testing coverage',
    desc: 'We conduct assessments across all critical assets, from web apps and APIs to cloud infrastructure, mobile platforms, and source code.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <rect x="15" y="25" width="70" height="50" rx="5" stroke="#0B1521" strokeWidth="8" />
        <path d="M 35 75 L 65 75 M 40 85 L 60 85" stroke="#0B1521" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
    color: '#E0E7FF' // pastel indigo
  }
];

export default function SecurityFifth() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Playful background splatters */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#1E956C]/5 rounded-full blur-[80px] pointer-events-none -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4.2rem] font-extrabold text-[#0B1521] leading-[1.05] tracking-tight mb-6"
          >
            What we build, we break, <br className="hidden md:block"/>
            <span className="relative inline-block text-[#1E956C]">
              before anyone else can.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 -left-4 w-[110%] h-[20px] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 0 10 C 20 20 80 0 100 10" fill="none" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#334155] text-lg md:text-[1.15rem] leading-[1.7] font-medium max-w-2xl"
          >
            Contextine’s product security covers development, deployment, and post-release, so you’re protected at every layer.
          </motion.p>
        </div>

        {/* Feature List (Vertical Staggered Cards) */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ x: 10 }}
              className="bg-white border-2 border-[#0B1521] rounded-2xl p-6 md:p-8 shadow-[4px_4px_0_0_#0B1521] flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-default transition-all duration-300"
            >
              {/* Icon Container */}
              <div 
                className="w-20 h-20 rounded-2xl border-2 border-[#0B1521] flex items-center justify-center shrink-0 transform group-hover:rotate-12 transition-transform duration-300" 
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1521] mb-2">{feature.title}</h3>
                <p className="text-[#475569] leading-relaxed font-medium text-[0.95rem] md:text-base">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}