import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Layout, Search, Target, Database, Blocks, Workflow } from 'lucide-react'

const UseCaseFeatures = ({ 
  badgeText = "Platform Capability",
  title,
  highlightTitle,
  description,
  features = [] 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Subtle Gradient Backdrops */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-slate-50 to-transparent -z-10 opacity-60"></div>
        <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[#f9fafb] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.2] mask-linear-b"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-10 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-6 inline-block shadow-xs relative group cursor-default"
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
                {features.map((feature, i) => {
                    const Icon = feature.icon || CheckCircle2;
                    return (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                           className={`p-6 md:p-8 rounded-2xl bg-white border border-slate-100 flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-sm hover:shadow-md hover:border-brand/10 hover:-translate-y-1`}
                        >
                           {/* High-End Icon System */}
                           <div className={`h-12 w-12 rounded-2xl bg-slate-50 border border-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/5 transition-all duration-700 shadow-inner overflow-hidden relative`}>
                              <Icon className={`h-5 w-5 text-brand transition-transform group-hover:rotate-6 duration-700 relative z-10`} />
                           </div>
                           
                           <h3 className="text-xl font-display font-black mb-4 text-slate-900 tracking-tighter leading-tight">
                              {feature.title}
                           </h3>
                           
                           <p className="text-slate-500 text-sm leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                              {feature.desc}
                           </p>
                           
                           <div className="absolute top-6 right-8 text-slate-100 font-display font-black text-4xl group-hover:text-brand/[0.04] transition-colors pointer-events-none opacity-40 italic">
                              0{i + 1}
                           </div>
                        </motion.div>
                    )
                })}
            </div>
            
            <motion.div 
               style={{ y }}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="mt-12 h-px w-full max-w-4xl bg-linear-to-r from-transparent via-slate-200 to-transparent"
            ></motion.div>
        </div>
    </section>
  )
}

export default UseCaseFeatures
