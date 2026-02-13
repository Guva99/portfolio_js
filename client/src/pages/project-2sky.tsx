import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ExternalLink, Smartphone, Globe, Signal, Wifi, Server, Radio, FileText, Layout } from "lucide-react";
import project2Sky from "@assets/image_1770975442018.png";
import iconAppStore from "@assets/Page-1_1770916804079.png";
import iconGooglePlay from "@assets/Group_1770916804080.png";

import screen1 from "@assets/twosky6_1770975112969.webp";
import screen2 from "@assets/twosky7_1770975112969.webp";
import screen3 from "@assets/twosky5_1770975112970.webp";
import screen4 from "@assets/twosky3_1770975112971.webp";
import screen5 from "@assets/twosky10_1770975112971.webp";
import screen6 from "@assets/twosky4_1770975112972.webp";
import screen7 from "@assets/twosky2_1770975112972.webp";
import screen8 from "@assets/twosky9_1770975112973.webp";
import screen9 from "@assets/twosky11_1770975112973.webp";
import screen10 from "@assets/twosky8_1770975112973.webp";

// 2Sky Screenshots
const column1 = [screen1, screen2, screen3, screen4, screen1, screen2];
const column2 = [screen5, screen6, screen7, screen5, screen6, screen7];
const column3 = [screen8, screen9, screen10, screen8, screen9, screen10];

export default function Project2Sky() {
  return (
    <div className="min-h-[100dvh] bg-slate-950 text-white selection:bg-blue-600/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
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
                  <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-600/20 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" /> eSIM & Connectivity
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  2Sky Mobile <span className="text-blue-500">App</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="#" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
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
               <ImageWithShimmer 
                 src={project2Sky} 
                 alt="2Sky Mobile Application Interface" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 shimmerColor="bg-blue-600/20"
                 wrapperClassName="w-full h-full"
               />
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
                    eSIM Management <br />
                    <span className="text-blue-500">Platform</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    2SkyMobile is a convenient and reliable solution for managing eSIMs. Users can choose tariffs, manage connections, and make payments directly within the app. The platform includes a mobile app, a tablet version, and a responsive website built on Flutter Web.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">My Key Contributions (Lead Developer):</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong>Project Leadership:</strong> Built the project from scratch, creating a comprehensive roadmap and designing the entire architecture on a single code base.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong>Cross-Platform Development:</strong> Successfully implemented and supported mobile, tablet, and Flutter Web versions.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong>Team Collaboration:</strong> Maintained close interaction with clients and backend developers to ensure seamless integration and timely delivery.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong>Technical Execution:</strong> Integrated Stripe, implemented complex eSIM flows, and optimized performance across all platforms.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="#" 
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Download on the</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="#" 
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconGooglePlay} alt="Google Play" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Get it on</span>
                             <span className="text-sm font-bold text-white">Google Play</span>
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
                           <ImageWithShimmer 
                             key={i} 
                             src={img} 
                             alt={`App Screen ${i}`} 
                             className="w-full rounded-xl border border-white/10"
                             shimmerColor="bg-blue-600/20"
                             wrapperClassName="w-full rounded-xl"
                           />
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
                           <ImageWithShimmer 
                             key={i} 
                             src={img} 
                             alt={`App Screen ${i}`} 
                             className="w-full rounded-xl border border-white/10"
                             shimmerColor="bg-blue-600/20"
                             wrapperClassName="w-full rounded-xl"
                           />
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
                           <ImageWithShimmer 
                             key={i} 
                             src={img} 
                             alt={`App Screen ${i}`} 
                             className="w-full rounded-xl border border-white/10"
                             shimmerColor="bg-blue-600/20"
                             wrapperClassName="w-full rounded-xl"
                           />
                         ))}
                       </motion.div>
                    </div>
                 </div>
              </div>
              
            </div>

            {/* Tech Stack & Details */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                   Technical Highlights
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-blue-600/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                          <Layout className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Unified Codebase</h4>
                          <p className="text-slate-400">Designed a single codebase architecture supporting Mobile (iOS/Android), Tablet, and Web (Flutter Web) platforms.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-blue-600/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Client Recommendation</h4>
                          <p className="text-slate-400">Received a recommendation letter highlighting successful project delivery, architectural expertise, and effective team leadership.</p>
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
                      {["Flutter", "Flutter Web", "Dart", "BLoC", "Provider", "Firebase Auth", "Stripe API", "REST API", "GraphQL"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
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
