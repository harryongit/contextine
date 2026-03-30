import React from 'react';
import { motion } from 'framer-motion';

const TrustCenterMockup = () => {
    const frameworks = [
        { name: 'SOC 2 Type II', status: 'Compliant', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { name: 'ISO 27001', status: 'In Audit', color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { name: 'GDPR', status: 'Compliant', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { name: 'HIPAA', status: 'Ready', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    ];

    return (
        <div className="py-24 bg-[#040D21] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Trust Center</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                                Show, Don't Just Tell. <br /> Build Trust Instantly.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg">
                                Give your customers and partners real-time visibility into your security posture. 
                                Reduce security questionnaires by 80% with a public-facing Trust Center.
                            </p>
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20">
                                Launch Your Trust Center
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        {/* Mockup Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A162F] border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <div className="w-5 h-5 bg-cyan-500 rounded-full animate-pulse" />
                                    </div>
                                    <div className="h-4 w-32 bg-white/10 rounded-full" />
                                </div>
                                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {frameworks.map((fw, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-white font-medium">{fw.name}</span>
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                                        </div>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full ${fw.bg} ${fw.color} text-xs font-bold`}>
                                            {fw.status}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Floating "Security Score" card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 md:-right-12 bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-xl z-20"
                            >
                                <div className="text-[10px] uppercase font-bold opacity-80 mb-1">Security Score</div>
                                <div className="text-2xl font-black">94/100</div>
                            </motion.div>
                        </motion.div>

                        {/* Background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustCenterMockup;
