import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/images/hero-portrait.webp";
import { FileText, Send, Check, Linkedin, Mail, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  const proofValue = t("hero.proof", { returnObjects: true });
  const proof = Array.isArray(proofValue) ? (proofValue as string[]) : [];

  const secondaryLinks = [
    { label: "hh.ru", href: "https://hh.ru/resume/8e35e946ff0910b7b00039ed1f4c6a6666666c", icon: Briefcase },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/guvanch-avezov-29810a349/", icon: Linkedin },
    { label: "g_avezov@bk.ru", href: "mailto:g_avezov@bk.ru", icon: Mail },
  ];

  return (
    <section className="relative lg:min-h-[100dvh] flex items-center pt-28 pb-16 lg:pt-24">
      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-bold tracking-tight">
            <span className="block text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white">{t("hero.name")}</span>
            <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl leading-tight text-violet-400">{t("hero.role")}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
            {t("hero.pitch")}
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl text-slate-300">
            {proof.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 shrink-0 text-violet-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={t("cvUrl")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-base">
                <FileText className="mr-2 w-4 h-4" aria-hidden="true" /> {t("hero.viewCv")}
              </Button>
            </a>
            <a href="https://t.me/guvva" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-6 border-slate-600 text-slate-200 hover:text-white hover:border-white rounded-full text-base bg-transparent"
              >
                <Send className="mr-2 w-4 h-4" aria-hidden="true" /> {t("hero.telegram")}
              </Button>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {secondaryLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]">
            <img
              src={heroPortrait}
              alt={t("hero.name")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 px-5 py-4 glass-panel rounded-xl flex justify-between items-center gap-4">
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true"></span>
                {t("hero.availableForProjects")}
              </p>
              <p className="text-slate-300 text-sm text-right">
                <span className="text-2xl font-bold text-white mr-1">5+</span>
                {t("hero.yearsExp")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
