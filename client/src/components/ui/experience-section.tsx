import { motion } from "framer-motion";
import { Briefcase, Layers, Rocket, Monitor, Smartphone, Cpu, CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    text: "10+ applications released in App Store / Google Play",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20"
  },
  {
    icon: Layers,
    text: "Projects from scratch: architecture → release → support",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20"
  },
  {
    icon: Briefcase,
    text: "Team Lead & architectural decision making",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    icon: Monitor,
    text: "Mobile + Web + TV apps expertise",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: Cpu,
    text: "Clean Architecture & Scalable Solutions",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20"
  }
];

const experiences = [
  {
    role: "Lead Flutter Developer",
    company: "Apeiron Space",
    period: "2023 - Present",
    color: "bg-emerald-500",
    achievements: [
      "Architecture and development of key internal applications",
      "Development of the main platform application",
      "Working with a large-scale production product"
    ]
  },
  {
    role: "Team Lead Flutter",
    company: "2Sky Mobile",
    period: "2022 - 2023",
    color: "bg-blue-600",
    achievements: [
      "Project built entirely from scratch",
      "Architecture design and roadmap planning",
      "Full support for iOS / Android / Web platforms"
    ]
  },
  {
    role: "Senior Flutter Developer",
    company: "Wowtickets.com",
    period: "2021 - 2022",
    color: "bg-violet-600",
    achievements: [
      "Application support & infrastructure improvements",
      "Ticketing system optimization",
      "Cross-platform feature parity"
    ]
  }
];

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
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional <span className="text-cyan-400">Highlights</span></h2>
            <p className="text-slate-400">Key achievements and core competencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors border ${item.bg.split(' ')[1] || 'border-white/5'}`}
              >
                <div className={`p-3 rounded-xl ${item.bg.split(' ')[0]} ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-slate-200 font-medium leading-snug pt-1">{item.text}</p>
              </motion.div>
            ))}
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
