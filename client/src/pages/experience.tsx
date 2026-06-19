import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { BackgroundElements } from "@/components/ui/background-elements";
import { Briefcase, GraduationCap, Heart, Code, User, Calendar, MapPin, Building2, Bot, BrainCircuit, Microscope, Award, Download, ExternalLink, CheckCircle2 } from "lucide-react";
import kukaArm from "@/assets/images/kuka-arm.png";
import kukaVision from "@/assets/images/kuka-collision.jpg";
import profilePhoto from "@/assets/images/profile-photo.png";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t("experiencePage.jobs.freelance.company"),
      role: t("experiencePage.jobs.freelance.role"),
      period: t("experiencePage.jobs.freelance.period"),
      location: t("experiencePage.jobs.freelance.location"),
      description: t("experiencePage.jobs.freelance.description"),
      achievements: t("experiencePage.jobs.freelance.achievements", { returnObjects: true }) as string[],
      technologies: ["Flutter", "Add-to-App", "iOS", "Android", "Cordova", "Web"],
      projectUrl: "/projects/wise"
    },
    {
      company: t("experiencePage.jobs.apeiron.company"),
      role: t("experiencePage.jobs.apeiron.role"),
      period: t("experiencePage.jobs.apeiron.period"),
      location: t("experiencePage.jobs.apeiron.location"),
      description: t("experiencePage.jobs.apeiron.description"),
      achievements: t("experiencePage.jobs.apeiron.achievements", { returnObjects: true }) as string[],
      technologies: ["Flutter", "Dart", "Clean Architecture", "WebSocket", "CI/CD"],
      projectUrl: "/projects/apeiron"
    },
    {
      company: t("experiencePage.jobs.twosky.company"),
      role: t("experiencePage.jobs.twosky.role"),
      period: t("experiencePage.jobs.twosky.period"),
      location: t("experiencePage.jobs.twosky.location"),
      description: t("experiencePage.jobs.twosky.description"),
      achievements: t("experiencePage.jobs.twosky.achievements", { returnObjects: true }) as string[],
      technologies: ["Flutter", "REST API", "BLoC", "Freezed", "Clean Architecture", "Injectable", "GetIt"],
      projectUrl: "/projects/2sky"
    },
    {
      company: t("experiencePage.jobs.wowtickets.company"),
      role: t("experiencePage.jobs.wowtickets.role"),
      period: t("experiencePage.jobs.wowtickets.period"),
      location: t("experiencePage.jobs.wowtickets.location"),
      description: t("experiencePage.jobs.wowtickets.description"),
      achievements: t("experiencePage.jobs.wowtickets.achievements", { returnObjects: true }) as string[],
      technologies: ["Flutter", "Clean Architecture", "BLoC", "Freezed", "Git"],
      projectUrl: "/projects/travel"
    },
    {
      company: t("experiencePage.jobs.lofty.company"),
      role: t("experiencePage.jobs.lofty.role"),
      period: t("experiencePage.jobs.lofty.period"),
      location: t("experiencePage.jobs.lofty.location"),
      description: t("experiencePage.jobs.lofty.description"),
      achievements: t("experiencePage.jobs.lofty.achievements", { returnObjects: true }) as string[],
      technologies: ["Android", "iOS", "Flutter", "UI/UX"],
      projectUrl: null
    }
  ];

  const education = [
    {
      school: t("experiencePage.edu.mtuci1.school"),
      degree: t("experiencePage.edu.mtuci1.degree"),
      year: t("experiencePage.edu.mtuci1.year"),
    },
    {
      school: t("experiencePage.edu.mtuci2.school"),
      degree: t("experiencePage.edu.mtuci2.degree"),
      year: t("experiencePage.edu.mtuci2.year"),
    },
    {
      school: t("experiencePage.edu.mtuci3.school"),
      degree: t("experiencePage.edu.mtuci3.degree"),
      year: t("experiencePage.edu.mtuci3.year"),
    }
  ];

  const hobbies = [
    { icon: <Bot className="w-5 h-5" />, name: t("experiencePage.hobbiesItems.openSource.name"), desc: t("experiencePage.hobbiesItems.openSource.desc") },
    { icon: <User className="w-5 h-5" />, name: t("experiencePage.hobbiesItems.mentoring.name"), desc: t("experiencePage.hobbiesItems.mentoring.desc") },
    { icon: <Heart className="w-5 h-5" />, name: t("experiencePage.hobbiesItems.travel.name"), desc: t("experiencePage.hobbiesItems.travel.desc") },
    { icon: <Building2 className="w-5 h-5" />, name: t("experiencePage.hobbiesItems.architecture.name"), desc: t("experiencePage.hobbiesItems.architecture.desc") },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 z-50"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-3"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40 animate-blob-1 animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-emerald-500 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-30 animate-blob-2 animation-delay-4000"></div>
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
                  <User className="w-3.5 h-3.5" /> {t("experiencePage.aboutMe")}
                </span>
              </div>

              <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                    {t("experiencePage.about.heading1")} <span className="text-blue-500">{t("experiencePage.about.headingHighlight")}</span><br />
                    {t("experiencePage.about.heading2")}
                  </h1>
                  <div className="prose prose-lg prose-invert text-slate-300 max-w-none">
                    <p>
                      {t("experiencePage.about.bio1")}
                    </p>
                    <p>
                      {t("experiencePage.about.bio2")}
                    </p>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[3/4] md:aspect-[4/5] shadow-2xl">
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
                    <img 
                      src={profilePhoto} 
                      alt="Avezov Guvanch" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3 flex-wrap">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  {t("experiencePage.workExperience")}
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                    {t("experiencePage.totalExperience")}
                  </span>
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={t("cvUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  {t("experiencePage.downloadCv")} <Download className="w-4 h-4" />
                </motion.a>
              </div>
              
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
                        {exp.projectUrl ? (
                          <Link href={exp.projectUrl} className="inline-flex items-center gap-1 text-blue-400 font-medium hover:text-blue-300 transition-colors group">
                            {exp.company}
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ) : (
                          <span className="text-blue-400 font-medium">{exp.company}</span>
                        )}
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

                    {exp.achievements?.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-500/70 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}

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
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                  {t("experiencePage.education")}
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
                  {t("experiencePage.hobbies")}
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

            {/* Scientific & Robotics Section */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyan-500" />
                {t("experiencePage.robotics")}
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
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{t("experiencePage.roboticsTitle")}</h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {t("experiencePage.roboticsDesc")}
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <BrainCircuit className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">{t("experiencePage.roboticsBullet1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Microscope className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">{t("experiencePage.roboticsBullet2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">{t("experiencePage.roboticsBullet3")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Bot className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <span className="text-slate-300 text-sm">{t("experiencePage.roboticsBullet4")}</span>
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

          </motion.div>
        </div>
      </div>
    </div>
  );
}
