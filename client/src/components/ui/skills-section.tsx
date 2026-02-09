import { motion } from "framer-motion";
import { Code2, Globe, Tv, Layers, Users, Clock, Zap, Coffee } from "lucide-react";

const stack = [
  { name: "Flutter", icon: Code2, color: "text-cyan-400" },
  { name: "Dart", icon: Code2, color: "text-blue-400" },
  { name: "Firebase", icon: Zap, color: "text-yellow-400" },
  { name: "Riverpod", icon: Layers, color: "text-violet-400" },
];

export function SkillsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & <span className="text-violet-500">Stack</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg">My toolkit for building world-class applications across all screens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Main Tech Stack - Large Block */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
                <Code2 className="text-violet-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Core Tech Stack</h3>
              <p className="text-slate-400">Specialized in the Flutter ecosystem for cross-platform excellence.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stack.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client Work */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 to-violet-950/30"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 neon-border">
              <Users className="text-cyan-400 w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-white">40+</h3>
            <p className="text-slate-400 font-medium">Happy Clients</p>
            <p className="text-slate-500 text-sm mt-4">From startups to enterprise</p>
          </motion.div>

          {/* Platforms */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-center"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg">Multi-Platform</h3>
              <Layers className="text-violet-400 w-5 h-5" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="px-3 py-1 rounded-full bg-white/10 text-xs">iOS</div>
              <div className="px-3 py-1 rounded-full bg-white/10 text-xs">Android</div>
              <div className="px-3 py-1 rounded-full bg-white/10 text-xs">Web</div>
            </div>
          </motion.div>

           {/* Passion */}
           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-center bg-violet-600 text-white border-none"
          >
            <Coffee className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="font-bold text-xl">Fueled by Coffee & Code</h3>
          </motion.div>

          {/* Flexibility */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Time Flexibility</h3>
              <p className="text-slate-400">Available for US & EU timezones</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <Clock className="text-cyan-400 w-8 h-8" />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 flex items-center justify-between group cursor-pointer border-violet-500/30 hover:bg-violet-900/10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">Start a Project</h3>
              <p className="text-slate-400">Let's build something amazing together</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:scale-110 transition-transform">
              <Zap className="text-white w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
