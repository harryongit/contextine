import React from 'react';
import { motion } from 'framer-motion';

const ScrutTeammates = () => {
    const tasks = [
        { title: 'Evidence Collection', desc: 'Auto-scan your cloud stack to find evidence for SOC 2 controls.', icon: '📦' },
        { title: 'Control Testing', desc: 'Automated 24/7 testing of your information security policies.', icon: '🧪' },
        { title: 'Risk Assessment', desc: 'Proactive AI-driven gap analysis to find compliance risks early.', icon: '🔍' },
    ];

    return (
        <div className="py-24 bg-[#0B1521]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Meet your AI Teammates</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
                        Don't Just Automate. <br /> Hire AI for Compliance.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Scrut agents act as proactive security analysts, performing deep risk assessments and collecting evidence so you don't have to.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tasks.map((task, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#040D21] border border-white/5 p-12 rounded-[2.5rem] hover:border-cyan-500/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] group-hover:bg-cyan-500/10 transition-colors" />
                            
                            <div className="text-6xl mb-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{task.icon}</div>
                            <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{task.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-medium">{task.desc}</p>
                            
                            <div className="mt-8 flex items-center text-cyan-400 text-xs font-black uppercase tracking-widest gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                Deployment Status: Active <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrutTeammates;
