import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ExternalLink, Server, Wifi, Zap, Layers, CheckCircle2, ZoomIn, X, Users } from "lucide-react";
import apeironHero from "@assets/image_1770928345854.png";
import iconGooglePlay from "@assets/Group_1770916804080.png";
import iconAppStore from "@assets/Page-1_1770916804079.png";
import screen1 from "@assets/apeiron1_1770928057161.webp";
import screen2 from "@assets/apeiron2_1770928057161.webp";
import screen4 from "@assets/apeiron4_1770928057162.webp";
import screen5 from "@assets/apeiron5_1770928057162.webp";
import screen6 from "@assets/apeiron6_1770928057163.webp";
import screen7 from "@assets/apeiron7_1770928057163.webp";
import screen8 from "@assets/apeiron8_1770928057163.webp";
import screen9 from "@assets/apeiron9_1770928057164.webp";
import skScreen1 from "@assets/помещение_задача_назначена_1770929185015.png";
import skScreen2 from "@assets/2026-02-12_23.45.03_1770929185019.jpg";
import skScreen3 from "@assets/Задачи1_1770929185020.png";
import skScreen4 from "@assets/Задачи_—_копия_1770929185022.png";
import skScreen5 from "@assets/заставка_1770929185022.png";
import skScreen6 from "@assets/Задачи_1770929185022.png";
import skScreen7 from "@assets/задача_1770929185022.png";
import odsSplash from "@assets/00_-_splash_1770929401621.png";
import odsLogin from "@assets/00_-_login_screen_1770929401621.png";
import odsOrders1 from "@assets/01_-_Экран_подачи_завтраков_(1)_1770929401622.png";
import odsOrders2 from "@assets/01_-_Экран_подачи_завтраков_1770929401622.png";
import letterApeiron from "@/assets/images/letter-apeiron.png";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from "react-i18next";

const column1 = [screen1, screen2, screen4, screen1, screen2, screen4];
const column2 = [screen5, screen6, screen5, screen6, screen5, screen6];
const column3 = [screen7, screen8, screen9, screen7, screen8, screen9];
const skColumn1 = [skScreen1, skScreen3, skScreen7, skScreen1, skScreen3, skScreen7];
const skColumn2 = [skScreen2, skScreen5, skScreen2, skScreen5, skScreen2, skScreen5];
const skColumn3 = [skScreen6, skScreen4, skScreen6, skScreen4, skScreen6, skScreen4];
const odsImages = [odsSplash, odsLogin, odsOrders1, odsOrders2];

export default function ProjectApeiron() {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const responsibilities = t("projectPage.apeiron.responsibilities", { returnObjects: true }) as string[];
  const spaceKeeperFeatures = t("projectPage.apeiron.spaceKeeperFeatures", { returnObjects: true }) as string[];
  const odsCapabilities = t("projectPage.apeiron.odsCapabilities", { returnObjects: true }) as string[];
  const contributions = t("projectPage.apeiron.contributions", { returnObjects: true }) as { title: string; desc: string }[];
  const resultItems = t("projectPage.apeiron.resultItems", { returnObjects: true }) as string[];
  const contribIcons = [Zap, Wifi, CheckCircle2, Users];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#326159]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] z-50"></div>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#326159] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#4A857C] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#326159] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#326159] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-10 animate-blob-2 animation-delay-4000"></div>
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
                  <span className="px-3 py-1 rounded-full bg-[#326159]/10 text-[#4A857C] text-sm font-medium border border-[#326159]/20 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> {t("projectPage.apeiron.badge")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  ApeironSpace <span className="text-[#4A857C]">App</span>
                </h1>
              </div>
              <div className="flex gap-3">
                <a href="https://apeironspace.ru/en/main/" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#326159] hover:bg-[#4A857C] text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#326159]/20">
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
               <ImageWithShimmer src={apeironHero} alt="ApeironSpace Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full h-full" />
            </motion.div>

            {/* Main App Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t("projectPage.apeiron.h2")} <br />
                    <span className="text-[#4A857C]">{t("projectPage.apeiron.h2Highlight")}</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.apeiron.description")}</p>
                  <h3 className="text-xl font-semibold text-white mb-4">{t("projectPage.myKeyResponsibilities")}</h3>
                  <ul className="space-y-3 mb-10 text-slate-400">
                    {responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/ru/app/apeironspace/id1572952915" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.downloadOn")}</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.space.apeiron&hl=en_US" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
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
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column1.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column2.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{column3.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                 </div>
              </div>
            </div>

            {/* SpaceKeeper Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              <div className="relative h-[600px] overflow-hidden rounded-2xl order-2 lg:order-1">
                 <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{skColumn1.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{skColumn2.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                    <div className="relative overflow-hidden h-full"><motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">{skColumn3.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full rounded-xl" />))}</motion.div></div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#326159]/10 text-[#4A857C] text-sm font-medium border border-[#326159]/20 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> {t("projectPage.apeiron.spaceKeeperBadge")}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t("projectPage.apeiron.spaceKeeperTitle")} <br />
                    <span className="text-[#4A857C]">{t("projectPage.apeiron.spaceKeeperHighlight")}</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.apeiron.spaceKeeperDesc")}</p>
                  <h3 className="text-xl font-semibold text-white mb-4">{t("projectPage.keyFeatures")}</h3>
                  <ul className="space-y-3 mb-10 text-slate-400">
                    {spaceKeeperFeatures.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* ODS Section */}
            <div className="mb-24">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="md:w-1/2">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#326159]/10 text-[#4A857C] text-sm font-medium border border-[#326159]/20 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5" /> {t("projectPage.apeiron.odsBadge")}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      {t("projectPage.apeiron.odsTitle")} <br />
                      <span className="text-[#4A857C]">{t("projectPage.apeiron.odsHighlight")}</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.apeiron.odsDesc")}</p>
                    <h3 className="text-xl font-semibold text-white mb-4">{t("projectPage.capabilities")}</h3>
                    <ul className="space-y-3 mb-10 text-slate-400">
                      {odsCapabilities.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[300px] md:h-[400px] w-full max-w-[600px] shadow-xl">
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden h-full w-full bg-slate-800 relative">
                      <div className="overflow-hidden h-full" ref={emblaRef}>
                        <div className="flex h-full">
                          {odsImages.map((src, index) => (
                            <div className="flex-[0_0_100%] min-w-0 h-full relative" key={index}>
                              <ImageWithShimmer src={src} alt={`ODS Screen ${index + 1}`} className="w-full h-full object-cover" shimmerColor="bg-[#326159]/20" wrapperClassName="w-full h-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview & Results */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#326159] rounded-full"></span>
                   {t("projectPage.projectOverview")}
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">{t("projectPage.apeiron.overview")}</p>
                 <p className="text-slate-400 leading-relaxed mb-8">{t("projectPage.apeiron.overview2")}</p>

                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#326159] rounded-full"></span>
                   {t("projectPage.achievementsResults")}
                 </h3>
                 <div className="space-y-6">
                    {contributions.map((c, i) => {
                      const Icon = contribIcons[i] || Zap;
                      return (
                        <div key={i} className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#326159]/30 transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-[#326159]/10 text-[#4A857C] shrink-0"><Icon className="w-6 h-6" /></div>
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

              <div className="md:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{t("projectPage.techStack")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Clean Architecture", "Bloc/Cubit", "Firebase", "REST API", "Mockito", "CI/CD", "Git"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#326159]/20 to-slate-900/60 border border-[#326159]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">{t("projectPage.result")}</h4>
                    <div className="space-y-3 text-slate-400 text-sm">
                      <p>{t("projectPage.apeiron.resultText")}</p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-400/90">
                        {resultItems.map((item, i) => (<li key={i}>{item}</li>))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 mt-6">
                    <h4 className="text-lg font-bold text-white mb-4">{t("projectPage.recommendation")}</h4>
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-700 aspect-[3/4]"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      <img src={letterApeiron} alt="ApeironSpace Recommendation Letter" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-[#326159]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                           <ZoomIn className="w-6 h-6 text-[#326159]" />
                         </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={() => setIsLightboxOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-3xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img src={letterApeiron} alt="Recommendation Letter Full" className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white" />
            <button className="absolute -top-12 right-0 md:top-4 md:right-4 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors" onClick={() => setIsLightboxOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
