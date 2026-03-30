import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { XCircle, CloudFog, Activity } from 'lucide-react'

const SolutionPainPoints = ({ 
  badgeText = "The Challenge",
  title,
  painPoints = []
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-slate-50 to-transparent -z-10 opacity-60"></div>
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 relative z-10 w-full">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               style={{ scale }}
               className="flex-1 p-10 md:p-14 rounded-[3.5rem] bg-white border border-rose-100 flex flex-col group transition-all hover:bg-rose-50/5 relative overflow-hidden shadow-[0_40px_100px_-30px_rgba(255,100,100,0.1)] hover:shadow-[0_60px_120px_-30px_rgba(255,100,100,0.15)]"
            >
               <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-rose-50 border border-rose-100/50 text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                 <XCircle className="h-4 w-4" /> 
                 <span className="relative z-10">{badgeText}</span>
                 <div className="absolute inset-0 bg-white/50 -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
               </div>

               <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-12">
                 {title}
               </h3>
               
               <div className="grid gap-6 mt-auto">
                   {painPoints.map((point, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                          className="flex items-start gap-4 p-5 rounded-2xl border border-rose-50 group-hover:border-rose-100/50 hover:bg-rose-50/10 transition-colors shadow-sm"
                       >
                          <div className="h-6 w-6 mt-1 rounded-full bg-rose-100/50 flex items-center justify-center shrink-0">
                             <div className="h-1.5 w-1.5 rounded-full bg-rose-400"></div>
                          </div>
                          <div className="text-lg font-medium text-slate-700 leading-tight tracking-tight">{point}</div>
                       </motion.div>
                   ))}
               </div>

               <div className="mt-12 pt-8 border-t border-rose-100 flex items-center gap-4 text-rose-300 font-black text-[10px] uppercase tracking-widest">
                  <CloudFog className="h-4 w-4" /> Operational Friction v2.1
               </div>
            </motion.div>
            
            {/* Visual Balance for the section */}
            <div className="hidden lg:flex flex-1 relative flex-col justify-center items-center">
                 <div className="absolute inset-0 bg-linear-to-r from-transparent via-slate-100/10 to-transparent -skew-x-12"></div>
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="h-[500px] w-[500px] border border-slate-100/50 rounded-full border-dashed opacity-20 relative pointer-events-none"
                 >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 bg-rose-100/50 border border-slate-200 shadow-xl rounded-xl"></div>
                 </motion.div>
                 <Activity className="absolute h-24 w-24 text-slate-100" />
            </div>
        </div>
    </section>
  )
}

export default SolutionPainPoints
