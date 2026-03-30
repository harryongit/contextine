import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, ShieldCheck, Zap, Globe, Star, ArrowUpRight } from 'lucide-react'

const UseCaseBenefits = ({ 
  badgeText = "The Outcome",
  title,
  highlightTitle,
  benefitsList = []
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.7, 1], [0.95, 1, 0.95]);

  return (
    <section className="py-12 px-6 md:px-12 bg-[#020617] text-white relative overflow-hidden">
        {/* Cinematic Backdrop with Pulsing Brand Architecture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7c3aed07_0%,_transparent_60%)] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-[-20%] right-[-30%] w-[800px] h-[800px] bg-brand opacity-[0.05] blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-10 max-w-5xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 font-black text-[9px] uppercase tracking-[0.45em] mb-6 inline-block shadow-inner group"
               >
                 <span className="relative z-10">{badgeText}</span>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter leading-[1] mb-6">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-indigo-400 drop-shadow-[0_0_30px_rgba(124,58,237,0.4)] px-4 italic leading-tight inline-block">
                    {highlightTitle}
                 </span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl relative">
                {benefitsList.map((benefit, i) => (
                    <motion.div 
                       key={i}
                       style={{ scale }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ delay: i * 0.08, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-3xl flex flex-col group transition-all hover:bg-white/[0.07] relative overflow-hidden shadow-sm hover:border-brand/30 items-center text-center h-full"
                    >
                       <div className="h-14 w-14 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-700 shadow-inner text-brand">
                          <benefit.icon className={`h-6 w-6 ${benefit.color || 'text-brand'} animate-pulse-slow relative z-10`} />
                       </div>
                       
                       <h3 className="text-xl font-display font-black mb-3 text-white tracking-tighter transition-colors leading-tight">
                          {benefit.title}
                       </h3>
                       
                       <p className="text-white/40 text-sm font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-[280px] leading-relaxed flex-1">
                          {benefit.desc}
                       </p>
                       
                       <div className="mt-6 flex items-center gap-2.5 text-brand font-black text-[8px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight className="h-3.5 w-3.5" /> Expand Context
                       </div>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.1 }}
               className="mt-12 h-px w-full max-w-4xl bg-linear-to-r from-transparent via-brand to-transparent"
            ></motion.div>
        </div>
    </section>
  )
}

export default UseCaseBenefits
