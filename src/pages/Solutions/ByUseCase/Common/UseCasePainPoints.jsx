import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { XCircle, Activity, Sparkles } from 'lucide-react'

const UseCasePainPoints = ({ 
  badgeText = "The Friction",
  title,
  painPoints = []
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.98, 1, 0.98]);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-rose-50/50 to-transparent -z-10 opacity-60"></div>
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 relative z-10 w-full">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               style={{ scale }}
               className="flex-1 p-8 md:p-10 rounded-2xl bg-white border border-rose-100 flex flex-col group transition-all hover:bg-rose-50/10 relative overflow-hidden shadow-sm"
            >
               <div className="mb-6 inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100/50 text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-xs relative overflow-hidden group">
                 <XCircle className="h-4 w-4" /> 
                 <span className="relative z-10">{badgeText}</span>
               </div>

               <h3 className="text-3xl md:text-4xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-[1] mb-8">
                 {title}
               </h3>
               
               <div className="grid gap-4 mt-auto">
                   {painPoints.map((point, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08, duration: 0.8 }}
                          className="flex items-start gap-3 p-3.5 rounded-xl border border-rose-100/10 hover:bg-rose-50/20 transition-all shadow-xs"
                       >
                          <div className="h-1.5 w-1.5 mt-2 rounded-full bg-rose-400 shrink-0"></div>
                          <div className="text-base font-medium text-slate-700 leading-tight tracking-tight">{point}</div>
                       </motion.div>
                   ))}
               </div>

               <div className="mt-8 pt-6 border-t border-rose-100 flex items-center gap-4 text-rose-300 font-bold text-[8px] uppercase tracking-[0.4em]">
                  <Activity className="h-3 w-3" /> Operational technical debt v4.0
               </div>
            </motion.div>
            
            <div className="hidden lg:flex flex-1 relative flex-col justify-center items-center">
                 <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="h-[450px] w-[450px] bg-linear-to-br from-slate-50 to-rose-50 opacity-40 blur-3xl rounded-full absolute -z-10"
                 />
                 <Sparkles className="h-16 w-16 text-slate-100" />
            </div>
        </div>
    </section>
  )
}

export default UseCasePainPoints
