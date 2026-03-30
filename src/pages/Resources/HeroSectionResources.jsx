import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroConfigs = {
    about: {
        badge: "About Us",
        heading: <>Empower businesses <br /> to build trust</>,
        description: "We help small startups and brands to get better exposure through different social media channels. Meet the best network distribution today.",
        images: [
            "https://images.unsplash.com/photo-1573164713988-8665fc963095",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
            "https://images.unsplash.com/photo-1552664730-d307ca884978",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        ],
        stats: {
            percentage: 80,
            label: "Present Employees",
            sublabel: "Department",
            footer: "Product Design",
            color: "#6366f1"
        }
    },
    careers: {
        badge: "Careers",
        heading: <>Join Our World <br /> Class Team</>,
        description: "Be part of a team that's redefining the digital landscape. We're looking for passionate individuals who want to make a real difference.",
        images: [
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        ],
        stats: {
            percentage: 95,
            label: "Growth Rate",
            sublabel: "Annual Team",
            footer: "Expansion",
            color: "#10b981"
        }
    },
    security: {
        badge: "Security",
        heading: <>Premium Data <br /> Protection First</>,
        description: "Your trust is our most valuable asset. We use industry-leading encryption and security protocols to keep your information safe.",
        images: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
        ],
        stats: {
            percentage: 100,
            label: "Uptime SLA",
            sublabel: "Infrastructure",
            footer: "Certified Secure",
            color: "#f59e0b"
        }
    }
};

export default function HeroSectionCompany({ type = "about" }) {
    const containerRef = useRef(null);
    const config = heroConfigs[type] || heroConfigs.about;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const shapeY1 = useTransform(scrollYProgress, [0, 1], [20, -40]);
    const shapeY2 = useTransform(scrollYProgress, [0, 1], [-20, 30]);
    const shapeY3 = useTransform(scrollYProgress, [0, 1], [30, -20]);
    const shapeY4 = useTransform(scrollYProgress, [0, 1], [-30, 40]);

    return (
        <div
            ref={containerRef}
            className="bg-[#D3E1E2] pt-10 pb-10 md:pt-20 md:pb-20 relative overflow-hidden"
        >

            {/* Background Doodle */}
            <motion.div
                style={{ y: shapeY1 }}
                className="absolute top-[30%] text-[#aabcc0] opacity-40 pointer-events-none"
            >
                <svg width="600" height="400" viewBox="0 0 600 400">
                    <path
                        d="M -100 200 C 100 0, 300 400, 600 100"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="12 12"
                        fill="none"
                    />
                </svg>
            </motion.div>

            {/* Abstract background shapes */}
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

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

                {/* LEFT - PREMIUM TEXT UI */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[45%]"
                >

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-medium mb-6">
                        {config.badge}
                    </div>

                    {/* Heading */}
                    <h2 className="text-[2.8rem] md:text-[3.8rem] font-extrabold text-[#0B1521] leading-[1.05] tracking-[-0.02em] mb-6">
                        {config.heading}
                    </h2>

                    {/* Description */}
                    <p className="text-[#202939] text-[1.05rem] leading-relaxed max-w-lg mb-8">
                        {config.description}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-pink-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors">⌁</div>
                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-green-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors">●</div>
                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors">f</div>
                        <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-sky-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors">✈</div>
                    </div>

                </motion.div>

                {/* RIGHT - COLLAGE */}
                <div className="md:w-[55%] flex justify-center md:justify-end">
                    <div className="relative grid grid-cols-2 gap-6">

                        <motion.div style={{ y: shapeY1 }} className="rounded-[32px] overflow-hidden shadow-xl w-[220px] h-[280px] rotate-[-2deg]">
                            <img src={config.images[0]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt="Hero 1" />
                        </motion.div>

                        <motion.div style={{ y: shapeY2 }} className="rounded-[32px] overflow-hidden shadow-xl w-[220px] h-[190px] mt-12 rotate-[2deg]">
                            <img src={config.images[1]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt="Hero 2" />
                        </motion.div>

                        <motion.div style={{ y: shapeY3 }} className="rounded-[32px] overflow-hidden shadow-xl w-[220px] h-[190px] rotate-[1deg]">
                            <img src={config.images[2]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt="Hero 3" />
                        </motion.div>

                        <motion.div style={{ y: shapeY4 }} className="rounded-[32px] overflow-hidden shadow-xl w-[220px] h-[280px] -mt-12 rotate-[-1deg]">
                            <img src={config.images[3]} className="w-full h-full object-cover hover:scale-110 transition duration-700" alt="Hero 4" />
                        </motion.div>

                        {/* Glass Card */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              backdrop-blur-xl bg-white/70 border border-white/40
              rounded-2xl shadow-2xl px-6 py-5 w-[190px]"
                        >
                            <div className="flex flex-col items-center">

                                <div className="relative w-16 h-16 mb-3">
                                    <svg className="w-full h-full -rotate-90">
                                        <circle cx="32" cy="32" r="26" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                                        <motion.circle
                                            cx="32"
                                            cy="32"
                                            r="26"
                                            stroke={config.stats.color}
                                            strokeWidth="6"
                                            fill="none"
                                            strokeDasharray="163"
                                            strokeDashoffset="163"
                                            strokeLinecap="round"
                                            animate={{ strokeDashoffset: 163 - (163 * config.stats.percentage) / 100 }}
                                            transition={{ duration: 1.2, delay: 0.5 }}
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                                        {config.stats.percentage}%
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 text-center">{config.stats.label}</p>
                                <p className="text-[10px] text-gray-400 mt-1 text-center">{config.stats.sublabel}</p>
                                <p className={`text-sm mt-1 font-semibold`} style={{ color: config.stats.color }}>{config.stats.footer}</p>

                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
    );
}