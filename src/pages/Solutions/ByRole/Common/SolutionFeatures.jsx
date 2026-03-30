import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Layout, Search, Target, Database, Blocks, Workflow } from 'lucide-react'

const SolutionFeatures = ({ 
  badgeText = "Solution Ecosystem",
  title,
  highlightTitle,
  description,
  features = [] 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#F0FDFA] to-transparent -z-10 opacity-60"></div>
        <div className="absolute top-[20%] left-[-15%] w-[800px] h-[800px] bg-brand/5 blur-[160px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2]"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-16 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block shadow-sm relative group cursor-default"
               >
                 <span className="relative z-10 tracking-[0.45em]">{badgeText}</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
               </motion.span>
               
               <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-dark to-slate-900 drop-shadow-sm px-4 italic">
                    {highlightTitle}
                 </span>
               </h2>
               
               <p className="text-lg text-slate-500/80 font-inter font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
                 {description}
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {features.map((feature, i) => {
                    const Icon = feature.icon || CheckCircle2;
                    return (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                           className={`p-8 md:p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-20px_rgba(124,58,237,0.12)] hover:border-brand/10 hover:-translate-y-2`}
                        >
                           {/* High-End Icon System */}
                           <div className={`h-16 w-16 rounded-[1.5rem] bg-slate-50 border border-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand/5 group-hover:border-brand/10 transition-all duration-700 shadow-inner overflow-hidden relative`}>
                              <Icon className={`h-6 w-6 text-brand transition-transform group-hover:rotate-6 duration-700 relative z-10`} />
                              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                           </div>
                           
                           <h3 className="text-2xl font-display font-black mb-6 text-slate-900 tracking-tighter leading-tight group-hover:text-black transition-colors">
                              {feature.title}
                           </h3>
                           
                           <p className="text-slate-500 text-base leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                              {feature.desc}
                           </p>
                           
                           <div className="absolute top-8 right-10 text-slate-100 font-display font-black text-6xl group-hover:text-brand/[0.03] transition-colors pointer-events-none">
                              0{i + 1}
                           </div>
                        </motion.div>
                    )
                })}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="mt-20 h-px w-full max-w-3xl bg-linear-to-r from-transparent via-slate-200 to-transparent"
            ></motion.div>
        </div>
    </section>
  )
}

export default SolutionFeatures
