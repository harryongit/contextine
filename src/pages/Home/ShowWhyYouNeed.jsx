import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Cloud, Database, Activity, FileCheck, Github, Shield } from 'lucide-react';

const GlowingNode = ({ icon: Icon, color, delay, top, left, label, subLabel }) => (
    <div className={`absolute -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2`} style={{ top, left }}>
        <motion.div 
            animate={{ 
                y: [0, -4, 0], 
                boxShadow: [`0 4px 15px rgba(0,0,0,0.05)`, `0 8px 25px ${color}30`, `0 4px 15px rgba(0,0,0,0.05)`] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center relative group cursor-pointer"
        >
            <Icon size={20} color={color} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
            
            <div className={`absolute -bottom-[1px] w-4 h-[3px] rounded-full`} style={{ backgroundColor: color }} />
        </motion.div>
        <div className="flex flex-col items-center">
            <span className="text-[9px] font-extrabold text-slate-800 uppercase tracking-widest whitespace-nowrap">{label}</span>
            <span className="text-[8px] text-slate-500 font-semibold whitespace-nowrap hidden sm:block">{subLabel}</span>
        </div>
    </div>
);

const IntegrationsPill = () => (
    <div className="absolute top-[250px] left-[10px] -translate-y-1/2 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-[1.2rem] p-3 flex flex-col gap-2 z-20 w-[150px]">
       <div className="flex gap-1.5 justify-center">
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
               <Cloud size={14} className="text-sky-500" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
               <Github size={14} className="text-slate-700" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
               <Database size={14} className="text-indigo-500" />
            </div>
       </div>
       <div className="text-[9px] uppercase font-black text-center tracking-widest text-[#60A5FA] mt-1 relative z-10 drop-shadow-sm">Data Integrations</div>
       <div className="w-full h-[4px] bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
            />
        </div>
    </div>
);

const ContextineEngine = () => (
    <div className="absolute top-[250px] left-[270px] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] flex items-center justify-center z-10">
        <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 border border-indigo-100/50 rounded-[2rem] bg-indigo-50/20" 
        />
        <div className="absolute inset-3 border border-blue-100 rounded-[1.5rem] bg-blue-50/30" />
        <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute inset-6 border border-teal-100/60 rounded-[1.2rem] bg-teal-50/20" 
        />
        
        <div className="absolute inset-[2.2rem] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl shadow-indigo-100 flex flex-col items-center justify-center relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/50" />
            
            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 flex items-center justify-center rounded-full w-[60px] h-[60px] bg-indigo-50 border border-indigo-200 shadow-sm"
            >
                <Shield size={28} className="text-indigo-500 stroke-[2px]" />
                <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Check size={16} className="text-indigo-700" strokeWidth={3} />
                </motion.div>
            </motion.div>

            <motion.div 
                animate={{ y: [-45, 45, -45] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60 z-30 shadow-none"
            />

            <div className="absolute inset-0 opacity-40 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t-2 border-l-2 border-indigo-300" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t-2 border-r-2 border-indigo-300" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b-2 border-l-2 border-indigo-300" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b-2 border-r-2 border-indigo-300" />
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[8px] uppercase font-black tracking-widest text-[#60A5FA] shadow-md whitespace-nowrap">
            Contextine Core
        </div>
    </div>
);

const ShowWhyYouNeed = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden text-slate-900 font-sans relative border-y border-slate-100">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
                
                {/* Left Content Area */}
                <div className="max-w-xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[32px] md:text-[42px] lg:text-[46px] font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
                    >
                        Your current GRC program does the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">bare minimum.</span><br/>
                        <span className="text-slate-700">But it’s time to aim higher.</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-500 text-base md:text-[17px] mb-8 leading-relaxed font-medium"
                    >
                        It helps you: close deals, pass audits, stay technically "secure". But that’s not enough anymore. To scale, you need a security program that:
                    </motion.p>

                    <motion.ul 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                        }}
                        className="space-y-4"
                    >
                        {["Maps controls to your real, unique risks",
                          "Provides real-time visibility into your security posture",
                          "Simplifies audits so they don’t derail your business"
                         ].map((item, i) => (
                             <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} key={i} className="flex items-start gap-4 group">
                                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform group-hover:bg-indigo-100">
                                   <Check size={14} strokeWidth={2.5} />
                                </div>
                                <span className="text-slate-600 font-medium text-[15px] md:text-[16px] leading-[1.6] group-hover:text-slate-900 transition-colors">{item}</span>
                             </motion.li>
                         ))}
                    </motion.ul>
                </div>

                {/* Right Visual Diagram */}
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-visible">
                    <div className="w-[500px] h-[500px] absolute scale-[0.65] min-[400px]:scale-[0.75] sm:scale-90 md:scale-100 transform origin-center flex-shrink-0 z-20">
                        
                        <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0 pointer-events-none z-0">
                            <style>
                              {`
                                @keyframes dashFlow {
                                  to { stroke-dashoffset: -24; }
                                }
                                .flow-line {
                                  animation: dashFlow 1.5s linear infinite;
                                }
                              `}
                            </style>
                            <g stroke="rgba(99, 102, 241, 0.4)" fill="none" strokeWidth="2" strokeDasharray="6 4" className="flow-line">
                                <path d="M 160 250 L 180 250" />
                                <path d="M 360 250 C 400 250, 400 80, 436 80" />
                                <path d="M 360 250 L 436 250" />
                                <path d="M 360 250 C 400 250, 400 420, 436 420" />
                            </g>
                        </svg>

                        <IntegrationsPill />
                        <ContextineEngine />
                        
                        <GlowingNode icon={ShieldCheck} color="#0D9488" top="80px" left="460px" delay={0} label="SOC 2 & ISO" subLabel="Frameworks Ready" />
                        <GlowingNode icon={Activity} color="#2563EB" top="250px" left="460px" delay={1} label="Risk Posture" subLabel="Real-Time Visibility" />
                        <GlowingNode icon={FileCheck} color="#9333EA" top="420px" left="460px" delay={2} label="Automated" subLabel="Evidence Collection" />
                        
                    </div>
                </div>

            </div>
            <div>

            </div>
        </section>
    );
};

export default ShowWhyYouNeed;
