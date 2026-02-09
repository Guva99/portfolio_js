import { motion } from "framer-motion";
import { Briefcase, User, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    role: "Senior Flutter Developer",
    company: "FinTech Global",
    period: "2021 - Present",
    desc: "Leading mobile team of 5 devs, architectural decision making, CI/CD setup.",
    icon: Briefcase,
    color: "bg-violet-500"
  },
  {
    role: "Mobile Architect",
    company: "Freelance",
    period: "2019 - 2021",
    desc: "Delivered 10+ successful projects for startups in US & Europe.",
    icon: Code,
    color: "bg-cyan-500"
  },
  {
    role: "Tech Mentor",
    company: "DevAcademy",
    period: "2020 - Present",
    desc: "Mentoring junior developers and creating educational content about Dart.",
    icon: GraduationCap,
    color: "bg-pink-500"
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work <span className="text-violet-500">Experience</span></h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center group hover:bg-white/5 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl ${exp.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  <exp.icon className="text-white w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-mono text-cyan-400 py-1 px-3 bg-cyan-900/30 rounded-full border border-cyan-500/30">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-violet-300 mb-2">{exp.company}</p>
                  <p className="text-slate-400">{exp.desc}</p>
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
