import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Orbit, Circle, Hexagon, Sparkles } from 'lucide-react';

const STORIES = [
    {
        id: "bright",
        icon: Shield,
        logoText: "Bright",
        author: "Sarah Jenkins",
        title: "Director of Security, Bright",
        highlight: "Contextine turned months of stressful audit prep into a streamlined workflow.",
        text: "The sheer amount of time we've saved on evidence collection has allowed our team to focus on actual security rather than compliance paperwork.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
        brandColor: "#F472B6", // Pink
        bgClass: "bg-pink-50"
    },
    {
        id: "xima",
        icon: Orbit,
        logoText: "XIMA",
        author: "Ed St. Louis",
        title: "VP of Engineering and CISO, Xima",
        highlight: "Working with Contextine to get ISO 27001 and SOC 2 compliant was such a relief.",
        text: "Their platform helped us spot gaps in our security posture, and strengthen our security operations beyond just checking the box.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80",
        brandColor: "#818CF8", // Indigo
        bgClass: "bg-indigo-50"
    },
    {
        id: "choozle",
        icon: Hexagon,
        logoText: "choozle",
        author: "Marcus Chen",
        title: "Head of Operations, Choozle",
        highlight: "The visibility Contextine provides across our entire cloud infrastructure is unmatched.",
        text: "We finally have a single pane of glass for all our risk mapping. It's transformed how we discuss security with the board.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80",
        brandColor: "#38BDF8", // Sky Blue
        bgClass: "bg-sky-50"
    },
    {
        id: "toddle",
        icon: Circle,
        logoText: "toddle",
        author: "Amanda Vance",
        title: "Chief Risk Officer, Toddle",
        highlight: "Replacing our fragmented spreadsheets with Contextine’s automated policy mapper was magic.",
        text: "Our entire GRC program runs almost on autopilot now. I can honestly say audit days are just another Tuesday for us.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80",
        brandColor: "#FBBF24", // Amber
        bgClass: "bg-amber-50"
    }
];

const GrowthStories = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Set XIMA as default
    const active = STORIES[activeIndex];

    return (
        <section className={`py-24 lg:py-32 font-sans relative overflow-hidden transition-colors duration-700 ${active.bgClass}`}>
            
            {/* Ambient Background Gradient based on active brand */}
            <div 
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-700" 
                style={{ backgroundColor: active.brandColor }} 
            />
            
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-sm">
                         <Sparkles size={14} className="text-indigo-500" />
                         <span className="text-xs font-bold uppercase tracking-widest text-slate-800">Customer Success</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-none mb-10">
                        Growth stories powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Contextine.</span>
                    </h2>

                    {/* Floating Pill Menu */}
                    <div className="inline-flex flex-wrap justify-center items-center p-1.5 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                        {STORIES.map((story, i) => {
                            const isActive = activeIndex === i;
                            return (
                                <button 
                                    key={story.id} 
                                    onClick={() => setActiveIndex(i)} 
                                    className="relative px-5 lg:px-6 py-2.5 rounded-[1.5rem] flex items-center gap-2 transition-all duration-300"
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeCompanyTab" 
                                            className="absolute inset-0 rounded-[1.5rem] shadow-sm" 
                                            style={{ backgroundColor: story.brandColor }}
                                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                        />
                                    )}
                                    {story.id === 'toddle' ? (
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center relative z-10 transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                            <span className="text-[12px] font-bold leading-none -ml-[1px]">t</span>
                                        </div>
                                    ) : (
                                        <story.icon size={18} className={`relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`} strokeWidth={2} />
                                    )}
                                    <span className={`relative z-10 text-[15px] transition-colors ${story.id === 'choozle' || story.id === 'toddle' ? 'lowercase font-medium' : 'uppercase font-bold'} ${isActive ? 'text-white' : 'text-slate-600'}`}>
                                        {story.logoText}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Main Interactive Showcase Board */}
                <div className="mt-8 lg:mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                        >
                            
                            {/* Animated 3D Portrait Composition (Left side for visual weight) */}
                            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px] lg:h-[500px]">
                                
                                {/* Base Tilted Backdrop Color Card */}
                                <motion.div 
                                    initial={{ rotate: 0, scale: 0.8 }}
                                    animate={{ rotate: -8, scale: 1 }}
                                    transition={{ type: "spring", damping: 15, delay: 0.1 }}
                                    className="absolute w-[260px] md:w-[320px] h-[360px] md:h-[420px] rounded-[2rem] opacity-70 border border-white/20 shadow-2xl"
                                    style={{ backgroundColor: active.brandColor }}
                                />
                                
                                {/* Foreground Photo Card */}
                                <motion.div 
                                    initial={{ rotate: 0, y: 30 }}
                                    animate={{ rotate: 4, y: 0 }}
                                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                                    className="absolute w-[260px] md:w-[320px] h-[360px] md:h-[420px] rounded-[2rem] bg-white border-[6px] border-white shadow-xl overflow-hidden z-10"
                                >
                                    <img src={active.img} alt={active.author} className="w-full h-full object-cover" />
                                </motion.div>

                                {/* Floating Glass Identity Badge */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="absolute bottom-4 left-0 md:left-4 z-20 bg-white/90 backdrop-blur-xl border border-white/50 px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3"
                                >
                                    <div className="p-2 rounded-full bg-slate-50 border border-slate-100">
                                        <active.icon size={20} style={{ color: active.brandColor }} />
                                    </div>
                                    <span className={`text-[17px] font-bold text-slate-800 ${active.id === 'choozle' || active.id === 'toddle' ? 'lowercase' : 'uppercase'}`}>
                                        {active.logoText}
                                    </span>
                                </motion.div>

                            </div>

                            {/* Massive Typography Content (Right side) */}
                            <div className="lg:col-span-6 relative flex flex-col justify-center">
                                {/* Giant background quote doodle/mark */}
                                <div 
                                    className="absolute -top-16 -left-6 lg:-left-12 text-[140px] lg:text-[180px] font-serif leading-none opacity-20 transition-colors duration-700 select-none z-0" 
                                    style={{ color: active.brandColor }}
                                >
                                    "
                                </div>

                                <h3 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[1.25] font-bold tracking-tight text-slate-900 relative z-10 mb-6 lg:mb-8">
                                    {active.highlight}
                                </h3>

                                <p className="text-lg md:text-[19px] text-slate-600 font-medium leading-[1.7] mb-10 relative z-10 max-w-lg">
                                    {active.text}
                                </p>

                                {/* Profile info separated from image */}
                                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-slate-200/60 max-w-md">
                                    <div className="w-14 h-14 rounded-full border-[3px] p-0.5 transition-colors duration-700" style={{ borderColor: active.brandColor }}>
                                        <img src={active.img} alt={active.author} className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-[17px]">{active.author}</p>
                                        <p className="text-[14px] text-slate-500 font-medium mt-0.5">{active.title}</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default GrowthStories;
