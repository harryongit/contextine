import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, ShieldCheck, Zap, Globe, Star, ArrowUpRight } from 'lucide-react'

const FeatureBenefits = ({ 
  badgeText = "Business Impact",
  title,
  highlightTitle,
  benefitsList = []
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.7, 1], [0.95, 1, 0.95]);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#020617] text-white relative overflow-hidden">
        {/* Cinematic Backdrop with Pulsing Brand Architecture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#7c3aed07_0%,_transparent_60%)] -z-10 animate-pulse-slow"></div>
        <div className="absolute top-[-20%] right-[-30%] w-[1200px] h-[1200px] bg-brand opacity-[0.08] blur-[180px] -z-10 transition-opacity duration-1000 rotate-12 transform"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[1000px] h-[1000px] bg-indigo-600 opacity-[0.05] blur-[150px] -z-10"></div>
        
        {/* Grain Texture & Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
            <div className="text-center mb-16 max-w-5xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 font-black text-[10px] uppercase tracking-[0.45em] mb-8 inline-block shadow-inner group cursor-default overflow-hidden relative"
               >
                 <span className="relative z-10">{badgeText}</span>
                 <div className="absolute -inset-1 opacity-20 bg-linear-to-r from-transparent via-brand to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-[1500ms]"></div>
               </motion.span>
               
               <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-[0.9] mb-8">
                 {title} <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-indigo-400 drop-shadow-[0_0_50px_rgba(124,58,237,0.5)] px-4 italic">
                    {highlightTitle}
                 </span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl relative">
                {/* Visual Connector Doodles */}
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-[4rem] pointer-events-none"></div>
                
                {benefitsList.map((benefit, i) => (
                    <motion.div 
                       key={i}
                       style={{ scale }}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ delay: i * 0.15, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                       className="p-10 md:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl flex flex-col group transition-all hover:bg-white/[0.07] relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.5)] hover:shadow-[0_100px_200px_-50px_rgba(0,0,0,0.6)] hover:border-brand/30 items-center text-center"
                    >
                       <div className="h-20 w-20 mb-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand/10 transition-all duration-700 shadow-inner text-brand overflow-hidden relative">
                          <benefit.icon className={`h-8 w-8 ${benefit.color || 'text-brand'} animate-pulse-slow relative z-10`} />
                          <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
                       </div>
                       
                       <h3 className="text-2xl font-display font-black mb-4 text-white tracking-tighter group-hover:text-brand-light transition-colors leading-tight">
                          {benefit.title}
                       </h3>
                       
                       <p className="text-white/40 text-base font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity max-w-[280px] leading-relaxed mb-6">
                          {benefit.desc}
                       </p>
                       
                       <div className="mt-auto flex items-center gap-2.5 text-brand font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight className="h-4 w-4" /> Expand Analysis
                       </div>
                       
                       {/* Background Large Icon Bubble */}
                       <div className="absolute top-[-15%] right-[-15%] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-1000 -z-0">
                            <benefit.icon className={`h-60 w-60 ${benefit.color || 'text-brand'}`} />
                       </div>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.1 }}
               transition={{ duration: 2 }}
               className="mt-32 w-full h-[0.5px] bg-linear-to-r from-transparent via-brand to-transparent"
            ></motion.div>
        </div>
    </section>
  )
}

export default FeatureBenefits
