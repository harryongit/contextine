import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { XCircle, CheckCircle2, CloudFog, Sparkles, Activity } from 'lucide-react'

const FeatureProblemSolution = ({ 
  problemBadge = "The Friction",
  problemTitle,
  problemDesc,
  solutionBadge = "The Contextine Way",
  solutionTitle,
  solutionDesc
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-slate-200/40 blur-[180px] rounded-full -z-0"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 relative z-10 w-full">
            {/* The Problem Narrative */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               style={{ scale }}
               className="flex-1 p-10 md:p-14 rounded-[3.5rem] bg-white border border-rose-100 flex flex-col group transition-all hover:bg-rose-50/10 relative overflow-hidden shadow-[0_40px_100px_-30px_rgba(255,100,100,0.1)] hover:shadow-[0_60px_120px_-30px_rgba(255,100,100,0.15)]"
            >
               <div className="mb-10 inline-flex items-center gap-4 px-5 py-2 rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm relative overflow-hidden">
                 <XCircle className="h-5 w-5" /> 
                 <span className="relative z-10">{problemBadge}</span>
                 <div className="absolute inset-0 bg-white/50 -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
               </div>

               <h3 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                 {problemTitle}
               </h3>
               
               <p className="text-lg text-slate-500 leading-relaxed font-inter font-medium opacity-80 max-w-xl mb-10 relative z-10">
                 {problemDesc}
               </p>

               <div className="mt-auto pt-8 border-t border-rose-100 flex items-center gap-4 text-rose-300 font-black text-[10px] uppercase tracking-widest">
                  <CloudFog className="h-4 w-4" /> Visibility Gap v2.1
               </div>

               {/* Background Decorative Element */}
               <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 -rotate-12 transform scale-150 pointer-events-none">
                  <XCircle className="h-[400px] w-[400px] text-rose-600" />
               </div>
            </motion.div>

            {/* The Solution Narrative */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
               style={{ scale }}
               className="flex-1 p-10 md:p-14 rounded-[3.5rem] bg-[#020617] border border-brand/20 flex flex-col group transition-all relative overflow-hidden shadow-[0_80px_160px_-40px_rgba(124,58,237,0.4)] hover:shadow-[0_100px_200px_-40px_rgba(124,58,237,0.5)]"
            >
               {/* Animated Background Doodles for Solution */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7c3aed11_0%,_transparent_60%)] -z-10 animate-pulse"></div>
               
               <div className="mb-10 inline-flex items-center gap-4 px-5 py-2 rounded-2xl bg-brand/10 border border-brand/20 text-brand text-[10px] font-black uppercase tracking-[0.4em] shadow-inner overflow-hidden group/badge relative">
                 <CheckCircle2 className="h-5 w-5 animate-bounce-slow" /> 
                 <span className="relative z-10">{solutionBadge}</span>
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-20"
                 >
                    <Sparkles className="h-8 w-8" />
                 </motion.div>
               </div>

               <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter leading-[0.9] mb-10">
                 {solutionTitle}
               </h3>
               
               <p className="text-lg text-white/40 leading-relaxed font-inter font-medium opacity-90 max-w-xl mb-10 relative z-10">
                 {solutionDesc} 
               </p>

               <div className="mt-auto pt-8 border-t border-brand/20 flex items-center gap-4 text-brand/30 font-black text-[10px] uppercase tracking-widest">
                  <Activity className="h-4 w-4" /> Context Logic v4.0
               </div>

               {/* Background Glow & Branding */}
               <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-brand opacity-[0.08] blur-[120px] rounded-full -z-0 group-hover:opacity-[0.15] transition-opacity duration-1000"></div>
               
               <div className="absolute bottom-[-10%] left-[-10%] opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-1000 rotate-12 transform scale-150 pointer-events-none">
                  <CheckCircle2 className="h-[400px] w-[400px] text-brand" />
               </div>
            </motion.div>
        </div>
    </section>
  )
}

export default FeatureProblemSolution
