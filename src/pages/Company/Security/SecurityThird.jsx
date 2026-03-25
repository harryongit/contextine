import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'End-to-end encryption',
    desc: 'We secure data in transit via TLS using HTTPS and SSL. Encryption at rest is enforced at the database level. Backup archives stored across regions are encrypted and maintained under retention and deletion policies.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 20 50 L 80 50 M 50 20 L 50 80 M 35 35 L 65 65 M 35 65 L 65 35" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Live monitoring and incident readiness',
    desc: 'We leverage Contextine’s capabilities, along with other security tools, to continuously monitor our systems in real-time. Backups are regularly scheduled and validated against recovery time goals to ensure operational continuity in case of a failure event.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 10 50 Q 25 30 50 50 T 90 50" stroke="#FBBF24" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="50" cy="50" r="15" fill="#FBBF24" />
      </svg>
    )
  },
  {
    title: 'Robust access and activity control',
    desc: 'We enforce role-based access with permission scoping and quarterly access reviews at the application level. We continuously log user access, review it quarterly, and track explicit approval trails for privileged roles. Physical office access is restricted using keycard systems and monitored by digital surveillance. Additionally, we disallow removable media usage.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <rect x="30" y="40" width="40" height="40" rx="4" stroke="#FBBF24" strokeWidth="8" />
        <path d="M 35 40 L 35 25 C 35 15 65 15 65 25 L 65 40" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function SecurityThird() {
  return (
    <section className="py-20 md:py-32 bg-[#1A4A85] text-white relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-solid">
      
      {/* Abstract Background SVGs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M 0 100 C 0 0 100 0 100 100 C 100 200 200 200 200 100" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            We protect your data <br className="hidden md:block"/>
            <span className="relative inline-block text-[#FBBF24]">
              at every step.
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 w-full h-[12px] overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M 0 8 Q 50 15 100 0" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
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
            Contextine follows a multi-layered security approach based on ISO 27001, protecting your data across its entire lifecycle.
          </motion.p>
        </div>

        {/* Feature Cards Grid (Dark Mode variants) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#123662] border-[3px] border-[#0B1521] rounded-2xl p-8 shadow-[6px_6px_0_0_#0B1521] relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBBF24]/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B1521] border-2 border-[#1E956C] rounded-2xl shadow-[2px_2px_0_0_#1E956C] flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#9CB3C9] leading-relaxed font-medium text-[0.95rem]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}