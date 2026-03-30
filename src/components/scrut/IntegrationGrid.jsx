import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const integrations = [
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Google Cloud', category: 'Cloud', icon: '🌩️' },
    { name: 'Azure', category: 'Cloud', icon: '⚡' },
    { name: 'GitHub', category: 'Dev', icon: '🐙' },
    { name: 'GitLab', category: 'Dev', icon: '🦊' },
    { name: 'Slack', category: 'SaaS', icon: '💬' },
    { name: 'Zoom', category: 'SaaS', icon: '📹' },
    { name: 'Okta', category: 'Identity', icon: '🔓' },
    { name: 'OneLogin', category: 'Identity', icon: '🔑' },
    { name: 'Workday', category: 'HR', icon: '💼' },
    { name: 'Zenefits', category: 'HR', icon: '🌱' },
];

const categories = ['All', 'Cloud', 'Dev', 'SaaS', 'Identity', 'HR'];

const IntegrationGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredIntegrations = selectedCategory === 'All' 
        ? integrations 
        : integrations.filter(item => item.category === selectedCategory);

    return (
        <div className="py-24 bg-[#040D21]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Ecosystem</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">60+ Native <br /> Integrations</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Seamlessly sync with your cloud infrastructure, developer tools, identity providers, and SaaS apps to maintain 24/7 audit readiness.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-bold transition-all text-sm border ${
                                selectedCategory === category 
                                ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                                : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredIntegrations.map((item) => (
                            <motion.div
                                key={item.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="group relative bg-[#0A162F] border border-white/5 p-8 rounded-[2rem] hover:border-cyan-500/40 transition-all duration-500 flex flex-col items-center justify-center gap-6"
                            >
                                <div className="absolute inset-0 bg-cyan-500 shadow-[0_0_20px_#06b6d4] blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity" />
                                
                                <div className="text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                <div className="text-white font-black text-center group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.name}</div>
                                
                                <div className="h-10 w-full flex items-center justify-center transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                    <button className="text-[10px] font-black uppercase text-cyan-400 tracking-widest bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20">Connect</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                <div className="mt-20 text-center">
                    <p className="text-white/40 mb-8 font-medium">Looking for something else?</p>
                    <button className="text-white font-black px-10 py-5 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl">
                        Request a Custom Integration
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntegrationGrid;
