import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ExternalLink, Activity, Map, Pill, Smartphone, Globe, Plane, ZoomIn, Users } from "lucide-react";
import wowMainImage from "@/assets/images/wowtickets/main.png";
import screen1 from "@/assets/images/wowtickets/screen1.webp";
import screen2 from "@/assets/images/wowtickets/screen2.webp";
import screen3 from "@/assets/images/wowtickets/screen3.webp";
import screen4 from "@/assets/images/wowtickets/screen4.webp";
import screen5 from "@/assets/images/wowtickets/screen5.webp";
import screen6 from "@/assets/images/wowtickets/screen6.webp";
import screen7 from "@/assets/images/wowtickets/screen7.webp";
import screen8 from "@/assets/images/wowtickets/screen8.webp";
import screen9 from "@/assets/images/wowtickets/screen9.webp";
import screen10 from "@/assets/images/wowtickets/screen10.webp";
import letterWowTickets from "@/assets/images/letter-wowtickets.png";

// App Screenshots - grouped for columns
const column1 = [screen1, screen2, screen3, screen1, screen2, screen3];
const column2 = [screen4, screen5, screen6, screen4, screen5, screen6];
const column3 = [screen7, screen8, screen9, screen7, screen8, screen9];

export default function ProjectTravel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#B632DA]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#B632DA] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1"></div>
          {/* Ball 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-3"></div>
          {/* Ball 4 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#B632DA] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1 animation-delay-2000"></div>
          {/* Ball 5 (Center) */}
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
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#B632DA]/10 text-[#B632DA] text-sm font-medium border border-[#B632DA]/20 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5" /> Travel
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm font-medium border border-white/10">Full Stack</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  WowTickets <span className="text-[#B632DA]">App</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="https://wowtickets.com/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#B632DA] hover:bg-[#B632DA]/90 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#B632DA]/20"
                 >
                   Visit Website <ExternalLink className="w-4 h-4" />
                 </a>
              </div>
            </div>

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-10"></div>
               <img src={wowMainImage} alt="WowTickets Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
               
               <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                 <p className="text-[#B632DA] font-medium mb-1">Platform</p>
                 <div className="flex gap-4 text-white text-lg font-bold">
                   <span className="flex items-center gap-2"><Smartphone className="w-5 h-5" /> iOS & Android</span>
                   <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> Web</span>
                 </div>
               </div>
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
                    Book Cheap <br />
                    <span className="text-[#B632DA]">Airline Tickets</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    WowTickets is a comprehensive flight booking platform designed to help users find the best deals on airline tickets worldwide. It features a seamless booking experience across web and mobile platforms.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">As part of my work on this project, I was responsible for:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B632DA] flex-shrink-0"></div>
                      <span className="leading-relaxed">Developing the mobile application using Flutter for iOS and Android platforms.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B632DA] flex-shrink-0"></div>
                      <span className="leading-relaxed">Implementing complex search and filter algorithms for flight results.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B632DA] flex-shrink-0"></div>
                      <span className="leading-relaxed">Integrating payment gateways and secure booking flows.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B632DA] flex-shrink-0"></div>
                      <span className="leading-relaxed">Ensuring responsive design and smooth user experience across all devices.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="https://play.google.com/store/apps/details?id=com.wowtickets.app" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <div className="relative w-5 h-5">
                             {/* Simple Android Icon using generic shape/icon as lucide doesn't have brand icons */}
                             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                                <path d="M17.523 15.3414C17.523 16.7468 16.377 17.8928 14.9716 17.8928C13.5661 17.8928 12.4201 16.7468 12.4201 15.3414C12.4201 13.936 13.5661 12.79 14.9716 12.79C16.377 12.79 17.523 13.936 17.523 15.3414ZM7.92484 15.3414C7.92484 16.7468 6.77884 17.8928 5.37341 17.8928C3.96798 17.8928 2.82198 16.7468 2.82198 15.3414C2.82198 13.936 3.96798 12.79 5.37341 12.79C6.77884 12.79 7.92484 13.936 7.92484 15.3414ZM18.3375 6.35515L20.2796 2.99222C20.3756 2.82512 20.3182 2.61208 20.1511 2.51608C19.983 2.41908 19.771 2.47648 19.674 2.64461L17.7126 6.03964C16.0343 5.2753 14.156 4.8361 12.1645 4.8361C10.1601 4.8361 8.2709 5.28689 6.58667 6.06451L4.63622 2.64461C4.54023 2.47648 4.32719 2.42008 4.16009 2.51608C3.99299 2.61208 3.93559 2.82512 4.03159 2.99222L5.98565 6.3769C2.65158 8.19455 0.368164 11.6661 0.368164 15.6559C0.368164 15.7271 0.373905 15.7972 0.380614 15.8673H23.8617C23.8742 15.7915 23.8809 15.7149 23.8809 15.6377C23.8809 11.6249 21.6425 8.13809 18.3375 6.35515Z" />
                             </svg>
                          </div>
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Get it on</span>
                             <span className="text-sm font-bold text-white">Google Play</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="https://appgallery.huawei.com/app/C109490527" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#B632DA] via-purple-500 to-[#B632DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <div className="relative w-5 h-5">
                            {/* Huawei AppGallery Icon (Simple Briefcase style as placeholder or generic app store) */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                          </div>
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

            {/* Content Grid (Remaining content) */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#B632DA] rounded-full"></span>
                   Project Overview
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
                   I built the WowTickets mobile application from scratch, designing the entire architecture and successfully leading it to release. The project focused on simplifying the flight booking process while offering competitive prices and a user-friendly interface.
                 </p>
                 <p className="text-slate-400 leading-relaxed mb-8">
                   The platform connects to multiple global distribution systems (GDS) to aggregate flight data, requiring optimized backend performance and a responsive frontend to handle real-time updates and bookings.
                 </p>

                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#B632DA] rounded-full"></span>
                   Key Contributions
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#B632DA]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#B632DA]/10 text-[#B632DA] shrink-0">
                          <Plane className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Architecture & Development</h4>
                          <p className="text-slate-400">Designed and built the scalable Flutter architecture from the ground up, ensuring code maintainability and high performance across both iOS and Android platforms.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#B632DA]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#B632DA]/10 text-[#B632DA] shrink-0">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Team Leadership</h4>
                          <p className="text-slate-400">As a Senior Developer, I managed a team of two developers, performing code reviews, task decomposition, and overseeing the entire development lifecycle through to release.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#B632DA]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#B632DA]/10 text-[#B632DA] shrink-0">
                          <Activity className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Real-time Updates</h4>
                          <p className="text-slate-400">Implemented WebSocket connections to provide real-time updates on flight status, price changes, and booking confirmations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#B632DA]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#B632DA]/10 text-[#B632DA] shrink-0">
                          <Globe className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Global Localization</h4>
                          <p className="text-slate-400">Added support for multiple languages and currencies to cater to a global audience, ensuring a localized experience for every user.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Node.js", "MongoDB", "Redis", "AWS", "Stripe"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#B632DA]/20 to-slate-900/60 border border-[#B632DA]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">Result</h4>
                    <p className="text-slate-400 text-sm mb-4">
                      Successfully published the application on Google Play and Huawei AppGallery, achieving a 30% increase in booking conversions and expanding the user base to over 50 countries.
                    </p>
                  </div>

                  {/* Recommendation Letter */}
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Recommendation</h4>
                    <div 
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-700 aspect-[3/4]"
                      onClick={() => setSelectedImage(letterWowTickets)}
                    >
                      <img 
                        src={letterWowTickets} 
                        alt="WowTickets Recommendation Letter" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-violet-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                           <ZoomIn className="w-6 h-6 text-[#B632DA]" />
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Recommendation Letter Full" 
                className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}