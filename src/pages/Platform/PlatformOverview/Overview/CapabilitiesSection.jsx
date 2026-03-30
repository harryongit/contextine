import React from 'react'
import { motion } from 'framer-motion'
import { Search, FileText, MessageSquare, Terminal, Database, Activity } from 'lucide-react'
import dashboardMockup from '../../../../assets/contextine_dashboard_mockup.png'

const CapabilitiesSection = () => {
   return (
      <section className="pt-32 pb-16 px-6 md:px-12 bg-[#F0FDFA] relative">
         {/* Subtle Background Environment */}
         <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full -z-10 animate-pulse"></div>

         <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex mb-5 items-center gap-2 px-3 py-1 rounded-lg bg-white border border-emerald-100/50 text-emerald-600 text-[8px] font-black uppercase tracking-[0.2em] shadow-lg"
            >
               <Activity className="h-3 w-3" /> Comprehensive Protection
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-5 leading-[1.05] tracking-tighter text-slate-900 drop-shadow-sm">
               Your Entire Security Surface, <br />
               <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-emerald-700 to-indigo-950">Mapped in Real-time.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium max-w-xl mx-auto opacity-70">
               Contextine doesn't just scan; it understands your data flow. From cloud inventory to litigation holds—everything is unified on one stunning canvas.
            </p>
         </div>

         <div className="max-w-5xl mx-auto perspective-[2000px] relative">
            <motion.div
               initial={{ opacity: 0, y: 100, rotateX: 10, scale: 0.95 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="w-full p-2 rounded-[3.5rem] bg-white border border-emerald-100 shadow-[0_60px_140px_-40px_rgba(16,185,129,0.15)] relative z-10 overflow-hidden group"
            >
               <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
               <img
                  src={dashboardMockup}
                  className="w-full relative rounded-[2.8rem] border border-slate-100/50 shadow-sm"
                  alt="Contextine Dashboard OS Reveal"
               />
            </motion.div>

            {/* Scaled Down Floating Overlays */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 p-8 rounded-[2.5rem] bg-white border border-emerald-50 shadow-2xl z-20 flex flex-col items-center justify-center text-center hidden xl:flex group hover:scale-105 transition-transform"
            >
               <div className="h-12 w-12 mb-4 rounded-2xl bg-emerald-500/10 flex items-center justify-center shadow-inner"><Search className="h-6 w-6 text-emerald-600" /></div>
               <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Total Discovery</div>
               <div className="text-xl font-black text-slate-900 tracking-tighter">320+ Apps</div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -left-10 p-6 rounded-[2rem] bg-[#020617] border border-white/10 shadow-2xl z-20 flex flex-col items-start gap-3 hidden xl:flex group hover:scale-105 transition-transform"
            >
               <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"><Terminal className="h-5 w-5 text-brand" /></div>
               <div className="max-w-[130px]">
                  <div className="text-[9px] uppercase font-black text-white/30 tracking-[0.2em] mb-1">Vulnerability Logic</div>
                  <div className="text-sm font-bold text-white tracking-tight leading-tight">All Cloud Gaps <br />Auto-Resolved</div>
               </div>
            </motion.div>
         </div>
      </section>
   )
}

export default CapabilitiesSection
