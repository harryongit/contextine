import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Lightbulb, Users, Globe, ExternalLink, Sparkles } from 'lucide-react'
import Button from '../../../../common/Button'

const UseCaseScenario = ({ 
  badgeText = "The Real-World Logic",
  title,
  desc,
  scenario,
  ctaText = "Start Your Roadmap"
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [0, -30]);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-y border-slate-100 selection:bg-brand/10">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white to-transparent -z-10 opacity-60"></div>
        <div className="absolute top-[20%] left-[-15%] w-[1000px] h-[1000px] bg-indigo-50 blur-[180px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white to-transparent -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-16 max-w-5xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-[0.45em] mb-8 inline-block shadow-md group cursor-default relative overflow-hidden"
               >
                 <span className="relative z-10">{badgeText}</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-800 italic px-4">
                    Case Visualization.
                 </span>
               </h2>
               
               <p className="text-lg text-slate-500/80 font-inter font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
                 {desc}
               </p>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ y }}
                className={`p-12 md:p-16 rounded-[4rem] bg-white border border-brand/10 flex flex-col group transition-all relative overflow-hidden shadow-[0_100px_200px_-50px_rgba(124,58,237,0.15)] mb-20 max-w-5xl w-full cursor-default`}
            >
                <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-transparent via-brand to-transparent"></div>
                
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-16 w-16 rounded-[1.5rem] bg-brand/10 border border-brand/10 flex items-center justify-center text-brand group-hover:scale-110 group-active:scale-95 transition-all duration-700 shadow-inner">
                        <Lightbulb className="h-8 w-8 animate-pulse-slow" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-[10px] font-black uppercase text-brand tracking-[0.4em]">Resource Narrative v2.0</div>
                        <div className="text-2xl md:text-3xl font-display font-black tracking-tight text-slate-900 leading-tight">Operational Spotlight</div>
                    </div>
                </div>

                <div className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 mb-12 leading-[1] tracking-tight group-hover:text-black transition-colors">
                    "{scenario}"
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto pt-10 border-t border-slate-100 group-hover:border-brand/10 transition-colors">
                    <Button variant="primary" size="lg" className="px-10 rounded-2xl h-16 text-sm font-black bg-brand hover:scale-105 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.5)] transition-all border-none relative overflow-hidden group/btn">
                        <span className="relative z-10">{ctaText}</span>
                        <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </Button>
                    
                    <button className="flex items-center gap-4 text-slate-400 font-black text-[10px] uppercase tracking-[0.45em] hover:text-brand transition-all group-hover:translate-x-2">
                        View Roadmap <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <div className="ml-auto hidden xl:flex items-center gap-6 text-slate-300">
                        <Sparkles className="h-6 w-6 opacity-40 group-hover:opacity-100 group-hover:text-brand transition-all duration-700" />
                    </div>
                </div>

                <div className="absolute bottom-10 right-14 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                    <ExternalLink className="h-32 w-32" />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default UseCaseScenario
