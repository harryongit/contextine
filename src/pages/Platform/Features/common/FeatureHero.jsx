import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Activity, Sparkles, Hexagon } from 'lucide-react'
import Button from '../../../../common/Button'

const FeatureHero = ({ 
  badgeIcon: BadgeIcon = Sparkles,
  badgeText,
  title,
  highlightTitle,
  description,
  primaryBtnText = "Start Tracking Now",
  secondaryBtnText = "Learn More",
  floatingIcon: FloatingIcon = Activity,
  floatingText
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-16 pb-12 overflow-hidden bg-[#020617] selection:bg-brand/30 selection:text-white">
      {/* Cinematic Nexus Architecture */}
      <div className="absolute inset-0 overflow-hidden">
          {/* Deep Core Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[140px] rounded-full -z-10 transition-transform duration-1000"></div>
          
          {/* Grid System Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Feature Connectivity Doodles - Animated SVG paths */}
      <motion.svg 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] text-brand opacity-20 -z-0 pointer-events-none hidden lg:block" 
        width="400" height="400" viewBox="0 0 200 200"
      >
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M20 180 Q 70 20 180 140" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none" 
            strokeDasharray="4 4" 
          />
          <motion.circle 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            cx="70" cy="20" r="4" fill="currentColor" 
          />
      </motion.svg>

      <motion.svg 
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
        className="absolute bottom-[20%] right-[5%] text-brand opacity-10 -z-0 pointer-events-none hidden lg:block" 
        width="300" height="300" viewBox="0 0 200 200"
      >
         <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            d="M100 20 L 180 180 L 20 180 Z" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            fill="none" 
          />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        {/* Badge with micro-animation */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 15 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-brand text-[8px] font-black uppercase tracking-[0.4em] shadow-2xl overflow-hidden group hover:border-brand/40 transition-colors cursor-default"
        >
           <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
           <BadgeIcon className="h-3.5 w-3.5 animate-pulse" /> {badgeText}
        </motion.div>

        {/* Dynamic Title with cinematic drop shadow */}
        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-[1] tracking-tighter text-white"
        >
          {title} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-blue-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.4)] px-4">
            {highlightTitle}
          </span>
        </motion.h1>

        {/* Description with refined typography */}
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 1 }}
           className="text-sm md:text-base text-white/40 mb-8 max-w-xl mx-auto leading-relaxed font-inter font-medium tracking-tight"
        >
          {description}
        </motion.p>
        
        {/* CTA Actions with hover effects */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
           <Button variant="primary" size="lg" className="px-8 rounded-xl h-12 text-sm font-black bg-brand hover:scale-105 shadow-[0_20px_50px_-15px_rgba(124,58,237,0.5)] transition-all border-none relative overflow-hidden group">
             <span className="relative z-10">{primaryBtnText}</span>
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </Button>
           <button className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all text-xs font-bold py-2.5 px-5 rounded-xl border border-white/5 hover:bg-white/5 backdrop-blur-xl group shadow-2xl">
              {secondaryBtnText} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </motion.div>
      </div>

      {/* Premium Floating Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[8%] p-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl z-20 flex flex-col items-center justify-center text-center hidden xl:flex group hover:scale-105 transition-all shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] hover:border-brand/30"
      >
         <div className="h-12 w-12 mb-3 rounded-2xl bg-brand/20 flex items-center justify-center shadow-inner text-brand group-hover:rotate-12 transition-transform duration-700">
            <FloatingIcon className="h-6 w-6" />
         </div>
         <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-1 leading-none px-4">{floatingText}</div>
         <div className="h-0.5 w-6 bg-brand/30 rounded-full mt-2"></div>
      </motion.div>

      {/* Bottom Cinematic Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#020617] to-transparent pointer-events-none"></div>
    </section>
  )
}

export default FeatureHero
