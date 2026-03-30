import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesProvide = () => {

    const FEATURES = [
        {
            pill: "Compliant & Fast",
            title: "Get Audit Ready in\nNo Time",
            desc: "Whether you need SOC 2, ISO 27001 or more, we get you compliant fast.",
            linkText: "Get Started",
            to: "/use-case/audit-automation",
            bg: "bg-[#FFF6ED]",
            accent: "fill-[#FFE2C2]",
            svg: (
                <svg width="150" height="150" viewBox="0 0 200 200" className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-60">
                    <rect x="50" y="20" width="80" height="80" rx="20" transform="rotate(45 90 60)" />
                </svg>
            )
        },
        {
            pill: "Multiple Frameworks",
            title: "Scale Your\nSecurity Program",
            desc: "Manage multiple frameworks in one unified platform.",
            linkText: "Try It Now",
            to: "/platform/overview",
            bg: "bg-[#F3F7FF]",
            accent: "fill-[#DDE7FE]",
            svg: (
                <svg width="140" height="140" viewBox="0 0 180 180" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
                    <circle cx="90" cy="90" r="60" />
                </svg>
            )
        },
        {
            pill: "Enterprise GRC",
            title: "Manage Risk\nAcross the Globe",
            desc: "Centralize risk across regions and teams efficiently.",
            linkText: "Explore Platform",
            to: "/use-case/risk",
            bg: "bg-[#FAEDFF]",
            accent: "fill-[#EAD2FF]",
            svg: (
                <svg width="150" height="150" viewBox="0 0 200 200" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
                    <path d="M100 0 Q100 100 200 100 Q100 100 100 200 Q100 100 0 100 Q100 100 100 0 Z" />
                </svg>
            )
        },
        {
            pill: "Automated Evidence",
            title: "Automate Evidence\nCollection",
            desc: "Stream compliance evidence automatically in real time.",
            linkText: "View Insights",
            to: "/features/workflow-automation",
            bg: "bg-[#EEF9ED]",
            accent: "fill-[#D1F2D0]",
            svg: (
                <svg width="140" height="180" viewBox="0 0 180 220" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
                    <rect x="40" y="40" width="100" height="100" rx="25" transform="rotate(45 90 90)" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-12 bg-white font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto px-5">

                {/* Header */}
                <div className="text-center mb-8 max-w-xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                        A robust toolkit for your compliance journey
                    </h2>
                    <p className="text-xs text-slate-500">
                        Everything you need to manage compliance efficiently.
                    </p>
                </div>

                {/* Messy but clean grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

                    {FEATURES.map((feat, idx) => {

                        const styles = [
                            "lg:col-span-3 mt-0",
                            "lg:col-span-3 mt-4",
                            "lg:col-span-2 mt-2",
                            "lg:col-span-4 mt-6"
                        ];

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className={`${feat.bg} ${styles[idx]} rounded-2xl p-6 relative overflow-hidden flex flex-col group shadow-sm`}
                                style={{
                                    transform: `rotate(${idx % 2 === 0 ? "-0.2deg" : "0.2deg"})`
                                }}
                            >

                                {/* SVG */}
                                <div className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-end ${feat.accent}`}>
                                    {feat.svg}
                                </div>

                                {/* Pill */}
                                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold mb-3 w-max z-10 border border-slate-100 shadow-sm">
                                    {feat.pill}
                                </span>

                                {/* Content */}
                                <div className="z-10 mb-4">
                                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                                        {feat.title}
                                    </h3>
                                    <p className="text-[13px] text-slate-600 leading-snug max-w-[85%]">
                                        {feat.desc}
                                    </p>
                                </div>

                                {/* Link */}
                                <Link to={feat.to} className="mt-auto flex items-center gap-2 z-10 no-underline group/link w-max">
                                    <span className="text-xs font-bold border-b border-black">
                                        {feat.linkText}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition" />
                                </Link>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FeaturesProvide;