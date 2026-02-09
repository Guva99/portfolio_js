import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import projectFintech from "@/assets/images/project-fintech.png";
import projectEcommerce from "@/assets/images/project-ecommerce.png";
import projectSmartHome from "@/assets/images/project-smarthome.png";

const projects = [
  {
    id: 1,
    title: "NeoBank Finance",
    category: "Fintech",
    image: projectFintech,
    description: "A comprehensive banking dashboard with real-time analytics and crypto integration.",
    platforms: ["iOS", "Android"],
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Luxe Fashion",
    category: "E-Commerce",
    image: projectEcommerce,
    description: "Premium shopping experience with AR try-on features and seamless checkout.",
    platforms: ["iOS", "Android", "Web"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 3,
    title: "Smartify Home",
    category: "IoT Control",
    image: projectSmartHome,
    description: "Centralized control hub for smart devices with automated routines and energy monitoring.",
    platforms: ["Tablet", "Mobile"],
    gradient: "from-cyan-500 to-blue-500"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent <span className="text-cyan-400">Projects</span></h2>
            <p className="text-slate-400">Selected works from the last 2 years.</p>
          </div>
          <button className="text-violet-400 hover:text-white transition-colors flex items-center gap-2 font-mono">
            View GitHub <Github className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.platforms.map(platform => (
                    <span key={platform} className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
