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
    },
    glossary: {
        badge: "Knowledge Base",
        heading: <>Security & <br /> Compliance Glossary</>,
        description: "Demystifying the world of GRC, Cybersecurity, and Privacy. Explore our comprehensive collection of terms to build your security literacy.",
        images: [
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
        ],
        stats: {
            percentage: 100,
            label: "Terms Defined",
            sublabel: "Active Directory",
            footer: "Always Updated",
            color: "#1d4ed8"
        }
    },
    'framework-guides': {
        badge: "Step-by-Step",
        heading: <>Framework <br /> Implementation Guides</>,
        description: "Accelerate your path to certification with actionable workflows and expert check-lists for SOC 2, ISO 27001, HIPAA, and more.",
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        ],
        stats: {
            percentage: 100,
            label: "Audit Ready",
            sublabel: "Framework Range",
            footer: "Expert Verified",
            color: "#854d0e"
        }
    },
    soc2: {
        badge: "Trust Standard",
        heading: <>SOC 2 <br /> Compliance Suite</>,
        description: "Automate your Service Organization Control (SOC 2) Type I & II audits with real-time evidence collection and continuous monitoring.",
        images: [
            "https://images.unsplash.com/photo-1563986768609-322da13575f3",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
        ],
        stats: {
            percentage: 98,
            label: "Audit Success",
            sublabel: "Customer Base",
            footer: "Trust Services",
            color: "#6366f1"
        }
    },
    iso27001: {
        badge: "Global Standard",
        heading: <>ISO 27001 <br /> ISMS Automation</>,
        description: "Scale your Information Security Management System (ISMS) globally. Align with international security best practices seamlessly.",
        images: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        ],
        stats: {
            percentage: 95,
            label: "Global Adoption",
            sublabel: "Framework fit",
            footer: "ISO Certified",
            color: "#10b981"
        }
    },
    gdpr: {
        badge: "Privacy First",
        heading: <>GDPR <br /> Data Protection</>,
        description: "Stay ahead of EU data privacy regulations. Manage data subject requests, DPIAs, and cross-border transfers effortlessly.",
        images: [
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
            "https://images.unsplash.com/photo-1495020689067-958852a7735e",
            "https://images.unsplash.com/photo-1585829365234-752ffdf47d84",
            "https://images.unsplash.com/photo-1574944966950-816d78a9c58a"
        ],
        stats: {
            percentage: 100,
            label: "Privacy Compliance",
            sublabel: "Data Security",
            footer: "EU Standards",
            color: "#ef4444"
        }
    },
    pcidss: {
        badge: "Payment Security",
        heading: <>PCI DSS <br /> Data Protection</>,
        description: "Secure your cardholder data environment. Automate SAQ-D audits and maintain continuous compliance for payment processing.",
        images: [
            "https://images.unsplash.com/photo-1563986768702-3f86f77348e3",
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
            "https://images.unsplash.com/photo-1556742111-a301076d9d18",
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1"
        ],
        stats: {
            percentage: 99,
            label: "Transaction Security",
            sublabel: "Fintech Trust",
            footer: "PCI Compliant",
            color: "#3b82f6"
        }
    },
    hipaa: {
        badge: "Health Privacy",
        heading: <>HIPAA <br /> Compliance Hub</>,
        description: "Protect patient health information (PHI). Scale your healthcare technology while meeting stringent US federal privacy laws.",
        images: [
            "https://images.unsplash.com/photo-1538108149393-fdfd818d59ae",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
        ],
        stats: {
            percentage: 100,
            label: "PHI Protection",
            sublabel: "Healthcare",
            footer: "Audit-Ready",
            color: "#1d4ed8"
        }
    },
    'nist-ai': {
        badge: "Next-Gen AI",
        heading: <>NIST AI <br /> Risk Management</>,
        description: "Govern your AI initiatives with confidence. Align your machine learning models with the NIST AI RMF for trustworthy innovation.",
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
        ],
        stats: {
            percentage: 90,
            label: "AI Governance",
            sublabel: "Risk Framework",
            footer: "Future Proof",
            color: "#8b5cf6"
        }
    },
    custom: {
        badge: "Flexible GRC",
        heading: <>Custom <br /> Compliance Hub</>,
        description: "Create your own controls and frameworks. Map tailored requirements to our automation engine for unique industry needs.",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            "https://images.unsplash.com/photo-1507924538820-ede94a04019d",
            "https://images.unsplash.com/photo-1553484771-047a44eee27b",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
        ],
        stats: {
            percentage: 100,
            label: "Custom Logic",
            sublabel: "Tailored fit",
            footer: "Dynamic GRC",
            color: "#d946ef"
        }
    },
    'all-frameworks': {
        badge: "Full Access",
        heading: <>Library of 60+ <br /> Compliance Hubs</>,
        description: "Explore our complete library of supported frameworks. From local privacy laws to international standards, we have you covered.",
        images: [
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        ],
        stats: {
            percentage: 100,
            label: "Market Coverage",
            sublabel: "Global Reach",
            footer: "Unified GRC",
            color: "#374151"
        }
    }
};

export default function HeroSectionResources({ type = "about" }) {
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