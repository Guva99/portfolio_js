import { motion } from "framer-motion";
import { Briefcase, Layers, Rocket, Monitor, Cpu, CheckCircle, ArrowRight, Code, Database, Globe, MessageSquare } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: Rocket,
    text: "10+ applications released in App Store / Google Play",
    color: "group-hover:text-rose-400",
    bg: "group-hover:bg-rose-500/10",
    border: "group-hover:border-rose-500/20"
  },
  {
    icon: Layers,
    text: "Projects from scratch: architecture → release → support",
    color: "group-hover:text-amber-400",
    bg: "group-hover:bg-amber-500/10",
    border: "group-hover:border-amber-500/20"
  },
  {
    icon: Briefcase,
    text: "Team Lead & architectural decision making",
    color: "group-hover:text-emerald-400",
    bg: "group-hover:bg-emerald-500/10",
    border: "group-hover:border-emerald-500/20"
  },
  {
    icon: Monitor,
    text: "Mobile + Web + TV apps expertise",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/20"
  },
  {
    icon: Cpu,
    text: "Clean Architecture & Scalable Solutions",
    color: "group-hover:text-violet-400",
    bg: "group-hover:bg-violet-500/10",
    border: "group-hover:border-violet-500/20"
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className={`group relative h-full bg-black/40 backdrop-blur-sm border border-white/5 p-6 flex flex-col transition-all duration-300 hover:border-white/10 ${item.bg}`}>
        {/* Minimalist Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className={`p-2 rounded-md bg-white/5 border border-white/5 transition-colors duration-300 ${item.color} ${item.border}`}>
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="font-mono text-[10px] text-slate-600 tracking-wider">
              0{index + 1}
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-4">
            <h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300 leading-snug">
              {item.text}
            </h4>
          </div>
          
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="h-px w-8 bg-slate-700 group-hover:w-16 group-hover:bg-slate-500 transition-all duration-500"></div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 group-hover:-rotate-45 transition-all duration-300" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Hover Corner Accents */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-transparent group-hover:border-white/20 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[1px] border-l-[1px] border-transparent group-hover:border-white/20 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
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
            
            {/* Stats Card - Minimal Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative h-full bg-black/40 backdrop-blur-sm border border-white/5 flex flex-col items-center justify-center min-h-[200px]"
            >
              {/* Minimal Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                 <div className="w-32 h-32 border border-white rounded-full"></div>
                 <div className="absolute w-24 h-24 border border-white rounded-full border-dashed"></div>
              </div>

              <div className="relative z-10 text-center">
                 <div className="font-mono text-[10px] text-slate-500 mb-2 tracking-widest uppercase">Experience</div>
                 <h3 className="text-6xl font-light text-white mb-1 tracking-tighter">5+</h3>
                 <p className="text-slate-500 text-xs uppercase tracking-widest">Years</p>
              </div>

              {/* Minimal Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work <span className="text-[#00d3f3]">Experience</span></h2>
          
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </div>

      <div className="container mx-auto px-4 mt-32 relative">
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-900/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              READY TO CREATE
            </h3>
            <h3 className="text-3xl md:text-5xl font-bold text-[#9d74f5] mb-3 tracking-tight relative inline-block">
              A UNIQUE EXPERIENCE ?
              {/* Decorative Plus */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white/10 text-9xl font-light pointer-events-none select-none blur-[2px] hidden md:block">+</div>
            </h3>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              LET'S DO IT TOGETHER!
            </h3>
          </div>

          {/* Button Section */}
          <div className="relative z-10 flex flex-col items-center min-w-[200px]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-2xl font-semibold text-lg transition-all shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)]"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Contact me now</span>
            </motion.button>
            
            {/* Decorative Circles */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-12 h-8 opacity-40">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full border border-slate-400"></div>
              <div className="absolute left-3 top-2 w-6 h-6 rounded-full border border-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
