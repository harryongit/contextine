import React from 'react';
import { motion } from 'framer-motion';

const VideoTestimonials = () => {
    const testimonials = [
        { name: 'Aditya Gupta', role: 'Founder, Chalo', quote: 'Contextine helped us get SOC 2 ready in record time. We closed our biggest enterprise deal yet.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
        { name: 'Sarah Miller', role: 'Head of Security, Notion', quote: 'The automation is second to none. We saved 20+ hours a week on evidence collection.', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095' },
        { name: 'Raj Kumar', role: 'CISO, Razorpay', quote: 'Trust Center has been a game-changer for our sales team. Built transparency from day one.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
    ];

    return (
        <div className="py-24 bg-[#0B1521]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 whitespace-normal">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight max-w-2xl mx-auto">
                        Loved by CEOs, CFOs, <br /> and Information Security teams.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-[400px] overflow-hidden rounded-[2.5rem] bg-gray-900 border border-white/5 shadow-2xl"
                        >
                            {/* Background Image / Placeholder for video */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
                            <img src={t.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={t.name} />
                            
                            {/* Play Button Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center p-1 shadow-[0_0_20px_#06b6d4]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">{t.name}</h4>
                                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{t.role}</p>
                                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 italic">"{t.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoTestimonials;
