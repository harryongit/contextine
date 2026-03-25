import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Security is a product decision',
    desc: 'Security isn’t retrofitted at Contextine. It’s embedded into our architecture, design, and feature roadmap from the start. We’re built to meet enterprise needs.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 20 50 L 80 50 M 50 20 L 50 80 M 20 20 L 80 80 M 20 80 L 80 20" stroke="#0B1521" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
    color: '#FFE4E6' // pastel pink
  },
  {
    title: 'Control stays with the customer',
    desc: 'You decide how your data is stored, accessed, and used. Whether it’s AI usage, retention policies, or access provisioning, our defaults focus on safety and autonomy, not convenience.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <rect x="20" y="30" width="60" height="40" rx="10" stroke="#0B1521" strokeWidth="8" />
        <circle cx="35" cy="50" r="5" fill="#0B1521" />
        <circle cx="65" cy="50" r="5" fill="#0B1521" />
      </svg>
    ),
    color: '#E5F1FC' // pastel blue
  },
  {
    title: 'Transparency is non-negotiable',
    desc: 'Clear audit trails, visible configurations, and accessible documentation. We make sure you always know what’s happening with your data and why.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 50 15 C 20 15 10 50 10 50 C 10 50 20 85 50 85 C 80 85 90 50 90 50 C 90 50 80 15 50 15 Z" stroke="#0B1521" strokeWidth="8" />
        <circle cx="50" cy="50" r="15" stroke="#0B1521" strokeWidth="8" />
      </svg>
    ),
    color: '#E7F6EF' // pastel green
  }
];

export default function SecurityFirst() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Decorative Background Blob */}
      <motion.div 
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 bg-[#FBBF24]/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] -z-10 blur-3xl pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-6"
          >
            Security isn’t a feature. <br className="hidden md:block"/>
            <span className="relative inline-block text-[#1A4A85]">
              It’s the foundation.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 w-full h-[12px] overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M 0 8 Q 50 0 100 8" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
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
            Contextine’s approach to security is built on real, uncompromising foundations, not surface-level controls. These beliefs drive every product decision we make:
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border-2 border-[#0B1521] rounded-2xl p-8 shadow-[6px_6px_0_0_#0B1521] relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: feature.color }}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-[#0B1521] rounded-xl shadow-[2px_2px_0_0_#0B1521] flex items-center justify-center mb-6 transform group-hover:-rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1521] mb-3">{feature.title}</h3>
                <p className="text-[#475569] leading-relaxed font-medium text-[0.95rem]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}