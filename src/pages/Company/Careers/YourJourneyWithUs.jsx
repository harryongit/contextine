import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: 'Application review',
    description: "We'll review your application to see if there's a potential match. If we see alignment, you'll hear from us.",
    number: '1',
    color: '#F472B6', // Pink
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 20 80 L 10 90 L 15 70 C 5 50, 10 20, 50 10 C 90 0, 95 40, 85 70 C 75 100, 30 100, 20 80 Z" fill="#F472B6" />
        <path d="M 50 30 L 60 45 L 75 45 L 65 55 L 70 70 L 50 60 L 30 70 L 35 55 L 25 45 L 40 45 Z" fill="white" />
      </svg>
    )
  },
  {
    title: 'First chat',
    description: "We'll set up a chat with our HR to learn more about your background and for you to ask more about us and the role.",
    number: '2',
    color: '#3B82F6', // Blue
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 10 50 C 10 20, 30 15, 50 15 C 70 15, 90 20, 90 50 C 90 80, 70 85, 50 85 L 25 95 L 30 75 C 15 65, 10 60, 10 50 Z" fill="#3B82F6" />
        <path d="M 30 50 L 70 50 M 30 35 L 70 35 M 30 65 L 50 65" stroke="white" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Technical interviews',
    description: "We'll do interviews to dive deep into your skills, expertise, and problem-solving approach.",
    number: '3',
    color: '#8B5CF6', // Purple
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 20 80 L 40 60 C 50 50, 70 40, 80 50 C 90 60, 80 80, 70 70 L 50 90 C 40 100, 20 90, 30 80 Z" fill="#8B5CF6" />
        <circle cx="75" cy="55" r="15" fill="white" />
        <circle cx="75" cy="55" r="5" fill="#8B5CF6" />
      </svg>
    )
  },
  {
    title: 'Culture check',
    description: "Culture is key at Contextine. We'll explore how you align with how we work, what we value, and how we collaborate as a team.",
    number: '4',
    color: '#10B981', // Green
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <circle cx="50" cy="50" r="45" fill="#10B981" />
        <path d="M 30 50 L 45 65 L 75 35" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'The Offer',
    description: "The exciting part! If everything clicks, we'll extend an offer and kick off your journey at Contextine.",
    number: '5',
    color: '#FBBF24', // Yellow
    doodleIcon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
        <path d="M 10 50 L 30 20 L 70 20 L 90 50 L 50 90 Z" fill="#FBBF24" />
        <circle cx="35" cy="40" r="8" fill="white" />
        <path d="M 65 30 L 35 70" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <circle cx="65" cy="65" r="8" fill="white" />
      </svg>
    )
  }
];

export default function YourJourneyWithUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Background Floatie Doodles */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-[600px] h-[600px] pointer-events-none z-0 opacity-20 hidden lg:block"
      >
        <svg viewBox="0 0 400 400" fill="none">
          <path d="M200 0 C300 100, 400 200, 200 400 C0 300, 100 100, 200 0" stroke="#1A4A85" strokeWidth="2" strokeDasharray="10 10"/>
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16 md:mb-28 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] md:text-[4.5rem] font-extrabold text-[#0B1521] tracking-tight leading-[1.1] inline-block relative z-10"
          >
            Your journey with <span className="text-[#1A4A85] relative inline-block">us
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className="absolute -bottom-2 w-[120%] left-[-10%] h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 Q 30 0 50 12 T 100 10" fill="none" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full pb-10 mt-8">
            
          {/* Animated Wavy Doodle Path (Desktop only) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[350px] pointer-events-none hidden md:block opacity-40 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 500" preserveAspectRatio="none">
              <motion.path 
                d="M 50 0 C 80 50, 90 100, 50 150 C 10 200, 0 250, 50 300 C 90 350, 80 400, 50 450 C 20 500, 50 500, 50 500"
                fill="none" 
                stroke="#0B1521" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>
          
          {/* Straight Dashed Line (Mobile only) */}
          <div className="absolute top-[20px] bottom-0 left-[28px] w-0.5 border-l-2 border-[#0B1521] border-dashed opacity-30 md:hidden z-0"></div>

          {/* Steps */}
          <div className="relative flex flex-col gap-12 md:gap-0 z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`w-full flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-4 md:mb-12`}>
                  
                  {/* Card Container (Left or Right) */}
                  <div className="w-full md:w-1/2 flex justify-center pb-4 md:pb-0 px-4 md:px-16 pl-16 md:pl-16">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                      className="relative w-full"
                    >
                      {/* Floating Step Number (Background Watermark) */}
                      <div className={`absolute top-[-30px] md:top-[-40px] left-4 text-[5rem] md:text-[7rem] font-black text-[#0B1521] opacity-[0.03] -z-10 leading-none select-none pointer-events-none`}>
                        {step.number}
                      </div>

                      <motion.div 
                        whileHover={{ scale: 1.02, rotate: isEven ? -2 : 2, y: -5 }}
                        className="group bg-white border-2 border-[#0B1521] rounded-[1.5rem] p-6 shadow-[4px_4px_0_0_#0B1521] hover:shadow-[6px_6px_0_0_#0B1521] transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Subtly colored overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: step.color }}></div>
                        
                        {/* Abstract blob behind icon */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 -z-10 blur-xl" style={{ backgroundColor: step.color }}></div>

                        {/* Icon */}
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {step.doodleIcon}
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl md:text-2xl font-bold text-[#0B1521] mb-2">{step.title}</h3>
                        <p className="text-[#334155] leading-relaxed font-medium text-[0.95rem] md:text-base">{step.description}</p>
                        
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Empty Spacer for the other side on desktop */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Node Connector Point (Mobile only) */}
                  <div 
                    className="absolute left-[24px] top-10 w-3 h-3 rounded-full border-2 border-[#0B1521] bg-white md:hidden z-20 shadow-[1px_1px_0_0_#0B1521]"
                    style={{ borderColor: step.color }}
                  ></div>

                  {/* Node Connector Point (Desktop central timeline) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-[#0B1521] bg-white hidden md:block z-20 shadow-[2px_2px_0_0_#0B1521]"
                  >
                     <div className="w-full h-full rounded-full" style={{ backgroundColor: step.color }}></div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
