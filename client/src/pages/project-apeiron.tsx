import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ExternalLink, Smartphone, Server, Database, Wifi, Lock, Zap, Layers, Code, CheckCircle2 } from "lucide-react";
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

// SpaceKeeper Images
import skScreen1 from "@assets/помещение_задача_назначена_1770929185015.png";
import skScreen2 from "@assets/2026-02-12_23.45.03_1770929185019.jpg";
import skScreen3 from "@assets/Задачи1_1770929185020.png";
import skScreen4 from "@assets/Задачи_—_копия_1770929185022.png";
import skScreen5 from "@assets/заставка_1770929185022.png";
import skScreen6 from "@assets/Задачи_1770929185022.png";
import skScreen7 from "@assets/задача_1770929185022.png";

// App Screenshots - grouped for columns
const column1 = [screen1, screen2, screen4, screen1, screen2, screen4];
const column2 = [screen5, screen6, screen5, screen6, screen5, screen6];
const column3 = [screen7, screen8, screen9, screen7, screen8, screen9];

// SpaceKeeper Screenshots
const skColumn1 = [skScreen1, skScreen3, skScreen7, skScreen1, skScreen3, skScreen7];
const skColumn2 = [skScreen2, skScreen5, skScreen2, skScreen5, skScreen2, skScreen5];
const skColumn3 = [skScreen6, skScreen4, skScreen6, skScreen4, skScreen6, skScreen4];

export default function ProjectApeiron() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#326159]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#326159] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1"></div>
          {/* Ball 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#4A857C] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-3"></div>
          {/* Ball 4 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#326159] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20 animate-blob-1 animation-delay-2000"></div>
          {/* Ball 5 (Center) */}
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
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#326159]/10 text-[#4A857C] text-sm font-medium border border-[#326159]/20 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Smart Hotel
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  ApeironSpace <span className="text-[#4A857C]">App</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="https://apeironspace.ru/en/main/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#326159] hover:bg-[#4A857C] text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#326159]/20"
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
               <img src={apeironHero} alt="ApeironSpace Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
               
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
                    Future of Hospitality <br />
                    <span className="text-[#4A857C]">In Your Pocket</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    The first smart hotel in Russia, fully controlled from your smartphone. ApeironSpace allows guests to manage their entire stay digitally - from booking and check-in to controlling room lighting, climate, and ordering room service.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">My Key Responsibilities:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Integrating payment systems for commercial services.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Refactoring code to enhance performance and maintainability.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Developing smart home functionality, including IoT device integration.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Creating internal tools for staff and kitchen personnel to automate processes.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="https://apps.apple.com/ru/app/apeironspace/id1572952915" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <img src={iconAppStore} alt="App Store" className="w-6 h-6 object-contain" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Download on the</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="https://play.google.com/store/apps/details?id=com.space.apeiron&hl=en_US" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#326159] via-[#4A857C] to-[#326159] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
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

            {/* SpaceKeeper Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
              
              {/* Left Column: Scrolling Screenshots (Swapped for variety) */}
              <div className="relative h-[600px] overflow-hidden rounded-2xl order-2 lg:order-1">
                 <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Column 1 - Scroll Down */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["-50%", "0%"] }}
                         transition={{ 
                           duration: 22, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {skColumn1.map((img, i) => (
                           <img key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>

                    {/* Column 2 - Scroll Up */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["0%", "-50%"] }}
                         transition={{ 
                           duration: 28, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {skColumn2.map((img, i) => (
                           <img key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>

                    {/* Column 3 - Scroll Down */}
                    <div className="relative overflow-hidden h-full">
                       <motion.div
                         animate={{ y: ["-50%", "0%"] }}
                         transition={{ 
                           duration: 24, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                         className="flex flex-col gap-4 w-full"
                       >
                         {skColumn3.map((img, i) => (
                           <img key={i} src={img} alt={`SpaceKeeper Screen ${i}`} className="w-full rounded-xl border border-white/10" />
                         ))}
                       </motion.div>
                    </div>
                 </div>
              </div>

              {/* Right Column: Text */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#326159]/10 text-[#4A857C] text-sm font-medium border border-[#326159]/20 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Staff App
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    SpaceKeeper <br />
                    <span className="text-[#4A857C]">Staff Management</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    An internal super-app for hotel personnel. SpaceKeeper digitizes all operational workflows - from housekeeping and maintenance tasks to room inspections and inventory management.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Real-time task assignment and tracking for housekeeping.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Room status monitoring and instant maintenance reporting.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Digital checklists for quality control and inspections.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326159] flex-shrink-0"></div>
                      <span className="leading-relaxed">Integrated inventory management for hotel supplies.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

            </div>

            {/* Content Grid (Remaining content) */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-16">
              
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#326159] rounded-full"></span>
                   Project Overview
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
                   ApeironSpace is an innovative company specializing in space technologies and hospitality. As a lead mobile developer, I worked on creating a seamless ecosystem that bridges the physical and digital worlds for hotel guests.
                 </p>
                 <p className="text-slate-400 leading-relaxed mb-8">
                   The application integrates complex systems including IoT control, secure payments, booking engines, and staff management tools into a single, user-friendly interface. My focus was on architectural stability, performance optimization, and implementing key features that define the smart hotel experience.
                 </p>

                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#326159] rounded-full"></span>
                   Achievements & Results
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#326159]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#326159]/10 text-[#4A857C] shrink-0">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Performance Optimization</h4>
                          <p className="text-slate-400">Increased application performance and simplified maintenance via extensive code refactoring and implementing Clean Architecture principles.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#326159]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#326159]/10 text-[#4A857C] shrink-0">
                          <Wifi className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">IoT Integration</h4>
                          <p className="text-slate-400">Provided seamless IoT device management, allowing guests to control lights, curtains, TV, and climate directly from their phone with low latency.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#326159]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#326159]/10 text-[#4A857C] shrink-0">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Process Optimization</h4>
                          <p className="text-slate-400">Optimized internal processes improving team efficiency and established a structured project framework that enhanced collaboration.</p>
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
                      {["Flutter", "Clean Architecture", "Bloc/Cubit", "Firebase", "REST API", "Mockito", "CI/CD", "Git"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#326159]/20 to-slate-900/60 border border-[#326159]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">Impact</h4>
                    <p className="text-slate-400 text-sm mb-4">
                      Delivered a robust, high-performance application that powers the daily operations of a fully automated smart hotel, handling thousands of guest interactions securely and reliably.
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
