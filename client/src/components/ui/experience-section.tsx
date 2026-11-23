import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageSquare, ExternalLink } from "lucide-react";
import { AchievementsBento } from "@/components/ui/achievements-bento";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export function ExperienceSection() {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t("experienceSection.jobs.sellup.role"),
      company: t("experienceSection.jobs.sellup.company"),
      period: t("experienceSection.jobs.sellup.period"),
      color: "bg-violet-500",
      achievements: t("experienceSection.jobs.sellup.achievements", { returnObjects: true }) as string[],
      projectUrl: null
    },
    {
      role: t("experienceSection.jobs.apeiron.role"),
      company: t("experienceSection.jobs.apeiron.company"),
      period: t("experienceSection.jobs.apeiron.period"),
      color: "bg-emerald-500",
      achievements: t("experienceSection.jobs.apeiron.achievements", { returnObjects: true }) as string[],
      projectUrl: "/projects/wise"
    },
    {
      role: t("experienceSection.jobs.freelance.role"),
      company: t("experienceSection.jobs.freelance.company"),
      period: t("experienceSection.jobs.freelance.period"),
      color: "bg-amber-500",
      achievements: t("experienceSection.jobs.freelance.achievements", { returnObjects: true }) as string[],
      projectUrl: "/projects/apeiron"
    },
    {
      role: t("experienceSection.jobs.twosky.role"),
      company: t("experienceSection.jobs.twosky.company"),
      period: t("experienceSection.jobs.twosky.period"),
      color: "bg-blue-600",
      achievements: t("experienceSection.jobs.twosky.achievements", { returnObjects: true }) as string[],
      projectUrl: "/projects/2sky"
    },
    {
      role: t("experienceSection.jobs.wowtickets.role"),
      company: t("experienceSection.jobs.wowtickets.company"),
      period: t("experienceSection.jobs.wowtickets.period"),
      color: "bg-violet-600",
      achievements: t("experienceSection.jobs.wowtickets.achievements", { returnObjects: true }) as string[],
      projectUrl: "/projects/travel"
    },
    {
      role: t("experienceSection.jobs.lofty.role"),
      company: t("experienceSection.jobs.lofty.company"),
      period: t("experienceSection.jobs.lofty.period"),
      color: "bg-rose-500",
      achievements: t("experienceSection.jobs.lofty.achievements", { returnObjects: true }) as string[],
      projectUrl: null
    }
  ];

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t("experienceSection.highlightsTitle")} <span className="text-cyan-400">{t("experienceSection.highlightsTitleHighlight")}</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("experienceSection.highlightsSubtitle")}
            </p>
          </div>
          
          <AchievementsBento />
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">{t("experienceSection.workExperience")} <span className="text-[#00d3f3]">{t("experienceSection.workExperienceHighlight")}</span></h2>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 text-slate-300 hover:text-white transition-all backdrop-blur-sm"
            >
              <span className="font-medium">{t("experienceSection.getToKnowMe")}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
          
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
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.color} ring-4 ring-[#050505] shadow-lg shadow-violet-500/20`}></div>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-colors border border-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      {exp.projectUrl ? (
                        <Link href={exp.projectUrl} className="inline-flex items-center gap-1 text-lg text-violet-300 font-medium hover:text-violet-100 transition-colors group">
                          {exp.company}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ) : (
                        <p className="text-lg text-violet-300 font-medium">{exp.company}</p>
                      )}
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
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-900/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-left">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              {t("experienceSection.readyToCreate")}
            </h3>
            <h3 className="text-3xl md:text-5xl font-bold text-[#9d74f5] mb-3 tracking-tight relative inline-block">
              {t("experienceSection.uniqueExperience")}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white/10 text-9xl font-light pointer-events-none select-none blur-[2px] hidden md:block">+</div>
            </h3>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
              {t("experienceSection.letsDoItTogether")}
            </h3>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/experience"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 text-lg"
            >
              {t("experienceSection.learnMoreAboutJourney")} <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="relative z-10 flex flex-col items-center min-w-[200px]">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/guvva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-2xl font-semibold text-lg transition-all shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)]"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>{t("experienceSection.contactMeNow")}</span>
            </motion.a>
            
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
