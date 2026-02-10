import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ArrowRight, CheckCircle, Code, Layers, Smartphone, Zap } from "lucide-react";

export default function Technologies() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 font-sans">
      <BackgroundElements />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-6"
          >
            <Smartphone className="w-12 h-12 text-cyan-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Mastering <span className="text-[#00d3f3] text-glow">Flutter</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
          </motion.p>
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
  );
}
