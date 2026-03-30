import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, FileX, DatabaseZap, ZapOff } from 'lucide-react'

const ProblemSection = () => {
    
    // Friction-themed card configuration
    const problems = [
        { 
          title: "The Chaos of Fragmentation", 
          desc: "Disconnected tools for audit, risk, and case management create dangerous visibility gaps.", 
          icon: ShieldAlert, 
          color: "text-rose-500",
          bg: "bg-rose-50"
        },
        { 
          title: "The Manual Audit Trap", 
          desc: "Months of manual evidence collecting and spreadsheet tracking that lead to auditor frustration.", 
          icon: FileX, 
          color: "text-amber-500",
          bg: "bg-amber-50"
        },
        { 
          title: "Zero Real-time Visibility", 
          desc: "Risk and compliance reporting are always weeks behind, leaving your organization exposed.", 
          icon: ZapOff, 
          color: "text-zinc-400",
          bg: "bg-zinc-50"
        }
    ]

  return (
    <section className="py-16 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden">
        {/* Subtle Backdrop branding - representing the complexity */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-900/[0.03] blur-[130px] rounded-full -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block shadow-sm"
               >
                 The GRC Friction Gap
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 The legacy approach <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-600 drop-shadow-sm italic">is holding you back.</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed opacity-70">
                 Traditional tools are built for static checkpoints, not for the speed of modern cloud-native engineering. 
                 The result is manual labor, audit fatigue, and hidden risks.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 w-full">
                {problems.map((prob, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="p-8 rounded-[2.5rem] bg-white border border-slate-100/50 flex flex-col group transition-all hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] hover:bg-white/95 relative overflow-hidden shadow-2xl"
                    >
                       <div className={`h-16 w-16 rounded-[1.5rem] ${prob.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-inner`}>
                          <prob.icon className={`h-10 w-10 ${prob.color} transition-transform group-hover:rotate-12 duration-700`} />
                       </div>
                       <h3 className="text-2xl font-display font-black mb-4 text-slate-900 tracking-tighter leading-tight group-hover:text-black transition-colors">{prob.title}</h3>
                       <p className="text-slate-500 text-lg leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity">{prob.desc}</p>
                       
                       <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-10 transition-opacity">
                            <prob.icon className={`h-24 w-24 ${prob.color}`} />
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProblemSection
