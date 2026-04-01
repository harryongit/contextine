import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tags = [
  "All", "GRC Trends", "Product Updates", "Risk Management", 
  "Vendor Security", "Compliance Essentials", "Contextine Milestones", 
  "SOC 2", "HIPAA", "GDPR", "ISO 27001", "All Frameworks"
];

const initialBlogs = [
  {
    title: "Contextine innovations: February 2026 snapshot",
    tag: "Product Updates",
    time: "5 min. read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "#6A47B2"
  },
  {
    title: "Risk Grustlers EP 21: Collaborative kitchen for AI governance",
    tag: "Contextine Milestones",
    time: "5 min. read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "#1E956C"
  },
  {
    title: "Give to Gain: How women in cybersecurity are rewriting the rules of GRC",
    tag: "GRC Trends",
    time: "7 min. read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    color: "#1A4A85"
  },
  {
    title: "What to ask your compliance platform about audit quality",
    tag: "Compliance Essentials",
    time: "4 min. read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#FBBF24"
  },
  {
    title: "CISO decision matrix: Which compliance standards deliver the best ROI for continuous monitoring",
    tag: "Compliance Essentials",
    time: "4 min. read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#F472B6"
  },
  {
    title: "Contextine ranked #9 in G2’s 2026 Best Software Awards for GRC Products",
    tag: "Contextine Milestones",
    time: "4 min. read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    color: "#3B82F6"
  },
  {
    title: "Time to compliance: How CISOs accelerate audits and ROI",
    tag: "Compliance Essentials",
    time: "4 min. read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    color: "#8B5CF6"
  },
  {
    title: "Contextine innovations: January 2026 snapshot",
    tag: "Product Updates",
    time: "4 min. read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    color: "#10B981"
  },
  {
    title: "Turning Endpoint Security Into Proof of Compliance with Contextine and 1Password Device Trust",
    tag: "Contextine Milestones",
    time: "3 min. read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    color: "#0B1521"
  }
];

export default function BlogAllSection() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = initialBlogs.filter(blog => {
    const matchesTag = activeTag === "All" || blog.tag === activeTag;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Background Doodles */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1A4A85]" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10"/>
          <path d="M 20 100 Q 100 20 180 100 Q 100 180 20 100" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="mb-14 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#E5F1FC] text-[#1A4A85] font-bold tracking-widest uppercase text-[0.7rem] md:text-[0.85rem] px-4 py-1.5 rounded-full border-2 border-[#1A4A85] mb-6 shadow-[2px_2px_0_0_#1A4A85]"
          >
            1000+ ARTICLES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-[1.1] tracking-tight mb-2"
          >
            Learn from the latest <span className="text-[#1E956C] relative inline-block">blogs
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
                    ? 'bg-[#6A47B2] text-white border-[#6A47B2] shadow-[3px_3px_0_0_#0B1521]' 
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
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#0B1521] rounded-full py-3 pl-12 pr-6 font-medium text-[#0B1521] placeholder-[#94A3B8] shadow-[4px_4px_0_0_#0B1521] focus:outline-none focus:ring-0 focus:shadow-[6px_6px_0_0_#0B1521] transition-shadow duration-300 xl:text-lg"
            />
            {/* Search outline icon (Magnifying glass doodle) */}
            <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B1521] opacity-70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="11" cy="11" r="6" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.title}
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
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Abstract colorful tag overlay over image */}
                    <div className="absolute top-4 left-4 p-2 rounded-xl backdrop-blur-md bg-white/20 border border-white/40 shadow-sm flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
                    {/* Small colored accent dot */}
                    <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: blog.color }}></div>
                    
                    <h3 className="text-[1.1rem] md:text-xl font-bold text-[#0B1521] mb-5 leading-[1.4] group-hover:text-[#1A4A85] transition-colors line-clamp-3">
                      {blog.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t-2 border-[#F1F5F9] border-dashed">
                      <span className="text-[0.8rem] font-bold uppercase tracking-wider text-[#64748B]">
                        {blog.tag}
                      </span>
                      <div className="flex items-center gap-2 text-[#64748B] text-[0.8rem] font-bold uppercase tracking-wider">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {blog.time}
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
                <div className="w-24 h-24 mx-auto mb-6 text-[#94A3B8]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1521] mb-2">No blogs found</h3>
                <p className="text-[#64748B] text-lg">Try adjusting your filters or search query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredBlogs.length > 0 && (
          <div className="mt-16 md:mt-24 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#1A4A85] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[6px_6px_0_0_#FBBF24] border-2 border-[#1A4A85] flex items-center justify-center gap-3 transition-all hover:shadow-[4px_4px_0_0_#FBBF24] hover:border-[#1A4A85] group"
            >
              Load More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform">
                  <path d="M6 9l6 6 6-6"/>
              </svg>
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}