import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturesProvide = () => {
    const FEATURES = [
        {
            pill: "Compliant & Fast",
            title: "Get Audit Ready in\nNo Time",
            desc: "Whether you need SOC 2, ISO 27001 or something else, we'll get you to the finish line without the headache.",
            linkText: "Get Started",
            bg: "bg-[#FFF6ED]", // Light orange
            accent: "fill-[#FFE2C2]",
            svg: (
                <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <rect x="70" y="30" width="70" height="70" rx="20" transform="rotate(45 105 65)" />
                    <rect x="140" y="100" width="70" height="70" rx="20" transform="rotate(45 175 135)" />
                    <rect x="0" y="100" width="70" height="70" rx="20" transform="rotate(45 35 135)" />
                    <rect x="70" y="170" width="70" height="70" rx="20" transform="rotate(45 105 205)" />
                </svg>
            )
        },
        {
            pill: "Multiple Frameworks",
            title: "Scale Your\nSecurity Program",
            desc: "Tackle multiple frameworks and manage your risk with a unified, seamless compliance approach.",
            linkText: "Try It Now",
            bg: "bg-[#F3F7FF]", // Light blue
            accent: "fill-[#DDE7FE]",
            svg: (
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -right-0 top-1/2 -translate-y-1/2 opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <path d="M100 0 A100 100 0 0 1 200 100 L100 100 Z" />
                    <path d="M0 100 A100 100 0 0 0 100 200 L100 100 Z" fillOpacity="0.6" />
                    <path d="M100 100 A100 100 0 0 1 200 200 L100 200 Z" fillOpacity="0.3" />
                </svg>
            )
        },
        {
            pill: "Enterprise GRC",
            title: "Manage Risk\nAcross the Globe",
            desc: "Integrate compliance across multiple subsidiaries, products and regions to keep your workflow efficient.",
            linkText: "Explore Platform",
            bg: "bg-[#FAEDFF]", // Light purple
            accent: "fill-[#EAD2FF]",
            svg: (
                <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-70 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <path d="M 130 0 Q 130 130 260 130 Q 130 130 130 260 Q 130 130 0 130 Q 130 130 130 0 Z" />
                </svg>
            )
        },
        {
            pill: "Automated Evidence",
            title: "Automate Evidence\nCollection",
            desc: "Gain compliance peace of mind with smart automation that streams continuous evidence in real-time.",
            linkText: "View Insights",
            bg: "bg-[#EEF9ED]", // Light green
            accent: "fill-[#D1F2D0]",
            svg: (
                <svg width="200" height="280" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out">
                    <rect x="40" y="0" width="120" height="120" rx="36" transform="rotate(45 100 60)" />
                    <rect x="40" y="140" width="120" height="120" rx="36" transform="rotate(45 100 200)" fillOpacity="0.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 relative bg-white font-sans select-none overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header for context */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                        A robust toolkit for your <br />compliance journey
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                        Whether you need to get compliant yesterday or build an enterprise security program, Contextine gives you the stage.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {FEATURES.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`${feat.bg} rounded-[2rem] lg:rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden flex flex-col group min-h-[440px] shadow-sm`}
                        >
                            {/* SVG Graphic Element */}
                            <div className={`absolute top-0 right-0 w-1/2 h-full z-0 flex items-center justify-end pointer-events-none ${feat.accent}`}>
                                {feat.svg}
                            </div>

                            {/* Pill */}
                            <div className="relative z-10 mb-8">
                                <span className="bg-white rounded-full px-5 py-2.5 text-[13px] font-bold text-slate-800 tracking-wide drop-shadow-sm inline-block">
                                    {feat.pill}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-sm mb-12 flex-grow">
                                <h3 className="text-3xl xl:text-[42px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5 whitespace-pre-line">
                                    {feat.title}
                                </h3>
                                <p className="text-[16px] lg:text-[17px] text-slate-700 font-medium leading-[1.6]">
                                    {feat.desc}
                                </p>
                            </div>

                            {/* Link */}
                            <div className="relative z-10 mt-auto flex items-center gap-1.5 align-middle w-max group/link cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="text-sm lg:text-base font-bold text-slate-900 border-b-[2px] border-slate-900 pb-0.5 whitespace-nowrap">
                                    {feat.linkText}
                                </span>
                                <ArrowRight className="w-[18px] h-[18px] text-slate-900 group-hover/link:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesProvide;
