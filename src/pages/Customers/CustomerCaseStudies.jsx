import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap, Star } from 'lucide-react'
import Button from '../../common/Button'

const CustomerCaseStudies = () => {
  const caseStudies = [
    {
      company: "FinScale Technologies",
      headline: "Reduced Audit Time by 65% with Contextine",
      summary: "How a high-growth fintech startup automated SOC2 evidence collection and cleared enterprise reviews twice as fast.",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
      delay: 0.1
    },
    {
      company: "CloudSecure Global",
      headline: "Cut Compliance Management Overheads by 40%",
      summary: "By migrating fragmented spreadsheets to Contextine's mesh architecture, CloudSecure unified global risk assessments.",
      icon: ShieldCheck,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
      delay: 0.2
    },
    {
      company: "LogicOps Inc.",
      headline: "Zero Incident Resolution Latency at Scale",
      summary: "Automating legal and security case escalations allowed LogicOps to maintain 100% SLA compliance for 500+ items monthly.",
      icon: Zap,
      color: "text-brand",
      bg: "bg-brand/10",
      border: "hover:border-brand/30",
      delay: 0.3
    }
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden selection:bg-brand/10">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent"></div>
        <div className="absolute top-[30%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-50 blur-[180px] rounded-full -z-10 animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[9px] uppercase tracking-[0.45em] mb-6 inline-block shadow-sm group relative overflow-hidden"
               >
                 <span className="relative z-10 transition-colors group-hover:text-brand">Featured Impact</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                 High-End Outcomes <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-800 italic">
                    For Modern Teams.
                 </span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: study.delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`p-8 md:p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col group transition-all relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(124,58,237,0.12)] ${study.border} ring-1 ring-slate-50 hover:ring-brand/10`}
                    >
                        <div className={`h-14 w-14 mb-8 rounded-[1.2rem] ${study.bg} border border-white/10 flex items-center justify-center ${study.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner text-brand`}>
                            <study.icon className={`h-6 w-6 ${study.color}`} />
                        </div>
                        
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-[0.4em] mb-3 group-hover:text-brand transition-colors duration-500">
                           {study.company} &mdash; CASE 00{i+1}
                        </div>
                        
                        <h3 className="text-2xl font-display font-black mb-5 text-slate-900 tracking-tighter group-hover:text-black transition-colors leading-[1.05]">
                            {study.headline}
                        </h3>
                        
                        <p className="text-slate-500 text-base font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-[260px] leading-relaxed mb-8 flex-1">
                            {study.summary}
                        </p>
                        
                        <div className="mt-auto flex items-center gap-2 text-brand font-black text-[9px] uppercase tracking-widest group-hover:translate-x-1.5 transition-all">
                            Read Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>

                        <div className="absolute top-8 right-8 text-slate-100 font-display font-black text-5xl group-hover:text-brand/[0.03] transition-colors pointer-events-none opacity-40">
                            v1.0
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CustomerCaseStudies
