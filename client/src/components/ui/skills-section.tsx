import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ConnectionMap } from "@/components/ui/connection-map";
import pulsar1 from "@/assets/images/pulsar/screen1.webp";
import pulsar2 from "@/assets/images/pulsar/screen2.webp";
import pulsar3 from "@/assets/images/pulsar/screen3.webp";
import wow1 from "@/assets/images/wowtickets/screen1.webp";
import wow2 from "@/assets/images/wowtickets/screen2.webp";
import wow3 from "@/assets/images/wowtickets/screen3.webp";
import apeiron1 from "@assets/apeiron1_1770928057161.webp";
import apeiron2 from "@assets/apeiron2_1770928057161.webp";
import apeiron4 from "@assets/apeiron4_1770928057162.webp";
import tavriaTv from "@/assets/images/tavria-tv-ui.webp";

const stack = [
  "Flutter", "Dart", "BLoC", "Riverpod", "MobX", "Clean Architecture",
  "Flutter Web", "Add-to-App", "Firebase", "REST API", "GraphQL",
  "WebSocket", "WebRTC", "FFmpeg / HLS", "Stripe", "CI/CD", "Integration tests",
  "Go", "Python", "JavaScript", "LLM / AI",
];

// Each phone cycles through real screens of one project.
const phones = [
  { name: "PulSarBonus", screens: [pulsar1, pulsar2, pulsar3], fan: "group-hover:-translate-x-4 group-hover:-rotate-6", offset: "-mb-6" },
  { name: "WowTickets", screens: [wow1, wow2, wow3], fan: "group-hover:-translate-y-3 group-hover:scale-105", offset: "mb-6" },
  { name: "Apeiron Space", screens: [apeiron1, apeiron2, apeiron4], fan: "group-hover:translate-x-4 group-hover:rotate-6", offset: "-mb-6" },
];

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const;

/** Advances one phone at a time, round-robin, while the card is on screen. */
function usePhoneScreens(active: boolean) {
  const [indices, setIndices] = useState(() => phones.map(() => 0));
  const tick = useRef(0);
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      const phone = tick.current % phones.length;
      tick.current += 1;
      setIndices((prev) => prev.map((v, i) => (i === phone ? (v + 1) % phones[i].screens.length : v)));
    }, 1600);
    return () => window.clearInterval(id);
  }, [active]);
  return indices;
}

function PhoneStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const indices = usePhoneScreens(inView && !reduceMotion);

  return (
    <div ref={ref} className="flex-1 flex items-end justify-center gap-4 px-8 pt-10 overflow-hidden">
      {phones.map((phone, i) => (
        <motion.div
          key={phone.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={`w-[28%] max-w-[150px] ${phone.offset}`}
        >
          {/* Hover fan-out lives on its own wrapper so it never fights the idle float */}
          <div className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${phone.fan}`}>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)]"
            >
              {phone.screens.map((src, s) => (
                <img
                  key={src}
                  src={src}
                  alt={s === indices[i] ? phone.name : ""}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${s === indices[i] ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
      {/* Soft violet glow under the stack, brightens on hover */}
      <div className="pointer-events-none absolute bottom-24 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

/** Tiny looping chat: client asks → typing → I reply. Static final state for reduced motion. */
function ChatLoop() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px" });
  // 0 client asks · 1 typing · 2 reply · 3 short pause with nothing shown
  const [step, setStep] = useState(2);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    setStep(0);
    const durations = [1400, 1300, 3400, 600];
    let current = 0;
    let id: number;
    const next = () => {
      id = window.setTimeout(() => {
        current = (current + 1) % durations.length;
        setStep(current);
        next();
      }, durations[current]);
    };
    next();
    return () => window.clearTimeout(id);
  }, [reduceMotion, inView]);

  const bubble = { initial: { opacity: 0, y: 8, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0 } };

  return (
    <div ref={ref} className="mt-5 flex min-h-[112px] flex-col gap-2 text-sm" aria-hidden="true">
      <AnimatePresence initial={false}>
        {reduceMotion || step <= 2 ? (
          <motion.div key="client" {...bubble} className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-white/5 border border-white/10 px-3 py-2 text-slate-300">
            {t("skills.chatClient")}
          </motion.div>
        ) : null}
        {!reduceMotion && step === 1 && (
          <motion.div key="typing" {...bubble} className="self-end flex gap-1 rounded-2xl rounded-br-md bg-violet-600/30 px-3 py-3">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="h-1.5 w-1.5 rounded-full bg-violet-200"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
              />
            ))}
          </motion.div>
        )}
        {(reduceMotion || step === 2) && (
          <motion.div key="me" {...bubble} className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-violet-600/80 px-3 py-2 text-white">
            {t("skills.chatMe")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            className="group md:col-span-7 rounded-[2rem] overflow-hidden relative bg-slate-900/60 border border-white/5 min-h-[380px] flex flex-col transition-colors duration-500 hover:border-violet-400/20"
          >
            <PhoneStack />
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
              <ConnectionMap />
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[2rem] bg-slate-900/60 p-8 border border-white/5 flex-1"
            >
              <h3 className="text-2xl font-bold text-white mb-5">{t("skills.myTechStack")}</h3>
              <ul className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.025 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10 cursor-default transition-colors duration-200 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    {tech}
                  </motion.li>
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
              <ChatLoop />
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[2rem] bg-slate-900/60 p-8 border border-white/5 flex flex-col justify-center items-start"
            >
              <p className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                {t("hero.availableForProjects")}
              </p>
              <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                {t("skills.startProjectTogether")}
              </h3>
              <button
                onClick={copyEmail}
                className="bg-white/10 hover:bg-violet-600 active:scale-95 transition-all duration-300 text-white px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium border border-white/10 hover:border-violet-500 w-full justify-center"
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
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 overflow-hidden">
              <img
                src={tavriaTv}
                alt="Tavria.TV — Smart TV"
                loading="lazy"
                className="h-full w-full object-cover object-[center_75%] animate-[ken-burns_18s_ease-in-out_infinite]"
              />
              {/* Live badge + playback progress, like a TV player */}
              <span className="absolute top-5 right-5 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true"></span>
                LIVE
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10" aria-hidden="true">
                <div className="h-full origin-left bg-[#FECB0E] animate-[tv-progress_12s_linear_infinite]"></div>
              </div>
            </div>
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
