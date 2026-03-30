import React from 'react'
import { motion } from 'framer-motion'

const Features = ({ 
  badgeText, 
  title, 
  highlightTitle, 
  description, 
  featuresList 
}) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Subtle Backdrop branding */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand/3 blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/2 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10 inline-block shadow-sm"
               >
                 {badgeText}
               </motion.span>
               <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-indigo-600 to-emerald-600 drop-shadow-sm">{highlightTitle}</span>
               </h2>
               <p className="text-lg text-slate-500/80 font-inter font-medium max-w-xl mx-auto leading-relaxed">
                 {description}
               </p>
            </div>

            <div className="grid gap-16 w-full">
                {featuresList.map((feature, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                       className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                       <div className="flex-1">
                          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-slate-50 border border-slate-100/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm">
                             <feature.icon className={`h-4 w-4 ${feature.color || 'text-brand'}`} /> Feature 0{i+1}
                          </div>
                          <h3 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-tight mb-8">
                            {feature.title}
                          </h3>
                          <p className="text-lg text-slate-500/80 leading-relaxed font-inter font-medium mb-10 opacity-80 overflow-hidden max-w-xl">
                            {feature.desc}
                          </p>
                       </div>
                       
                       <div className="flex-1 w-full relative group">
                          <div className="absolute inset-x-0 -bottom-10 -right-10 h-40 w-40 bg-brand/5 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
                          <div className="p-2 rounded-[3.5rem] bg-slate-50 border border-slate-100 shadow-3xl relative z-10 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-1000 group-hover:-rotate-1">
                             <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className="rounded-[3rem] aspect-video object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                             />
                          </div>
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features
