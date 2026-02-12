import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { ExternalLink, Home, Smartphone, Layers, Code, Database, Server, Wifi } from "lucide-react";
import apeironImage from "@/assets/images/smarthome/apeiron-main.jpg";
import wiseImage from "@/assets/images/smarthome/wise-home.jpg";

export default function ProjectSmartHome() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob-3"></div>
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
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5" /> Smart Home
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Smart Home <span className="text-cyan-400">Solutions</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                Developing intelligent ecosystems for modern living. A showcase of my work in the IoT and Smart Home sector, focusing on seamless integration and user-centric control.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              
              {/* ApeironSpace Project */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-950 z-10"></div>
                <div className="h-64 overflow-hidden">
                   <img src={apeironImage} alt="ApeironSpace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                <div className="relative z-20 p-8 mt-[-100px]">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Layers className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl font-bold text-white">ApeironSpace</h2>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    A comprehensive smart home ecosystem where I led the development of three major sub-projects, enhancing the resident experience through digital integration.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <p className="text-sm text-slate-400"><span className="text-slate-200 font-medium">Resident App:</span> Main mobile interface for controlling apartment systems.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <p className="text-sm text-slate-400"><span className="text-slate-200 font-medium">Concierge Tablet:</span> Administrative dashboard for building staff.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <p className="text-sm text-slate-400"><span className="text-slate-200 font-medium">Access Control:</span> Secure digital key system integration.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React Native", "IoT", "WebSocket", "Node.js"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Wise Home Project */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-950 z-10"></div>
                <div className="h-64 overflow-hidden">
                   <img src={wiseImage} alt="Wise Home" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                <div className="relative z-20 p-8 mt-[-100px]">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Smartphone className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl font-bold text-white">Wise Home</h2>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Developed a specialized "Add to App" module for the Wise Home ecosystem, streamlining the device onboarding process for users.
                  </p>

                  <div className="bg-slate-800/50 rounded-xl p-5 border border-white/5 mb-8">
                    <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-400" />
                      Add to App Module
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      This critical module simplified the complex process of connecting new IoT devices to the network. I implemented the entire flow, including device discovery, QR code scanning, and initial configuration handshake.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Swift", "Kotlin", "BLE", "mDNS"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Tech Stack Summary */}
            <div className="border-t border-white/5 pt-12">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-cyan-400" />
                Key Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Smartphone className="w-5 h-5" />, name: "Mobile Dev", desc: "React Native, Swift, Kotlin" },
                  { icon: <Server className="w-5 h-5" />, name: "Backend", desc: "Node.js, Python, MQTT" },
                  { icon: <Database className="w-5 h-5" />, name: "Data", desc: "Redis, PostgreSQL" },
                  { icon: <Wifi className="w-5 h-5" />, name: "Connectivity", desc: "BLE, WebSocket, Zigbee" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-3">
                    <div className="text-cyan-400 mt-1">{item.icon}</div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.name}</div>
                      <div className="text-slate-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
