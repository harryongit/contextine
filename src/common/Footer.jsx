import { Linkedin, Twitter, Youtube, Facebook, Instagram, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  const FooterLink = ({ children }) => (
    <li>
      <a href="#" className="group flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors duration-200 tracking-tight">
        <span>{children}</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-teal-500" />
      </a>
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[800px] h-[500px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />

      {/* ✍️ Professional Subtle Tech Doodles Background */}
      <motion.div
        style={{ y: doodleY }}
        className="absolute top-[-50px] right-[-100px] opacity-[0.035] pointer-events-none text-slate-900"
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

          {/* Sketchy Stars */}
          <path d="M400 120 L408 140 L430 140 L412 155 L418 175 L400 162 L382 175 L388 155 L370 140 L392 140 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M600 250 L605 260 L615 260 L607 267 L610 277 L600 270 L590 277 L593 267 L585 260 L595 260 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

          {/* Floating Checkmark Boxes */}
          <motion.g
            animate={{ rotate: 12, y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            transform="rotate(12 270 300)"
          >
            <rect x="250" y="280" width="50" height="50" rx="10" stroke="currentColor" strokeWidth="4" />
            <path d="M262 305 L270 315 L285 295" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          <motion.g
            animate={{ rotate: -15, y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            transform="rotate(-15 650 150)"
          >
            <rect x="630" y="130" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" />
            <path d="M640 150 L645 155 L655 142" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          {/* Scribbles and squiggles */}
          <path d="M500 280 Q 520 260 510 290 T 530 285 T 525 310" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Nodes */}
          <circle cx="550" cy="200" r="14" stroke="currentColor" strokeWidth="4" />
          <circle cx="750" cy="350" r="10" stroke="currentColor" strokeWidth="4" />
          <circle cx="100" cy="200" r="8" stroke="currentColor" strokeWidth="4" />
        </svg>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Top Section: Logo & Badges */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-20 gap-12"
        >
          {/* Logo & Description */}
          <motion.div variants={popUp}>
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm8.5 27.5L20 33l-8.5-5.5V16L20 10.5l8.5 5.5v11.5z" fill="#0ea5e9" />
                <path d="M20 13l-6 4v7l6 4 6-4v-7l-6-4z" fill="#14b8a6" />
              </svg>
              <span className="text-3xl font-bold tracking-tight text-slate-900 select-none">
                Contextine
              </span>
            </div>
            <p className="mt-5 text-slate-500 text-[15px] font-medium max-w-sm leading-relaxed">
              The modern, security-first GRC platform built for teams that move fast. Automate evidence, simplify audits, and build securely from the start.
            </p>
          </motion.div>

          {/* Premium Light Badges */}
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-3 max-w-2xl justify-start xl:justify-end">
            {["SOC 2", "GDPR", "CCPA", "ISO 27001", "ISO 27018", "ISO 27017", "ISO 27701", "ISO 42001"].map((badge) => (
              <motion.div
                variants={popUp}
                key={badge}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 hover:border-teal-400 hover:shadow-[0_4px_20px_rgba(20,184,166,0.1)] transition-all cursor-default"
              >
                <div className="bg-teal-50 p-1 rounded-full group-hover:bg-teal-100 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 transition-colors" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-slate-700 uppercase group-hover:text-slate-900 transition-colors mt-[1px]">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

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
              <FooterLink>Why Contextine</FooterLink>
              <FooterLink>Explore the Platform</FooterLink>
              <FooterLink>Simplify Compliance</FooterLink>
              <FooterLink>Streamline Audits</FooterLink>
              <FooterLink>Empower Your Employees</FooterLink>
              <FooterLink>Monitor Cyber Risk</FooterLink>
              <FooterLink>Assess Third-Party Risk</FooterLink>
              <FooterLink>Validate User Privileges</FooterLink>
              <FooterLink>Manage Asset Inventory</FooterLink>
              <FooterLink>Demonstrate Trust</FooterLink>
              <FooterLink>AI-Powered GRC</FooterLink>
              <FooterLink>Integrate Your Tech Stack</FooterLink>
            </ul>
          </motion.div>

          {/* Column 2: Frameworks */}
          <motion.div variants={popUp}>
            <FooterHeading>Frameworks</FooterHeading>
            <ul className="space-y-4 text-[14.5px] font-medium">
              <FooterLink>SOC 2</FooterLink>
              <FooterLink>ISO 27001</FooterLink>
              <FooterLink>GDPR</FooterLink>
              <FooterLink>PCI DSS</FooterLink>
              <FooterLink>HIPAA</FooterLink>
              <FooterLink>NIST AI RMF</FooterLink>
              <FooterLink>Custom Frameworks</FooterLink>
              <FooterLink>All Frameworks</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Stages & Industry */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Company Stages</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>Startup</FooterLink>
                <FooterLink>Growth</FooterLink>
                <FooterLink>Enterprise</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Industry</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>Enterprise Software</FooterLink>
                <FooterLink>Financial Services</FooterLink>
                <FooterLink>Healthcare</FooterLink>
                <FooterLink>Travel and Tourism</FooterLink>
                <FooterLink>Education</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Resources & Hubs */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Resources</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>Blog</FooterLink>
                <FooterLink>Ebooks</FooterLink>
                <FooterLink>Podcast</FooterLink>
                <FooterLink>Success Stories</FooterLink>
                <FooterLink>Webinars</FooterLink>
                <FooterLink>Glossary</FooterLink>
                <FooterLink>FAQs</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Hubs</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>SOC 2 Hub</FooterLink>
                <FooterLink>ISO 27001 Hub</FooterLink>
                <FooterLink>HIPAA Hub</FooterLink>
                <FooterLink>Explore All Hubs</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* Column 5: Partners & Company */}
          <motion.div variants={popUp} className="space-y-12">
            <div>
              <FooterHeading>Partners</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>Become a Partner</FooterLink>
                <FooterLink>Find a Partner</FooterLink>
              </ul>
            </div>
            <div>
              <FooterHeading>Company</FooterHeading>
              <ul className="space-y-4 text-[14.5px] font-medium">
                <FooterLink>Customers</FooterLink>
                <FooterLink>About</FooterLink>
                <FooterLink>Careers</FooterLink>

                <FooterLink>Security</FooterLink>
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
            {[
              { icon: <Linkedin size={20} fill="currentColor" strokeWidth={0} /> },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
              { icon: <Youtube size={22} fill="currentColor" strokeWidth={0} /> },
              { icon: <Facebook size={20} fill="currentColor" strokeWidth={0} /> },
              { icon: <Instagram size={20} /> }
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-teal-600 hover:-translate-y-0.5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
            {/* G2 Logo */}
            <a href="#" className="hover:text-teal-600 hover:-translate-y-0.5 transition-all duration-300 font-bold tracking-tighter text-lg leading-none pt-0.5">
              G<span className="text-[11px] align-top">2</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[14.5px] text-slate-500 font-medium">
            <a href="#" className="hover:text-teal-600 transition-colors">Trust</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Cookies Policy</a>
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
