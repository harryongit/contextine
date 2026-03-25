import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CareerHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    const shapeY1 = useTransform(scrollYProgress, [0, 1], [20, -40]);
    const shapeY2 = useTransform(scrollYProgress, [0, 1], [-20, 30]);
    const shapeY3 = useTransform(scrollYProgress, [0, 1], [30, -20]);
    const shapeY4 = useTransform(scrollYProgress, [0, 1], [-30, 40]);

    return (
        <div ref={containerRef} className="bg-[#D3E1E2] pt-28 pb-20 md:pt-40 md:pb-32 font-sans relative overflow-hidden">

            {/* Background ambient doodle */}
            <motion.div style={{ y: shapeY1 }} className="absolute top-[30%] text-[#aabcc0] pointer-events-none opacity-40 z-0">
                <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
                    <path d="M -100 200 C 100 0, 300 400, 600 100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 12" />
                </svg>
            </motion.div>

            {/* Abstract background shapes across the full width background */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end pointer-events-none w-full h-[220px] md:h-[300px] overflow-hidden">
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                        <linearGradient id="fadeWhiteGrad" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <motion.div style={{ y: shapeY1, rotate: shapeY1 }} className="absolute left-[-5%] md:left-[0%] bottom-[-30px] w-64 md:w-80 h-64 md:h-80 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path fill="url(#fadeWhiteGrad)" d="M100 0 L115 70 L180 40 L140 100 L180 160 L115 130 L100 200 L85 130 L20 160 L60 100 L20 40 L85 70 Z" />
                    </svg>
                </motion.div>

                <motion.div style={{ y: shapeY2 }} className="absolute left-[22%] md:left-[27%] bottom-[0px] w-56 md:w-72 h-56 md:h-72 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path fill="url(#fadeWhiteGrad)" d="M0 200 C0 89.54 89.54 0 200 0 L200 200 Z" />
                    </svg>
                </motion.div>

                <motion.div style={{ y: shapeY3 }} className="absolute left-[45%] md:left-[52%] bottom-[0px] w-80 md:w-[26rem] h-48 md:h-56 mx-auto transform translate-y-6">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                        <path fill="url(#fadeWhiteGrad)" d="M0 100 A 100 100 0 0 1 200 100 Z" />
                    </svg>
                </motion.div>

                <motion.div style={{ y: shapeY4, rotate: shapeY2 }} className="absolute left-[70%] md:left-[78%] bottom-[-20px] w-60 md:w-80 h-60 md:h-80 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <mask id="slitMask">
                            <rect width="200" height="200" fill="white" />
                            <path d="M 0 50 L 200 -50 L 200 -20 L 0 80 Z" fill="black" />
                            <path d="M 0 130 L 200 30 L 200 60 L 0 160 Z" fill="black" />
                        </mask>
                        <rect x="20" y="20" width="160" height="160" rx="30" fill="url(#fadeWhiteGrad)" mask="url(#slitMask)" />
                    </svg>
                </motion.div>
            </div>

            {/* Container wrapper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[460px]">

                {/* Left Content */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:w-[48%] z-10 mb-12 md:mb-0 md:pr-14 self-start md:mt-4">
                    <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold text-[#0B1521] mb-6 leading-[1.1] font-sans tracking-tight">Build the future of Contextine, together.</h2>
                    <p className="text-[#202939] text-[1.1rem] md:text-[1.15rem] font-medium leading-[1.6]">
                        We’re on a mission to liberate teams from compliance debt and need curious minds like yours to make it happen.

                        If you’re ready to grow and make an impact, we’d love to hear from you.
                    </p>
                </motion.div>

                {/* Right Content - Images perfectly aligned */}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-[52%] flex justify-center md:justify-end gap-4 z-10 self-start md:mt-4">
                    <div className="w-[180px] md:w-[260px] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform duration-500">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop" alt="Team collaborating" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[140px] md:w-[200px] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform duration-500">
                        <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=500&h=700&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
