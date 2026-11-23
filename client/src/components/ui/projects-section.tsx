import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, HeartPulse, Plane, Home as HomeIcon, Tv, Users, Wifi, Code, Server, Globe, Zap, Store, Package, Bot, ScanBarcode } from "lucide-react";
import { SiFlutter, SiFirebase, SiGooglemaps, SiStripe, SiGo, SiPython, SiNextdotjs } from "react-icons/si";
import sellupDashboard from "@/assets/images/sellup/dashboard.webp";
import mubiDesktop from "@/assets/images/mubi/desktop.webp";
import pulsarImage from "@/assets/images/pulsar-bonus.webp";
import wowImage from "@/assets/images/wowtickets/main.webp";
import apeironImage from "@assets/image_1770921547262.webp";
import tavriaImage from "@assets/image_1770932932101.webp";
import trueForTwoImage from "@assets/Group_1_1770974052433.webp";
import twoSkyImage from "@assets/image_1770975442018.webp";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
  const { t } = useTranslation();

  const categories: {
    id: string;
    product: string;
    titleKey: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    borderColor: string;
    descKey: string;
    tech: { name: string; icon: React.ComponentType<{ className?: string }> }[];
    link: string;
    image?: string;
    imageBg?: string;
    wide?: boolean;
  }[] = [
    {
      id: "sellup",
      product: "SellUp",
      titleKey: "nav.commerce",
      icon: Store,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      descKey: "projects.sellup.description",
      tech: [
        { name: "Go", icon: SiGo },
        { name: "Python", icon: SiPython },
        { name: "AI", icon: Bot }
      ],
      link: "/projects/sellup",
      image: sellupDashboard,
      imageBg: "bg-[#f7f4ef]",
      wide: true
    },
    {
      id: "mubi",
      product: "MUBI",
      titleKey: "nav.logistics",
      icon: Package,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      descKey: "projects.mubi.description",
      tech: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Scanner", icon: ScanBarcode },
        { name: "SellUp", icon: Store }
      ],
      link: "/projects/mubi",
      image: mubiDesktop,
      imageBg: "bg-[#f4f2ee]"
    },
    { 
      id: "healthcare", 
      product: "PulSarBonus",
      titleKey: "nav.healthcare",
      icon: HeartPulse, 
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      descKey: "projects.healthcare.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "MobX", icon: Zap },
        { name: "Maps", icon: SiGooglemaps }
      ],
      link: "/projects/healthcare",
      image: pulsarImage,
      imageBg: "bg-white"
    },
    { 
      id: "travel", 
      product: "WowTickets",
      titleKey: "nav.travel",
      icon: Plane, 
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      descKey: "projects.travel.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "BLoC", icon: Code },
        { name: "Clean Arch", icon: Server }
      ],
      link: "/projects/travel",
      image: wowImage,
      imageBg: "bg-white"
    },
    { 
      id: "smarthome", 
      product: "Apeiron Space · Wise City",
      titleKey: "nav.smartHome",
      icon: HomeIcon, 
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      descKey: "projects.smarthome.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "WebSockets", icon: Zap },
        { name: "IoT", icon: Wifi }
      ],
      link: "/projects/smarthome",
      image: apeironImage,
      imageBg: "bg-slate-900"
    },
    { 
      id: "media", 
      product: "Tavria.TV",
      titleKey: "nav.media",
      icon: Tv, 
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      descKey: "projects.media.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Smart TV", icon: Tv },
        { name: "HLS", icon: Server }
      ],
      link: "/projects/media",
      image: tavriaImage,
      imageBg: "bg-white"
    },
    { 
      id: "social", 
      product: "True for Two",
      titleKey: "nav.social",
      icon: Users, 
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/20",
      descKey: "projects.social.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Firebase", icon: SiFirebase },
        { name: "Riverpod", icon: Code }
      ],
      link: "/projects/truefortwo",
      image: trueForTwoImage,
      imageBg: "bg-white"
    },
    { 
      id: "connectivity", 
      product: "2SkyMobile",
      titleKey: "nav.connectivity",
      icon: Wifi, 
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      descKey: "projects.connectivity.description",
      tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Flutter Web", icon: Globe },
        { name: "Stripe", icon: SiStripe }
      ],
      link: "/projects/2sky",
      image: twoSkyImage,
      imageBg: "bg-slate-900"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-violet-900/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("projects.title")} <span className="text-cyan-400">{t("projects.titleHighlight")}</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={category.link} key={category.id} className={category.wide ? "lg:col-span-2" : undefined}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:bg-slate-800/60 transition-colors duration-300 flex flex-col cursor-pointer hover:border-white/10`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl ${category.bgColor} ${category.color} border ${category.borderColor} md:group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div className="bg-white/5 rounded-full p-2 group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {category.image && (
                  <div className={`-mx-6 mb-6 overflow-hidden border-y border-white/5 h-44 md:h-48 lg:h-56 ${category.imageBg ?? ""}`}>
                    <img
                      src={category.image}
                      alt=""
                      loading="lazy"
                      className={`w-full h-full object-cover ${category.wide ? "object-top" : "object-[70%_center]"} transition-transform duration-700 group-hover:scale-[1.02]`}
                    />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{category.product}</h3>
                <p className="text-sm text-slate-400 mt-1 mb-3">{t(category.titleKey)}</p>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {t(category.descKey)}
                </p>

                {/* Tech Stack */}
                <div className="pt-6 border-t border-white/5">
                  <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">{t("projects.technologies")}</div>
                  <div className="flex flex-wrap gap-3">
                    {category.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                        <tech.icon className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
