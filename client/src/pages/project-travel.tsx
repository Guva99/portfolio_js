import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ExternalLink, Globe, Plane, ZoomIn, Users } from "lucide-react";
import wowMainImage from "@/assets/images/wowtickets/main.png";
import iconGooglePlay from "@assets/Group_1770916804080.png";
import iconAppStore from "@assets/Page-1_1770916804079.png";
import iconHuawei from "@assets/Vector_1770916804080.png";
import screen1 from "@/assets/images/wowtickets/screen1.webp";
import screen2 from "@/assets/images/wowtickets/screen2.webp";
import screen3 from "@/assets/images/wowtickets/screen3.webp";
import screen4 from "@/assets/images/wowtickets/screen4.webp";
import screen5 from "@/assets/images/wowtickets/screen5.webp";
import screen6 from "@/assets/images/wowtickets/screen6.webp";
import screen7 from "@/assets/images/wowtickets/screen7.webp";
import screen8 from "@/assets/images/wowtickets/screen8.webp";
import screen9 from "@/assets/images/wowtickets/screen9.webp";
import letterWowTickets from "@/assets/images/letter-wowtickets.png";
import { useTranslation } from "react-i18next";

const column1 = [screen1, screen2, screen3, screen1, screen2, screen3];
const column2 = [screen4, screen5, screen6, screen4, screen5, screen6];
const column3 = [screen7, screen8, screen9, screen7, screen8, screen9];

export default function ProjectTravel() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#B632DA]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] z-50"></div>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#B632DA] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#B632DA] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1 animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#B632DA] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-30 animate-blob-2 animation-delay-4000"></div>
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
                  <span className="px-3 py-1 rounded-full bg-[#B632DA]/10 text-[#B632DA] text-sm font-medium border border-[#B632DA]/20 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5" /> {t("projectPage.travel.badge")}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {t("projectPage.travel.title")} <span className="text-[#B632DA]">{t("projectPage.travel.titleHighlight")}</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a href="https://wowtickets.com/" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#B632DA] hover:bg-[#B632DA]/90 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#B632DA]/20">
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
               <ImageWithShimmer src={wowMainImage} alt="WowTickets Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" shimmerColor="bg-[#B632DA]/20" wrapperClassName="w-full h-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t("projectPage.travel.h2")} <br />
                    <span className="text-[#B632DA]">{t("projectPage.travel.h2Highlight")}</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.travel.description")}</p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{t("projectPage.responsibleFor")}</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    {(t("projectPage.travel.responsibilities", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B632DA] flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a href="http://apps.apple.com/us/app/wowtickets-book-cheap-flights/id6449739917" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.downloadOn")}</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.wowtickets.app" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconGooglePlay} alt="Google Play" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.getItOn")}</span>
                             <span className="text-sm font-bold text-white">Google Play</span>
                          </div>
                       </div>
                    </a>
                    <a href="https://appgallery.huawei.com/app/C109490527" target="_blank" rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconHuawei} alt="AppGallery" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">{t("projectPage.exploreItOn")}</span>
                             <span className="text-sm font-bold text-white">AppGallery</span>
                          </div>
                       </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                 <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="relative overflow-hidden h-full">
                       <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">
                         {column1.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#B632DA]/20" wrapperClassName="w-full rounded-xl" />))}
                       </motion.div>
                    </div>
                    <div className="relative overflow-hidden h-full">
                       <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">
                         {column2.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#B632DA]/20" wrapperClassName="w-full rounded-xl" />))}
                       </motion.div>
                    </div>
                    <div className="relative overflow-hidden h-full">
                       <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 w-full">
                         {column3.map((img, i) => (<ImageWithShimmer key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" shimmerColor="bg-[#B632DA]/20" wrapperClassName="w-full rounded-xl" />))}
                       </motion.div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#B632DA] rounded-full"></span>
                   {t("projectPage.projectOverview")}
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">{t("projectPage.travel.overview")}</p>
                 <p className="text-slate-400 leading-relaxed mb-8">{t("projectPage.travel.overview2")}</p>

                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#B632DA] rounded-full"></span>
                   {t("projectPage.keyContributions")}
                 </h3>
                 <div className="space-y-6">
                    {[
                      { key: "architecture", icon: Plane },
                      { key: "teamLeadership", icon: Users },
                      { key: "localization", icon: Globe }
                    ].map(({ key, icon: Icon }) => (
                      <div key={key} className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#B632DA]/30 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-[#B632DA]/10 text-[#B632DA] shrink-0"><Icon className="w-6 h-6" /></div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">{t(`projectPage.travel.contributions.${key}.title`)}</h4>
                            <p className="text-slate-400">{t(`projectPage.travel.contributions.${key}.desc`)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{t("projectPage.techStack")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Redis", "AWS", "Stripe", "ApplePay", "Google Pay", "Integration test"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#B632DA]/20 to-slate-900/60 border border-[#B632DA]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">{t("projectPage.result")}</h4>
                    <p className="text-slate-400 text-sm mb-4">{t("projectPage.travel.resultText")}</p>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">{t("projectPage.recommendation")}</h4>
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-700 aspect-[3/4]"
                      onClick={() => setSelectedImage(letterWowTickets)}
                    >
                      <img src={letterWowTickets} alt="WowTickets Recommendation Letter" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-violet-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                           <ZoomIn className="w-6 h-6 text-[#B632DA]" />
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Recommendation Letter Full" className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white" />
              <button className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors" onClick={() => setSelectedImage(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
