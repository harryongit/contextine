import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Activity, Layers, Terminal, Database, ShieldCheck } from 'lucide-react'

const DifferentiatorGrid = () => {
    
    // Core differentiator points for the bento-style grid
    const points = [
        { 
          title: "Automation-First Core", 
          desc: "Contextine was built for speed. Every control is auto-mapped to evidence using native API connectors.", 
          icon: Zap, 
          color: "text-indigo-600",
          bg: "bg-indigo-50",
          col: "lg:col-span-2"
        },
        { 
          title: "Real-time GRC Insights", 
          desc: "Stop waiting for quarterly reports. See your risk posture update in 24-bit fidelity as your infrastructure changes.", 
          icon: Activity, 
          color: "text-emerald-500",
          bg: "bg-emerald-50",
          col: "lg:col-span-1"
        },
        { 
          title: "Scalable Integrated Workflows", 
          desc: "Built to support your growth from seed to IPO. Manage thousands of cases without adding headcount.", 
          icon: Layers, 
          color: "text-fuchsia-400",
          bg: "bg-fuchsia-50",
          col: "lg:col-span-1"
        },
        { 
          title: "Enterprise-Grade Security", 
          desc: "Audit-ready encryption and litigation holds that provide iron-clad protection for your most sensitive data.", 
          icon: ShieldCheck, 
          color: "text-brand",
          bg: "bg-indigo-50",
          col: "lg:col-span-2"
        }
    ]

  return (
    <section className="py-16 px-6 md:px-12 bg-[#F5F3FF] relative overflow-hidden">
        {/* Subtle Backdrop branding - representing the harmony and scalability */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-brand/[0.02] blur-[120px] rounded-full -z-10 transition-transform duration-1000"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white border border-indigo-100 text-indigo-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block shadow-sm"
               >
                 The Contextine Advantage
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 Built different <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-brand drop-shadow-sm">To move you faster.</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed opacity-70">
                 Ditch the manual checkpoints. Contextine provides the technical depth and operational scale <br className="hidden md:block" />
                 to handle compliance with absolute certainty.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 w-full mb-20">
                {points.map((point, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className={`p-10 rounded-[3rem] bg-white border border-indigo-50/50 flex flex-col group transition-all hover:shadow-[0_80px_180px_-40px_rgba(124,58,237,0.2)] hover:bg-white/95 relative overflow-hidden shadow-2xl ${point.col}`}
                    >
                       <div className={`h-16 w-16 rounded-[1.5rem] ${point.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-inner`}>
                          <point.icon className={`h-11 w-11 ${point.color} transition-transform group-hover:rotate-6 duration-700 shadow-sm`} />
                       </div>
                       <h3 className="text-2xl font-display font-black mb-4 text-slate-900 tracking-tighter group-hover:text-black transition-colors">{point.title}</h3>
                       <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-xl">{point.desc}</p>
                       
                       <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity">
                            <point.icon className={`h-28 w-28 ${point.color}`} />
                       </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Tech Bar Decor */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-200 to-transparent"></div>
        </div>
    </section>
  )
}

export default DifferentiatorGrid
