import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Layout, Search, Target, Database, Blocks, Workflow, LineChart } from 'lucide-react'

const FeatureCapabilities = ({ 
  badgeText = "Core Core Engine",
  title,
  highlightTitle,
  description,
  capabilities = [] 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Intricate Hub Design Doodles */}
        <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-[5%] opacity-[0.03] pointer-events-none hidden xl:block rotate-12">
           <Workflow className="h-32 w-32 text-indigo-600" />
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.2]"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-10 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-6 inline-block shadow-xs relative group"
               >
                 <span className="relative z-10 tracking-[0.45em]">{badgeText}</span>
               </motion.span>
               
               <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tighter leading-[1] mb-6">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-dark to-slate-900 drop-shadow-sm px-4 italic leading-tight inline-block">
                    {highlightTitle}
                 </span>
               </h2>
               
               <p className="text-base text-slate-500/80 font-inter font-medium max-w-xl mx-auto leading-relaxed tracking-tight">
                 {description}
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {capabilities.map((cap, i) => {
                    const Icon = cap.icon || CheckCircle2;
                    return (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                           className={`p-6 md:p-8 rounded-2xl bg-white border border-slate-100 flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-sm hover:shadow-md hover:border-brand/10 hover:-translate-y-1`}
                        >
                           {/* High-End Icon System */}
                           <div className={`h-12 w-12 rounded-2xl bg-slate-50 border border-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/5 transition-all duration-700 shadow-inner overflow-hidden relative`}>
                              <Icon className={`h-6 w-6 text-brand transition-transform group-hover:rotate-6 duration-700 relative z-10`} />
                           </div>
                           
                           <h3 className="text-xl font-display font-black mb-4 text-slate-900 tracking-tighter leading-tight">
                              {cap.title}
                           </h3>
                           
                           <p className="text-slate-500 text-sm leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                              {cap.desc}
                           </p>
                           
                           <div className="absolute top-6 right-8 text-slate-100 font-display font-black text-4xl group-hover:text-brand/[0.04] transition-colors pointer-events-none italic">
                              0{i + 1}
                           </div>
                        </motion.div>
                    )
                })}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-12 flex items-center gap-4 text-[9px] font-black uppercase text-slate-300 tracking-[0.4em] animate-pulse"
            >
               <LineChart className="h-3 w-3" /> Architectural Fidelity v2.6.4
            </motion.div>
        </div>
    </section>
  )
}

export default FeatureCapabilities
