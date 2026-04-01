import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT - Form */}
          <div className="lg:w-[60%]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-[#0B1521] rounded-[4rem] p-10 md:p-16 shadow-[16px_16px_0_0_#0B1521]"
            >
              <h2 className="text-3xl md:text-5xl font-black text-[#0B1521] mb-10 leading-tight">Send our <br /> squad a <span className="text-[#3B82F6] italic">message.</span></h2>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[0.75rem] font-black uppercase tracking-widest text-[#94A3B8] px-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-[#FAF8F5] border-2 border-[#0B1521] rounded-full py-4 px-6 font-bold text-[#0B1521] placeholder-[#94A3B8] focus:outline-none focus:shadow-[4px_4px_0_0_#3B82F6] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.75rem] font-black uppercase tracking-widest text-[#94A3B8] px-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-[#FAF8F5] border-2 border-[#0B1521] rounded-full py-4 px-6 font-bold text-[#0B1521] placeholder-[#94A3B8] focus:outline-none focus:shadow-[4px_4px_0_0_#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.75rem] font-black uppercase tracking-widest text-[#94A3B8] px-4">Subject</label>
                  <select className="w-full bg-[#FAF8F5] border-2 border-[#0B1521] rounded-full py-4 px-6 font-bold text-[#0B1521] focus:outline-none focus:shadow-[4px_4px_0_0_#3B82F6] transition-all appearance-none cursor-pointer">
                    <option>Product Inquiries</option>
                    <option>Partnership Opportunities</option>
                    <option>Press & Media</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.75rem] font-black uppercase tracking-widest text-[#94A3B8] px-4">Your Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us what's on your mind..." 
                    className="w-full bg-[#FAF8F5] border-2 border-[#0B1521] rounded-[2rem] py-4 px-6 font-bold text-[#0B1521] placeholder-[#94A3B8] focus:outline-none focus:shadow-[4px_4px_0_0_#3B82F6] transition-all"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#3B82F6] text-white py-5 rounded-full font-bold text-xl shadow-[6px_6px_0_0_#0B1521] border-2 border-[#0B1521] hover:translate-y-[-4px] transition-all mt-6 uppercase tracking-widest"
                >
                  Blast Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* RIGHT - Info */}
          <div className="lg:w-[40%] space-y-12 pt-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-black text-[#0B1521]">Global <span className="text-[#3B82F6]">Hubs</span></h2>
              <p className="text-[#64748B] text-lg max-w-sm">We're a global-first team, with physical hubs in the heart of major technology centers.</p>
            </motion.div>

            {/* Office Cards */}
            <div className="space-y-8">
              {[
                { city: "San Francisco", address: "123 Market St, Suite 400, CA 94105", country: "United States", color: "#3B82F6" },
                { city: "London", address: "45 Old Street, London EC1V 9HX", country: "United Kingdom", color: "#8B5CF6" },
                { city: "Singapore", address: "8 Marina View, Asia Square Tower 1", country: "Singapore", color: "#F472B6" }
              ].map((office) => (
                <motion.div 
                  key={office.city}
                  whileHover={{ x: 10 }}
                  className="group bg-white border-2 border-[#0B1521] rounded-[2rem] p-8 shadow-[6px_6px_0_0_#0B1521] flex flex-col gap-2 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: office.color }}></div>
                  <h3 className="text-xl font-bold text-[#0B1521] group-hover:text-[#3B82F6] transition-colors">{office.city}</h3>
                  <p className="text-[#64748B] text-sm font-medium leading-relaxed">{office.address}</p>
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94A3B8]">{office.country}</span>
                </motion.div>
              ))}
            </div>

            {/* Fast Supports */}
            <div className="pt-8 border-t-2 border-[#F1F5F9] border-dashed space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B1521] flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.75rem] font-black tracking-widest text-[#94A3B8] uppercase">Call Us Directly</span>
                  <span className="text-lg font-bold text-[#0B1521]">+1 (888) 555-0123</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-[#0B1521] flex items-center justify-center text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.75rem] font-black tracking-widest text-[#94A3B8] uppercase">Live Chat</span>
                  <span className="text-lg font-bold text-[#0B1521]">Available 24/7 in-app</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
