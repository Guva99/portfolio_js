import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, HeartPulse, Plane, Home as HomeIcon, Tv, Code, Briefcase, Users, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [location] = useLocation();

  const menuItems = [
    {
      title: t("nav.projects"),
      href: "/#projects",
      dropdown: [
        { title: t("nav.healthcare"), icon: HeartPulse, href: "/projects/healthcare" },
        { title: t("nav.travel"), icon: Plane, href: "/projects/travel" },
        { title: t("nav.smartHome"), icon: HomeIcon, href: "/projects/smarthome" },
        { title: t("nav.media"), icon: Tv, href: "/projects/media" },
        { title: t("nav.social"), icon: Users, href: "/projects/truefortwo" },
        { title: t("nav.connectivity"), icon: Wifi, href: "/projects/2sky" },
      ]
    },
    {
      title: t("nav.technologies"),
      href: "/technologies",
      icon: Code
    },
    {
      title: t("nav.experience"),
      href: "/experience",
      icon: Briefcase
    }
  ];

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const currentLang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-0.5 ${className}`}>
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
          currentLang === "en"
            ? "bg-cyan-400 text-slate-900"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage("ru")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
          currentLang === "ru"
            ? "bg-cyan-400 text-slate-900"
            : "text-slate-400 hover:text-white"
        }`}
      >
        RU
      </button>
    </div>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-mono tracking-tighter group cursor-pointer">
            <span className="text-violet-500">&lt;</span>
            <span className="text-white group-hover:text-cyan-400 transition-colors">Dev</span>
            <span className="text-violet-500">/&gt;</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={item.href} className={`flex items-center gap-1.5 font-medium transition-colors py-2 ${
                      location === item.href 
                        ? "text-cyan-400" 
                        : "text-slate-300 hover:text-white"
                    }`}>
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.title}
                    {item.dropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 rounded-xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 pointer-events-none" />
                        
                        <div className="relative flex flex-col gap-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.href} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                                <div className="p-2 rounded-md bg-white/5 group-hover/item:bg-violet-500/20 group-hover/item:text-violet-300 text-slate-400 transition-colors">
                                  <subItem.icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                                  {subItem.title}
                                </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right: Lang Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LangSwitcher />
          </div>

          {/* Mobile: Lang Switcher + Burger */}
          <div className="md:hidden flex items-center gap-2">
            <LangSwitcher />
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-bold font-mono text-white">{t("nav.menu")}</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <Link href={item.href} onClick={() => !item.dropdown && setMobileMenuOpen(false)} className={`text-2xl font-bold flex items-center gap-3 ${
                          location === item.href ? "text-cyan-400" : "text-white"
                        }`}>
                        {item.title}
                    </Link>
                    
                    {item.dropdown && (
                      <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-white/10 ml-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all">
                              <subItem.icon className="w-5 h-5 text-violet-400" />
                              <span className="text-lg text-slate-200">{subItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            <div className="mt-8 pt-8 border-t border-white/10">
                <Button 
                  className="w-full h-14 text-lg bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl"
                  onClick={() => window.open('https://t.me/guvva', '_blank')}
                >
                  {t("nav.contactMe")}
                </Button>
              </div>
            </div>
            
            {/* Background decorations for mobile menu */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
