import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Layout, Search, Target, Database, Blocks, Workflow } from 'lucide-react'

const CustomerStoriesGrid = () => {
  const stories = [
    { title: "ScaleOps Global", result: "SOC2 Compliance in 3 Weeks" },
    { title: "MetaSecurity Hub", result: "90% Automation of Controls" },
    { title: "FinCore Digital", result: "Risk-Free Regulatory Filing" },
    { title: "Quantum Legal", result: "2x Case Resolution Velocity" },
    { title: "Aether Cloud", result: "Zero Drift Security Posture" },
    { title: "NextGen Fintech", result: "Seamless GDPR Alignment" },
    { title: "InfraShield", result: "Automated Evidence Engine" },
    { title: "AeroDynamics", result: "CMMC 2.0 Ready in Record Time" }
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-[#f9fafb] bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:40px_40px] opacity-[0.2]"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.45em] mb-6 inline-block shadow-sm relative group overflow-hidden"
               >
                 <span className="relative z-10 transition-colors group-hover:text-brand">Global Stories</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                 Customer Evidence <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-800 italic">
                    Grid v2.0.
                 </span>
               </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                {stories.map((story, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        className="p-6 rounded-[2rem] bg-white border border-slate-100 flex flex-col group transition-all relative overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:border-brand/10 hover:-translate-y-0.5 ring-1 ring-slate-50 hover:ring-brand/10"
                    >
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-[0.4em] mb-3 group-hover:text-brand transition-colors duration-500">
                           {story.title}
                        </div>
                        
                        <h3 className="text-lg font-display font-black mb-4 text-slate-900 tracking-tighter group-hover:text-black transition-colors leading-tight flex-1">
                            {story.result}
                        </h3>
                        
                        <div className="mt-6 flex items-center gap-2 text-brand font-black text-[8px] uppercase tracking-widest group-hover:translate-x-1 transition-all">
                            Read Case Study <ArrowUpRight className="h-3 w-3" />
                        </div>
                        
                        <div className="absolute bottom-[-10px] right-[-10px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                            <Workflow className="h-20 w-20" />
                        </div>
                    </motion.div>
                ))}
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

export default CustomerStoriesGrid
