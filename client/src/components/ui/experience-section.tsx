import { motion } from "framer-motion";
import { Briefcase, Layers, Rocket, Monitor, Smartphone, Cpu, CheckCircle } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: Rocket,
    text: "10+ applications released in App Store / Google Play",
    color: "text-rose-400",
    from: "from-rose-500/20",
    to: "to-orange-500/20",
    border: "group-hover:border-rose-500/50"
  },
  {
    icon: Layers,
    text: "Projects from scratch: architecture → release → support",
    color: "text-amber-400",
    from: "from-amber-500/20",
    to: "to-yellow-500/20",
    border: "group-hover:border-amber-500/50"
  },
  {
    icon: Briefcase,
    text: "Team Lead & architectural decision making",
    color: "text-emerald-400",
    from: "from-emerald-500/20",
    to: "to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: Monitor,
    text: "Mobile + Web + TV apps expertise",
    color: "text-blue-400",
    from: "from-blue-500/20",
    to: "to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: Cpu,
    text: "Clean Architecture & Scalable Solutions",
    color: "text-violet-400",
    from: "from-violet-500/20",
    to: "to-purple-500/20",
    border: "group-hover:border-violet-500/50"
  }
];

const experiences = [
  {
    role: "Lead Flutter Developer",
    company: "Apeiron Space",
    period: "Aug 2023 - Sep 2025",
    color: "bg-emerald-500",
    achievements: [
      "Architecture and development of key internal applications (ODS, SpaceKeeper)",
      "Development of the main ApeironSpace platform application",
      "Managed smart hotel features controlled via smartphone"
    ]
  },
  {
    role: "Team Lead Flutter",
    company: "2Sky Mobile",
    period: "Nov 2021 - Oct 2022",
    color: "bg-blue-600",
    achievements: [
      "Initiated and drove the project from scratch",
      "Designed architecture and defined the roadmap",
      "Provided full support for iOS, Android, and Web platforms"
    ]
  },
  {
    role: "Senior Flutter Developer",
    company: "Wowtickets.com",
    period: "Mar 2021 - Oct 2022",
    color: "bg-violet-600",
    achievements: [
      "Full technical ownership and independent development",
      "Released app to Google Play, App Store, and AppGallery",
      "Solved complex architectural challenges"
    ]
  }
];

function TechCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full bg-slate-900/40 border border-white/5 overflow-hidden"
    >
      {/* Tech Borders - Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-600 transition-colors group-hover:border-white/50"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-slate-600 transition-colors group-hover:border-white/50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-slate-600 transition-colors group-hover:border-white/50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-600 transition-colors group-hover:border-white/50"></div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-scan"></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header with Tech ID */}
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded bg-slate-950 border border-white/10 ${item.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
            <item.icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            SYS.0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h4 className="text-slate-200 font-medium leading-snug group-hover:text-white transition-colors relative">
            <span className="absolute -left-4 top-1 w-0.5 h-4 bg-slate-700 group-hover:bg-cyan-400 transition-colors"></span>
            {item.text}
          </h4>
        </div>
        
        {/* Bottom Tech Decoration */}
        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
           <div className="flex gap-1">
             <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
             <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
             <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
           </div>
           <div className="h-0.5 w-10 bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Highlights Section */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional <span className="text-cyan-400 text-glow">Highlights</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              <span className="font-mono text-xs text-cyan-500 mr-2">[SYSTEM_LOG]</span>
              Key achievements that define my engineering journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <TechCard key={index} item={item} index={index} />
            ))}
            
            {/* Stats Card - Tech Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative h-full bg-gradient-to-br from-violet-900/20 to-slate-900/40 border border-white/5 overflow-hidden flex flex-col items-center justify-center min-h-[200px]"
            >
              {/* Animated Rings Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 <div className="w-40 h-40 border border-cyan-500 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute w-32 h-32 border border-violet-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>

              <div className="relative z-10 text-center">
                 <div className="font-mono text-xs text-cyan-400 mb-2 tracking-widest">EXP_LEVEL</div>
                 <h3 className="text-5xl font-bold text-white mb-1 tracking-tighter">5+</h3>
                 <p className="text-slate-400 text-sm uppercase tracking-wide">Years Active</p>
              </div>

              {/* Tech Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/50"></div>
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work <span className="text-violet-500">Experience</span></h2>
          
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.color} ring-4 ring-[#050505] shadow-lg shadow-violet-500/20`}></div>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-colors border border-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-lg text-violet-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-cyan-400 py-1 px-3 bg-cyan-900/20 rounded-full border border-cyan-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-white font-bold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow"
            >
              Contact Me For Work
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
