import React from 'react';
import { motion } from 'framer-motion';

const LogoWall = () => {
    // Note: In a real app, these would be actual brand logos
    const logos = [
        'Razorpay', 'CleverTap', 'Postman', 'Notion', 'Coinbase', 'Unacademy', 'Zapier'
    ];

    return (
        <div className="py-12 bg-white/5 border-y border-white/5 relative overflow-hidden group">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8 uppercase text-xs font-bold tracking-[0.2em] text-gray-400 opacity-60">
                    Trusted by 500+ Security Teams Worldwide
                </div>
                
                <div className="flex items-center gap-12 md:gap-24 overflow-hidden mask-fade leading-none">
                    <motion.div 
                        initial={{ x: 0 }}
                        animate={{ x: '-50%' }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                    >
                        {[...logos, ...logos].map((logo, idx) => (
                            <div key={idx} className="text-2xl md:text-3xl font-black text-gray-300/30 hover:text-white transition-all cursor-default select-none tracking-tighter">
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            <style jsx>{`
                .mask-fade {
                    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
                }
            `}</style>
        </div>
    );
};

export default LogoWall;
