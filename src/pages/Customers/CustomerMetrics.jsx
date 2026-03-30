import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, ShieldCheck, Zap, Globe, Star, ArrowUpRight, CheckCircle2, Workflow } from 'lucide-react'

const CustomerMetrics = () => {
  const metrics = [
    { label: "FASTER AUDITS", value: "65%", icon: TrendingUp },
    { label: "WORKLOAD REDUCTION", value: "40%", icon: Workflow },
    { label: "CASE RESOLUTION", value: "2x", icon: Zap },
    { label: "COMPLIANCE ROI", value: "10x", icon: Star }
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-[#020617] text-white relative overflow-hidden selection:bg-brand/30 selection:text-white">
        {/* Cinematic Backdrop with Pulsing Brand Architecture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7c3aed07_0%,_transparent_60%)] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-[-20%] right-[-30%] w-[1200px] h-[1200px] bg-brand opacity-[0.08] blur-[180px] -z-10 transition-opacity duration-1000 rotate-12 transform"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[1000px] h-[1000px] bg-indigo-600 opacity-[0.05] blur-[150px] -z-10"></div>
        <div className="absolute inset-x-0 h-px top-0 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 font-black text-[9px] uppercase tracking-[0.45em] mb-6 inline-block shadow-inner group overflow-hidden"
               >
                 <span className="relative z-10 transition-colors group-hover:text-brand">Impact Metrics</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tighter leading-[0.95] mb-6">
                 Verifiable Results <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-indigo-400 drop-shadow-[0_0_50px_rgba(124,58,237,0.5)] italic px-4">
                    In High Fidelity.
                 </span>
               </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl relative">
                {metrics.map((metric, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl flex flex-col group transition-all hover:bg-white/[0.07] relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] hover:border-brand/40 items-center text-center h-full"
                    >
                        <div className="text-[8px] font-black uppercase text-white/20 tracking-[0.45em] mb-4 group-hover:text-brand-light transition-colors duration-500">
                           {metric.label}
                        </div>
                        <div className="text-4xl md:text-6xl font-display font-black mb-6 text-white tracking-tighter group-hover:text-brand-light transition-colors leading-tight">
                            {metric.value}
                        </div>
                        <div className="mt-2 flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-700 shadow-inner">
                            <metric.icon className="h-5 w-5 text-brand" />
                        </div>
                        
                        <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12">
                            <metric.icon className="h-32 w-32 text-brand" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CustomerMetrics
