import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Monitored, not just maintained',
    desc: 'We automate control checks, evidence collection, and risk tracking in real time, because compliance is a daily practice, not a yearly panic. Strict access controls, regular vulnerability scans, and a clearly defined incident response plan are the norm.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50 Z" stroke="#0B1521" strokeWidth="6" />
        <circle cx="50" cy="50" r="10" fill="#0B1521" />
      </svg>
    ),
    color: '#FEF3C7' // pastel yellow
  },
  {
    title: 'Audit - ready, always',
    desc: 'Our posture is validated. The controls, infrastructure, and processes go through regular independent audits. You can view our latest reports in the Trust Vault.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <rect x="25" y="15" width="50" height="70" rx="5" stroke="#0B1521" strokeWidth="6" />
        <path d="M 40 40 L 70 40 M 30 60 L 70 60 M 30 75 L 50 75" stroke="#0B1521" strokeWidth="6" strokeLinecap="round" />
        <circle cx="30" cy="40" r="4" fill="#0B1521" />
      </svg>
    ),
    color: '#E0E7FF' // pastel indigo
  },
  {
    title: 'Certified and trusted',
    desc: 'Our security program meets global security and privacy frameworks like SOC 2, GDPR, ISO 27001, ISO 42001, and more. Check our Trust Vault for the latest reports and certifications.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <path d="M 50 10 L 85 25 L 85 55 C 85 75 60 90 50 95 C 40 90 15 75 15 55 L 15 25 Z" stroke="#0B1521" strokeWidth="6" strokeLinejoin="round" />
        <path d="M 35 55 L 45 65 L 65 40" stroke="#0B1521" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#D1FAE5' // pastel emerald
  }
];

export default function SecuritySecond() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header - Center Aligned this time */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-6"
          >
            We build it. We trust it. <br className="hidden md:block"/>
            <span className="relative inline-block text-[#1E956C]">
              We run on it.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-3 w-[110%] -left-[5%] h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 12 C 25 5 75 5 100 12" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
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
            Our compliance and security programs on the Contextine Platform. We use the same features, automations, and monitoring that our customers do, every day.
          </motion.p>
        </div>

        {/* Alternate Layout: Staggered Large Cards */}
        <div className="flex flex-col gap-10 md:gap-14">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Custom abstract shape container for icon */}
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative flex items-center justify-center">
                 <div className="absolute inset-0 border-[3px] border-[#0B1521] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] transition-transform duration-500 hover:rotate-90 hover:rounded-[60%_40%_30%_70%_/_50%_40%_50%_60%]" style={{ backgroundColor: feature.color }}></div>
                 <div className="relative z-10 scale-150">{feature.icon}</div>
              </div>
              
              {/* Text Content */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1521] mb-4">{feature.title}</h3>
                <p className="text-[#475569] leading-relaxed font-medium text-[1.05rem] md:text-lg max-w-2xl">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}