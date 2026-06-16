import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, HeartPulse, Plane, Home as HomeIcon, Tv, Users, Wifi, Code, Server, Globe, Smartphone, Zap } from "lucide-react";
import { SiFlutter, SiFirebase, SiGooglemaps, SiApple, SiAndroid } from "react-icons/si";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
  const { t } = useTranslation();

  const categories = [
    { 
      id: "healthcare", 
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
      link: "/projects/healthcare"
    },
    { 
      id: "travel", 
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
      link: "/projects/travel"
    },
    { 
      id: "smarthome", 
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
      link: "/projects/smarthome"
    },
    { 
      id: "media", 
      titleKey: "nav.media",
      icon: Tv, 
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      descKey: "projects.media.description",
      tech: [
        { name: "Mobile", icon: Smartphone },
        { name: "Web", icon: Globe },
        { name: "High Load", icon: Server }
      ],
      link: "/projects/media"
    },
    { 
      id: "social", 
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
      link: "/projects/truefortwo"
    },
    { 
      id: "connectivity", 
      titleKey: "nav.connectivity",
      icon: Wifi, 
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      descKey: "projects.connectivity.description",
      tech: [
        { name: "iOS", icon: SiApple },
        { name: "Android", icon: SiAndroid },
        { name: "API", icon: Server }
      ],
      link: "/projects/2sky"
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
            <Link href={category.link} key={category.id}>
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

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{t(category.titleKey)}</h3>
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
