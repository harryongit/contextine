import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Crown, HeartHandshake, Lightbulb, MessageCircle } from 'lucide-react';

const values = [
  {
    title: 'Customer centric',
    description: 'Our customers are at the heart of our business and their success is our top priority.',
    icon: Users,
    color: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-500',
    bgHover: 'group-hover:bg-blue-500',
  },
  {
    title: 'Grit',
    description: 'We embrace change and are nimble, evolving beyond our job description.',
    icon: Zap,
    color: 'from-orange-500/10 to-red-500/10',
    iconColor: 'text-orange-500',
    bgHover: 'group-hover:bg-orange-500',
  },
  {
    title: 'Act like owners',
    description: 'We take pride in what we do. Every team member has the power to make our company better.',
    icon: Crown,
    color: 'from-emerald-500/10 to-[#00DF8F]/10',
    iconColor: 'text-[#00DF8F]',
    bgHover: 'group-hover:bg-[#00DF8F]',
  },
  {
    title: 'Collaborate with kindness',
    description: 'We go above and beyond to help our teammates and proactively involve each other in our joint success.',
    icon: HeartHandshake,
    color: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-500',
    bgHover: 'group-hover:bg-rose-500',
  },
  {
    title: 'Always curious',
    description: 'We value innovation and creativity, as we constantly seek better ways of driving progress.',
    icon: Lightbulb,
    color: 'from-amber-500/10 to-yellow-500/10',
    iconColor: 'text-amber-500',
    bgHover: 'group-hover:bg-amber-500',
  },
  {
    title: 'Champions of communication',
    description: 'We believe that strong, transparent, and honest communication is foundational to successful relationships.',
    icon: MessageCircle,
    color: 'from-indigo-500/10 to-violet-500/10',
    iconColor: 'text-indigo-500',
    bgHover: 'group-hover:bg-indigo-500',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 20 }
  }
};

const OurValues = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00DF8F]/5 to-transparent rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[2.75rem] md:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Our core values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            The fundamental beliefs that guide our actions and behavior every single day.
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100/80 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out overflow-hidden z-10 hover:-translate-y-1 flex flex-col items-start"
              >
                {/* Subtle completely hidden background gradient that fades in on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Animated Icon Container */}
                <div className={`w-16 h-16 rounded-[1.25rem] bg-slate-50 flex items-center justify-center mb-8 ${value.bgHover} transition-colors duration-500 shadow-sm inner-border inner-border-black/5`}>
                  <IconComponent className={`w-8 h-8 ${value.iconColor} group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform`} strokeWidth={2} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default OurValues;
