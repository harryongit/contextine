import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhyWeOnly() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const doodleY1 = useTransform(scrollYProgress, [0, 1], [-120, 150]);
  const doodleY2 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const doodleRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.15, ease: "easeOut" }
    })
  };

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white font-sans overflow-hidden relative">
      
      {/* Background Animated Doodles */}
      <motion.div style={{ y: doodleY1 }} className="absolute top-20 left-[-2%] md:left-[5%] pointer-events-none opacity-20 z-0 hidden md:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}
                d="M60 10 L60 110 M10 60 L110 60 M25 25 L95 95 M25 95 L95 25" stroke="#1A4A85" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8"
             />
          </svg>
      </motion.div>
      <motion.div style={{ y: doodleY2, rotate: doodleRotate }} className="absolute bottom-20 right-[-10%] md:right-[-2%] pointer-events-none opacity-[0.04] z-0">
          <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
             <motion.circle 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                cx="175" cy="175" r="150" stroke="#1E956C" strokeWidth="20" strokeDasharray="40 30" 
             />
             <motion.rect 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} viewport={{ once: true }}
                x="75" y="75" width="200" height="200" rx="30" stroke="#6A47B2" strokeWidth="15" transform="rotate(45 175 175)" 
             />
          </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-[2.2rem] font-medium text-[#111B33] tracking-tight relative inline-block text-center"
          >
            Trusted by risk and compliance teams everywhere.
            <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }} viewport={{ once: true }} className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[300px] h-[15px] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
               <path d="M 0 10 Q 50 20, 100 10" fill="none" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" />
            </motion.svg>
          </motion.h2>
        </div>

        {/* Masonry Grid Simulation (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          
          {/* Column 1 */}
          <motion.div 
            custom={0} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* 2500+ Card */}
            <div className="bg-[#E7F6EF] rounded-xl p-6 shadow-sm border border-[#D5EBE1]">
              <div className="flex items-center gap-3 mb-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#1E956C]">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#1E956C]">2500+</h3>
              </div>
              <p className="text-[#1A7C5B] text-[0.95rem] font-medium">Global customers and growing</p>
            </div>

            {/* Gartner Card */}
            <div className="bg-[#E5F1FC] rounded-xl p-6 md:p-8 shadow-sm border border-[#D3E5F6]">
              <div className="mb-6">
                {/* Gartner-like Logo */}
                <svg viewBox="0 0 120 30" className="h-8 w-auto">
                  <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#1A4A85">Gartner</text>
                  <circle cx="106" cy="24" r="2.5" fill="#1A4A85"/>
                </svg>
              </div>
              <p className="text-[#13508C] text-[1rem] leading-relaxed font-medium">
                Recognized as a sample vendor for Continuous Compliance Automation and Cyber GRC categories
              </p>
            </div>

            {/* G2 Score Card */}
            <div className="bg-[#FFF6D7] rounded-xl p-6 md:p-8 shadow-sm border border-[#F6E9BD] flex flex-col justify-between min-h-[170px]">
              {/* G2 Logo */}
              <div className="w-10 h-10 rounded-full bg-[#BA8E14] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg font-serif">G<sup className="text-[10px]">&sup2;</sup></span>
              </div>
              <div>
                <h3 className="text-[1.35rem] font-extrabold text-[#9A740C] mb-2 tracking-tight">4.9/5 on G2</h3>
                <p className="text-[#987413] text-[0.95rem] font-medium">Highest rated product in the category</p>
              </div>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            custom={1} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Capterra Card */}
            <div className="bg-[#E5F1FC] rounded-xl p-6 md:p-8 shadow-sm border border-[#D3E5F6]">
              <div className="flex items-center gap-2 mb-6">
                {/* Capterra Logo */}
                <svg viewBox="0 0 30 30" className="w-8 h-8 opacity-90">
                  <path d="M4 26 L15 15 L26 26 Z" fill="#1A4A85" transform="rotate(45 15 15)" />
                  <path d="M4 4 L15 15 L26 4 Z" fill="#2E70B8" transform="rotate(45 15 15)" />
                </svg>
                <span className="text-2xl font-bold tracking-tight text-[#1A4A85] font-sans">Capterra</span>
              </div>
              <h3 className="text-[1.65rem] font-bold text-[#1A4A85] mb-2">Top 5</h3>
              <p className="text-[#1A579B] text-[0.95rem] font-medium">GRC products on Capterra</p>
            </div>

            {/* 65+ Countries Card */}
            <div className="bg-[#E7F6EF] rounded-xl p-6 md:p-8 shadow-sm border border-[#D5EBE1]">
              <div className="mb-5">
                <div className="w-10 h-10 rounded-full bg-[#1E956C] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-[1.5rem] font-bold text-[#1E956C] mb-2">65+ countries</h3>
              <p className="text-[#1A7C5B] text-[0.95rem] font-medium">Proven across borders and industries</p>
            </div>

            {/* 75+ Partners Card */}
            <div className="bg-[#FCF1FF] rounded-xl p-6 md:p-8 shadow-sm border border-[#F3DEFA]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#6A47B2]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-[1.5rem] font-bold text-[#6A47B2]">75+ partners</h3>
              </div>
              <p className="text-[#6543A8] text-[0.95rem] font-medium">Across the cybersecurity ecosystem</p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            custom={2} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* 60+ Frameworks Card */}
            <div className="bg-[#F5EDFD] rounded-xl p-6 md:p-8 shadow-sm border border-[#EBE0F9]">
              <div className="flex items-center gap-4 mb-5">
                <div className="grid grid-cols-2 gap-1 text-[#6A47B2]">
                  <div className="w-[14px] h-[14px] bg-current rounded-[2px]" />
                  <div className="w-[14px] h-[14px] bg-current rounded-[2px]" />
                  <div className="w-[14px] h-[14px] bg-current rounded-[2px]" />
                  <div className="w-[14px] h-[14px] bg-current rounded-[2px]" />
                </div>
                <h3 className="text-[1.35rem] font-bold text-[#6A47B2]">60+ Frameworks</h3>
              </div>
              <p className="text-[#6543A8] text-[0.95rem] font-medium leading-[1.4]">
                To meet your requirements in any region or industry
              </p>
            </div>

            {/* G2 Momentum Leader Card */}
            <div className="bg-[#FFF6D7] rounded-xl p-6 md:p-8 shadow-sm border border-[#F6E9BD] flex flex-col min-h-[170px]">
              {/* G2 Logo */}
              <div className="w-10 h-10 rounded-full bg-[#BA8E14] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg font-serif">G<sup className="text-[10px]">&sup2;</sup></span>
              </div>
              <p className="text-[#9A740C] text-[1.05rem] font-bold leading-[1.4]">
                Momentum leader for 8 quarters straight and counting.
              </p>
            </div>

            {/* Cyber 60 Card */}
            <div className="bg-[#E7F6EF] rounded-xl p-6 md:p-8 shadow-sm border border-[#D5EBE1]">
              <div className="mb-5 flex items-start">
                <div className="bg-[#1E956C] px-3 py-2 text-white font-sans inline-block">
                  <div className="text-[0.45rem] font-medium tracking-widest uppercase mb-0.5">FORTUNE</div>
                  <div className="text-[1.4rem] font-extrabold leading-none tracking-tight">CYBER</div>
                  <div className="text-[1.4rem] font-extrabold leading-none tracking-tight text-right w-full pr-1">60</div>
                </div>
              </div>
              <p className="text-[#1A7C5B] text-[0.95rem] font-medium leading-relaxed">
                Recognized as one of the top VC-backed cybersecurity company
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
