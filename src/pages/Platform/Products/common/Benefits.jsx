import React from 'react'
import { motion } from 'framer-motion'

const Benefits = ({ 
  badgeText, 
  title, 
  highlightTitle, 
  description, 
  benefitsList 
}) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Cinematic Backdrop branding */}
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand opacity-10 blur-[160px] translate-y-1/2 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-[-5%] left-[-10%] w-[800px] h-[800px] bg-accent opacity-[0.05] blur-[130px] rounded-full -translate-y-1/2 -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-20 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-12 inline-block shadow-inner"
               >
                 {badgeText}
               </motion.span>
               <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-[0.9] mb-12">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-indigo-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.4)] italic">{highlightTitle}</span>
               </h2>
               <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
                 {description}
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full">
                {benefitsList.map((benefit, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="p-10 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl flex flex-col group transition-all hover:bg-white/[0.08] relative overflow-hidden shadow-2xl"
                    >
                       <div className="h-16 w-16 mb-8 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner text-brand">
                          <benefit.icon className={`h-8 w-8 ${benefit.color || 'text-brand'} animate-pulse`} />
                       </div>
                       <div className="text-6xl font-black text-white tracking-tighter mb-2">{benefit.metric}</div>
                       <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em] mb-10 leading-none px-1">{benefit.sub}</div>
                       <h3 className="text-3xl font-display font-black mb-4 text-white tracking-tighter group-hover:text-brand transition-colors">{benefit.title}</h3>
                       <p className="text-white/40 text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity max-w-md leading-relaxed mb-6">{benefit.desc}</p>
                       
                       <div className="absolute top-0 right-[-10%] p-10 opacity-0 group-hover:opacity-5 transition-opacity">
                            <benefit.icon className={`h-40 w-40 ${benefit.color || 'text-brand'}`} />
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Benefits
