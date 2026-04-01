import React from 'react';
import { motion } from 'framer-motion';

const partnerTypes = [
  {
    title: "Solution Providers",
    description: "Expert consulting and implementation partners who help clients design and execute their GRC strategy using the Contextine platform.",
    benefits: ["Tiered Revenue Sharing", "Technical Certification", "Priority Implementation Support"],
    color: "#10b981"
  },
  {
    title: "Technology Partners",
    description: "Cloud providers, security tools, and SaaS platforms that integrate directly with Contextine for automated evidence collection.",
    benefits: ["Co-Marketing Opportunities", "Deep API Native Access", "Joint Product Development"],
    color: "#6366f1"
  },
  {
    title: "Audit Partners",
    description: "Accounting and CPA firms that use Contextine to streamline their audit workflows and provide more value to their clients.",
    benefits: ["Automated Evidence Review", "Custom Branding", "Auditor Client Access Control"],
    color: "#3b82f6"
  }
];

export default function PartnerGrid() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-[#D1FAE5] text-[#10B981] font-bold tracking-widest uppercase text-[0.7rem] md:text-[0.85rem] px-4 py-1.5 rounded-full border-2 border-[#10B981] mb-6 shadow-[2px_2px_0_0_#10B981]"
          >
            PARTNER NETWORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-tight mb-6"
          >
            Empower the World to be <br /> <span className="text-[#10B981] italic">Risk-Resilient</span>
          </motion.h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Choose the partnership model that best fits your business goals. Together, we'll build a safer, more compliant digital landscape.
          </p>
        </div>

        {/* Partner Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border-2 border-[#0B1521] rounded-[2.5rem] p-10 shadow-[8px_8px_0_0_#0B1521] hover:shadow-[12px_12px_0_0_#0B1521] transition-all flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Header color accent */}
              <div 
                className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 border-2 border-[#0B1521] shadow-[3px_3px_0_0_#0B1521]"
                style={{ backgroundColor: `${type.color}20`, color: type.color }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B1521] mb-6 uppercase tracking-tight">
                {type.title}
              </h3>

              <p className="text-[#64748B] text-[1.05rem] leading-relaxed mb-10">
                {type.description}
              </p>

              <div className="mt-auto space-y-4 pt-8 border-t-2 border-[#F1F5F9] border-dashed">
                <span className="text-[0.75rem] font-black tracking-widest text-[#94A3B8] uppercase px-1">Key Benefits:</span>
                <ul className="space-y-3">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-[#334155] font-bold text-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={type.color} strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-32 p-12 md:p-20 bg-white border-4 border-[#0B1521] rounded-[4rem] text-[#0B1521] relative overflow-hidden shadow-[16px_16px_0_0_#0B1521]">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-black leading-[1.1] mb-8">Ready to grow with <span className="text-[#10B981] italic">Contextine?</span></h2>
            <p className="text-xl text-[#64748B] mb-12 max-w-2xl mx-auto">
              Our partner ecosystem is expanding rapidly across North America, Europe, and Asia. Apply now to unlock your business potential.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#10B981] text-white px-10 py-5 rounded-full font-bold shadow-[6px_6px_0_0_#0B1521] border-2 border-[#0B1521] hover:translate-y-[-4px] transition-all"
              >
                Apply to Program
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B1521] px-10 py-5 rounded-full font-bold shadow-[6px_6px_0_0_#0B1521] border-2 border-[#0B1521] hover:translate-y-[-4px] transition-all"
              >
                Request Partnership Guide
              </motion.button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-[#10B981] opacity-5 rounded-full"></div>
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#10B981] opacity-5 rounded-full rotate-45"></div>
        </div>

      </div>
    </section>
  );
}
