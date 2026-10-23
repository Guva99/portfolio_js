import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import bentoMap from "@/assets/images/bento-map.webp";
import pulsarScreen from "@/assets/images/pulsar/screen1.webp";
import wowScreen from "@/assets/images/wowtickets/screen1.webp";
import apeironScreen from "@assets/apeiron1_1770928057161.webp";
import tavriaTv from "@/assets/images/tavria-tv-ui.webp";
import { useTranslation } from "react-i18next";

const stack = [
  "Flutter", "Dart", "BLoC", "Riverpod", "MobX", "Clean Architecture",
  "Flutter Web", "Add-to-App", "Firebase", "REST API", "GraphQL",
  "WebSocket", "WebRTC", "FFmpeg / HLS", "Stripe", "CI/CD", "Integration tests",
];

const phoneScreens = [
  { src: pulsarScreen, alt: "PulSarBonus" },
  { src: wowScreen, alt: "WowTickets" },
  { src: apeironScreen, alt: "Apeiron Space" },
];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const;

export function SkillsSection() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("g_avezov@bk.ru");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Real app screens */}
          <motion.div
            {...reveal}
            className="md:col-span-7 rounded-[2rem] overflow-hidden relative bg-slate-900/60 border border-white/5 min-h-[380px] flex flex-col"
          >
            <div className="flex-1 flex items-end justify-center gap-4 px-8 pt-10 overflow-hidden">
              {phoneScreens.map(({ src, alt }, i) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className={`w-[28%] max-w-[150px] rounded-2xl border border-white/10 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)] ${i === 1 ? "mb-6" : "-mb-6"}`}
                />
              ))}
            </div>
            <div className="relative p-8 pt-6 bg-slate-950/80 border-t border-white/5">
              <h3 className="text-2xl md:text-3xl font-bold text-white max-w-md leading-tight">
                {t("skills.techEnthusiast")}
              </h3>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              {...reveal}
              className="rounded-[2rem] overflow-hidden relative bg-slate-900/40 h-[240px] border border-white/5"
            >
              <img
                src={bentoMap}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute top-6 left-6 max-w-[220px]">
                <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                  {t("skills.timezone")}
                </h3>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[2rem] bg-slate-900/60 p-8 border border-white/5 flex-1"
            >
              <h3 className="text-2xl font-bold text-white mb-5">{t("skills.myTechStack")}</h3>
              <ul className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div
              {...reveal}
              className="rounded-[2rem] bg-slate-900/60 p-8 border border-white/5"
            >
              <h3 className="text-xl font-bold text-white leading-snug">
                {t("skills.clientCollaboration")}
              </h3>
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[2rem] bg-slate-900/60 p-8 border border-white/5 flex flex-col justify-center items-start"
            >
              <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                {t("skills.startProjectTogether")}
              </h3>
              <button
                onClick={copyEmail}
                className="bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium border border-white/10 w-full justify-center"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? t("skills.emailCopied") : t("skills.copyEmail")}
              </button>
            </motion.div>
          </div>

          {/* Tavria.TV on Smart TV */}
          <motion.div
            {...reveal}
            className="md:col-span-8 rounded-[2rem] overflow-hidden relative bg-slate-950 min-h-[300px] border border-white/10"
          >
            <img
              src={tavriaTv}
              alt="Tavria.TV — Smart TV"
              loading="lazy"
              className="absolute inset-y-0 right-0 h-full w-full md:w-1/2 object-cover object-[center_75%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 md:via-slate-950/60 to-slate-950/10"></div>
            <div className="relative p-8 md:p-12 md:w-3/5 h-full flex items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {t("skills.flutterSolutions")}{" "}
                <span className="text-violet-400">{t("skills.flutterSolutionsHighlight")}</span>
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
