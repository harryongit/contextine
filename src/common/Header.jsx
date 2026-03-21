import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo3.png";
import Button from "./Button";

import {
  ChevronDown,
  Layers,
  Cpu,
  Database,
  Shield,
  Briefcase,
  Users,
  BookOpen,
  Newspaper,
  Info
} from "lucide-react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    Platform: [
      { icon: Layers, title: "Overview", desc: "Platform capabilities" },
      { icon: Cpu, title: "Automation", desc: "Smart workflows" },
      { icon: Database, title: "Integrations", desc: "Connect tools easily" },
    ],
    Solutions: [
      { icon: Briefcase, title: "Enterprise", desc: "Scale your business" },
      { icon: Users, title: "Teams", desc: "Collaborate efficiently" },
      { icon: Shield, title: "Compliance", desc: "Stay audit-ready" },
    ],
    Customers: [
      { icon: Users, title: "Case Studies", desc: "Real success stories" },
      { icon: Users, title: "Testimonials", desc: "What users say" },
    ],
    Resources: [
      { icon: BookOpen, title: "Docs", desc: "Developer guides" },
      { icon: BookOpen, title: "Blog", desc: "Latest insights" },
      { icon: BookOpen, title: "Help Center", desc: "Get support" },
    ],
    Company: [
      { icon: Info, title: "About", desc: "Who we are" },
      { icon: Briefcase, title: "Careers", desc: "Join our team" },
      { icon: Shield, title: "Security", desc: "Our commitment" },
      { icon: Newspaper, title: "Newsroom", desc: "Latest updates" },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-[radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)] text-white">

      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">

        <div className="flex items-center gap-2">
  <img src={logo} className="h-10 w-10 object-contain" alt="logo" />
  <span className="text-3xl font-bold leading-none">Contextine</span>
</div>
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {Object.keys(menus).map((menu) => (
              <div
                key={menu}
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-accent transition">
                  {menu}

                  <motion.span
                    animate={{ rotate: activeMenu === menu ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
              </div>
            ))}
          </nav>

          <Button variant="secondary" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* 🔥 FULL WIDTH MEGA MENU */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute left-0 w-full 
            bg-[radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)] 
            border-t border-white/10 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-screen-xl px-8 py-10 grid grid-cols-4 gap-8">

              {menus[activeMenu].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <Icon className="mt-1 text-accent group-hover:scale-110 transition" />
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}