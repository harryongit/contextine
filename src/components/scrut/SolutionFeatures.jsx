import React from 'react';
import { motion } from 'framer-motion';

const SolutionFeatures = ({ type = 'enterprise' }) => {
    const content = {
        enterprise: {
            title: 'Compliance at Scale',
            desc: 'Tailored for organizations with complex environments and global operations.',
            features: [
                { title: 'Custom Workflows', desc: 'Map your unique internal controls to any standard.', icon: '🏢' },
                { title: 'Role-Based Access', desc: 'Granular permissions for hundreds of stakeholders.', icon: '🔐' },
                { title: 'API Integration', desc: 'Deep connectivity with your enterprise stack.', icon: '🔌' },
            ]
        },
        teams: {
            title: 'Grow With Confidence',
            desc: 'Automated compliance tools that stay out of the way of your engineering team.',
            features: [
                { title: 'Rapid Setup', desc: 'Connect your cloud and get ready in minutes.', icon: '⚡' },
                { title: 'Automated Evidence', desc: 'No more chasing screenshots on Fridays.', icon: '📸' },
                { title: 'Continuous Monitoring', desc: 'Stay compliant as you scale and deploy.', icon: '📈' },
            ]
        },
        compliance: {
            title: 'Audit-Ready Always',
            desc: 'Stay ahead of regulators with 24/7 control monitoring and evidence collection.',
            features: [
                { title: 'Pre-Audit Scans', desc: 'Identify gaps before the auditor arrives.', icon: '🔍' },
                { title: 'Central Evidence Repo', desc: 'A single source of truth for all documentation.', icon: '📂' },
                { title: 'Framework Mapping', desc: 'Update once, comply with many standards.', icon: '🗺️' },
            ]
        }
    }[type] || content.enterprise;

    return (
        <div className="py-24 bg-[#040D21]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 whitespace-normal">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Features</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight max-w-2xl mx-auto">
                        {content.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {content.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0A162F] border border-white/5 p-12 rounded-[2.5rem] hover:border-white/20 transition-all group relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] group-hover:bg-cyan-500/10 transition-colors" />
                            
                            <div className="text-6xl mb-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{f.icon}</div>
                            <h4 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">{f.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-medium">{f.desc}</p>
                            
                            <div className="mt-8 flex items-center text-white/40 text-xs font-black uppercase tracking-widest gap-2 opacity-60 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                                Feature Detail →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionFeatures;
