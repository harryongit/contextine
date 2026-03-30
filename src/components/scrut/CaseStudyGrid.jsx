import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyGrid = () => {
    const cases = [
        { logo: 'Vidal Health', Framework: 'SOC 2', outcome: 'SOC 2 in 4 weeks', desc: 'Accelerated enterprise sales by 30% with continuous monitoring.' },
        { logo: 'Chalo', Framework: 'GDPR', outcome: 'Audit-ready GDPR compliance', desc: 'Secure data privacy across multiple regions and clouds.' },
        { logo: 'Famly', Framework: 'ISO 27001', outcome: 'Achieved ISO 27001', desc: 'Automated 80% of manual security testing.' },
    ];

    return (
        <div className="py-24 bg-[#040D21]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
                        Success Stories from <br /> the Frontlines of Security.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Join hundreds of fast-growing companies that have accelerated their path to compliance and built trust with stakeholders.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((cs, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0A162F] border border-white/5 p-12 rounded-[2.5rem] hover:border-cyan-500/30 transition-all group overflow-hidden"
                        >
                            <div className="text-2xl font-black text-white mb-8 border-b border-white/5 pb-8 opacity-40 group-hover:opacity-100 transition-opacity tracking-tighter">
                                {cs.logo}
                            </div>
                            
                            <h4 className="text-2xl font-black text-white mb-6 leading-tight uppercase tracking-tight line-clamp-2">
                                {cs.outcome}
                            </h4>
                            <p className="text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed font-medium mb-12">
                                {cs.desc}
                            </p>
                            
                            <div className="inline-flex items-center text-[10px] font-black uppercase text-cyan-400 bg-white/5 border border-white/10 px-6 py-2 rounded-full shadow-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all cursor-pointer">
                                Read Full Story
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyGrid;
