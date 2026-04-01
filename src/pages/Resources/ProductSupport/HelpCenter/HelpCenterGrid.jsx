import React from 'react';
import { motion } from 'framer-motion';

const helpCategories = [
  {
    title: "Getting Started",
    description: "New to Contextine? Learn the basics of GRC automation and set up your first audit.",
    count: "12 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 19l7-7-7-7M5 12h14"/>
      </svg>
    ),
    color: "#6A47B2"
  },
  {
    title: "User Management",
    description: "Manage team permissions, roles, and single sign-on (SSO) configurations.",
    count: "8 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "#1E956C"
  },
  {
    title: "Integrations",
    description: "Connect your cloud providers, code repositories, and HRIS systems.",
    count: "45 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="m19 8 3 3-3 3"/>
        <path d="m5 16-3-3 3-3"/>
        <path d="M8 12h8"/>
      </svg>
    ),
    color: "#1A4A85"
  },
  {
    title: "Reporting & Analytics",
    description: "Export audit-ready reports and visualize your real-time compliance posture.",
    count: "15 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    color: "#FBBF24"
  },
  {
    title: "Audit Preparation",
    description: "Best practices for working with external auditors and evidence collection.",
    count: "20 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: "#F472B6"
  },
  {
    title: "Policy Management",
    description: "Create, distribute, and track approval for your internal security policies.",
    count: "10 articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "#3B82F6"
  }
];

export default function HelpCenterGrid() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#E5F1FC] text-[#1A4A85] font-bold tracking-widest uppercase text-[0.7rem] md:text-[0.85rem] px-4 py-1.5 rounded-full border-2 border-[#1A4A85] mb-6 shadow-[2px_2px_0_0_#1A4A85]"
          >
            BROWSE BY TOPIC
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-4"
          >
            What can we help you <span className="text-[#1A4A85] italic font-serif">find</span> today?
          </motion.h2>
          <div className="max-w-[600px] mx-auto">
            <div className="relative mt-10">
              <input 
                type="text" 
                placeholder="Search help articles..." 
                className="w-full bg-white border-2 border-[#0B1521] rounded-full py-4 pl-14 pr-6 font-medium text-[#0B1521] placeholder-[#94A3B8] shadow-[6px_6px_0_0_#0B1521] focus:outline-none focus:shadow-[8px_8px_0_0_#0B1521] transition-shadow duration-300 xl:text-lg"
              />
              <svg viewBox="0 0 24 24" className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0B1521] opacity-70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <circle cx="11" cy="11" r="6" />
                <line x1="16" y1="16" x2="21" y2="21" />
              </svg>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border-2 border-[#0B1521] rounded-[2.5rem] p-10 shadow-[6px_6px_0_0_#0B1521] hover:shadow-[10px_10px_0_0_#0B1521] transition-all flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 border-2 border-[#0B1521] shadow-[3px_3px_0_0_#0B1521] group-hover:shadow-[5px_5px_0_0_#0B1521] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all"
                style={{ backgroundColor: `${category.color}20`, color: category.color }}
              >
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B1521] mb-4 leading-tight group-hover:text-[#1A4A85] transition-colors">
                {category.title}
              </h3>

              <p className="text-[#64748B] text-[1.1rem] leading-relaxed mb-10">
                {category.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[0.9rem] font-bold text-[#1A4A85] bg-[#E5F1FC] px-4 py-1 rounded-full border-2 border-[#1A4A85]">
                  {category.count}
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-[#0B1521] flex items-center justify-center group-hover:bg-[#0B1521] group-hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" style={{ backgroundColor: category.color }}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
