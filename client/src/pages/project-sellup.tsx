import { motion } from "framer-motion";
import { ExternalLink, Boxes, Bot, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/ui/navbar";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ProjectFacts } from "@/components/ui/project-facts";
import { ProjectNext } from "@/components/ui/project-next";
import dashboard from "@/assets/images/sellup/dashboard.webp";
import store from "@/assets/images/sellup/store.webp";
import chat from "@/assets/images/sellup/chat.webp";
import social from "@/assets/images/sellup/social.webp";
import seo from "@/assets/images/sellup/seo.webp";

const ACCENT = "#F06A2A";
const SITE = "https://sellup-system.online/";
const stack = ["Go", "Python", "JavaScript", "REST API", "LLM / AI", "1С", "МойСклад", "Ozon", "Wildberries", "СДЭК", "Telegram", "WhatsApp", "VK"];
const challengeIcons = [Boxes, Bot, Users];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const;

function Shot({ src, caption }: { src: string; caption: string }) {
  return (
    <motion.figure {...reveal}>
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#f7f4ef]">
        <ImageWithShimmer src={src} alt={caption} className="w-full h-auto" wrapperClassName="w-full" shimmerColor="bg-[#F06A2A]/20" />
      </div>
      <figcaption className="mt-3 text-sm text-slate-400">{caption}</figcaption>
    </motion.figure>
  );
}

export default function ProjectSellUp() {
  const { t } = useTranslation();
  const responsibilities = t("projectPage.sellup.responsibilities", { returnObjects: true }) as string[];
  const challenges = t("projectPage.sellup.contributions", { returnObjects: true }) as { title: string; desc: string }[];
  const modules = t("projectPage.sellup.modules", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#F06A2A]/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[520px] md:h-[520px] bg-[#F06A2A] rounded-full blur-[90px] md:blur-[130px] opacity-[0.12]"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-violet-700 rounded-full blur-[90px] md:blur-[130px] opacity-[0.12]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
            >
              <div>
                <p className="text-[#F06A2A] font-medium mb-3">{t("projectPage.sellup.badge")}</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">SellUp</h1>
              </div>
              <a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start md:self-auto h-12 px-6 rounded-full bg-[#F06A2A] hover:bg-[#ff7a3a] text-white font-medium transition-colors"
              >
                {t("projectPage.visitWebsite")} <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.header>

            <ProjectFacts id="sellup" accent={ACCENT} />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24 rounded-3xl overflow-hidden border border-white/10 bg-[#f7f4ef] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)]"
            >
              <ImageWithShimmer
                src={dashboard}
                alt="SellUp — заказы, склад, чаты и выручка в одной панели"
                className="w-full h-auto"
                wrapperClassName="w-full"
                shimmerColor="bg-[#F06A2A]/20"
                loading="eager"
              />
            </motion.div>

            <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-start">
              <motion.div {...reveal}>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  {t("projectPage.sellup.h2")} <span className="text-[#F06A2A]">{t("projectPage.sellup.h2Highlight")}</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.sellup.description")}</p>
                <h3 className="text-xl font-semibold mb-4">{t("projectPage.myKeyResponsibilities")}</h3>
                <ul className="space-y-3 text-slate-400">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F06A2A] shrink-0" aria-hidden="true"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="space-y-8">
                <Shot src={store} caption={t("projectPage.sellup.galleryStore")} />
                <Shot src={chat} caption={t("projectPage.sellup.galleryChat")} />
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-10 md:gap-16 mb-24">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("projectPage.challengesTitle")}</h2>
                <div className="space-y-5">
                  {challenges.map((c, i) => {
                    const Icon = challengeIcons[i] ?? Boxes;
                    return (
                      <motion.div {...reveal} key={c.title} className="flex gap-5 rounded-2xl bg-slate-900/50 border border-white/5 p-6">
                        <div className="p-3 h-fit rounded-xl bg-[#F06A2A]/10 text-[#F06A2A] shrink-0">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{c.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <aside className="space-y-8 md:pt-16">
                <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6">
                  <h3 className="text-sm font-semibold text-slate-400 mb-4">{t("projectPage.techStack")}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <li key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6">
                  <h3 className="text-sm font-semibold text-slate-400 mb-4">{t("projectPage.modulesTitle")}</h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-300 text-sm">
                    {modules.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#F06A2A]" aria-hidden="true"></span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <Shot src={social} caption={t("projectPage.sellup.gallerySocial")} />
              <Shot src={seo} caption={t("projectPage.sellup.gallerySeo")} />
            </section>

            <ProjectNext current="sellup" />
          </div>
        </main>
      </div>
    </div>
  );
}
