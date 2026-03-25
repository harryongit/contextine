import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhyWeAreDifferent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const doodleY = useTransform(scrollYProgress, [0, 1], [-80, 150]);
  const doodleRotate = useTransform(scrollYProgress, [0, 1], [-5, 10]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-white font-sans overflow-hidden relative">
      
      {/* Background Animated Tech Doodle */}
      <motion.div
         style={{ y: doodleY, rotate: doodleRotate }}
         className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none flex justify-center items-center opacity-[0.05] z-0"
      >
         <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
            <motion.path
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }} viewport={{ once: true }}
               d="M 100 700 C 300 200, 600 0, 900 400 S 1300 300, 1100 100"
               stroke="#0B1A3D" strokeWidth="6" strokeLinecap="round" strokeDasharray="15 25"
            />
            <circle cx="200" cy="500" r="40" stroke="#0B1A3D" strokeWidth="4" />
            <path d="M 800 600 L 850 650 M 800 650 L 850 600" stroke="#0B1A3D" strokeWidth="6" strokeLinecap="round" />
            <motion.path
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
               d="M 50 200 Q 150 150 200 250 T 350 200" stroke="#7E5FF5" strokeWidth="4" strokeLinecap="round"
            />
         </svg>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column - Mockup UI */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative w-full h-[450px] md:h-[550px] bg-[#F7F9FA] rounded-[2rem] border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner group"
          >
            {/* Fake Browser/App Chrome top bar */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white border-b border-gray-100 flex items-center px-4 z-0">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-red-400 transition-colors duration-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-amber-400 transition-colors duration-300 delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-green-400 transition-colors duration-300 delay-150"></div>
               </div>
               <div className="mx-auto bg-gray-50 text-gray-400 text-[11px] font-medium py-1.5 px-24 rounded-full flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#34D399]"><path d="M12 2L2 22h20L12 2z"/></svg>
                  app.contextine.io
               </div>
            </div>

            {/* Faint Dashboard Background Elements */}
            <div className="absolute inset-0 pt-16 px-6 md:px-10 flex flex-col pointer-events-none select-none opacity-40">
                <div className="w-full flex gap-4 mt-6">
                    <div className="bg-white rounded-xl p-5 shadow-sm w-1/3 border border-gray-50 h-[90px]">
                        <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-wide">Employees at Risk</div>
                        <div className="text-2xl font-bold text-gray-600">18</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm w-1/3 border border-gray-50 h-[90px]">
                        <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-wide">Audits In Progress</div>
                        <div className="text-2xl font-bold text-gray-600">3</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm w-1/3 border border-gray-50 h-[90px]">
                        <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-wide">Trust Vault Views</div>
                        <div className="text-2xl font-bold text-gray-600">42</div>
                    </div>
                </div>

                <div className="w-full flex gap-6 mt-6">
                     <div className="w-[35%] flex flex-col gap-4">
                         <div className="bg-white rounded-xl h-[50px] w-full shadow-sm border border-gray-50"></div>
                         <div className="bg-white rounded-xl h-[50px] w-full shadow-sm border border-gray-50"></div>
                     </div>
                     <div className="w-[65%] bg-white rounded-xl min-h-[200px] shadow-sm border border-gray-50 p-5">
                         <div className="text-[12px] font-bold text-gray-400 mb-8">Risk Heat Map</div>
                         <div className="flex gap-4">
                             <div className="w-1/3 h-10 bg-gray-50 rounded-lg"></div>
                             <div className="w-1/3 h-10 bg-gray-50 rounded-lg"></div>
                             <div className="w-1/3 h-10 bg-gray-50 rounded-lg"></div>
                         </div>
                     </div>
                </div>
            </div>

            {/* Floating Compliance Progress Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10 w-[90%] md:w-[440px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(30,41,59,0.15)] border border-gray-100 p-8 transform translate-y-4 md:translate-x-6 hover:shadow-[0_30px_70px_-15px_rgba(30,41,59,0.2)] transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-6 h-6 bg-[#0B1A3D] text-[#34D399] rounded-[5px] flex items-center justify-center text-[11px] font-extrabold shadow-sm relative overflow-hidden group-hover:rotate-6 transition-transform">
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    Ps
                 </div>
                 <h3 className="text-[1.15rem] font-bold text-[#0B1A3D] tracking-tight">Compliance Progress</h3>
              </div>
              
              <div className="flex justify-between items-center pr-2">
                 {/* Left Donut */}
                 <div className="relative w-[150px] h-[150px]">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="42" stroke="#F1F5F9" strokeWidth="8" fill="none" />
                       <motion.circle 
                          initial={{ strokeDashoffset: 264 }} 
                          whileInView={{ strokeDashoffset: 264 * (1 - 0.91) }} 
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} 
                          viewport={{ once: true }}
                          cx="50" cy="50" r="42" stroke="#34D399" strokeWidth="8" fill="none" 
                          strokeDasharray="264" strokeLinecap="round"
                       />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                       <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} className="text-[2rem] font-bold text-[#0B1A3D] leading-none mb-1">91%</motion.span>
                       <span className="text-[0.65rem] text-slate-500 font-semibold uppercase tracking-wider">Compliant</span>
                    </div>
                 </div>

                 {/* Right Vertical Stats */}
                 <div className="flex flex-col gap-5">
                    
                    {/* Item 1 */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="flex items-center gap-4">
                       <div className="relative w-10 h-10 flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                            <motion.circle initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 283 * (1 - 0.92) }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }} cx="50" cy="50" r="45" stroke="#34D399" strokeWidth="10" fill="none" strokeDasharray="283" strokeLinecap="round"/>
                          </svg>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" className="w-[18px] h-[18px]">
                             <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                       </div>
                       <div>
                          <div className="text-[1rem] font-bold text-[#0B1A3D] leading-none mb-1">92%</div>
                          <div className="text-[0.75rem] text-slate-400 font-medium leading-none">Policies</div>
                       </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} viewport={{ once: true }} className="flex items-center gap-4">
                       <div className="relative w-10 h-10 flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                            <motion.circle initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 283 * (1 - 0.91) }} transition={{ duration: 1, delay: 1.0 }} viewport={{ once: true }} cx="50" cy="50" r="45" stroke="#34D399" strokeWidth="10" fill="none" strokeDasharray="283" strokeLinecap="round"/>
                          </svg>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" className="w-[18px] h-[18px]">
                             <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path>
                          </svg>
                       </div>
                       <div>
                          <div className="text-[1rem] font-bold text-[#0B1A3D] leading-none mb-1">91%</div>
                          <div className="text-[0.75rem] text-slate-400 font-medium leading-none whitespace-nowrap">Evidence Task</div>
                       </div>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} viewport={{ once: true }} className="flex items-center gap-4">
                       <div className="relative w-10 h-10 flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                            <motion.circle initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 283 * (1 - 0.93) }} transition={{ duration: 1, delay: 1.2 }} viewport={{ once: true }} cx="50" cy="50" r="45" stroke="#34D399" strokeWidth="10" fill="none" strokeDasharray="283" strokeLinecap="round"/>
                          </svg>
                          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" className="w-[18px] h-[18px]">
                             <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                          </svg>
                       </div>
                       <div>
                          <div className="text-[1rem] font-bold text-[#0B1A3D] leading-none mb-1">93%</div>
                          <div className="text-[0.75rem] text-slate-400 font-medium leading-none whitespace-nowrap">Automated Tests</div>
                       </div>
                    </motion.div>

                 </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <h2 className="text-[#0B1A3D] text-[2.5rem] lg:text-[3.25rem] font-bold leading-[1.15] mb-8 pb-2 tracking-tight">
              Contextine exists because <span className="relative inline-block whitespace-nowrap">
                  spreadsheets
                  <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }} viewport={{ once: true }} className="absolute -bottom-1 left-0 w-full h-[15px] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                     <path d="M 0 10 Q 25 18, 50 10 T 100 10" fill="none" stroke="#7E5FF5" strokeWidth="4" strokeLinecap="round" />
                  </motion.svg>
              </span> were never enough.
            </h2>
            
            <ul className="flex flex-col gap-6 mb-8 mt-2">
              {[
                "Contextine is for every builder who's lost momentum to security busywork.",
                "For every startup that hit a wall at procurement.",
                "For every CISO tired of duct-taping GRC operations with spreadsheets."
              ].map((text, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.15) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                   <div className="mt-1 flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#7E5FF5] fill-current shadow-sm rounded-full">
                         <circle cx="12" cy="12" r="12" />
                         <path d="M10.5 7.5L14.5 12L10.5 16.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M7 12H14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                   </div>
                   <span className="text-[#1A2644] text-[1.1rem] font-semibold leading-relaxed">
                     {text}
                   </span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} viewport={{ once: true }}
               className="text-[#515E77] text-[1.1rem] leading-[1.7] flex flex-col gap-5 pr-4 md:pr-10"
            >
               <p>
                 Because real security isn't just compliant, it's fast, sharp, and built to scale with you.
               </p>
               <p>
                 We're here to help modern enterprises move beyond checklists and into the next era of risk-first, intelligence-driven security.
               </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
