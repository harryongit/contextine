import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'ISO 42001 certified', desc: 'We’re one of the first companies in the space to achieve compliance with ISO 42001—the gold standard for AI management systems.', color: '#FBBF24' },
  { title: 'Privacy at the core', desc: 'Your data is encrypted and processed securely, with strict guardrails to ensure it’s only used for your benefit.', color: '#1E956C' },
  { title: 'Your choice matters', desc: 'AI features are opt-in and configurable, so you decide how much automation you need.', color: '#6A47B2' },
  { title: 'Balance over hype', desc: 'We embrace AI’s potential to improve outcomes, while keeping roll-back mechanisms in place for full control.', color: '#F472B6' },
  { title: 'Separation by default', desc: 'Contextine’s AI uses your data only for the services you choose. It’s never used to train external models, and is retained only as long as needed.', color: '#3B82F6' },
  { title: 'Audited for resilience', desc: 'Data is safeguarded with encryption, secure APIs, and multi-layered defenses. We follow ISO 42001 guidelines to reduce risk.', color: '#8B5CF6' },
  { title: 'Ethics in every layer', desc: 'Contextine AI follows principles like fairness, accountability, and transparency. Third-party audits ensure you’re always in control.', color: '#10B981' },
];

export default function SecuritySeventh() {
  return (
    <section className="py-20 md:py-32 bg-[#111B33] text-white relative overflow-hidden font-sans border-t-[3px] border-[#111B33] border-solid">
      
      {/* Heavy Doodle Background for dark mode */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
      >
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 10" />
          <path d="M 10 100 L 190 100 M 100 10 L 100 190 M 35 35 L 165 165 M 35 165 L 165 35" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            We build AI you can trust, <br className="hidden md:block"/>
            <span className="relative inline-block text-[#FBBF24]">
              by design.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 w-full h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 Q 50 0 100 10" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" />
              </motion.svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#9CB3C9] text-lg md:text-[1.15rem] leading-[1.7] font-medium"
          >
            From how we train it to how you control it, Contextine Teammates is built with clear boundaries, ethical defaults, and complete transparency.
          </motion.p>
        </div>

        {/* Bento Grid Layout for 7 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {features.map((feature, index) => {
            // First item spans 2 columns on lg, 2 on md
            const isFeatured = index === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`bg-[#12213F] border-[3px] border-[#0B1521] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0_0_#0B1521] relative group overflow-hidden ${isFeatured ? 'md:col-span-2 lg:col-span-2 bg-[#1A4A85] !border-[#FBBF24] shadow-[6px_6px_0_0_#FBBF24]' : ''}`}
              >
                {/* Colored accent dot */}
                <div className="absolute top-6 right-6 w-4 h-4 rounded-full" style={{ backgroundColor: feature.color }}></div>
                
                <h3 className={`font-bold mb-3 ${isFeatured ? 'text-2xl md:text-3xl text-white' : 'text-xl text-white'}`}>{feature.title}</h3>
                <p className={`font-medium leading-relaxed ${isFeatured ? 'text-[#D1E0F1] text-[1.05rem] md:text-lg max-w-xl' : 'text-[#9CB3C9] text-[0.95rem]'}`}>{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}