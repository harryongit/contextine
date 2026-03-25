import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-time endpoint protection',
    desc: 'All employee devices use full-disk encryption, USB blocking, and remote wipe via MDM. EDR and anti-malware tools are deployed with live threat intel and auto-updates.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect x="25" y="15" width="50" height="70" rx="5" stroke="#0B1521" strokeWidth="6" />
        <circle cx="50" cy="50" r="10" stroke="#0B1521" strokeWidth="6" />
      </svg>
    ),
    color: '#D1FAE5' // pastel green
  },
  {
    title: 'Strict access governance',
    desc: 'We enforce role-based, least-privilege access and require MFA for every account. Every access event is logged, monitored, and retained. We run routine internal audits.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 30 40 L 30 30 C 30 15 70 15 70 30 L 70 40" stroke="#0B1521" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="40" width="60" height="40" rx="4" stroke="#0B1521" strokeWidth="6" />
        <circle cx="50" cy="60" r="5" fill="#0B1521" />
      </svg>
    ),
    color: '#E0E7FF' // pastel blue
  },
  {
    title: 'A security-aware workforce',
    desc: 'All employees complete annual security training. We reinforce awareness with continuous phishing simulations, assessments, and ongoing policy refreshers.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 25 75 L 50 25 L 75 75 Z" stroke="#0B1521" strokeWidth="6" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="5" stroke="#0B1521" strokeWidth="6" />
      </svg>
    ),
    color: '#FEE2E2' // pastel red
  }
];

export default function SecuritySixth() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-6"
          >
            We protect from the ground up, <br className="hidden md:block"/>
            <span className="relative inline-block text-[#1A4A85]">
              starting with our people.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 -right-4 w-[110%] h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 C 20 0 80 20 100 10" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
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
            We secure Contextine internally with the same rigor we offer our customers.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
              className="bg-white border-2 border-[#0B1521] rounded-[2rem] p-8 shadow-[4px_4px_0_0_#0B1521] hover:shadow-[8px_8px_0_0_#0B1521] transition-all duration-300 relative group"
            >
              {/* Abstract decorative top strip inside card */}
              <div className="absolute top-0 left-0 right-0 h-3 border-b-2 border-[#0B1521]" style={{ backgroundColor: feature.color }}></div>
              
              <div className="flex flex-col items-start mt-4">
                <div className="w-16 h-16 rounded-xl border-2 border-[#0B1521] mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'white' }}>
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