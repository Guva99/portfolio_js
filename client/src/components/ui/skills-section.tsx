import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import bentoLaptop from "@/assets/images/bento-laptop.webp";
import bentoMap from "@/assets/images/bento-map.webp";
import bentoCode from "@/assets/images/bento-code.webp";

export function SkillsSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Top Row: Laptop (Left) & Right Column (Map + Tech Stack) */}
          
          {/* Laptop Card - Spans 7 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-[2rem] overflow-hidden relative group h-[300px] md:h-auto min-h-[300px]"
          >
            <div className="absolute inset-0 bg-[#0F111A]"></div>
            <img 
              src={bentoLaptop} 
              alt="Laptop displaying project" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-white max-w-md leading-tight">
                I prioritize client collaboration, fostering open communication
              </h3>
            </div>
            {/* Arrow decoration */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 hidden md:block">
               {/* This would be the purple arrow/pill graphic overlay if needed, using CSS or SVG */}
            </div>
          </motion.div>

          {/* Right Column Container - Spans 5 cols */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Map Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] overflow-hidden relative bg-[#0a0a0a]/50 backdrop-blur-md h-[240px] border border-white/5"
            >
              <img 
                src={bentoMap} 
                alt="World Map Timezones" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute top-6 left-6 max-w-[200px]">
                <h3 className="text-xl font-bold text-white leading-tight">
                  I'm very flexible with time zone communications
                </h3>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2rem] bg-[#111]/50 backdrop-blur-md p-8 border border-white/5 flex flex-col justify-between flex-1 min-h-[240px] overflow-hidden"
            >
              <div className="mb-6 relative z-10">
                <p className="text-slate-400 text-sm mb-1">I constantly try to improve</p>
                <h3 className="text-2xl font-bold text-white">My tech stack</h3>
              </div>
              
              <div className="relative w-full overflow-hidden mask-linear-gradient">
                {/* Row 1 - Left Scroll (Flutter Ecosystem) */}
                <div className="flex gap-2 mb-3 animate-scroll-left w-max">
                   {[
                    "Flutter", "Dart", "Riverpod", "Bloc", "Clean Architecture", 
                    "Animations", "Material 3", "Cupertino", "Widget Testing", 
                    "Flutter Web", "Performance", "State Management",
                    "Flutter", "Dart", "Riverpod", "Bloc", "Clean Architecture", 
                    "Animations", "Material 3", "Cupertino", "Widget Testing", 
                    "Flutter Web", "Performance", "State Management"
                   ].map((tech, i) => (
                    <span 
                      key={`row1-${i}`} 
                      className="px-4 py-2 rounded-full bg-[#1A1A2E] text-slate-300 text-xs font-medium border border-white/5 hover:border-violet-500/50 hover:text-violet-300 transition-colors cursor-default whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Row 2 - Right Scroll (General/Backend/Process) */}
                <div className="flex gap-2 animate-scroll-right w-max">
                  {[
                    "Firebase", "Startup MVP", "CI/CD", "App Store Deploy", 
                    "Roadmap Strategy", "Projects from Scratch", "REST API", "GraphQL",
                    "Push Notifications", "Analytics", "Agile", "UI/UX",
                    "Firebase", "Startup MVP", "CI/CD", "App Store Deploy", 
                    "Roadmap Strategy", "Projects from Scratch", "REST API", "GraphQL",
                    "Push Notifications", "Analytics", "Agile", "UI/UX"
                  ].map((tech, i) => (
                    <span 
                      key={`row2-${i}`} 
                      className="px-4 py-2 rounded-full bg-[#1A1A2E] text-slate-300 text-xs font-medium border border-white/5 hover:border-violet-500/50 hover:text-violet-300 transition-colors cursor-default whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Row */}

          {/* Left Column Container - Spans 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tech Enthusiast Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-[2rem] bg-[#1a1a1a]/50 backdrop-blur-md p-8 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-white relative z-10 leading-snug">
                Tech enthusiast with a passion for development.
              </h3>
              <div className="mt-4 w-12 h-1 rounded-full bg-slate-700/50 relative z-10 overflow-hidden">
                <div className="h-full bg-violet-500 w-2/3"></div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[2rem] bg-gradient-to-br from-[#1a1a1a]/50 to-[#0f0f0f]/50 backdrop-blur-md p-8 border border-white/5 flex flex-col justify-center items-start"
            >
              <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                Do you want to start a project together?
              </h3>
              <button 
                onClick={copyEmail}
                className="bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium backdrop-blur-sm border border-white/10 w-full justify-center"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Email Copied!" : "Copy Email Address"}
              </button>
            </motion.div>

          </div>

          {/* Code Snippet Card - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-8 rounded-[2rem] overflow-hidden relative bg-[#0e0e12]/50 backdrop-blur-md min-h-[300px] group border border-white/5"
          >
            <img 
              src={bentoCode} 
              alt="Code snippet" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
            
            <div className="flex h-full flex-col md:flex-row items-center relative z-20">
              <div className="p-8 md:p-12 md:w-3/4">
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider">Exploring New Horizons</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Mobile, Web, TV finding unconventional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Flutter solutions</span>
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
