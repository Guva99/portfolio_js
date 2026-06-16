import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ExternalLink, Home, CheckCircle2, Zap, Shield } from "lucide-react";
import wiseHero from "@assets/image_1770930671719.png";
import iconGooglePlay from "@assets/Group_1770916804080.png";
import iconAppStore from "@assets/Page-1_1770916804079.png";

import screen1 from "@assets/wise1_1770930700725.webp";
import screen2 from "@assets/wise2_1770930700726.webp";
import screen3 from "@assets/wise3_1770930700725.webp";
import screen4 from "@assets/wise4_1770930700725.webp";
import screen5 from "@assets/wise5_1770930700723.webp";
import screen6 from "@assets/wise6_1770930700726.webp";
import screen7 from "@assets/wise7_1770930700724.webp";
import screen8 from "@assets/wise8_1770930700724.webp";
import screen9 from "@assets/wise9_1770930700725.webp";
import { useTranslation } from "react-i18next";

const column1 = [screen5, screen8, screen7, screen5, screen8, screen7];
const column2 = [screen3, screen4, screen1, screen3, screen4, screen1];
const column3 = [screen6, screen2, screen9, screen6, screen2, screen9];

export default function ProjectWise() {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const responsibilities = t("projectPage.wise.responsibilities", { returnObjects: true }) as string[];
  const contributions = t("projectPage.wise.contributions", { returnObjects: true }) as { title: string; desc: string }[];
  const contribIcons = [CheckCircle2, Zap, Shield];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#3776F0]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3776F0] via-blue-400 to-[#3776F0] z-50"></div>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#3776F0] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-cyan-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#3776F0] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#3776F0] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-10 animate-blob-2 animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <BackgroundElements />
        <Navbar />

        <div className="container mx-auto px-4 pt-32 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#3776F0]/10 text-[#3776F0] text-sm font-medium border border-[#3776F0]/20 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" /> {t("projectPage.wise.badge")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  WiseCity <span className="text-[#3776F0]">App</span>
                </h1>
              </div>
              <div className="flex gap-3">
                <a href="https://wisecity.ru" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#3776F0] hover:bg-blue-600 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#3776F0]/20">
                   {t("projectPage.visitWebsite")} <ExternalLink className="w-4 h-4" />
                 </a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10"></div>
               <ImageWithShimmer src={wiseHero} alt="WiseCity Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" shimmerColor="bg-[#3776F0]/20" wrapperClassName="w-full h-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t("projectPage.wise.h2")} <br />
                    <span className="text-[#3776F0]">{t("projectPage.wise.h2Highlight")}</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.wise.description")}</p>
                  <h3 className="text-xl font-semibold text-white mb-4">{t("projectPage.myKeyResponsibilities")}</h3>
                  <ul className="space-y-3 mb-10 text-slate-400">
                    {responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3776F0] flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/ru/app/wise-home/id1632879258" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#3776F0] via-blue-400 to-[#3776F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.downloadOn")}</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=systems.wisecity.app&utm_source=emea_Med" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#3776F0] via-blue-400 to-[#3776F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconGooglePlay} alt="Google Play" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.getItOn")}</span>
                             <span className="text-sm font-bold text-white">Google Play</span>
                          </div>
                       </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                 <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column1.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#3776F0]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column2.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#3776F0]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column3.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#3776F0]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#3776F0] rounded-full"></span>
                   {t("projectPage.achievementsResults")}
                 </h3>
                 <div className="space-y-6">
                    {contributions.map((c, i) => {
                      const Icon = contribIcons[i] || CheckCircle2;
                      return (
                        <div key={i} className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#3776F0]/30 transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#3776F0]/10 text-[#3776F0] shrink-0"><Icon className="w-6 h-6" /></div>
                            <div>
                              <h4 className="text-xl font-bold text-white mb-2">{c.title}</h4>
                              <p className="text-slate-400">{c.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                 </div>
              </div>

              <div className="md:col-span-1 mt-14">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{t("projectPage.techStack")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "MVVM/Bloc/Cubit", "REST API", "WebSocket", "WebRTC", "RTSP", "CI/CD", "Figma", "GitLab"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3776F0]/20 to-slate-900/60 border border-[#3776F0]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">{t("projectPage.wise.addToAppTitle")}</h4>
                    <div className="space-y-3 text-slate-400 text-sm">
                      <p>{t("projectPage.wise.addToAppDesc")}</p>
                      <div className="flex gap-2 mt-4">
                         <div className="px-2 py-1 bg-[#3776F0]/20 rounded text-[#3776F0] text-xs font-bold">Android</div>
                         <div className="px-2 py-1 bg-[#3776F0]/20 rounded text-[#3776F0] text-xs font-bold">iOS</div>
                         <div className="px-2 py-1 bg-[#3776F0]/20 rounded text-[#3776F0] text-xs font-bold">Web</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
