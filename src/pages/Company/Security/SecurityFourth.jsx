import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Zero cross-customer training',
    desc: 'Your data powers only the AI services you opt into. It’s never used to train models outside your environment or for other customers.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 20 50 L 40 50 M 60 50 L 80 50 M 50 20 L 50 40 M 50 60 L 50 80" stroke="#0B1521" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="50" r="10" stroke="#0B1521" strokeWidth="6" strokeDasharray="4 4" />
      </svg>
    ),
    color: '#FEE2E2' // pastel red
  },
  {
    title: 'Minimal and purpose-bound retention',
    desc: 'Customer data is retained for five weeks post-offboarding, archived for one year in encrypted cross-region backups, and then securely deleted.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <circle cx="50" cy="50" r="35" stroke="#0B1521" strokeWidth="6" />
        <path d="M 50 25 L 50 50 L 70 60" stroke="#0B1521" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
    color: '#E0E7FF' // pastel indigo
  },
  {
    title: 'Sub-processor Transparency',
    desc: 'We only work with sub-processors that meet our security standards, each of which is actively documented on our Trust Vault.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <rect x="20" y="20" width="60" height="60" rx="5" stroke="#0B1521" strokeWidth="6" />
        <path d="M 20 45 L 80 45" stroke="#0B1521" strokeWidth="6" />
        <circle cx="40" cy="65" r="4" fill="#0B1521" />
        <circle cx="60" cy="65" r="4" fill="#0B1521" />
      </svg>
    ),
    color: '#D1FAE5' // pastel emerald
  }
];

export default function SecurityFourth() {
  return (
    <section className="py-20 md:py-32 bg-[#E5F1FC] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Playful Floating Shapes */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-16 h-16 border-[4px] border-[#1A4A85] rounded-full hidden md:block"
      />
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, 90, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-20 h-20 border-[4px] border-[#1E956C] hidden md:block"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-6"
          >
            We respect boundaries, <br className="hidden md:block"/>
            <span className="relative inline-block text-[#6A47B2]">
              digital and human.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 w-full h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 Q 50 0 100 10 T 150 10" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" />
              </motion.svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#334155] text-lg md:text-[1.15rem] leading-[1.7] font-medium"
          >
            Contextine is designed to prioritize privacy from day one. You stay in control—always.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              className="bg-white border-2 border-[#0B1521] rounded-3xl p-8 shadow-[4px_4px_0_0_#0B1521] hover:shadow-[8px_8px_0_0_#0B1521] hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-3xl pointer-events-none" style={{ backgroundColor: '#0B1521' }}></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-[3px] border-[#0B1521] mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1521] mb-4">{feature.title}</h3>
                <p className="text-[#475569] leading-relaxed font-medium text-[0.95rem]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}