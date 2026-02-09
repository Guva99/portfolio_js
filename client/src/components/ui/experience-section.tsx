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

function HoverCard({ item, index }: { item: any; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl bg-slate-900/40 border border-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${item.border}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.from} ${item.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-slate-950/50 border border-white/10 ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <item.icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-slate-200 font-medium leading-snug group-hover:text-white transition-colors">
            {item.text}
          </h4>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-xl opacity-50 group-hover:opacity-100 group-hover:border-white/30 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 rounded-bl-xl opacity-50 group-hover:opacity-100 group-hover:border-white/30 transition-all duration-500" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional <span className="text-cyan-400 text-glow">Highlights</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Key achievements that define my engineering journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, index) => (
              <HoverCard key={index} item={item} index={index} />
            ))}
            
            {/* Last card acts as a "More" or "Stats" card to fill the grid nicely if odd number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-white/10 p-6 backdrop-blur-sm flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-noise opacity-10"></div>
              <h3 className="text-4xl font-bold text-white mb-1">5+</h3>
              <p className="text-slate-300 font-medium">Years of Experience</p>
              <div className="mt-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-150"></div>
              </div>
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
