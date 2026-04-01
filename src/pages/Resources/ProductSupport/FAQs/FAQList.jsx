import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = [
  "All", "General", "Platform", "Security", "Pricing", "Integration"
];

const initialFaqs = [
  {
    category: "General",
    question: "What is Contextine?",
    answer: "Contextine is an AI-powered GRC (Governance, Risk, and Compliance) platform that helps organizations automate their security audits and maintain continuous compliance.",
    color: "#6A47B2"
  },
  {
    category: "Security",
    question: "How does Contextine protect my data?",
    answer: "We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our platform is SOC 2 Type II certified and undergoes regular penetration testing.",
    color: "#1E956C"
  },
  {
    category: "Platform",
    question: "Can I manage multiple frameworks simultaneously?",
    answer: "Yes, Contextine is designed for cross-framework mapping. Controls updated for SOC 2 will automatically map to equivalent requirements in ISO 27001 or HIPAA.",
    color: "#1A4A85"
  },
  {
    category: "Integration",
    question: "Which cloud providers do you support?",
    answer: "We have native, deep integrations with AWS, Google Cloud, Azure, and hundreds of SaaS tools like GitHub, Jira, and Slack.",
    color: "#FBBF24"
  },
  {
    category: "Pricing",
    question: "Do you offer a free trial?",
    answer: "We offer a 14-day full-access trial for qualifying organizations. Contact our sales team for a custom sandbox environment.",
    color: "#F472B6"
  },
  {
    category: "Integration",
    question: "How long does the initial setup take?",
    answer: "Most customers complete their automated evidence collection setup in under 2 hours through our pre-built connector library.",
    color: "#3B82F6"
  }
];

export default function FAQList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredFaqs = initialFaqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Filters and Search Bar Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-16">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 xl:w-[70%]">
            {faqCategories.map((cat) => (
              <motion.button 
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[0.85rem] md:text-sm font-bold border-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#1A4A85] text-white border-[#1A4A85] shadow-[3px_3px_0_0_#0B1521]' 
                    : 'bg-white text-[#475569] border-[#CBD5E1] hover:border-[#0B1521] hover:text-[#0B1521] hover:shadow-[3px_3px_0_0_#0B1521]'
                }`}
              >
                {cat}
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
              className="w-full bg-white border-2 border-[#0B1521] rounded-full py-3 pl-12 pr-6 font-medium text-[#0B1521] placeholder-[#94A3B8] shadow-[4px_4px_0_0_#0B1521] focus:outline-none focus:ring-0"
            />
            <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B1521] opacity-70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="11" cy="11" r="6" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border-2 border-[#0B1521] rounded-[1.5rem] shadow-[4px_4px_0_0_#0B1521] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-8 rounded-full" style={{ backgroundColor: faq.color }}></div>
                      <span className="text-lg md:text-xl font-bold text-[#0B1521] group-hover:text-[#1A4A85] transition-colors leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-14 pb-8 text-[#64748B] text-[1.05rem] leading-relaxed border-t-2 border-[#F1F5F9] border-dashed pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 text-[#64748B]">No results found.</div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
