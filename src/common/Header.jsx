import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo3.png";
import Button from "./Button";

import {
  ChevronDown,
  ChevronRight,
  Layers,
  Cpu,
  Database,
  Building,
  Building2,
  Shield,
  Briefcase,
  Users,
  BookOpen,
  Newspaper,
  Info,
  CheckCircle2,
  BarChart3,
  Settings2,
  Workflow
} from "lucide-react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    Platform: [
      {
        title: "Platform Overview",
        items: [
          { icon: Layers, title: "Overview", desc: "Platform capabilities", href: "/platform/overview" },
          { icon: Info, title: "Why Contextine", desc: "Our unique approach", href: "/platform/why-contextine" },
        ],
      },
      {
        title: "Products",
        items: [
          { icon: Shield, title: "Audit Management", desc: "Automate compliance audits", href: "/products/audit-management" },
          { icon: Briefcase, title: "Case Management", desc: "Track legal matters easily", href: "/products/case-management" },
          { icon: Database, title: "GRC Platform", desc: "Governance, Risk & Compliance", href: "/products/grc-platform" },
        ],
      },
      {
        title: "Features",
        items: [
          { icon: Shield, title: "Risk Management", desc: "Identify & mitigate risks", href: "/features/risk-management" },
          { icon: CheckCircle2, title: "Compliance Tracking", desc: "Stay audit-ready 24/7", href: "/features/compliance-tracking" },
          { icon: Workflow, title: "Workflow Automation", desc: "Scale with smart automation", href: "/features/workflow-automation" },
          { icon: BarChart3, title: "Reporting & Analytics", desc: "Data-driven insights", href: "/features/reporting-analytics" },
        ],
      },
    ],
    Solutions: [
      {
        title: "By Role",
        items: [
          { icon: Shield, title: "Compliance Teams", desc: "Automate reporting & audits", href: "/solutions/compliance-teams" },
          { icon: Shield, title: "Security Teams", desc: "Protect your infrastructure", href: "/solutions/security-teams" },
          { icon: BarChart3, title: "Risk & Audit Teams", desc: "Centralized evidence collection", href: "/solutions/risk-audit" },
          { icon: Briefcase, title: "Legal & Operations", desc: "Streamline legal workflows", href: "/solutions/legal-ops" },
        ],
      },
      {
        title: "By Use Case",
        items: [
          { icon: Workflow, title: "Audit Automation", desc: "Simplify the audit cycle", href: "/use-case/audit-automation" },
          { icon: Shield, title: "Risk Management", desc: "Enterprise-wide visibility", href: "/use-case/risk" },
          { icon: CheckCircle2, title: "Compliance Management", desc: "Stay compliant across frameworks", href: "/use-case/compliance" },
          { icon: Briefcase, title: "Case Management", desc: "Manage legal case lifecycles", href: "/use-case/case" },
          { icon: Newspaper, title: "Policy Management", desc: "Centralize your policy updates", href: "/use-case/policy" },
        ],
      },
      {
        title: "By Company Stage",
        items: [
          { icon: Building, title: "Small Business", desc: "Boost your business with security compliance", href: "/solutions/small-business" },
          { icon: Building2, title: "Enterprise", desc: "Give your team time back with compliance automation", href: "/solutions/enterprise" },
          { icon: Shield, title: "Defense Contractors", desc: "Win and retain defense contracts with CMMC compliance", href: "/solutions/defense-contractors" },
        ],
      },
    ],
    Resources: [
      {
        title: "Learning Center",
        items: [
          { icon: Newspaper, title: "Blog", desc: "Latest insights & analysis", href: "/blog" },
          { icon: BookOpen, title: "Glossary", desc: "Security terms explained", href: "/glossary" },
          { icon: BookOpen, title: "Framework Guides", desc: "Compliance workflows", href: "/guides" },
        ],
      },
      {
        title: "Product & Support",
        items: [
          { icon: Info, title: "Help Center", desc: "Documentation & support", href: "/help" },
          { icon: Newspaper, title: "Product Updates", desc: "See what's new", href: "/updates" },
          { icon: Info, title: "FAQs", desc: "Common questions", href: "/faq" },
        ],
      },
      {
        title: "Framework Hubs",
        type: "mega",
        frameworks: [
          { title: "SOC 2", icon: Shield, id: "soc2" },
          { title: "ISO 27001", icon: Shield, id: "iso27001" },
          { title: "GDPR", icon: Shield, id: "gdpr" },
          { title: "PCI DSS", icon: Database, id: "pcidss" },
          { title: "HIPAA", icon: Shield, id: "hipaa" },
          { title: "NIST AI RMF", icon: Cpu, id: "nist-ai" },
        ],
        featured: [
          { title: "Custom Frameworks", desc: "Build compliance your way.", icon: Settings2, href: "/frameworks/custom" },
          { title: "All Frameworks", desc: "60+ frameworks, right out the box", icon: Shield, href: "/frameworks/all" }
        ]
      },
    ],
    Company: [
      {
        title: "Company",
        items: [
          { icon: Info, title: "About", desc: "Our mission to automate compliance", href: "/about" },
          { icon: Briefcase, title: "Careers", desc: "Join our growing global team", href: "/careers" },
          { icon: Shield, title: "Security", desc: "Our commitment to your data", href: "/security" },
        ],
      },
      {
        title: "Connect",
        items: [
          { icon: Users, title: "Partners", desc: "Grow with our security ecosystem", href: "/partners" },
          { icon: Newspaper, title: "Newsroom", desc: "The latest news and press", href: "/news" },
          { icon: Info, title: "Contact Us", desc: "Get in touch with our experts", href: "/contact" },
        ],
      },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-[radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)] text-white border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
            <img src={logo} className="h-10 w-10 object-contain group-hover:scale-105 transition-transform" alt="logo" />
            <span className="text-2xl font-bold tracking-tight text-white">Contextine</span>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {["Platform", "Solutions"].map((menu) => (
              <div
                key={menu}
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative py-8"
              >
                <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${activeMenu === menu ? 'text-accent' : 'text-white/80'}`}>
                  {menu}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}

            <Link to="/customers" className="text-sm font-medium text-white/80 hover:text-accent transition-colors no-underline">
              Customers
            </Link>

            {["Resources", "Company"].map((menu) => (
              <div
                key={menu}
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative py-8"
              >
                <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${activeMenu === menu ? 'text-accent' : 'text-white/80'}`}>
                  {menu}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="secondary" size="lg" className="shadow-lg shadow-accent/10">
              <Link to="/contact" className="no-underline">
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 🔥 MEGA MENU */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute left-0 w-full bg-[#050B3D]/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
          >
            <div className="mx-auto max-w-screen-xl px-12 py-10">
              {activeMenu === "Solutions" ? (
                <div className="grid grid-cols-5 gap-8 items-start">
                  {/* List Sections */}
                  {menus[activeMenu].slice(0, 2).map((section, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {section.title}
                      </h3>
                      <div className="grid gap-1">
                        {section.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={i}
                              to={item.href || "#"}
                              className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-white/5 no-underline"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:bg-accent/20 transition-all duration-300">
                                <Icon className="h-4 w-4 text-accent" />
                              </div>
                              <div className="font-semibold text-white group-hover:text-accent transition-colors text-xs">
                                {item.title}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* Company Stage Cards (Spread across remaining 3 cols) */}
                  {menus[activeMenu][2].items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={i}
                        to={item.href || "#"}
                        className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all no-underline h-full"
                      >
                        <div className="h-28 bg-[#D1FAE5] flex items-center justify-center relative">
                          <Icon className="h-10 w-10 text-[#065F46] opacity-80 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                          <p className="text-[10px] text-white/50 leading-relaxed mb-4 flex-1">
                            {item.desc}
                          </p>
                          <div className="mt-auto flex items-center gap-1.5 text-[9px] font-bold text-accent tracking-wider uppercase">
                            Company {item.title.toLowerCase()} <ChevronRight className="h-2.5 w-2.5" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : activeMenu === "Resources" ? (
                <div className="grid grid-cols-4 gap-12 items-start">
                  {/* Learning Center & Support List */}
                  <div className="flex flex-col gap-10">
                    {menus[activeMenu].slice(0, 2).map((section, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                          {section.title}
                        </h3>
                        <div className="grid gap-1">
                          {section.items.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={i}
                                to={item.href || "#"}
                                className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-white/5 no-underline"
                              >
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:bg-accent/20 transition-all duration-300">
                                  <Icon className="h-4 w-4 text-accent" />
                                </div>
                                <div className="font-semibold text-white group-hover:text-accent transition-colors text-xs">
                                  {item.title}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Framework Hubs Mega Section (Spans 3 cols) */}
                  <div className="col-span-3 grid grid-cols-3 gap-12 border-l border-white/5 pl-12">
                    <div className="col-span-1">
                      <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Frameworks
                      </h3>
                      <div className="grid gap-4">
                        {menus[activeMenu][2].frameworks.map((fw, i) => {
                          const Icon = fw.icon;
                          return (
                            <Link key={i} to={`/frameworks/${fw.id}`} className="group flex items-center gap-4 no-underline">
                              <div className="flex h-8 w-8 items-center justify-center bg-white/5 rounded border border-white/10 group-hover:bg-accent/20 transition-all">
                                <Icon className="h-4 w-4 text-white/70 group-hover:text-accent" />
                              </div>
                              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">{fw.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    <div className="col-span-2 flex flex-col gap-6">
                      {/* Featured Cards */}
                      {menus[activeMenu][2].featured.map((feat, i) => {
                        const Icon = feat.icon;
                        return (
                          <Link
                            key={i}
                            to={feat.href}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group no-underline relative overflow-hidden"
                          >
                            <div className="flex items-center gap-4 mb-2">
                              <div className="p-2 rounded bg-accent/20">
                                <Icon className="h-5 w-5 text-accent" />
                              </div>
                              <h4 className="font-bold text-white group-hover:text-accent transition-colors">
                                {feat.title}
                              </h4>
                            </div>
                            <p className="text-sm text-white/50 px-12 leading-relaxed">
                              {feat.desc}
                            </p>

                            {/* Optional Design Element for the second item */}
                            {i === 1 && (
                              <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                                <div className="w-full h-full border-2 border-accent rounded-full border-dashed animate-spin-slow"></div>
                              </div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : activeMenu === "Company" ? (
                <div className="grid grid-cols-4 gap-12 items-start">
                  <div className="col-span-2 grid grid-cols-2 gap-8">
                    {menus[activeMenu].map((section, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                          {section.title}
                        </h3>
                        <div className="grid gap-2">
                          {section.items.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={i}
                                to={item.href || "#"}
                                className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-white/5 no-underline"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:bg-accent/20 transition-all duration-300">
                                  <Icon className="h-4 w-4 text-accent" />
                                </div>
                                <div className="font-semibold text-white group-hover:text-accent transition-colors text-xs">
                                  {item.title}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Spotlight on the right for Company */}
                  <div className="col-span-2 grid grid-cols-1 gap-6">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/30 transition-all group flex flex-col justify-center h-full">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Spotlight</span>
                      <h4 className="text-2xl font-bold text-white mb-4">The Trust Center</h4>
                      <p className="text-sm text-white/60 mb-8 leading-relaxed max-w-md">Learn how we protect data for 1000+ companies worldwide with our industry-leading security standards and compliance automation.</p>
                      <Link to="/trust" className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                        Visit Trust Center <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-12">
                  {menus[activeMenu].map((section, idx) => (
                    <div key={idx} className="min-w-[200px] flex-1">
                      <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                        {section.title}
                      </h3>
                      <div className="grid gap-2">
                        {section.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={i}
                              to={item.href || "#"}
                              className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-white/5 no-underline"
                            >
                              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300">
                                <Icon className="h-5 w-5 text-accent" />
                              </div>
                              <div>
                                <div className="font-semibold text-white group-hover:text-accent transition-colors leading-tight text-sm">
                                  {item.title}
                                </div>
                                <p className="mt-1 text-xs text-white/50 leading-relaxed max-w-[180px]">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {activeMenu === "Platform" && (
                    <div className="ml-auto w-72 h-full rounded-2xl bg-gradient-to-br from-accent/10 to-transparent p-6 border border-white/5 hidden xl:block">
                      <span className="inline-block px-2 py-1 rounded bg-accent/20 text-[10px] font-bold uppercase tracking-wider text-accent mb-4">Latest Update</span>
                      <h4 className="text-lg font-bold text-white mb-2 leading-tight">AI-Powered Risk Analysis</h4>
                      <p className="text-sm text-white/60 mb-4">Discover how our new AI modules are helping legal teams predict case outcomes.</p>
                      <Link to="/ai" className="text-sm font-medium text-accent hover:underline flex items-center gap-1 group">
                        Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
