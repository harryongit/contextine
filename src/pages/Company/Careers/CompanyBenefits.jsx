import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefits = [
  {
    title: 'Remote-first',
    description: "We're a remote-first company with hubs in San Francisco, New York, Washington D.C., Toronto, and London.",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#1A4A85" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 10 40 10"/>
        <path d="M 20 50 Q 50 70 80 50 M 50 10 L 50 90" stroke="#1A4A85" strokeWidth="6" strokeLinecap="round"/>
        <path d="M 30 30 Q 50 10 70 30" stroke="#1A4A85" strokeWidth="6" strokeLinecap="round"/>
        <path d="M 30 70 Q 50 90 70 70" stroke="#1A4A85" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#E5F1FC'
  },
  {
    title: 'Paid family leave',
    description: "We encourage all parents to spend time with their children whether or not they are the primary caregiver. For either birthing or non-birthing parents, we provide 100% pay for 8 weeks.",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <path d="M 50 30 C 50 30, 20 -10, 10 30 C 0 70, 50 90, 50 90 C 50 90, 100 70, 90 30 C 80 -10, 50 30, 50 30 Z" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 60 40 C 60 40, 45 20, 40 40 C 35 60, 60 70, 60 70 C 60 70, 85 60, 80 40 C 75 20, 60 40, 60 40 Z" fill="#E11D48" stroke="#E11D48" strokeWidth="2"/>
      </svg>
    ),
    accent: '#FFE4E6'
  },
  {
    title: 'Comprehensive health coverage',
    description: "We care about our team’s well being — like, a lot. That's why we offer premium health, dental, and vision benefits for you and your dependents.",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <path d="M 10 30 L 90 30 L 80 80 Q 50 95 20 80 Z" stroke="#1E956C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 50 45 L 50 65 M 40 55 L 60 55" stroke="#1E956C" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#E7F6EF'
  },
  {
    title: 'Flexible time off',
    description: "We encourage our team to take the time they need to rest and recharge. (Just don’t forget to share a few vacation snaps on Slack!)",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <rect x="20" y="30" width="60" height="60" rx="10" stroke="#D97706" strokeWidth="6" strokeLinecap="round" strokeDasharray="30 10"/>
        <path d="M 35 15 L 35 30 M 65 15 L 65 30 M 20 50 L 80 50" stroke="#D97706" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="40" cy="70" r="4" fill="#D97706"/>
        <circle cx="60" cy="70" r="4" fill="#D97706"/>
      </svg>
    ),
    accent: '#FEF3C7'
  },
  {
    title: 'Team activities & offsites',
    description: "We value having fun and spending time as a team. Regular company activities, meetups, and offsites help us stay connected and grow together.",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <path d="M 50 20 L 20 80 L 80 80 Z" stroke="#6A47B2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="20" r="8" fill="#6A47B2"/>
        <path d="M 10 30 Q 20 10 30 20 M 70 20 Q 80 10 90 30 M 20 50 L 10 60 M 80 50 L 90 60" stroke="#6A47B2" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#FCF1FF'
  },
  {
    title: 'Career development',
    description: "From online classes and certifications to in-person training, we offer resources for ongoing personal and career growth.",
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
        <path d="M 10 40 L 50 20 L 90 40 L 50 60 Z" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 25 50 L 25 75 Q 50 90 75 75 L 75 50" stroke="#2563EB" strokeWidth="6" strokeLinecap="round"/>
        <path d="M 90 40 L 90 70" stroke="#2563EB" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#DBEAFE'
  }
];

export default function CompanyBenefits() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const doodleY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const doodleRotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden font-sans">
      
      {/* Background doodles */}
      <motion.div style={{ y: doodleY, rotate: doodleRotate }} className="absolute top-[20%] right-[-5%] text-[#FBBF24]/20 pointer-events-none -z-10 hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <path d="M 150 20 Q 280 150 150 280 Q 20 150 150 20" stroke="currentColor" strokeWidth="8" strokeDasharray="20 20" strokeLinecap="round"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[3rem] md:text-[4.5rem] font-extrabold text-[#0B1521] tracking-tight leading-tight inline-block relative"
          >
            Company benefits
            {/* Doodle stroke under title */}
            <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-4 w-[110%] left-[-5%] h-[20px] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0 10 Q 30 20 50 10 T 100 10" fill="none" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" />
            </motion.svg>
          </motion.h2>
        </div>

        {/* Benefits Grid (Doodle aesthetic) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {benefits.map((benefit, index) => {
            return (
              <motion.div 
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 100 } }
                }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2, scale: 1.02 }}
                className="group relative bg-white border-[3px] border-[#0B1521] rounded-[2rem] p-8 md:p-10 transition-all duration-300 z-10 flex flex-col items-start shadow-[6px_6px_0_0_rgba(11,21,33,1)] hover:shadow-[10px_10px_0_0_rgba(11,21,33,1)]"
              >
                {/* Background accent block (doodle style) */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full rounded-tr-[1.8rem] transition-colors duration-500 opacity-30 -z-10`} style={{ backgroundColor: benefit.accent }}></div>
                
                {/* Custom Doodle SVG Icon */}
                <div className="mb-6 bg-white border-2 border-[#0B1521] rounded-[1rem] p-3 shadow-[4px_4px_0_0_rgba(11,21,33,1)] transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {benefit.doodleIcon}
                </div>
                
                {/* Text Content */}
                <h3 className="text-2xl font-bold text-[#0B1521] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#334155] leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
