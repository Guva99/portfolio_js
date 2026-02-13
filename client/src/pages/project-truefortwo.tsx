import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ExternalLink, Users, Code, Smartphone, Zap, MessageSquare } from "lucide-react";
import projectTrueForTwo from "@assets/Group_1_1770974052433.png";
import iconAppStore from "@assets/Page-1_1770916804079.png";
import iconGooglePlay from "@assets/Group_1770916804080.png";

import screen1 from "@assets/IMG_5481_1_1770974122382.png";
import screen2 from "@assets/IMG_5477_1_1770974122383.png";
import screen3 from "@assets/IMG_5470_1_1770974122383.png";
import screen4 from "@assets/IMG_5469_1_1770974122383.png";
import screen5 from "@assets/IMG_5468_1_1770974122383.png";
import screen6 from "@assets/IMG_5467_1_1770974122384.png";
import screen7 from "@assets/IMG_FF3D6A972248-1_1_1770974122384.png";
import screen8 from "@assets/2.1.1_Name_1770974126856.png";
import screen9 from "@assets/professional_life_1770974126858.png";
import screen10 from "@assets/waiting_list_1770974126858.png";

// TrueForTwo Screenshots
const column1 = [screen1, screen2, screen3, screen4, screen1, screen2];
const column2 = [screen5, screen6, screen7, screen5, screen6, screen7];
const column3 = [screen8, screen9, screen10, screen8, screen9, screen10];

export default function ProjectTrueForTwo() {
  return (
    <div className="min-h-[100dvh] bg-slate-950 text-white selection:bg-[#8389F9]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8389F9] via-purple-500 to-[#8389F9] z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#8389F9] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#8389F9] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
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
                  <span className="px-3 py-1 rounded-full bg-[#8389F9]/10 text-[#8389F9] text-sm font-medium border border-[#8389F9]/20 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Social & Dating
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  True for Two <span className="text-[#8389F9]">App</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="#" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#8389F9] hover:bg-[#8389F9]/80 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#8389F9]/20"
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
                 src={projectTrueForTwo} 
                 alt="True for Two Application Interface" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 shimmerColor="bg-[#8389F9]/20"
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
                    Connect & Meet <br />
                    <span className="text-[#8389F9]">Real People</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    True for Two is a modern dating application designed to foster genuine connections. It features real-time matching, secure messaging, and a user-friendly interface that prioritizes safety and authentic interactions.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features & Contributions:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8389F9] flex-shrink-0"></div>
                      <span className="leading-relaxed"><strong className="text-slate-200">Lead Developer:</strong> Led the development team, ensuring successful deadline compliance and high-quality delivery.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8389F9] flex-shrink-0"></div>
                      <span className="leading-relaxed">Implemented complex <strong>WebSocket chat</strong> with integrated moderation flows.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8389F9] flex-shrink-0"></div>
                      <span className="leading-relaxed">Integrated <strong>native gallery</strong> features for seamless media selection and handling.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8389F9] flex-shrink-0"></div>
                      <span className="leading-relaxed">Developed <strong>custom libraries</strong> to optimize performance across different devices.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="#" 
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#8389F9] via-purple-500 to-[#8389F9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
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
                       <div className="absolute inset-0 bg-gradient-to-r from-[#8389F9] via-purple-500 to-[#8389F9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
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
                             shimmerColor="bg-[#8389F9]/20"
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
                             shimmerColor="bg-[#8389F9]/20"
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
                             shimmerColor="bg-[#8389F9]/20"
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
                   <span className="w-8 h-1 bg-[#8389F9] rounded-full"></span>
                   Technical Highlights
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#8389F9]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#8389F9]/10 text-[#8389F9] shrink-0">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Real-time Messaging</h4>
                          <p className="text-slate-400">Built a robust WebSocket chat system with instant delivery and integrated moderation flows for user safety.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#8389F9]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#8389F9]/10 text-[#8389F9] shrink-0">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Optimization & Custom Libs</h4>
                          <p className="text-slate-400">Wrote custom libraries to ensure smooth performance and layout optimization across all device types.</p>
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
                      {["Flutter", "Dart", "Firebase", "WebSockets", "Riverpod", "Cloud Functions"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#8389F9]/20 to-slate-900/60 border border-[#8389F9]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">Result</h4>
                    <p className="text-slate-400 text-sm mb-4">
                      Successfully published on the App Store and Google Play, delivering a seamless user flow with polished animations. The user experience was optimized through rigorous A/B testing, resulting in a rapidly growing active user base.
                    </p>
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
