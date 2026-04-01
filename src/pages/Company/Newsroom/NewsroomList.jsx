import React from 'react';
import { motion } from 'framer-motion';

const pressReleases = [
  {
    date: "March 20, 2026",
    title: "Contextine Named 'Leader in GRC Innovation' by G2 Winter Report",
    source: "Press Release",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    link: "#"
  },
  {
    date: "February 15, 2026",
    title: "How Contextine is Automating the Audit Process for Fast-Growing Startups",
    source: "TechCrunch",
    image: "https://images.unsplash.com/photo-1585829365234-752ffdf47d84?w=800&q=80",
    link: "#"
  },
  {
    date: "January 10, 2026",
    title: "The Future of Compliance: Predictive Risk Management in the Cloud",
    source: "Forbes",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7735e?w=800&q=80",
    link: "#"
  }
];

export default function NewsroomList() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#FEE2E2] text-[#EF4444] font-bold tracking-widest uppercase text-[0.7rem] md:text-[0.85rem] px-4 py-1.5 rounded-full border-2 border-[#EF4444] mb-6 shadow-[2px_2px_0_0_#EF4444]"
          >
            LATEST NEWS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-2"
          >
            On the <span className="text-[#EF4444]">Pulse</span> of GRC
          </motion.h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {pressReleases.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border-2 border-[#0B1521] rounded-[2rem] overflow-hidden shadow-[6px_6px_0_0_#0B1521] hover:shadow-[10px_10px_0_0_#0B1521] transition-all flex flex-col h-full cursor-pointer"
            >
              <div className="h-56 overflow-hidden border-b-2 border-[#0B1521]">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.8rem] font-bold text-[#EF4444] uppercase tracking-wider">
                    {news.source}
                  </span>
                  <span className="text-[0.8rem] font-bold text-[#64748B]">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1521] mb-6 leading-[1.4] group-hover:text-[#EF4444] transition-colors">
                  {news.title}
                </h3>
                <div className="mt-auto pt-6 border-t-2 border-[#F1F5F9] border-dashed">
                  <span className="text-[#0B1521] font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Read Article 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Assets Section */}
        <div className="mt-32 p-12 md:p-16 bg-[#0B1521] rounded-[3rem] text-white relative overflow-hidden shadow-[12px_12px_0_0_#EF4444] border-2 border-[#0B1521]">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-[60%]">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need Media Assets?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Download our press kit for official logos, brand guidelines, and high-resolution images of our executive team and office.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EF4444] text-white px-8 py-4 rounded-full font-bold shadow-[4px_4px_0_0_#FAF8F5] border-2 border-[#EF4444] hover:bg-[#D93636] transition-all"
              >
                Download Press Kit
              </motion.button>
            </div>
            <div className="md:w-[30%] flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-[#EF4444] rounded-[2rem] border-dashed flex items-center justify-center animate-pulse">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#EF4444] opacity-10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}
