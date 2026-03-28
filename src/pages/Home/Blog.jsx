import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Heart } from 'lucide-react';

const POSTS = [
    {
        title: "Data Analytics: Key to Decisions and Business Growth",
        date: "11/1/2024",
        excerpt: "Data is the new currency of the digital age. data Insights hold the key to unlocking new business possibilities.",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
        title: "The Rise of Personalization in Technology.",
        date: "11/1/2024",
        excerpt: "technology adapts to our individual needs and preferences. Explore how artificial intelligence algorithms tailor experiences.",
        img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
        title: "Turning Data into Insights",
        date: "11/1/2024",
        excerpt: "Learn how to collect, clean, and organize data, and then use advanced analytics techniques to visualize trends.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400"
    }
];

const BlogCard = ({ post, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-[1.8rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full min-h-[500px] flex flex-col group hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
    >
        <div className="p-6 pb-2 flex flex-col">
            <h3 className="text-[21px] md:text-[23px] font-semibold text-slate-900 leading-[1.3] line-clamp-2 min-h-[60px] tracking-tight">
                {post.title}
            </h3>

            <div className="flex items-center gap-5 text-[13px] font-medium text-slate-500 mt-4 mb-4">
                <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                    <Heart size={14} fill="currentColor" className="text-slate-800" />
                    <span className="text-slate-800 font-semibold text-[12px] uppercase">10k</span>
                </div>
            </div>

            <p className="text-[15px] text-slate-600 line-clamp-2 leading-[1.6]">
                {post.excerpt}
            </p>
        </div>

        <div className="relative flex-grow mt-6 px-4 pb-4 h-[260px]">
            <div className="relative w-full h-full bg-slate-100 rounded-[1.5rem] overflow-hidden">

                {/* Read Button */}
                <div className="absolute top-0 left-0 bg-white pr-4 pb-4   rounded-br-[1.5rem] z-10">

                    <button className="bg-white border-[1.5px] border-slate-900 px-5 md:px-6 py-2.5 mt-2 ml-2 rounded-[12px] flex items-center gap-2 hover:bg-slate-50 transition-colors group/btn">
                        <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
                            Read Article
                        </span>
                        <ArrowRight
                            size={18}
                            strokeWidth={2}
                            className="group-hover/btn:translate-x-1 transition-transform"
                        />
                    </button>

                    {/* Corner Cut */}
                    <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 -right-[23.5px] fill-white">
                        <path d="M0 0H24C10.7452 0 0 10.7452 0 24V0Z" />
                    </svg>

                    <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -bottom-[23.5px] left-0 fill-white">
                        <path d="M0 0H24C10.7452 0 0 10.7452 0 24V0Z" />
                    </svg>
                </div>

                <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>
    </motion.div>
);

const Blog = () => {
    return (
        <section className="bg-white py-24 lg:py-32 font-sans">
            <div className="max-w-[1240px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-widest"
                    >
                        Resources
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Latest insights & news.
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {POSTS.map((post, i) => (
                        <BlogCard key={i} post={post} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;