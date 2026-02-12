import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ExternalLink, Smartphone, Server, Database, Wifi, Play, Tv, Radio, Search, Cast, Globe, Download, ChevronLeft, ChevronRight, Monitor, Keyboard } from "lucide-react";
import tavriaHero from "@assets/tavria_1770932142157.webp";
import iconAppStore from "@assets/Page-1_1770916804079.png";
import iconAppGallery from "@assets/icon-appgallery.png";
import appTv1 from "@assets/apptv_1_1770932465780.webp";
import appTv2 from "@assets/apptv-2_1770932465781.webp";
import appTv3 from "@assets/apptv-3_1770932465781.webp";
import appTv4 from "@assets/apptv-4_1770932465781.webp";

// Tavria Screenshots
import screen1 from "@assets/tavria1_1770931443694.webp"; // Radio
import screen2 from "@assets/tavria3_1770931443693.webp"; // Splash
import screen3 from "@assets/tavria4_1770931443694.webp"; // Video Player
import screen4 from "@assets/tavria5_1770931443692.webp"; // News List
import screen5 from "@assets/tavria6_1770931443694.webp"; // Search
import screen6 from "@assets/tavria7_1770931443692.webp"; // News Feed
import screen7 from "@assets/tavria8_1770931443692.webp"; // Search Results
import screen8 from "@assets/tavria9_1770931443693.webp"; // Video List

// Group screenshots for columns
const column1 = [screen2, screen4, screen6, screen2, screen4, screen6];
const column2 = [screen3, screen8, screen1, screen3, screen8, screen1];
const column3 = [screen5, screen7, screen6, screen5, screen7, screen6];

const tvScreens = [appTv1, appTv2, appTv3, appTv4];

export default function ProjectMedia() {
  const [currentTvSlide, setCurrentTvSlide] = useState(0);

  const nextTvSlide = () => {
    setCurrentTvSlide((prev) => (prev + 1) % tvScreens.length);
  };

  const prevTvSlide = () => {
    setCurrentTvSlide((prev) => (prev - 1 + tvScreens.length) % tvScreens.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#FECB0E]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FECB0E] via-yellow-400 to-[#FECB0E] z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FECB0E] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          {/* Ball 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-yellow-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          {/* Ball 4 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FECB0E] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
          {/* Ball 5 (Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#FECB0E] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-10 animate-blob-2 animation-delay-4000"></div>
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
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#FECB0E]/10 text-[#FECB0E] text-sm font-medium border border-[#FECB0E]/20 flex items-center gap-1.5">
                    <Tv className="w-3.5 h-3.5" /> Media & Streaming
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Tavria.<span className="text-[#FECB0E]">TV</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="https://tavria.tv" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#FECB0E] hover:bg-yellow-500 text-slate-900 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-[#FECB0E]/20"
                 >
                   Visit Website <ExternalLink className="w-4 h-4" />
                 </a>
              </div>
            </div>

            {/* Main Hero Image - Album Variant */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 relative group aspect-video md:aspect-[21/9]"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10"></div>
               <img src={tavriaHero} alt="Tavria.TV Platform Interface" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Mobile App Showcase Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              
              {/* Left Column: Text & Buttons */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    A Seamless <br />
                    <span className="text-[#FECB0E]">Streaming Experience</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    The Tavria.TV app combines stability, a user-friendly interface, and high-quality streaming, making it easy to enjoy your favorite content anytime, anywhere, on any device.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FECB0E] flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong className="text-white">Live Streaming:</strong> Watch broadcasts in real-time with low latency.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FECB0E] flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong className="text-white">Custom Video Player:</strong> Optimized playback, smooth scrubbing, and video quality control using FFmpeg & HLS.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FECB0E] flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong className="text-white">Smart TV Support:</strong> Remote-friendly navigation with an interface adapted for large screens.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FECB0E] flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong className="text-white">On-Demand Archives:</strong> Access past broadcasts and exclusive content anytime.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="https://apps.apple.com/ru/app/tavria/id6738651601" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#FECB0E] via-yellow-400 to-[#FECB0E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Download on the</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="https://www.rustore.ru/catalog/app/com.tavria.mobile" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#FECB0E] via-yellow-400 to-[#FECB0E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <Download className="w-6 h-6 text-[#FECB0E]" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Get it on</span>
                             <span className="text-sm font-bold text-white">RuStore</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="https://appgallery.huawei.com/app/C115156751" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#FECB0E] via-yellow-400 to-[#FECB0E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppGallery} alt="AppGallery" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Explore it on</span>
                             <span className="text-sm font-bold text-white">AppGallery</span>
                          </div>
                       </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Scrolling Screenshots */}
              <div className="relative h-[600px] overflow-hidden rounded-2xl">
                 <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Column 1 - Scroll Up */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["0%", "-50%"] }}
                         transition={{ 
                           duration: 20, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {column1.map((img, i) => (
                           <img key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>

                    {/* Column 2 - Scroll Down */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["-50%", "0%"] }}
                         transition={{ 
                           duration: 25, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {column2.map((img, i) => (
                           <img key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>

                    {/* Column 3 - Scroll Up */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["0%", "-50%"] }}
                         transition={{ 
                           duration: 22, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {column3.map((img, i) => (
                           <img key={i} src={img} alt={`App Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>
                 </div>
              </div>
              
            </div>

            {/* TV Application Showcase */}
            <div className="mb-24">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center mb-12"
               >
                 <span className="px-3 py-1 rounded-full bg-[#FECB0E]/10 text-[#FECB0E] text-sm font-medium border border-[#FECB0E]/20 inline-flex items-center gap-1.5 mb-4">
                    <Monitor className="w-3.5 h-3.5" /> Smart TV Experience
                 </span>
                 <h2 className="text-3xl md:text-5xl font-bold mb-4">
                   Big Screen <span className="text-[#FECB0E]">Innovation</span>
                 </h2>
                 <p className="text-slate-400 max-w-2xl mx-auto">
                   Fully optimized application for Android TV and Apple tvOS, featuring a custom-built keyboard for seamless navigation on remote-controlled devices.
                 </p>
               </motion.div>

               <div className="relative max-w-5xl mx-auto">
                 {/* TV Frame */}
                 <div className="relative bg-slate-900 rounded-t-3xl rounded-b-lg p-2 md:p-4 shadow-2xl border-4 border-slate-800">
                    <div className="relative aspect-video bg-black overflow-hidden rounded-lg">
                       {/* Slides */}
                       <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTvSlide * 100}%)` }}>
                         {tvScreens.map((screen, index) => (
                           <div key={index} className="min-w-full h-full relative">
                             <img src={screen} alt={`TV Screen ${index + 1}`} className="w-full h-full object-cover" />
                           </div>
                         ))}
                       </div>
                       
                       {/* Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                       {/* Navigation Controls */}
                       <button 
                         onClick={prevTvSlide}
                         className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#FECB0E] hover:text-slate-900 backdrop-blur-md flex items-center justify-center transition-all group z-20"
                       >
                         <ChevronLeft className="w-6 h-6 text-white group-hover:text-slate-900" />
                       </button>

                       <button 
                         onClick={nextTvSlide}
                         className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#FECB0E] hover:text-slate-900 backdrop-blur-md flex items-center justify-center transition-all group z-20"
                       >
                         <ChevronRight className="w-6 h-6 text-white group-hover:text-slate-900" />
                       </button>

                       {/* Dots Indicator */}
                       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                         {tvScreens.map((_, index) => (
                           <button
                             key={index}
                             onClick={() => setCurrentTvSlide(index)}
                             className={`w-2 h-2 rounded-full transition-all duration-300 ${
                               currentTvSlide === index ? "w-6 bg-[#FECB0E]" : "bg-white/30 hover:bg-white/60"
                             }`}
                           />
                         ))}
                       </div>
                    </div>
                    
                    {/* TV Stand / Logo Area */}
                    <div className="h-8 md:h-12 bg-slate-800 flex items-center justify-center mt-[-1px] rounded-b-md relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
                       <div className="relative flex items-center gap-1.5 opacity-50">
                         <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></div>
                         <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Smart TV</span>
                       </div>
                    </div>
                 </div>

                 {/* Feature Highlights Below TV */}
                 <div className="grid md:grid-cols-3 gap-6 mt-12">
                   <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-[#FECB0E]/30 transition-colors">
                     <Keyboard className="w-8 h-8 text-[#FECB0E] mb-4" />
                     <h4 className="text-lg font-bold text-white mb-2">Custom Keyboard</h4>
                     <p className="text-slate-400 text-sm">Developed a custom on-screen keyboard in Flutter specifically optimized for D-pad navigation.</p>
                   </div>
                   <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-[#FECB0E]/30 transition-colors">
                     <div className="w-8 h-8 flex items-center justify-center bg-[#FECB0E]/10 rounded-lg text-[#FECB0E] mb-4 font-bold">TV</div>
                     <h4 className="text-lg font-bold text-white mb-2">Android TV</h4>
                     <p className="text-slate-400 text-sm">Full compatibility with Android TV ecosystem, supporting voice search and recommendations.</p>
                   </div>
                   <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-[#FECB0E]/30 transition-colors">
                     <div className="w-8 h-8 flex items-center justify-center bg-[#FECB0E]/10 rounded-lg text-[#FECB0E] mb-4 font-bold"></div>
                     <h4 className="text-lg font-bold text-white mb-2">Apple tvOS</h4>
                     <p className="text-slate-400 text-sm">Native-like experience on Apple TV with smooth animations and focus engine integration.</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Achievements & Tech Stack */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#FECB0E] rounded-full"></span>
                   My Contribution
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#FECB0E]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#FECB0E]/10 text-[#FECB0E] shrink-0">
                          <Tv className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Cross-Platform Development</h4>
                          <p className="text-slate-400">Built a powerful multimedia platform from the ground up for Android, iOS, and various TV platforms using Flutter & Dart.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#FECB0E]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#FECB0E]/10 text-[#FECB0E] shrink-0">
                          <Play className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Video Engineering</h4>
                          <p className="text-slate-400">Optimized user experience for Smart TV, ensuring seamless interaction. Implemented FFmpeg & HLS Streaming for robust video processing and broadcasting.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#FECB0E]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#FECB0E]/10 text-[#FECB0E] shrink-0">
                          <Server className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">System Stability</h4>
                          <p className="text-slate-400">Achieved high system performance and stability. Successfully published the platform on App Store, Google Play, and other markets with automated CI/CD pipelines.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="md:col-span-1 mt-14">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Firebase", "REST API", "GraphQL", "FFmpeg", "HLS", "Provider", "Bloc", "Fastlane", "Codemagic"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5 hover:border-[#FECB0E]/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FECB0E]/20 to-slate-900/60 border border-[#FECB0E]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">Project Role</h4>
                    <div className="space-y-3 text-slate-400 text-sm">
                      <p>
                        Lead specialist managing the entire development lifecycle - from workflow organization to the successful app launch on multiple platforms.
                      </p>
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