import { motion } from "framer-motion";
import { ExternalLink, ScanBarcode, Route, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/ui/navbar";
import { ImageWithShimmer } from "@/components/ui/image-with-shimmer";
import { ProjectFacts } from "@/components/ui/project-facts";
import { ProjectNext } from "@/components/ui/project-next";
import onb1 from "@/assets/images/mubi/onb1.webp";
import onb2 from "@/assets/images/mubi/onb2.webp";
import onb3 from "@/assets/images/mubi/onb3.webp";
import onb4 from "@/assets/images/mubi/onb4.webp";
import dark from "@/assets/images/mubi/dark.webp";
import desktop from "@/assets/images/mubi/desktop.webp";

const ACCENT = "#22D46B";
const SITE = "https://mubi-search.ru/";
const stack = ["SellUp", "Next.js", "JavaScript", "Python", "Go", "Barcode scanner", "REST API", "Light / Dark theme"];
const challengeIcons = [ScanBarcode, Route, Rocket];
const phones = [
  { src: onb1, alt: "MUBI — онбординг, шаг 1" },
  { src: onb2, alt: "MUBI — все заказы в одном месте" },
  { src: dark, alt: "MUBI — тёмная тема" },
  { src: onb3, alt: "MUBI — стоимость и статус доставки" },
  { src: onb4, alt: "MUBI — регистрация" },
];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const;

export default function ProjectMubi() {
  const { t } = useTranslation();
  const responsibilities = t("projectPage.mubi.responsibilities", { returnObjects: true }) as string[];
  const challenges = t("projectPage.mubi.contributions", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#22D46B]/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[520px] md:h-[520px] bg-[#22D46B] rounded-full blur-[90px] md:blur-[130px] opacity-[0.1]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-emerald-800 rounded-full blur-[90px] md:blur-[130px] opacity-[0.15]"></div>
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
                <p className="text-[#22D46B] font-medium mb-3">{t("projectPage.mubi.badge")}</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">MUBI</h1>
              </div>
              <a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start md:self-auto h-12 px-6 rounded-full bg-[#22D46B] hover:bg-[#3be37f] text-slate-950 font-semibold transition-colors"
              >
                {t("projectPage.visitWebsite")} <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.header>

            <ProjectFacts id="mubi" accent={ACCENT} />

            {/* Phone screens: horizontal scroll on mobile, a row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24 -mx-4 px-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory"
            >
              <ul className="flex md:grid md:grid-cols-5 gap-4 md:gap-5 w-max md:w-auto items-center">
                {phones.map(({ src, alt }, i) => (
                  <li key={alt} className={`snap-center w-[220px] md:w-auto ${i % 2 === 1 ? "md:translate-y-8" : ""}`}>
                    <div className="rounded-[1.75rem] overflow-hidden border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]">
                      <ImageWithShimmer
                        src={src}
                        alt={alt}
                        className="w-full h-auto"
                        wrapperClassName="w-full"
                        shimmerColor="bg-[#22D46B]/20"
                        loading={i < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
              <motion.div {...reveal}>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  {t("projectPage.mubi.h2")} <span className="text-[#22D46B]">{t("projectPage.mubi.h2Highlight")}</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{t("projectPage.mubi.description")}</p>
                <h3 className="text-xl font-semibold mb-4">{t("projectPage.myKeyResponsibilities")}</h3>
                <ul className="space-y-3 text-slate-400">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#22D46B] shrink-0" aria-hidden="true"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...reveal} className="rounded-2xl overflow-hidden border border-white/10 bg-[#f4f2ee]">
                <ImageWithShimmer src={desktop} alt="MUBI — десктопная версия" className="w-full h-auto" wrapperClassName="w-full" shimmerColor="bg-[#22D46B]/20" />
              </motion.div>
            </section>

            <section className="grid md:grid-cols-3 gap-10 md:gap-16">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("projectPage.challengesTitle")}</h2>
                <div className="space-y-5">
                  {challenges.map((c, i) => {
                    const Icon = challengeIcons[i] ?? ScanBarcode;
                    return (
                      <motion.div {...reveal} key={c.title} className="flex gap-5 rounded-2xl bg-slate-900/50 border border-white/5 p-6">
                        <div className="p-3 h-fit rounded-xl bg-[#22D46B]/10 text-[#22D46B] shrink-0">
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

              <aside className="md:pt-16">
                <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6">
                  <h3 className="text-sm font-semibold text-slate-400 mb-4">{t("projectPage.techStack")}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <li key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">{tech}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </section>

            <ProjectNext current="mubi" />
          </div>
        </main>
      </div>
    </div>
  );
}
