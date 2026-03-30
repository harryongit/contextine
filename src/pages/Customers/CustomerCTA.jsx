import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Users } from 'lucide-react'
import Button from '../../common/Button'

const CustomerCTA = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden selection:bg-brand/10">
        <div className="absolute top-[20%] left-[-15%] w-[800px] h-[800px] bg-indigo-50 blur-[180px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute inset-x-0 h-px top-0 bg-linear-to-r from-transparent via-slate-100 to-transparent"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-12 md:p-16 rounded-[4rem] bg-slate-900 flex flex-col group transition-all relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(124,58,237,0.3)] mb-10 max-w-6xl w-full text-white items-center text-center"
            >
                {/* Visual Architecture */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/20 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

                <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-3xl text-brand text-[9px] font-black uppercase tracking-[0.5em] mb-10 inline-block shadow-inner group-hover:scale-105 transition-transform"
                >
                    Final Conversion
                </motion.span>
               
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[0.95] mb-10 max-w-4xl">
                  Join Teams Simplifying <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-light to-indigo-400 drop-shadow-[0_0_50px_rgba(124,58,237,0.5)] italic px-4">
                    Compliance Everywhere.
                  </span>
                </h2>
                
                <p className="text-lg text-white/40 mb-12 max-w-2xl font-inter font-medium leading-relaxed tracking-tight group-hover:text-white/60 transition-colors">
                  Take the leap from fragmented manual operations to a high-fidelity unified risk canvas with Contextine.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md">
                    <Button variant="primary" size="lg" className="px-12 rounded-xl h-16 text-sm font-black bg-brand hover:scale-110 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.7)] transition-all border-none relative overflow-hidden group/btn">
                        <span className="relative z-10 flex items-center gap-2">Book a Demo <ArrowRight className="h-4 w-4" /></span>
                        <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </Button>
                    <button className="flex items-center gap-4 text-white hover:text-brand transition-all text-xs font-bold py-4 px-8 rounded-xl border border-white/10 hover:bg-white/5 backdrop-blur-xl group/ghost">
                        Get Started <ArrowRight className="h-4 w-4 group-hover/ghost:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-16 pt-12 border-t border-white/5 flex items-center gap-10 text-white/20 font-black text-[10px] uppercase tracking-[0.45em]">
                  <div className="flex items-center gap-3 decoration-brand group-hover:text-white/40 transition-colors"><Globe className="h-4 w-4" /> Global Logic</div>
                  <div className="flex items-center gap-3 decoration-brand group-hover:text-white/40 transition-colors"><Users className="h-4 w-4" /> Trusted Service</div>
                </div>

                <div className="absolute bottom-10 right-14 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                    <Sparkles className="h-48 w-48 text-brand" />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default CustomerCTA
