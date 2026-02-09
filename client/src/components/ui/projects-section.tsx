import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import projectWowtickets from "@/assets/images/project-wowtickets.webp";
import projectApeiron from "@/assets/images/project-apeiron.webp";
import projectPunicapp from "@/assets/images/project-punicapp.webp";
import projectLofty from "@/assets/images/project-lofty.webp";
import projectWiseCity from "@/assets/images/project-wisecity.webp";
import projectTavria from "@/assets/images/project-tavria.webp";
import projectSdvor from "@/assets/images/project-sdvor.webp";

const projects = [
  {
    id: 1,
    title: "Wowtickets.com",
    category: "Travel & Booking",
    image: projectWowtickets,
    description: "Book cheap airline tickets. Application support ticketing and infrastructure improvements.",
    platforms: ["iOS", "Android", "Web"],
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Apeiron Space",
    category: "Smart Hotel / IoT",
    image: projectApeiron,
    description: "The first smart hotel in Russia, completely controlled from your smartphone.",
    platforms: ["iOS", "Android", "IoT"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "PunicApp",
    category: "Mobile Development",
    image: projectPunicapp,
    description: "Mobile app development agency site. 12+ years of experience saving time and costs.",
    platforms: ["Web", "Mobile"],
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: 4,
    title: "Lofty",
    category: "Fintech & Crypto",
    image: projectLofty,
    description: "Creating and scaling IT & digital products around the world since 2011.",
    platforms: ["Web", "Mobile"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 5,
    title: "Wise City",
    category: "Smart Home",
    image: projectWiseCity,
    description: "A smart home in every apartment. Engineering and IT solutions for modern home comfort.",
    platforms: ["Web", "Mobile", "IoT"],
    gradient: "from-slate-500 to-slate-700"
  },
  {
    id: 6,
    title: "Tavria",
    category: "News & Info",
    image: projectTavria,
    description: "Regional information portal and news aggregation platform.",
    platforms: ["Web", "Mobile"],
    gradient: "from-orange-500 to-amber-600"
  },
   {
    id: 7,
    title: "S.Dvor",
    category: "E-Commerce",
    image: projectSdvor,
    description: "Construction materials and home improvement online store.",
    platforms: ["Web"],
    gradient: "from-yellow-500 to-orange-600"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent <span className="text-cyan-400">Projects</span></h2>
            <p className="text-slate-400">Selected works demonstrating expertise across various domains.</p>
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
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 object-top"
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
