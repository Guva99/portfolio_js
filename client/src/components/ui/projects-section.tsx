import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Github, Download } from "lucide-react";
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

const projects = [
  {
    id: 1,
    title: "Wowtickets.com",
    category: "Travel & Booking",
    image: projectWowtickets,
    details: [
      "Application support & infrastructure",
      "Flutter, BLoC, Clean Architecture",
      "100k+ active users"
    ],
    platforms: ["iOS", "Android", "Web"],
    gradient: "from-violet-600 to-indigo-600",
    shadow: "hover:shadow-violet-500/40",
    border: "hover:border-violet-500/50",
    link: "/projects/travel"
  },
  {
    id: 10,
    title: "PulSarBonus",
    category: "Healthcare & Loyalty",
    image: pulsarImage,
    details: [
      "Medicine tracking & Reminders",
      "Flutter, MobX, Maps Integration",
      "10k+ active users"
    ],
    platforms: ["iOS", "Android", "Web"],
    gradient: "from-[#06BA00] to-green-600",
    shadow: "hover:shadow-green-500/40",
    border: "hover:border-green-500/50",
    link: "/projects/healthcare"
  },
  {
    id: 2,
    title: "Apeiron Space",
    category: "Smart Hotel / IoT",
    image: projectApeiron,
    details: [
      "IoT Integration & Real-time control",
      "Flutter, WebSockets, Custom UI",
      "First smart hotel in Russia"
    ],
    platforms: ["iOS", "Android", "IoT"],
    gradient: "from-emerald-500 to-teal-600",
    shadow: "hover:shadow-emerald-500/40",
    border: "hover:border-emerald-500/50",
    link: "/projects/smarthome"
  },
  {
    id: 3,
    title: "2Sky Mobile",
    category: "eSIM & Connectivity",
    image: project2Sky,
    details: [
      "Built from scratch to release",
      "Architecture, Roadmap, White-label",
      "Global eSIM connectivity"
    ],
    platforms: ["iOS", "Android"],
    gradient: "from-blue-600 to-indigo-700",
    shadow: "hover:shadow-blue-500/40",
    border: "hover:border-blue-500/50"
  },
  {
    id: 4,
    title: "True for Two",
    category: "Social & Dating",
    image: projectTrueForTwo,
    details: [
      "Dating app architecture",
      "Real-time matching & chat",
      "Flutter, Riverpod, Firebase"
    ],
    platforms: ["Web", "Mobile"],
    gradient: "from-fuchsia-500 to-purple-600",
    shadow: "hover:shadow-fuchsia-500/40",
    border: "hover:border-fuchsia-500/50"
  },
  {
    id: 5,
    title: "PunicApp",
    category: "Mobile Development",
    image: projectPunicapp,
    details: [
      "Agency portfolio development",
      "UI/UX Implementation",
      "Cross-platform optimization"
    ],
    platforms: ["Web", "Mobile"],
    gradient: "from-rose-500 to-pink-600",
    shadow: "hover:shadow-rose-500/40",
    border: "hover:border-rose-500/50"
  },
  {
    id: 6,
    title: "Lofty",
    category: "Fintech & Crypto",
    image: projectLofty,
    details: [
      "Fintech product scaling",
      "Complex data visualization",
      "Secure transaction handling"
    ],
    platforms: ["Web", "Mobile"],
    gradient: "from-cyan-500 to-blue-600",
    shadow: "hover:shadow-cyan-500/40",
    border: "hover:border-cyan-500/50"
  },
  {
    id: 7,
    title: "Wise City",
    category: "Smart Home",
    image: projectWiseCity,
    details: [
      "Smart home ecosystem",
      "Engineering solutions integration",
      "Modern comfort automation"
    ],
    platforms: ["Web", "Mobile", "IoT"],
    gradient: "from-slate-500 to-slate-700",
    shadow: "hover:shadow-slate-500/40",
    border: "hover:border-slate-500/50",
    link: "/projects/smarthome"
  },
  {
    id: 8,
    title: "Tavria",
    category: "News & Info",
    image: projectTavria,
    details: [
      "Regional news aggregation",
      "Content delivery optimization",
      "High load resistance"
    ],
    platforms: ["Web", "Mobile"],
    gradient: "from-orange-500 to-amber-600",
    shadow: "hover:shadow-orange-500/40",
    border: "hover:border-orange-500/50",
    link: "/projects/media"
  },
   {
    id: 9,
    title: "S.Dvor",
    category: "E-Commerce",
    image: projectSdvor,
    details: [
      "E-commerce platform",
      "Catalog & Cart logic",
      "Payment gateway integration"
    ],
    platforms: ["Web"],
    gradient: "from-yellow-500 to-orange-600",
    shadow: "hover:shadow-yellow-500/40",
    border: "hover:border-yellow-500/50"
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
            <Link href={project.link || "#"} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden glass-card hover:shadow-2xl ${project.shadow} ${project.border} transition-all duration-500 cursor-pointer h-full`}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
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
                    <div className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-br ${project.gradient} transition-all duration-500`}>
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.platforms.map(platform => (
                      <span key={platform} className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
