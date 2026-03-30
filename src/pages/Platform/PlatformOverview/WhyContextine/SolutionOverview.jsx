import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Activity, Globe, ShieldCheck } from 'lucide-react'

const SolutionOverview = () => {
    
    // Core benefits that represent the solution's clarity
    const benefits = [
        "All-in-one Audit & GRC platform",
        "Automated Evidence Mapping",
        "Continuous Case Management",
        "Risk Data Visualization"
    ]

  return (
    <section className="py-16 px-6 md:px-12 bg-[#F0FDFA] relative overflow-hidden">
        {/* Subtle Backdrop Glow */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
               <div className="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white border border-emerald-100/50 text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm">
                  <Activity className="h-4 w-4" /> The Unified Solution
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 Everything unified <br /> 
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-emerald-700 to-indigo-950 drop-shadow-sm">On One Stunning Canvas.</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-inter font-medium mb-8 opacity-80 overflow-hidden">
                 Contextine creates a living compliance graph by synchronizing with every layer of your stack—from HR databases to cloud infrastructure. 
                 It's the first GRC tool that engineers and auditors actually love to use.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.1 * i }}
                       className="flex items-center gap-4 group"
                    >
                       <div className="h-8 w-8 rounded-lg bg-white border border-emerald-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                       </div>
                       <span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">{benefit}</span>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
            >
                <div className="p-4 rounded-[4.5rem] bg-white border border-emerald-100 shadow-[0_80px_160px_-40px_rgba(16,185,129,0.15)] relative z-10 overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    {/* Artistic Integration Visual Concept */}
                    <div className="aspect-video bg-[#020617] rounded-[3.5rem] flex items-center justify-center p-14 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-1000">
                         {/* Cinematic Blueprint Concept Visualization */}
                         <div className="absolute inset-0 bg-[#020617] opacity-60"></div>
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 opacity-10"
                         >
                            <svg className="w-full h-full text-brand" viewBox="0 0 100 100">
                               <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
                               <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                               <path d="M50 0 L 50 100 M 0 50 L 100 50" stroke="currentColor" strokeWidth="0.5" />
                            </svg>
                         </motion.div>
                         <div className="relative z-10 text-center">
                            <ShieldCheck className="h-24 w-24 text-brand mx-auto mb-8 drop-shadow-[0_0_20px_rgba(124,58,237,0.5)] animate-pulse" />
                            <div className="text-3xl font-display font-black text-white tracking-tighter">Unified Hub OS</div>
                            <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Security Fabric v4.0</div>
                         </div>
                    </div>
                </div>

                {/* Floating Detail Overlays */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-12 -right-12 p-8 rounded-[2.5rem] bg-white border border-emerald-50 shadow-2xl z-20 flex flex-col items-center justify-center text-center hidden xl:flex group hover:scale-105 transition-transform"
                >
                   <div className="h-14 w-14 mb-4 rounded-2xl bg-emerald-500/10 flex items-center justify-center shadow-inner"><Globe className="h-7 w-7 text-emerald-600" /></div>
                   <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5 leading-none">Global Coverage</div>
                   <div className="text-xl font-black text-slate-900 tracking-tighter">Multi-Framework</div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default SolutionOverview
