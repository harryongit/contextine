import React from 'react'
import { motion } from 'framer-motion'
import dashboardMockup from '../../../../assets/contextine_dashboard_mockup.png'

const DashboardReveal = () => {
  return (
    <section className="relative px-6 py-28 bg-white overflow-hidden group">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] border-[2px] border-slate-50/50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-2000"></div>

      <div className="max-w-7xl mx-auto flex justify-center perspective-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 150, rotateX: 35, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full p-4 rounded-[4rem] bg-indigo-50/30 border border-slate-100 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] relative z-10 hover:shadow-[0_80px_150px_-40px_rgba(0,0,0,0.15)] transition-shadow overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>

          <motion.img
            whileHover={{ scale: 1.02 }}
            src={dashboardMockup}
            className="w-full relative rounded-[3rem] border border-slate-200/50 shadow-sm transition-transform duration-1000 ease-out"
            alt="Contextine Dashboard OS Experience"
          />

          {/* Highlight Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-accent/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </motion.div>
      </div>

      {/* Floating Decorative Indicators */}
      <div className="absolute top-1/2 left-[5%] p-6 rounded-3xl bg-white border border-slate-100 shadow-2xl animate-bounce-subtle hidden lg:block opacity-100 -z-0">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">SOC2 Verified</span>
        </div>
      </div>
      <div className="absolute bottom-1/4 right-[5%] p-6 rounded-3xl bg-white border border-slate-100 shadow-2xl animate-bounce-subtle-reverse hidden lg:block opacity-100 -z-0">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">ISO 27001 Hub</span>
        </div>
      </div>
    </section>
  )
}

export default DashboardReveal
