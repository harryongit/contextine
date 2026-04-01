import React from 'react';
import { motion } from 'framer-motion';

const updates = [
  {
    date: "March 15, 2026",
    version: "v2.5.0",
    title: "AI Control Mapper Release",
    description: "Our core AI engine now automatically maps security controls across 50+ international frameworks, reducing manual effort by 70%.",
    type: "Major Feature",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "#6A47B2"
  },
  {
    date: "February 28, 2026",
    version: "v2.4.2",
    title: "Enhanced Slack Workflow Integration",
    description: "Receive real-time compliance alerts and approve evidence directly from Slack with our brand new interactive bot.",
    type: "Integration",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "#1E956C"
  },
  {
    date: "February 12, 2026",
    version: "v2.4.0",
    title: "Custom Risk Assessment Builder",
    description: "Build bespoke risk assessment templates that match your internal audit methodology while maintaining SOC 2 compliance.",
    type: "New Feature",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#1A4A85"
  },
  {
    date: "January 20, 2026",
    version: "v2.3.5",
    title: "SOC 2 Evidence Automation Pack #4",
    description: "Automatic evidence collection for over 15+ AWS and GCP services, including IAM roles, S3 bucket policies, and RDS encryption status.",
    type: "Enhancement",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    color: "#FBBF24"
  }
];

export default function ProductUpdatesTimeline() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] relative overflow-hidden font-sans border-t-[3px] border-[#0B1521] border-dashed">
      
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Timeline Header */}
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-[#F1F5F9] text-[#64748B] border-2 border-[#CBD5E1] font-bold px-6 py-2 rounded-full mb-6 uppercase tracking-widest text-xs"
          >
            Release History
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#0B1521] leading-tight"
          >
            Stay up to <span className="text-[#1A4A85]">date</span> with <br /> our progress.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-[#0B1521]/10 border-l-2 border-[#0B1521] border-dashed -translate-x-[2px]"></div>

          {/* Cards */}
          <div className="space-y-24">
            {updates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FAF8F5] border-4 border-[#0B1521] z-20 shadow-[0_0_0_8px_rgba(255,255,255,1)]"></div>

                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div 
                    className="bg-white border-2 border-[#0B1521] rounded-[2rem] p-8 shadow-[6px_6px_0_0_#0B1521] hover:shadow-[10px_10px_0_0_#0B1521] transition-all group overflow-hidden relative"
                  >
                    {/* Top bar for color coding */}
                    <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: update.color }}></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.7rem] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full shadow-[2px_2px_0_0_#0B1521] border border-[#0B1521]" style={{ backgroundColor: update.color }}>
                        {update.type}
                      </span>
                      <span className="text-[0.8rem] font-bold text-[#64748B] italic">
                        {update.version}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1521] mb-4 group-hover:text-[#1A4A85] transition-colors leading-tight">
                      {update.title}
                    </h3>
                    <p className="text-[#64748B] text-[0.95rem] leading-relaxed mb-6">
                      {update.description}
                    </p>

                    <div className="h-40 overflow-hidden rounded-[1.5rem] border-2 border-[#0B1521]">
                      <img src={update.image} alt={update.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                {/* Date Side */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} hidden md:block`}>
                  <div className="text-[2.5rem] font-black text-[#0B1521] opacity-10 select-none">
                    {update.date.split(',')[1].trim()}
                  </div>
                  <div className="text-2xl font-extrabold text-[#0B1521] leading-tight">
                    {update.date.split(',')[0]}
                  </div>
                </div>

                {/* Mobile Date Overlay */}
                <div className="absolute -top-10 left-[70px] md:hidden block">
                  <span className="text-lg font-bold text-[#0B1521] bg-[#FBBF24] px-4 py-1 rounded-full border-2 border-[#0B1521] shadow-[3px_3px_0_0_#0B1521]">
                    {update.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ending Doodle */}
        <div className="mt-32 text-center text-[#64748B] opacity-30 flex flex-col items-center">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m12 8 4 4-4 4" />
                <path d="M8 12h8" />
            </svg>
            <span className="font-bold tracking-widest mt-4">END OF TIMELINE</span>
        </div>

      </div>
    </section>
  );
}
