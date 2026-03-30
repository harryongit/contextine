import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Target, Activity, Zap, TrendingUp, Star, Blocks, Workflow, Layout, Search } from 'lucide-react'

const CustomerWhyChoose = () => {
  const reasons = [
    { title: "All-in-One Logic", desc: "A unified platform for Audit, Case, and GRC with near-perfect fidelity.", icon: Blocks },
    { title: "Automation First", desc: "Remove manual technical debt via high-fidelity technical orchestrations.", icon: Workflow },
    { title: "Real-Time Oversight", desc: "Total visibility across your risk architecture with executive-grade dashboards.", icon: Layout },
    { title: "Market Scalability", desc: "A foundation that adapts at lightning speed as your organizational complexity grows.", icon: TrendingUp }
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden selection:bg-brand/10">
        <div className="absolute top-[30%] left-[-15%] w-[1000px] h-[1000px] bg-indigo-50 blur-[180px] rounded-full -z-10 animate-pulse-slow transition-transform duration-1000 rotate-12"></div>
        <div className="absolute inset-x-0 h-px bottom-0 bg-linear-to-r from-transparent via-slate-100 to-transparent"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.45em] mb-6 inline-block shadow-sm relative group overflow-hidden"
               >
                 <span className="relative z-10 transition-colors group-hover:text-brand">Strategy & Selection</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                 Why Modern Teams <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-800 italic px-4">
                    Choose Contextine.
                 </span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl relative z-10">
                {reasons.map((reason, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col group transition-all relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(124,58,237,0.12)] hover:border-brand/10 hover:-translate-y-1 ring-1 ring-slate-50 hover:ring-brand/10"
                    >
                        <div className="h-12 w-12 mb-8 rounded-xl bg-slate-50 border border-white/10 flex items-center justify-center group-hover:bg-brand/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner">
                            <reason.icon className="h-5 w-5 text-brand" />
                        </div>
                        
                        <h3 className="text-xl font-display font-black mb-5 text-slate-900 tracking-tighter group-hover:text-black transition-colors leading-tight">
                            {reason.title}
                        </h3>
                        
                        <p className="text-slate-500 text-sm leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                            {reason.desc}
                        </p>
                        
                        <div className="absolute top-8 right-12 text-slate-100 font-display font-black text-5xl group-hover:text-brand/[0.04] transition-colors pointer-events-none opacity-40">
                            0{i + 1}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="mt-20 h-px w-full max-w-4xl bg-linear-to-r from-transparent via-slate-200 to-transparent"
            ></motion.div>
        </div>
    </section>
  )
}

export default CustomerWhyChoose
