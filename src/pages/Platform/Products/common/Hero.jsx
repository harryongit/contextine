import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Activity } from 'lucide-react'
import Button from '../../../../common/Button'

const Hero = ({ 
  badgeIcon: BadgeIcon = Activity, 
  badgeText, 
  title, 
  highlightTitle, 
  description, 
  primaryBtnText, 
  secondaryBtnText,
  floatingIcon: FloatingIcon = Activity,
  floatingText,
  themeColor = "brand" 
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900 selection:text-white">
      {/* Cinematic Cyber-backbone Architecture */}
      <div className="absolute inset-0 bg-[#020617] scale-100">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/20 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#3b82f633_0%,_transparent_55%)] opacity-30"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-brand opacity-[0.05] blur-[140px] rounded-full -z-10 animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500 opacity-[0.03] blur-[120px] rounded-full -z-10"></div>
      </div>

      {/* Decorative Blueprint Doodles */}
      <svg className="absolute top-[15%] right-[5%] text-brand opacity-[0.08] -z-0 pointer-events-none rotate-[15deg] hidden lg:block" width="300" height="300" viewBox="0 0 200 200">
          <path d="M20 20 Q 60 50 140 20 Q 180 80 140 140 Q 60 170 20 140 Z" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M40 40 L 160 160 M 160 40 L 40 160" stroke="currentColor" opacity="0.3" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/50 text-[10px] font-black uppercase tracking-[0.4em] shadow-inner"
        >
           <BadgeIcon className="h-4 w-4 text-brand" /> {badgeText}
        </motion.div>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-5xl md:text-8xl font-display font-black mb-8 leading-[0.9] tracking-tighter text-white"
        >
          {title} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-blue-400 to-indigo-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.3)]">{highlightTitle}</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 1 }}
           className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed font-inter font-medium opacity-80"
        >
          {description}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
           <Button variant="primary" size="lg" className="px-10 rounded-2xl h-16 text-lg font-black bg-brand hover:scale-105 shadow-2xl shadow-brand/20 transition-all border-none">
             {primaryBtnText}
           </Button>
           <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all text-lg font-bold py-3 px-6 rounded-2xl border border-white/5 hover:bg-white/5 shadow-2xl">
             {secondaryBtnText} <ArrowRight className="h-5 w-5" />
           </button>
        </motion.div>
      </div>

      {/* Floating Glass Indicator */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[8%] p-5 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl z-20 flex flex-col items-center justify-center text-center hidden xl:flex group hover:scale-105 transition-transform shadow-2xl"
      >
         <div className="h-12 w-12 mb-3 rounded-2xl bg-brand/20 flex items-center justify-center shadow-inner text-brand"><FloatingIcon className="h-6 w-6" /></div>
         <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5 leading-none px-4 px-2">{floatingText}</div>
      </motion.div>
    </section>
  )
}

export default Hero
