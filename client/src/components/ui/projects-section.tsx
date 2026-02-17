import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Github, HeartPulse, Plane, Home as HomeIcon, Tv, Users, Wifi, Code, ShoppingCart, Globe, Wallet } from "lucide-react";
import projectWowtickets from "@/assets/images/project-wowtickets.webp";
import projectApeiron from "@/assets/images/project-apeiron.webp";
import projectPunicapp from "@/assets/images/project-punicapp.webp";
import projectLofty from "@/assets/images/project-lofty.webp";
import projectWiseCity from "@/assets/images/project-wisecity.webp";
import projectTavria from "@/assets/images/project-tavria.webp";
import projectSdvor from "@/assets/images/project-sdvor.webp";
import project2Sky from "@/assets/images/project-2sky.webp";
import projectTrueForTwo from "@/assets/images/project-truefortwo.webp";
import pulsarImage from "@/assets/images/pulsar-bonus.png";

// Define categories to match Navbar structure
const categories = [
  { id: "healthcare", title: "Healthcare", icon: HeartPulse, color: "text-green-400" },
  { id: "travel", title: "Travel", icon: Plane, color: "text-blue-400" },
  { id: "smarthome", title: "Smart Home", icon: HomeIcon, color: "text-cyan-400" },
  { id: "media", title: "Media", icon: Tv, color: "text-yellow-400" },
  { id: "social", title: "Social", icon: Users, color: "text-fuchsia-400" },
  { id: "connectivity", title: "Connectivity", icon: Wifi, color: "text-indigo-400" },
  { id: "fintech", title: "Fintech", icon: Wallet, color: "text-emerald-400" },
  { id: "ecommerce", title: "E-Commerce", icon: ShoppingCart, color: "text-orange-400" },
  { id: "mobile", title: "Mobile Dev", icon: Code, color: "text-rose-400" },
];

const projects = [
  {
    id: 1,
    title: "Wowtickets.com",
    categoryId: "travel",
    image: projectWowtickets,
    details: "Application support & infrastructure for travel booking platform.",
    tags: ["Flutter", "BLoC", "Clean Architecture"],
    link: "/projects/travel",
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    id: 10,
    title: "PulSarBonus",
    categoryId: "healthcare",
    image: pulsarImage,
    details: "Medicine tracking & reminders app with map integration.",
    tags: ["Flutter", "MobX", "Maps"],
    link: "/projects/healthcare",
    gradient: "from-[#06BA00] to-green-600"
  },
  {
    id: 2,
    title: "Apeiron Space",
    categoryId: "smarthome",
    image: projectApeiron,
    details: "IoT integration & real-time control for smart hotels.",
    tags: ["Flutter", "WebSockets", "IoT"],
    link: "/projects/smarthome",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "2Sky Mobile",
    categoryId: "connectivity",
    image: project2Sky,
    details: "Global eSIM connectivity platform built from scratch.",
    tags: ["iOS", "Android", "Web"],
    link: "/projects/2sky",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 4,
    title: "True for Two",
    categoryId: "social",
    image: projectTrueForTwo,
    details: "Dating app with real-time matching & chat features.",
    tags: ["Flutter", "Riverpod", "Firebase"],
    link: "/projects/truefortwo",
    gradient: "from-fuchsia-500 to-purple-600"
  },
  {
    id: 5,
    title: "PunicApp",
    categoryId: "mobile",
    image: projectPunicapp,
    details: "Agency portfolio development with UI/UX implementation.",
    tags: ["Web", "Mobile", "UI/UX"],
    link: "#", // No specific page yet
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: 6,
    title: "Lofty",
    categoryId: "fintech",
    image: projectLofty,
    details: "Fintech product scaling and secure transaction handling.",
    tags: ["Web", "Mobile", "Crypto"],
    link: "#", // No specific page yet
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 7,
    title: "Wise City",
    categoryId: "smarthome",
    image: projectWiseCity,
    details: "Engineering solutions integration for smart home ecosystems.",
    tags: ["Web", "Mobile", "IoT"],
    link: "/projects/wise",
    gradient: "from-slate-500 to-slate-700"
  },
  {
    id: 8,
    title: "Tavria",
    categoryId: "media",
    image: projectTavria,
    details: "Regional news aggregation with high load resistance.",
    tags: ["Web", "Mobile", "News"],
    link: "/projects/media",
    gradient: "from-yellow-400 to-[#FECB0E]"
  },
   {
    id: 9,
    title: "S.Dvor",
    categoryId: "ecommerce",
    image: projectSdvor,
    details: "E-commerce platform with catalog & cart logic.",
    tags: ["Web", "Catalog", "Payments"],
    link: "#", // No specific page yet
    gradient: "from-yellow-500 to-orange-600"
  }
];

export function ProjectsSection() {
  // Group projects by category
  const groupedProjects = categories.map(cat => ({
    ...cat,
    projects: projects.filter(p => p.categoryId === cat.id)
  })).filter(group => group.projects.length > 0);

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-violet-900/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent <span className="text-cyan-400">Projects</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              A curated selection of my work across various industries, demonstrating expertise in 
              building scalable, high-performance applications.
            </p>
          </div>
          
          <button className="text-violet-400 hover:text-white transition-colors flex items-center gap-2 font-mono border border-violet-500/30 px-4 py-2 rounded-full hover:bg-violet-500/10">
            View GitHub <Github className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-24">
          {groupedProjects.map((group, groupIndex) => (
            <div key={group.id} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-slate-900/50 border border-white/10 ${group.color}`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
              </div>

              {/* Projects Grid for this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.projects.map((project, index) => (
                  <Link href={project.link || "#"} key={project.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-slate-800/60 transition-all duration-300 flex flex-col"
                    >
                      {/* Image Area */}
                      <div className="h-48 overflow-hidden relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                          {project.details}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase font-medium tracking-wider px-2 py-1 rounded bg-white/5 text-slate-300 group-hover:bg-white/10 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
