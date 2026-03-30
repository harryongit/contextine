import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import Button from '../../../common/Button'

const StageHero = ({ 
  badgeText = "Market Evolution",
  title,
  highlightTitle,
  subtext,
  primaryBtnText = "Book Demo",
  secondaryBtnText = "Explore Solutions",
  floatingIcon: FloatingIcon = Star,
  floatingText = "Enterprise Class"
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-16 pb-12 overflow-hidden bg-[#020617] selection:bg-brand/30 selection:text-white">
      {/* Cinematic Architecture */}
      <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-6 inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-brand text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl relative overflow-hidden group cursor-default"
        >
           {badgeText}
        </motion.div>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-4xl md:text-6xl lg:text-[6.5rem] font-display font-black mb-8 leading-[0.9] tracking-tighter text-white"
        >
          {title} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-blue-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.45)] px-4 italic">
            {highlightTitle}
          </span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 1 }}
           className="text-sm md:text-lg text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed font-inter font-medium tracking-tight"
        >
          {subtext}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
           <Button variant="primary" size="lg" className="px-10 rounded-xl h-14 text-sm font-black bg-brand hover:scale-105 shadow-[0_20px_50px_-15px_rgba(124,58,237,0.5)] transition-all border-none group relative overflow-hidden">
             <span className="relative z-10">{primaryBtnText}</span>
             <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </Button>
           <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all text-xs font-bold py-3 px-6 rounded-xl border border-white/5 hover:bg-white/5 backdrop-blur-xl group hover:border-brand/20">
              {secondaryBtnText} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[12%] left-[5%] p-5 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-3xl z-20 flex flex-col items-center justify-center text-center hidden xl:flex group hover:scale-105 transition-all shadow-xl"
      >
         <div className="h-10 w-10 mb-2 rounded-xl bg-brand/20 flex items-center justify-center text-brand group-hover:rotate-12 transition-transform duration-700">
            <FloatingIcon className="h-5 w-5" />
         </div>
         <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/50">{floatingText}</div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#020617] to-transparent"></div>
    </section>
  )
}

export default StageHero
