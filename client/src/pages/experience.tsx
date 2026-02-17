import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { Briefcase, GraduationCap, Heart, Code, User, Calendar, MapPin, Building2, Bot, BrainCircuit, Microscope, Award } from "lucide-react";
import kukaArm from "@/assets/images/kuka-arm.png";
import kukaVision from "@/assets/images/kuka-vision.png";

export default function Experience() {
  const experiences = [
    {
      company: "Apeiron Space",
      role: "Lead Flutter Developer",
      period: "August 2023 — September 2025",
      location: "Moscow",
      description: "Led the mobile development for a staffless hotel ecosystem with smart-home features. Delivered two internal projects (ODS for kitchen operations and SpaceKeeper for housekeepers) and developed the main ApeironSpace guest app.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "WebSocket", "CI/CD"]
    },
    {
      company: "2Sky Mobile",
      role: "Senior Flutter Developer / Team Lead",
      period: "October 2022 — August 2023",
      location: "USA (Remote)",
      description: "Initiated and drove the project from scratch. Defined the roadmap, designed the architecture, and provided ongoing support across Web, Android, and iOS platforms. Acted as a Team Lead ensuring successful delivery.",
      technologies: ["Flutter", "Rest API", "Bloc", "Freezed", "Injectable", "GetIt"]
    },
    {
      company: "Wowtickets",
      role: "Senior Flutter Developer",
      period: "March 2021 — October 2022",
      location: "Great Britain (Remote)",
      description: "Worked independently with full responsibility for publication. Ensured deadlines were met, solved complex architectural challenges, and released the app to Google Play, App Store, and AppGallery.",
      technologies: ["Flutter", "Clean Architecture", "Bloc", "Freezed", "Git"]
    },
    {
      company: "Lofty",
      role: "Junior Flutter Developer",
      period: "November 2021 — October 2022",
      location: "Great Britain (Remote)",
      description: "Developed the application from the ground up—from concept and design through to its release. Handled requirements analysis, architectural design, feature implementation, and testing.",
      technologies: ["Android", "iOS", "Flutter", "UI/UX"]
    }
  ];

  const education = [
    {
      school: "Moscow Technical University of Communications and Informatics (MTUCI)",
      degree: "Master's in Telecommunications Systems, Networks and Devices — Robotics",
      year: "2028 (Expected)",
    },
    {
      school: "Moscow Technical University of Communications and Informatics (MTUCI)",
      degree: "Bachelor's in Robotics and Robotic Systems",
      year: "2024",
    },
    {
      school: "Moscow Technical University of Communications and Informatics (MTUCI)",
      degree: "Bachelor's in Information Technology — System Technologies",
      year: "2022",
    }
  ];

  const hobbies = [
    { icon: <Code className="w-5 h-5" />, name: "Open Source", desc: "Contributing to Flutter libraries" },
    { icon: <User className="w-5 h-5" />, name: "Mentoring", desc: "Guiding junior developers" },
    { icon: <Heart className="w-5 h-5" />, name: "Travel", desc: "Exploring new cultures" },
    { icon: <Building2 className="w-5 h-5" />, name: "Architecture", desc: "Designing scalable systems" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob-1"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob-2"></div>
        </div>
      </div>

      <div className="relative z-10">
        <BackgroundElements />
        <Navbar />

        <div className="container mx-auto px-4 pt-32 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header / About Me */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> About Me
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                Passionate <span className="text-blue-500">Flutter Developer</span><br />
                & Team Lead
              </h1>
              <div className="prose prose-lg prose-invert text-slate-300 max-w-none">
                <p>
                  I'm a detail-oriented Flutter developer with deep experience building mobile, web, and TV applications. 
                  My journey involves working on a variety of projects that have helped me develop a strong sense of 
                  clean architecture, code quality, and scalable design—all of which I consider essential for delivering successful products.
                </p>
                <p>
                  I believe the success of any project depends on team cohesion. I adapt quickly to new teams, actively contribute 
                  to productivity, and foster knowledge-sharing through code reviews and collaborative problem-solving.
                </p>
              </div>
            </div>

             {/* Scientific & Robotics Section - NEW */}
             <div className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyan-500" />
                Scientific & Robotics Activity
              </h2>

              <div className="bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 uppercase tracking-wider">
                        Robotics Research
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 uppercase tracking-wider">
                        Computer Vision
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">KUKA Manipulator Software Development</h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Active researcher and developer in the field of industrial robotics. I specialize in developing control software 
                      for KUKA manipulators, integrating computer vision algorithms for precise object recognition and manipulation.
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <BrainCircuit className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">Development of intelligent control algorithms for automated robotic tasks.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Microscope className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">Regular participant and speaker at scientific conferences on robotics and automation.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">Contribution to scientific research in the field of adaptive robotic systems.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-full min-h-[300px] bg-slate-800/50">
                    <div className="absolute inset-0 grid grid-rows-2">
                       <div className="relative overflow-hidden group">
                         <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                         <img 
                           src={kukaArm} 
                           alt="KUKA Manipulator" 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                       </div>
                       <div className="relative overflow-hidden group border-t border-white/10">
                         <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                         <img 
                           src={kukaVision} 
                           alt="Computer Vision Analysis" 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-500" />
                Work Experience
              </h2>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="text-blue-400 font-medium">{exp.company}</div>
                      </div>
                      <div className="text-slate-500 text-sm flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Hobbies Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                  Education
                </h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/30 border border-white/5 rounded-xl p-5"
                    >
                      <div className="text-purple-400 text-sm font-medium mb-1">{edu.year}</div>
                      <h3 className="text-white font-bold mb-1">{edu.school}</h3>
                      <p className="text-slate-400 text-sm">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-500" />
                  Interests & Hobbies
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/30 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                        {hobby.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{hobby.name}</div>
                        <div className="text-slate-500 text-sm">{hobby.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
