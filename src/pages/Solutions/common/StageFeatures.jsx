import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Layout, Search, Target, Database, Blocks, Workflow } from 'lucide-react'

const StageFeatures = ({ 
  badgeText = "The Solution",
  title,
  highlightTitle,
  description,
  features = [] 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute top-[20%] left-[-15%] w-[800px] h-[800px] bg-brand/5 blur-[160px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.2]"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-10 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-6 inline-block shadow-sm relative group cursor-default"
               >
                 <span className="relative z-10 tracking-[0.45em]">{badgeText}</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-dark to-slate-900 drop-shadow-sm px-4 italic">
                    {highlightTitle}
                 </span>
               </h2>
               
               <p className="text-base text-slate-500/80 font-inter font-medium max-w-xl mx-auto leading-relaxed tracking-tight">
                 {description}
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {features.map((feature, i) => {
                    const Icon = feature.icon || CheckCircle2;
                    return (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           className={`p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.12)] hover:border-brand/10 hover:-translate-y-1`}
                        >
                           {/* High-End Icon System */}
                           <div className={`h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand/5 group-hover:border-brand/10 transition-all duration-700 shadow-inner overflow-hidden relative backdrop-blur-3xl`}>
                              <Icon className={`h-5 w-5 text-brand transition-transform group-hover:rotate-6 duration-700 relative z-10`} />
                              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                           </div>
                           
                           <h3 className="text-xl font-display font-black mb-5 text-slate-900 tracking-tighter leading-tight group-hover:text-black transition-colors">
                              {feature.title}
                           </h3>
                           
                           <p className="text-slate-500 text-base leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                              {feature.desc}
                           </p>
                           
                           <div className="absolute top-10 right-12 text-slate-100 font-display font-black text-6xl group-hover:text-brand/[0.04] transition-colors pointer-events-none opacity-40">
                              0{i + 1}
                           </div>
                        </motion.div>
                    )
                })}
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

export default StageFeatures
