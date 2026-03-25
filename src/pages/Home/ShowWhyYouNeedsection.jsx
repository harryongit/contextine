import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, FileText, CheckCircle, ClipboardList } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, bgGradient, shadowColor, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
        {/* Top Graphic Section (App Icon Presentation) */}
        <div className="h-[200px] relative overflow-hidden flex items-center justify-center bg-slate-50/50 border-b border-slate-50">
            {/* Soft Grid Background */}
            <div className="absolute inset-0 opacity-[0.15]" 
                 style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)', backgroundSize: '30px 30px', backgroundPosition: 'center center' }} />
            
            {/* Ambient Background Blob matching the icon color */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-[40px] opacity-40 ${bgGradient} mix-blend-multiply`} />

            {/* Fanned out paper layers behind icon */}
            <div className="relative z-10 w-full flex items-center justify-center mt-6">
                <motion.div 
                    whileHover={{ rotate: -12, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute w-[90px] h-[55px] bg-white rounded-2xl shadow-sm border border-slate-200/60 -rotate-6 translate-y-1 transform-gpu opacity-80" 
                />
                <motion.div 
                    whileHover={{ rotate: 12, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute w-[90px] h-[55px] bg-white rounded-2xl shadow-sm border border-slate-200/60 rotate-6 translate-y-1 transform-gpu opacity-80" 
                />
                <div className="absolute w-[100px] h-[65px] bg-white rounded-2xl shadow-md border border-slate-100/80 -translate-y-1" />
                
                {/* App Icon Bubble */}
                <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`relative w-[64px] h-[64px] rounded-2xl ${bgGradient} shadow-lg ${shadowColor} flex items-center justify-center z-20 overflow-hidden group-hover:shadow-2xl transition-all duration-300`}
                >
                    <div className="absolute inset-0 bg-white/20 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon size={26} className="text-white relative z-10 drop-shadow-md" strokeWidth={2.5} />
                </motion.div>
            </div>
        </div>

        {/* Bottom Content Section */}
        <div className="p-8 lg:p-10 flex flex-col flex-grow bg-white">
            <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 leading-snug mb-4 tracking-tight">
                {title}
            </h3>
            <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                {desc}
            </p>
        </div>
    </motion.div>
);


const ShowWhyYouNeedsection = () => {
    const FEATURES = [
        {
            icon: Eye,
            title: "Get complete visibility into all your risks.",
            desc: "Don’t stay limited to surface-level protection that stops at endpoints and IP addresses. Get insights across all cloud infrastructure, applications, people, and third party risks.",
            bgGradient: "bg-gradient-to-br from-[#fb7185] via-[#f472b6] to-[#e879f9]", // Pink/Purple
            shadowColor: "shadow-pink-500/30",
        },
        {
            icon: ClipboardList,
            title: "Build controls that manage your risks, not just compliance.",
            desc: "Map controls across all your security initiatives, tie risks to mitigating controls, and cut out redundancy by reusing controls as you scale.",
            bgGradient: "bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#818cf8]", // Blue/Indigo
            shadowColor: "shadow-blue-500/30",
        },
        {
            icon: FileText,
            title: "Let your GRC program run (almost) on its own.",
            desc: "Automate control monitoring, evidence collection, and set up recurring workflows for routine tasks. Connect Contextine to your favourite task management tools and get instant alerts on risk mitigation.",
            bgGradient: "bg-gradient-to-br from-[#fb923c] via-[#f59e0b] to-[#fbbf24]", // Orange/Yellow
            shadowColor: "shadow-orange-500/30",
        },
        {
            icon: CheckCircle,
            title: "Make audit day just another Tuesday, with Contextine.",
            desc: "Track your compliance status against every framework under the sun (or build a custom one, it’s your show). When it’s audit time, breeze through both internal and external reviews with confidence. No panic, no surprises.",
            bgGradient: "bg-gradient-to-br from-[#34d399] via-[#2dd4bf] to-[#2dd4cf]", // Teal/Green
            shadowColor: "shadow-teal-500/30",
        }
    ];

    return (
        <section className="bg-white py-24 lg:py-32 overflow-hidden border-y border-slate-100 font-sans">
            <div className="max-w-[1400px] mx-auto px-6 relative">
                
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Sticky Header Area */}
                    <div className="xl:col-span-5 xl:sticky xl:top-[120px] pr-0 xl:pr-10 relative z-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-800 uppercase tracking-widest shadow-sm"
                        >
                            <Zap size={14} className="text-red-500 fill-red-500" />
                            Explore Features
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8"
                        >
                            Move past surface-level compliance and <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">take control</span> of your security program.
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl"
                        >
                            All-in-one risk management platform. Evaluating hazards smartly, attracting seamless integrations, and stopping threats before they start.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                Book a Demo
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border-2 border-slate-200 text-slate-800 font-bold text-sm tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">
                                View Platform
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Card Grid (Staggered Masonry) */}
                    <div className="xl:col-span-7 relative z-10">
                        {/* Hidden ambient blob for the grid area */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
                            
                            {/* Column 1 (Left, items 0 and 2) */}
                            <div className="flex flex-col gap-6 lg:gap-8">
                                <FeatureCard {...FEATURES[0]} index={0} />
                                <FeatureCard {...FEATURES[2]} index={2} />
                            </div>

                            {/* Column 2 (Right, items 1 and 3) - Staggered by translating down on md+ screens */}
                            <div className="flex flex-col gap-6 lg:gap-8 md:mt-24 lg:mt-32">
                                <FeatureCard {...FEATURES[1]} index={1} />
                                <FeatureCard {...FEATURES[3]} index={3} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShowWhyYouNeedsection;