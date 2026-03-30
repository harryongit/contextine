import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, MessageSquare, Target } from 'lucide-react'

const BenefitGrid = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-white relative">
        {/* Subtle Backdrop Branding */}
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand/3 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="px-4 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.3em] mb-10 inline-block shadow-sm"
               >
                 Powering Trust Globally
               </motion.span>
               <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[1] mb-8">
                 Join the Elite. <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-accent drop-shadow-sm">Win with Integrity.</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto leading-relaxed opacity-70 text-center">
                 From startups to Fortune 500s—turn your compliance posture into an advantage.
               </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-10 w-full items-center">
               {/* Scaled Down Testimonial Visual */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 p-12 md:p-16 rounded-[3.5rem] bg-[#1E1B4B] text-white relative overflow-hidden shadow-2xl hover:shadow-[0_60px_100px_-30px_rgba(30,27,75,0.3)] transition-shadow duration-1000 group cursor-default"
               >
                  <div className="absolute top-0 right-0 p-12 rotate-12 opacity-5 group-hover:scale-110 transition-transform duration-1000"><Target className="h-44 w-44" /></div>
                  
                  <div className="flex gap-1.5 mb-10 relative z-10">
                     {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-500" />)}
                  </div>

                  <p className="text-2xl md:text-3xl font-display font-bold leading-relaxed mb-12 relative z-10 italic tracking-tight opacity-95 group-hover:opacity-100 transition-opacity">
                     "Contextine transformed our security posture. We passed our SOC 2 Type II with zero findings, saving us months of manual effort."
                  </p>

                  <div className="flex items-center gap-6 relative z-10">
                     <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-xl group-hover:bg-brand/20 transition-colors">
                        <Quote className="h-7 w-7 text-white" />
                     </div>
                     <div>
                        <div className="text-xl font-black tracking-tight leading-none">Sarah McArthur</div>
                        <div className="text-white/40 font-black uppercase text-[8px] tracking-[0.3em] mt-2">Head of Security, DevCorp</div>
                     </div>
                  </div>
               </motion.div>

               {/* Metrics Mini-Grid - Scaled Down */}
               <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-2 gap-6 w-full">
                  {[
                    { label: "Contract Velocity", val: "$2.5B+", sub: "In revenue unlocked" },
                    { label: "Audit Readiness", val: "10x", sub: "Faster prep times" },
                    { label: "Integrations", val: "40+", sub: "Dynamic Hubs" },
                    { label: "Manual Effort", val: "-80%", sub: "Reduction in pull" }
                  ].map((stat, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 + (i * 0.05), duration: 0.8 }}
                       className="p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100 flex flex-col gap-4 hover:shadow-xl hover:bg-white transition-all transform hover:-translate-y-1 group group-hover:border-brand/30"
                    >
                       <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none group-hover:text-brand transition-colors">{stat.label}</div>
                       <div className="text-3xl font-black text-slate-900 tracking-tighter tabular-nums">{stat.val}</div>
                       <div className="text-[10px] font-bold text-slate-500 leading-relaxed font-inter opacity-70 leading-none">{stat.sub}</div>
                    </motion.div>
                  ))}
               </div>
            </div>
        </div>
      </section>
  )
}

export default BenefitGrid
