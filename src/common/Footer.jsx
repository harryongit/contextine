import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, ShieldCheck, ArrowUpRight, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo3.png";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Subdued parallax effects
  const doodleY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bigTextY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  // Stagger configurations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const popUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const FooterLink = ({ children, to = "#" }) => (
    <li>
      <Link to={to} className="group flex items-center gap-2 text-slate-500 hover:text-[#1A4A85] transition-colors duration-200 tracking-tight no-underline">
        <span>{children}</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[#1A4A85]" />
      </Link>
    </li>
  );

  const FooterHeading = ({ children }) => (
    <h3 className="font-bold text-[16px] text-slate-900 tracking-wide mb-6">
      {children}
    </h3>
  );

  return (
    <footer ref={footerRef} className="bg-white pt-24 pb-0 font-sans border-t border-slate-100 relative overflow-hidden text-slate-900">

      {/* 🎨 Abstract Premium Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[800px] h-[500px] bg-indigo-50/80 rounded-full blur-[120px] pointer-events-none" />

      {/* ✍️ Professional Subtle Tech Doodles Background (Color matched to logo) */}
      <motion.div
        style={{ y: doodleY }}
        className="absolute top-[-50px] right-[-100px] opacity-[0.035] pointer-events-none text-[#1A4A85]"
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Connecting Lines */}
          <motion.path
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}
            d="M100 200C250 100 350 350 550 200S650 450 750 350" stroke="currentColor" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M50 400 Q 250 300 400 500 T 750 400" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"
          />
          <path d="M250 50 Q 350 150 450 50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          <path d="M400 120 L408 140 L430 140 L412 155 L418 175 L400 162 L382 175 L388 155 L370 140 L392 140 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <motion.g animate={{ rotate: 12, y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} transform="rotate(12 270 300)">
            <rect x="250" y="280" width="50" height="50" rx="10" stroke="currentColor" strokeWidth="4" />
            <path d="M262 305 L270 315 L285 295" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>
          <circle cx="550" cy="200" r="14" stroke="currentColor" strokeWidth="4" />
        </svg>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Top Section: Logo & Newsletter */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 mb-20 items-start">
          {/* Logo & Description */}
          <motion.div variants={popUp} initial="hidden" animate="visible" className="xl:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} className="h-10 w-10 object-contain" alt="logo" />
              <span className="text-3xl font-bold tracking-tight text-[#0B1521] select-none">
                Contextine
              </span>
            </div>
            <p className="mt-5 text-slate-500 text-[15px] font-medium max-w-sm leading-relaxed">
              The modern, security-first GRC platform built for teams that move fast. Automate evidence, simplify audits, and build securely from the start.
            </p>

            {/* Minimal Socials Row */}
            <div className="mt-8 flex items-center gap-5 text-slate-400">
              <a href="#" className="hover:text-[#1A4A85] transition-colors"><Linkedin size={18} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:text-[#1A4A85] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              <a href="#" className="hover:text-[#1A4A85] transition-colors"><Instagram size={18} /></a>
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="xl:col-span-8 bg-[#F8FAFC] border-2 border-[#0B1521] border-dashed rounded-[3rem] p-8 md:p-12 shadow-[8px_8px_0_0_#0B1521] relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black text-[#0B1521] mb-2 uppercase tracking-tight">Stay <span className="text-[#1A4A85]">Risk-Ready</span></h3>
                <p className="text-slate-500 font-medium">Join 5,000+ security pros receiving our weekly pulse on GRC & Audit automation.</p>
              </div>
              <div className="w-full md:w-1/2 relative group">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full bg-white border-2 border-[#0B1521] rounded-full py-4 pl-6 pr-16 font-bold text-[#0B1521] placeholder-slate-400 shadow-[4px_4px_0_0_#0B1521] focus:outline-none focus:shadow-[6px_6px_0_0_#1A4A85] transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 w-12 h-12 rounded-full bg-[#0B1521] text-white flex items-center justify-center hover:bg-[#1A4A85] transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none -rotate-12 translate-x-8 -translate-y-8">
              <ShieldCheck size={120} />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-px bg-slate-200 mb-16 origin-left"
        />

        {/* Links Grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-16 mb-24"
        >

          {/* Column 1: Platform */}
          <motion.div variants={popUp}>
            <FooterHeading>Platform</FooterHeading>
            <ul className="space-y-4 text-[14.5px] font-medium">
              <FooterLink to="/platform/overview">Overview</FooterLink>
              <FooterLink to="/platform/why-contextine">Why Contextine</FooterLink>
              <FooterLink to="/products/audit-management">Audit Management</FooterLink>
              <FooterLink to="/products/grc-platform">GRC Platform</FooterLink>
              <FooterLink to="/features/risk-management">Risk Management</FooterLink>
              <FooterLink to="/features/compliance-tracking">Compliance Tracking</FooterLink>
              <FooterLink to="/features/workflow-automation">Workflow Automation</FooterLink>
              <FooterLink to="/features/reporting-analytics">Reporting & Analytics</FooterLink>
            </ul>
          </motion.div>

          {/* Column 2: Frameworks */}
          <motion.div variants={popUp}>
            <FooterHeading>Frameworks</FooterHeading>
            <ul className="space-y-4 text-[14.5px] font-medium">
              <FooterLink to="/frameworks/soc2">SOC 2</FooterLink>
              <FooterLink to="/frameworks/iso27001">ISO 27001</FooterLink>
              <FooterLink to="/frameworks/gdpr">GDPR</FooterLink>
              <FooterLink to="/frameworks/pcidss">PCI DSS</FooterLink>
              <FooterLink to="/frameworks/hipaa">HIPAA</FooterLink>
              <FooterLink to="/frameworks/nist-ai">NIST AI RMF</FooterLink>
              <FooterLink to="/frameworks/custom">Custom Frameworks</FooterLink>
              <FooterLink to="/frameworks/all">All Frameworks</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Solutions */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Solutions</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/solutions/small-business">Small Business</FooterLink>
                <FooterLink to="/solutions/enterprise">Enterprise</FooterLink>
                <FooterLink to="/solutions/defense-contractors">Defense Contractors</FooterLink>
                <FooterLink to="/solutions/compliance-teams">Compliance Teams</FooterLink>
                <FooterLink to="/solutions/security-teams">Security Teams</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Security</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/security">Trust Center</FooterLink>
                <FooterLink to="/features/risk-management">Cyber Risk</FooterLink>
                <FooterLink to="/security">Data Privacy</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Resources */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Learning Center</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/glossary">Glossary</FooterLink>
                <FooterLink to="/guides">Framework Guides</FooterLink>
                <FooterLink to="/faq">FAQs</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Support</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/help">Help Center</FooterLink>
                <FooterLink to="/updates">Product Updates</FooterLink>
                <FooterLink to="/contact">Live Support</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* Column 5: Company */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/newsroom">Newsroom</FooterLink>
                <FooterLink to="/customers">Customers</FooterLink>
                <FooterLink to="/partners">Partners</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Contact</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink to="/contact">Contact Sales</FooterLink>
                <FooterLink to="/contact">Request Demo</FooterLink>
              </ul>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar: Socials & Policies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 pb-10 border-t border-slate-200 gap-6"
        >
          {/* Light Theme Social Icons (Bare icons like screenshot) */}
          <div className="flex items-center gap-6 text-[#0f172a]">

          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[14.5px] text-slate-500 font-bold">
            <Link to="/trust" className="hover:text-[#1A4A85] transition-colors no-underline">Trust</Link>
            <Link to="/terms" className="hover:text-[#1A4A85] transition-colors no-underline">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-[#1A4A85] transition-colors no-underline">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-[#1A4A85] transition-colors no-underline">Cookies Policy</Link>
          </div>
        </motion.div>
      </div>

      {/* Massive Parallax Footer Brand & Copyright */}
      <div className="w-full h-[180px] flex items-center justify-center overflow-hidden relative bg-[#f4f4f5] border-t border-slate-200 shadow-inner">

        <motion.h1
          style={{ y: bigTextY }}
          className="absolute w-full text-center text-[12.5vw] font-black tracking-tighter leading-none text-slate-200/50 select-none pointer-events-none whitespace-nowrap"
        >
          Contextine
        </motion.h1>

        <p className="relative z-10 text-[14px] text-slate-600 font-medium mt-6">
          © 2026 <a href="#" className="hover:text-teal-600 transition-colors underline decoration-slate-300 underline-offset-4">Contextine Platform</a>. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
