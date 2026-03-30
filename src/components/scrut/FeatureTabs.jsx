import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureTabs = () => {
    const tabs = [
        { id: 'risk', title: 'Risk Management', desc: 'Identify, assess, and prioritize risks with our automated engine.', icon: '🎯' },
        { id: 'compliance', title: 'Compliance Automation', desc: 'Streamline your audit readiness across 60+ frameworks.', icon: '🛡️' },
        { id: 'monitoring', title: 'Continuous Monitoring', desc: '24/7 visibility into your security posture and controls.', icon: '🛰️' },
        { id: 'vendor', title: 'Vendor Management', desc: 'Manage and monitor your suppliers security with ease.', icon: '🏢' },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="py-24 bg-[#0B1521]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* LEFT - TAB SELECTOR */}
                    <div className="lg:w-1/3 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8">One Unified <br /> Risk Platform</h2>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left p-6 rounded-[1.5rem] border transition-all duration-300 ${
                                    activeTab.id === tab.id 
                                    ? 'bg-cyan-500/10 border-cyan-500/30 text-white shadow-xl shadow-cyan-500/10' 
                                    : 'border-white/5 text-gray-500 hover:border-white/20'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{tab.icon}</span>
                                    <div>
                                        <h4 className={`font-bold transition-colors ${activeTab.id === tab.id ? 'text-cyan-400' : 'text-white/60 group-hover:text-white'}`}>
                                            {tab.title}
                                        </h4>
                                        {activeTab.id === tab.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-white/60 text-sm mt-3 leading-relaxed"
                                            >
                                                {tab.desc}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT - PREVIEW PANEL */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-[480px] w-full bg-[#040D21] border border-white/5 rounded-[2.5rem] shadow-2xl p-12 overflow-hidden flex flex-col justify-center items-center group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="text-[6rem] mb-6 drop-shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {activeTab.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-wider">{activeTab.title}</h3>
                                    <div className="grid grid-cols-3 gap-6 w-full max-w-lg mt-12">
                                        <div className="h-2 w-full bg-cyan-500/40 rounded-full" />
                                        <div className="h-2 w-full bg-cyan-500/40 rounded-full" />
                                        <div className="h-2 w-full bg-white/10 rounded-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-12 px-12">
                                        <div className="h-10 w-full bg-white/5 border border-white/10 rounded-xl" />
                                        <div className="h-10 w-full bg-cyan-500/20 border border-cyan-500/30 rounded-xl" />
                                    </div>
                                </div>
                                
                                {/* Abstract background elements */}
                                <div className="absolute bottom-12 left-12 w-32 h-32 border border-white/5 rounded-full" />
                                <div className="absolute top-12 right-12 w-16 h-16 border-2 border-dashed border-white/5 rotate-12" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureTabs;
