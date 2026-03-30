import React from 'react'
import { motion } from 'framer-motion'
import logo1 from "../../assets/logo1.png"
import logoMain from "../../assets/logo.png"
import logo3 from "../../assets/logo3.png"

const CustomerLogos = ({ 
  title = "Trusted by fast-growing startups and enterprises" 
}) => {
  const logos = [logo1, logoMain, logo3, logoMain, logo1, logo3, logoMain, logo1];

  return (
    <section className="py-10 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-[11px] font-black uppercase text-white/30 tracking-[0.5em] mb-12"
            >
               {title}
            </motion.p>
            
            <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
                {logos.map((logo, i) => (
                    <motion.img 
                        key={i}
                        src={logo}
                        alt="customer logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="h-10 w-auto object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all cursor-pointer hover:scale-110"
                    />
                ))}
            </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  )
}

export default CustomerLogos
