import React from 'react'
import { motion } from 'framer-motion'

const PainPoints = ({ 
  badgeText, 
  title, 
  highlightTitle, 
  description, 
  problems 
}) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-slate-200/50 blur-[130px] rounded-full -z-0"></div>

        {/* Chaos vs Order Doodle */}
        <div className="absolute left-[5%] bottom-[10%] opacity-[0.05] pointer-events-none -z-0 hidden xl:block">
             <svg width="200" height="200" viewBox="0 0 100 100" className="text-slate-900">
                  <path d="M10 50 L 90 50 M 50 10 L 50 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <motion.rect 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    x="30" y="30" width="40" height="40" stroke="currentColor" fill="none" strokeWidth="0.2" 
                  />
             </svg>
        </div>

        <div className="max-w-7xl mx-auto items-center relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white border border-slate-100/50 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10 inline-block shadow-sm"
               >
                 {badgeText}
               </motion.span>
               <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-600 italic">{highlightTitle}</span>
               </h2>
               <p className="text-lg text-slate-500/80 font-inter font-medium max-w-xl mx-auto leading-relaxed">
                 {description} 
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                {problems.map((prob, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className={`p-10 md:p-14 rounded-[4rem] bg-white border ${prob.border || 'border-slate-100'} flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-sm hover:shadow-2xl`}
                    >
                       <div className={`h-16 w-16 rounded-[1.5rem] ${prob.bg || 'bg-slate-50'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-inner`}>
                          <prob.icon className={`h-8 w-8 ${prob.color || 'text-slate-400'} transition-transform group-hover:rotate-12 duration-700`} />
                       </div>
                       <h3 className="text-3xl font-display font-black mb-4 text-slate-900 tracking-tighter leading-tight group-hover:text-black transition-colors">{prob.title}</h3>
                       <p className="text-slate-500 text-lg leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity">{prob.desc}</p>
                       
                       <div className="absolute top-0 right-[-5%] p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 -rotate-12 transform">
                            <prob.icon className={`h-40 w-40 ${prob.color || 'text-slate-400'}`} />
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PainPoints
