import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowDown } from 'lucide-react'
import Button from '../../../../common/Button'

const WhyHero = () => {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-[#020617]">
      {/* Background cinematic architecture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(124,58,237,0.1)_0%,_transparent_55%)]"></div>
      
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand opacity-[0.05] blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent opacity-[0.03] blur-[120px] rounded-full -z-10 transition-transform duration-1000"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 text-[10px] font-black uppercase tracking-[0.4em] shadow-inner"
        >
           <Sparkles className="h-4 w-4 text-brand" /> The Modern GRC Standard
        </motion.div>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-4xl md:text-6xl font-display font-black mb-6 leading-[0.9] tracking-tighter text-white"
        >
          Why choose <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-indigo-400 to-emerald-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.3)]">Contextine.</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 1 }}
           className="text-lg md:text-xl text-white/40 mb-10 max-w-3xl mx-auto leading-relaxed font-inter font-medium opacity-80"
        >
          Moving security from an obligation to an unfair advantage. 
          Discover why high-growth teams trust Contextine for governance, automated audits, and risk management.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
           <Button variant="primary" size="lg" className="px-10 rounded-2xl h-14 text-lg font-black bg-brand hover:scale-105 shadow-2xl shadow-brand/20 transition-all border-none">
             See the Roadmap
           </Button>
           <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all text-lg font-bold py-3">
             Explore Advantages <ArrowDown className="h-5 w-5 animate-bounce mt-1" />
           </button>
        </motion.div>
      </div>

      {/* Decorative Blueprint Doodles */}
      <svg className="absolute bottom-[-5%] left-[5%] text-white opacity-[0.03] -z-0 pointer-events-none rotate-[-12deg]" width="400" height="400" viewBox="0 0 200 200">
          <circle cx="100" cy="180" r="140" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="8 8" />
          <path d="M10 190 Q 50 120 150 180" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </section>
  )
}

export default WhyHero
