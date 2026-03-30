import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Activity, Zap, Sparkles, XCircle } from 'lucide-react'

const StageNarrative = ({ 
  badgeText = "The Challenge",
  title,
  painPoints = []
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.98, 1, 0.98]);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-20"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 relative z-10 w-full">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               style={{ scale }}
               className="flex-1 p-8 md:p-12 rounded-[2.5rem] bg-white border border-rose-100 flex flex-col group transition-all hover:bg-rose-50/10 relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(255,100,100,0.1)] hover:shadow-[0_45px_100px_-20px_rgba(255,100,100,0.15)]"
            >
               <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 text-[9px] font-black uppercase tracking-[0.4em] shadow-sm relative overflow-hidden">
                 <XCircle className="h-3.5 w-3.5" /> 
                 <span className="relative z-10">{badgeText}</span>
                 <div className="absolute inset-0 bg-white/50 -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
               </div>

               <h3 className="text-3xl md:text-5xl lg:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                 {title}
               </h3>
               
               <div className="grid gap-6 mt-auto">
                   {painPoints.map((point, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                          className="flex items-start gap-4 p-5 rounded-2xl border border-rose-50 group-hover:border-rose-100/50 hover:bg-rose-50/10 transition-colors shadow-xs"
                       >
                          <div className="h-2 w-2 mt-2.5 rounded-full bg-rose-400 shrink-0"></div>
                          <div className="text-lg font-medium text-slate-700 leading-tight tracking-tight">{point}</div>
                       </motion.div>
                   ))}
               </div>

               <div className="mt-12 pt-8 border-t border-rose-100 flex items-center gap-4 text-rose-300 font-black text-[9px] uppercase tracking-[0.4em]">
                  <Activity className="h-4 w-4" /> Structural Friction v4.1
               </div>
            </motion.div>
            
            <div className="hidden lg:flex flex-1 relative flex-col justify-center items-center">
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="h-[500px] w-[500px] border border-slate-100 border-dashed rounded-full opacity-20 relative"
                 >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-8 bg-rose-50 border border-rose-100 rounded-lg shadow-xl"></div>
                 </motion.div>
                 <Sparkles className="h-16 w-16 text-slate-100" />
            </div>
        </div>
    </section>
  )
}

export default StageNarrative
