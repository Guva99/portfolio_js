import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ExternalLink, Activity, Map, Pill, Smartphone, Globe } from "lucide-react";
import pulsarImage from "@/assets/images/pulsar-bonus.png";
import screen1 from "@/assets/images/pulsar/screen1.webp";
import screen2 from "@/assets/images/pulsar/screen2.webp";
import screen3 from "@/assets/images/pulsar/screen3.webp";
import screen4 from "@/assets/images/pulsar/screen4.webp";
import screen5 from "@/assets/images/pulsar/screen5.webp";
import screen6 from "@/assets/images/pulsar/screen6.webp";
import screen7 from "@/assets/images/pulsar/screen7.webp";
import screen8 from "@/assets/images/pulsar/screen8.webp";
import screen9 from "@/assets/images/pulsar/screen9.webp";

// App Screenshots - grouped for columns
const column1 = [screen1, screen2, screen3, screen1, screen2, screen3];
const column2 = [screen4, screen5, screen6, screen4, screen5, screen6];
const column3 = [screen7, screen8, screen9, screen7, screen8, screen9];

export default function ProjectHealthcare() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#06BA00]/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06BA00] via-green-500 to-[#06BA00] z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#06BA00] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1"></div>
          {/* Ball 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-green-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-3"></div>
          {/* Ball 4 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#06BA00] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1 animation-delay-2000"></div>
          {/* Ball 5 (Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-[#06BA00] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-30 animate-blob-2 animation-delay-4000"></div>
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
                  <span className="px-3 py-1 rounded-full bg-[#06BA00]/10 text-[#06BA00] text-sm font-medium border border-[#06BA00]/20 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Healthcare
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm font-medium border border-white/10">Lead Developer</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  PulSarBonus <span className="text-[#06BA00]">App</span>
                </h1>
              </div>
              
              <div className="flex gap-3">
                <a 
                   href="https://pulsarbonus.ru/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#06BA00] hover:bg-[#06BA00]/90 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#06BA00]/20"
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
               <img src={pulsarImage} alt="PulSarBonus Application Interface" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
               
               <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                 <p className="text-[#06BA00] font-medium mb-1">Platform</p>
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
                    Easy & Smart <br />
                    <span className="text-[#06BA00]">Health Management</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    PulSarBonus is more than just a loyalty program - it's a comprehensive digital health assistant. Users can manage their home medicine cabinet, track treatment courses, and quickly find medications at nearby pharmacies.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">As part of my work on this project, I was responsible for:</h3>
                  
                  <ul className="space-y-3 mb-10 text-slate-400">
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06BA00] flex-shrink-0"></div>
                      <span className="leading-relaxed">Designing and developing key features, including Home Medicine Cabinet, Course Treatment Tracker, and Pharmacy Map.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06BA00] flex-shrink-0"></div>
                      <span className="leading-relaxed">Ensuring cross-platform support (Web & Mobile) to provide a seamless experience for all users.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06BA00] flex-shrink-0"></div>
                      <span className="leading-relaxed">Optimizing the interface and user experience, making the service intuitive and easy to use.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06BA00] flex-shrink-0"></div>
                      <span className="leading-relaxed">Implementing geolocation and barcode scanning technologies to simplify app interactions.</span>
                    </li>
                  </ul>

                  {/* App Store Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                       href="https://apps.apple.com/app/id1630734569" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#06BA00] via-green-500 to-[#06BA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
                       <div className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-slate-900/90 transition-colors">
                          <Smartphone className="w-5 h-5 text-white" />
                          <div className="flex flex-col items-start leading-none">
                             <span className="text-[10px] text-slate-400 uppercase font-medium">Download on the</span>
                             <span className="text-sm font-bold text-white">App Store</span>
                          </div>
                       </div>
                    </a>

                    <a 
                       href="https://play.google.com/store/apps/details?id=ru.pulsarbonus" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group relative inline-flex items-center justify-center p-0.5 rounded-xl overflow-hidden transition-transform active:scale-95"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#06BA00] via-green-500 to-[#06BA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin"></div>
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
                   <span className="w-8 h-1 bg-[#06BA00] rounded-full"></span>
                   Project Overview
                 </h3>
                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
                   I participated in the development of both the mobile application and the responsive website for PulSarBonus, a comprehensive loyalty program for pharmacy chains. The platform creates a seamless ecosystem connecting customers with pharmacies.
                 </p>
                 <p className="text-slate-400 leading-relaxed mb-8">
                   The solution was built to handle complex user data while providing an intuitive interface for users of all ages. My role involved full-cycle development, from architecture design to frontend implementation and backend integration.
                 </p>

                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   <span className="w-8 h-1 bg-[#06BA00] rounded-full"></span>
                   Key Contributions
                 </h3>
                 <div className="space-y-6">
                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#06BA00]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#06BA00]/10 text-[#06BA00] shrink-0">
                          <Pill className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Home First Aid Kit</h4>
                          <p className="text-slate-400">Designed and implemented a feature allowing users to digitally track their medicine inventory, expiration dates, and get reminders for restocking.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#06BA00]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#06BA00]/10 text-[#06BA00] shrink-0">
                          <Activity className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Course Treatment</h4>
                          <p className="text-slate-400">Built a smart notification system for medication adherence, helping users track their treatment progress and stay compliant with doctor prescriptions.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:border-[#06BA00]/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#06BA00]/10 text-[#06BA00] shrink-0">
                          <Map className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Interactive Maps</h4>
                          <p className="text-slate-400">Integrated map services to help users locate nearby pharmacies, check stock availability in real-time, and get turn-by-turn directions.</p>
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
                      {["Flutter", "Flutter Web", "MobX", "Clean Architecture", "CI/CD", "Google Maps API", "Firebase"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#06BA00]/20 to-slate-900/60 border border-[#06BA00]/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">Result</h4>
                    <p className="text-slate-400 text-sm mb-4">
                      Successfully launched the platform with over 10k+ active users in the first month. improved user retention by 40% through the course treatment feature.
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