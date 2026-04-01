import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tags = [
  "All", "Frameworks", "Security", "Risk", "Privacy", "Compliance", "Architecture"
];

const initialTerms = [
  {
    title: "SOC 2 Type II",
    tag: "Frameworks",
    category: "SOC 2",
    description: "Systems and Organization Controls (SOC 2) is a framework designed to help organizations manage data securely to protect the interests and privacy of their clients.",
    color: "#6A47B2"
  },
  {
    title: "GDPR (General Data Protection Regulation)",
    tag: "Privacy",
    category: "GDPR",
    description: "A comprehensive data protection law in the European Union that governs how personal data of individuals in the EU is handled and protected.",
    color: "#1E956C"
  },
  {
    title: "HIPAA Compliance",
    tag: "Compliance",
    category: "Healthcare",
    description: "The Health Insurance Portability and Accountability Act sets standards for protecting sensitive patient health information.",
    color: "#1A4A85"
  },
  {
    title: "ISO 27001",
    tag: "Frameworks",
    category: "ISO",
    description: "An international standard for managing information security (ISMS), providing a framework for protecting sensitive information.",
    color: "#FBBF24"
  },
  {
    title: "Continuous Monitoring",
    tag: "Security",
    category: "Automation",
    description: "The process of using specialized tools and workflows to perform ongoing oversight and verification of security controls.",
    color: "#F472B6"
  },
  {
    title: "Risk Assessment",
    tag: "Risk",
    category: "Management",
    description: "The identification, evaluation, and estimation of the levels of risks involved in a situation, comparison against benchmarks or standards.",
    color: "#3B82F6"
  },
  {
    title: "Role-Based Access Control (RBAC)",
    tag: "Security",
    category: "Access",
    description: "A method of restricting network access based on the roles of individual users within an enterprise.",
    color: "#8B5CF6"
  },
  {
    title: "System and Organization Controls (SOC)",
    tag: "Frameworks",
    category: "Reporting",
    description: "A suite of reports produced during an audit which evaluate an organization's internal controls over their information systems.",
    color: "#10B981"
  },
  {
    title: "Gap Analysis",
    tag: "Compliance",
    category: "Audit",
    description: "An assessment of the differences between the current security posture and the desired compliance state.",
    color: "#0B1521"
  }
];

export default function GlossaryList() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = initialTerms.filter(term => {
    const matchesTag = activeTag === "All" || term.tag === activeTag;
    const matchesSearch = term.title.toLowerCase().includes(searchQuery.toLowerCase()) || term.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      {/* Background Doodles */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] opacity-10 pointer-events-none -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1A4A85]" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5"/>
          <rect x="60" y="60" width="80" height="80" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
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
                    ? 'bg-[#1A4A85] text-white border-[#1A4A85] shadow-[3px_3px_0_0_#0B1521]' 
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
              placeholder="Search terms..." 
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

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border-2 border-[#0B1521] rounded-[2rem] overflow-hidden shadow-[6px_6px_0_0_#0B1521] hover:shadow-[10px_10px_0_0_#0B1521] transition-all flex flex-col h-full cursor-pointer relative"
                >
                  {/* Accent bar */}
                  <div className="h-2 w-full" style={{ backgroundColor: term.color }}></div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-full">
                        {term.tag}
                      </span>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-50 text-[#0B1521] opacity-50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0B1521] mb-4 leading-tight group-hover:text-[#1A4A85] transition-colors">
                      {term.title}
                    </h3>

                    <p className="text-[#64748B] text-[0.95rem] leading-relaxed line-clamp-4">
                      {term.description}
                    </p>

                    <div className="mt-auto pt-6 flex items-center text-[#1A4A85] font-bold text-sm group-hover:gap-2 transition-all">
                      Learn More 
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="ml-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
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
                <h3 className="text-2xl font-bold text-[#0B1521] mb-2">No terms found</h3>
                <p className="text-[#64748B] text-lg">Try a different search or filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
