import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../../common/Header.jsx';
import Footer from '../../../common/Footer.jsx';

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="pt-32 pb-20 bg-[#F8FAFC] border-b-2 border-[#0B1521] border-dashed">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-indigo-100 text-indigo-600 font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 border-2 border-indigo-600 shadow-[2px_2px_0_0_#4f46e5]"
          >
            Legal Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#0B1521] mb-6 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-bold"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-[#0B1521] prose-headings:font-black prose-headings:tracking-tight
          prose-strong:text-[#0B1521] prose-strong:font-black
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
          prose-li:text-slate-600 prose-li:font-medium
          prose-a:text-indigo-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
        ">
          {children}
        </div>

        {/* Sidebar-style floating action (optional) */}
        <div className="mt-20 pt-10 border-t-2 border-[#0B1521] border-dashed flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h4 className="font-black text-[#0B1521] text-xl mb-2">Have questions?</h4>
                <p className="text-slate-500 font-bold">Contact our legal team at legal@contextine.com</p>
            </div>
            <button className="bg-[#0B1521] text-white font-black px-8 py-4 rounded-2xl shadow-[6px_6px_0_0_#1A4A85] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#1A4A85] transition-all">
                Download as PDF
            </button>
        </div>
      </div>
    </div>
  );
}
