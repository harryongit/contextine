import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tags = [
  "All", "SOC 2", "ISO 27001", "HIPAA", "GDPR", "Risk Management"
];

const initialGuides = [
  {
    title: "The Ultimate Guide to SOC 2 Type II Readiness",
    tag: "SOC 2",
    time: "15 min. read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "#6A47B2"
  },
  {
    title: "ISO 27001 Implementation: A Step-by-Step Roadmap",
    tag: "ISO 27001",
    time: "20 min. read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    color: "#1E956C"
  },
  {
    title: "HIPAA Compliance Checklist for Digital Health Startups",
    tag: "HIPAA",
    time: "12 min. read",
    image: "https://images.unsplash.com/photo-1576091160550-21735999181c?w=800&q=80",
    color: "#1A4A85"
  },
  {
    title: "Building a Data Privacy Program for GDPR Compliance",
    tag: "GDPR",
    time: "18 min. read",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    color: "#FBBF24"
  },
  {
    title: "The CISO's Guide to Automated Risk Management",
    tag: "Risk Management",
    time: "10 min. read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    color: "#F472B6"
  },
  {
    title: "SOC 2 vs. ISO 27001: Which one is right for you?",
    tag: "SOC 2",
    time: "8 min. read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#3B82F6"
  }
];

export default function GuidesGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = initialGuides.filter(guide => {
    const matchesTag = activeTag === "All" || guide.tag === activeTag;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || guide.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="mb-14 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#FEF9C3] text-[#854D0E] font-bold tracking-widest uppercase text-[0.7rem] md:text-[0.85rem] px-4 py-1.5 rounded-full border-2 border-[#854D0E] mb-6 shadow-[2px_2px_0_0_#854D0E]"
          >
            HANDBOOK & GUIDES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-2"
          >
            Deep dives into <span className="text-[#854D0E] relative inline-block">frameworks
              <motion.svg initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-2 -left-2 w-[110%] h-[15px] overflow-visible" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M 0 10 C 20 20 80 0 100 10" fill="none" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" />
              </motion.svg>
            </span>
          </motion.h2>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-16">
          
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 xl:w-[70%]">
            {tags.map((tag) => (
              <motion.button 
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2.5 rounded-full text-[0.85rem] md:text-sm font-bold border-2 transition-all duration-300 ${
                  activeTag === tag 
                    ? 'bg-[#854D0E] text-white border-[#854D0E] shadow-[3px_3px_0_0_#0B1521]' 
                    : 'bg-white text-[#475569] border-[#CBD5E1] hover:border-[#0B1521] hover:text-[#0B1521] hover:shadow-[3px_3px_0_0_#0B1521]'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full xl:w-[25%] shrink-0">
            <input 
              type="text" 
              placeholder="Search guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#0B1521] rounded-full py-3 pl-12 pr-6 font-medium text-[#0B1521] placeholder-[#94A3B8] shadow-[4px_4px_0_0_#0B1521] focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0_0_#0B1521] transition-shadow duration-300"
            />
            <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B1521] opacity-70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="11" cy="11" r="6" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredGuides.length > 0 ? (
              filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border-2 border-[#0B1521] rounded-[2rem] overflow-hidden shadow-[6px_6px_0_0_#0B1521] hover:shadow-[10px_10px_0_0_#0B1521] transition-all flex flex-col h-full cursor-pointer relative"
                >
                  {/* Image Container */}
                  <div className="h-56 overflow-hidden border-b-2 border-[#0B1521] relative">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2 rounded-xl backdrop-blur-md bg-white/20 border border-white/40 shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="p-8 flex flex-col flex-1 bg-white">
                    <div className="h-2 w-full absolute top-0 left-0" style={{ backgroundColor: guide.color }}></div>
                    
                    <h3 className="text-xl font-bold text-[#0B1521] mb-6 leading-tight group-hover:text-[#854D0E] transition-colors">
                      {guide.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t-2 border-[#F1F5F9] border-dashed">
                      <span className="text-[0.8rem] font-bold uppercase tracking-wider text-[#64748B]">
                        {guide.tag}
                      </span>
                      <div className="flex items-center gap-2 text-[#64748B] text-[0.8rem] font-bold uppercase tracking-wider">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {guide.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <h3 className="text-2xl font-bold text-[#0B1521] mb-2">No guides found</h3>
                <p className="text-[#64748B] text-lg">Try adjusting your filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
