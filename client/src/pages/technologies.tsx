import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import Lottie from "lottie-react";
import mobileAnimation from "@/assets/animations/mobile-devices.json";

// Import logos (using lucide icons as placeholders for now, in a real app these would be SVGs)
import { Database, Cloud, BarChart, FileJson, ArrowRight, CheckCircle, Code, Layers, Smartphone, Zap, Rocket, MonitorSmartphone, Server, Briefcase, Globe, Monitor, Tv, Laptop } from "lucide-react";

// Mock data for tech stack
const techStack = [
  { name: "Flutter", icon: Smartphone, color: "text-cyan-400" },
  { name: "SQLite", icon: Database, color: "text-blue-400" },
  { name: "Firebase", icon: Zap, color: "text-yellow-400" },
  { name: "Rowy", icon: FileJson, color: "text-purple-400" }, // Placeholder
  { name: "Supabase", icon: Cloud, color: "text-emerald-400" },
  { name: "Google Analytics", icon: BarChart, color: "text-orange-400" }
];

const expertiseAreas = [
  {
    title: "Startup Ecosystems",
    description: "Helping founders navigate from zero to one. I build scalable architectures that allow rapid iteration and growth without technical debt.",
    icon: Rocket,
    color: "text-orange-500"
  },
  {
    title: "Cross-Platform Mastery",
    description: "Unified development for iOS, Android, and Web. Native performance with 40% less development time and consistent brand identity.",
    icon: MonitorSmartphone,
    color: "text-cyan-500"
  },
  {
    title: "Rapid MVP Delivery",
    description: "Speed to market matters. I prioritize core value propositions to validate business hypotheses with functional, polished prototypes.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Enterprise Scale",
    description: "Robust solutions for complex domains. Clean architecture, automated testing, and CI/CD pipelines for mission-critical applications.",
    icon: Server,
    color: "text-purple-500"
  },
  {
    title: "Business Automation",
    description: "Digitalizing workflows. Custom internal tools and dashboards that optimize operations and provide actionable data insights.",
    icon: Briefcase,
    color: "text-emerald-500"
  }
];

export default function Technologies() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>

      {/* Gradient Balls Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          {/* Ball 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1"></div>
          {/* Ball 3 */}
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-3"></div>
          {/* Ball 4 */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1 animation-delay-2000"></div>
          {/* Ball 5 (Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-emerald-500 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-30 animate-blob-2 animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <BackgroundElements />
        <Navbar />
      
        <div className="container mx-auto px-4 pt-32 pb-24">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto mb-24 relative">
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-900/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              {/* Text Content */}
              <div className="relative z-10 text-left max-w-2xl pr-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mb-6"
                >
                  <Code className="w-8 h-8 text-cyan-400" />
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Flutter Application <br />
                  <span className="text-[#00d3f3]">Development</span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
                </p>

                {/* Platform Icons */}
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                      <Smartphone className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium group-hover:text-cyan-400/80 transition-colors">Mobile</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                      <Globe className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium group-hover:text-cyan-400/80 transition-colors">Web</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                      <Monitor className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium group-hover:text-cyan-400/80 transition-colors">Desktop</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all">
                      <Tv className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium group-hover:text-cyan-400/80 transition-colors">TV</span>
                  </div>
                </div>
              </div>

              {/* Visual Section */}
              <div className="relative z-10 flex flex-col items-center justify-center min-w-[200px]">
                 <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full animate-pulse"></div>
                    <motion.div 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-full h-full"
                    >
                      <Lottie 
                        animationData={mobileAnimation} 
                        loop={true}
                        className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      />
                    </motion.div>
                 </div>
                 
                 {/* Decorative Circles */}
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20">
                    <div className="absolute right-0 bottom-0 w-16 h-16 rounded-full border border-slate-400"></div>
                    <div className="absolute right-8 bottom-4 w-12 h-12 rounded-full border border-slate-400"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Strip */}
          <div className="max-w-6xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-12">My Tech <span className="text-[#00d3f3]">Stack</span></h2>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl py-8 px-4 overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Areas of Expertise (New Section) */}
          <div className="max-w-6xl mx-auto mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Areas of <span className="text-[#00d3f3]">Expertise</span></h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              Delivering specialized development solutions tailored to diverse business needs and project scales.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col items-center text-center overflow-hidden"
                >
                  {/* Grid Pattern Background */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" 
                       style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-br-lg"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center h-full">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(0,211,243,0.2)]">
                      <area.icon className={`w-12 h-12 ${area.color}`} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors tracking-wide">{area.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-2 flex-grow">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What is Flutter Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-[100px] pointer-events-none"></div>
                
                <Code className="w-10 h-10 text-cyan-400 mb-6" />
                
                <h3 className="text-2xl font-bold text-white mb-4">Why Flutter?</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It allows developers to create high-performance apps with a smooth, native-like experience.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Single Codebase for iOS & Android",
                    "Hot Reload for Rapid Development",
                    "Native Performance",
                    "Expressive and Flexible UI"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Expressive <span className="text-[#00d3f3]">UI</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Flutter's layered architecture allows for full customization, resulting in incredibly fast rendering and expressive, flexible designs. The widget-based approach makes it easy to build complex UIs that look great on any screen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl hover:bg-slate-900/50 transition-colors">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">High Performance</h4>
                  <p className="text-slate-500 text-sm">Powered by Skia graphics engine for 60fps performance.</p>
                </div>
                <div className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl hover:bg-slate-900/50 transition-colors">
                  <Layers className="w-8 h-8 text-purple-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Layered Architecture</h4>
                  <p className="text-slate-500 text-sm">Full control over every pixel on the screen.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Stack Details */}
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Flutter <span className="text-[#00d3f3]">Toolkit</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "State Management", items: ["Bloc / Cubit", "Riverpod", "Provider", "GetX"] },
                { title: "Architecture", items: ["Clean Architecture", "MVVM", "SOLID Principles", "Modularization"] },
                { title: "Testing & CI/CD", items: ["Unit & Widget Tests", "Integration Tests", "GitHub Actions", "Codemagic"] }
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group"
                >
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">{category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-slate-400 font-medium">{item}</span>
                        <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-slate-400 mb-8">Looking for a Flutter expert for your next project?</p>
            <a 
              href="/#experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d3f3] text-black font-bold rounded-full hover:bg-[#00b8d4] transition-colors shadow-[0_0_20px_rgba(0,211,243,0.3)]"
            >
              <span>Let's Discuss</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
