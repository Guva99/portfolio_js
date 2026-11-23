import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ConnectionMap } from "@/components/ui/connection-map";
import { DeviceMorph } from "@/components/ui/device-morph";
import pulsar1 from "@/assets/images/pulsar/screen1.webp";
import pulsar2 from "@/assets/images/pulsar/screen2.webp";
import pulsar3 from "@/assets/images/pulsar/screen3.webp";
import wow1 from "@/assets/images/wowtickets/screen1.webp";
import wow2 from "@/assets/images/wowtickets/screen2.webp";
import wow3 from "@/assets/images/wowtickets/screen3.webp";
import apeiron1 from "@assets/apeiron1_1770928057161.webp";
import apeiron2 from "@assets/apeiron2_1770928057161.webp";
import apeiron4 from "@assets/apeiron4_1770928057162.webp";

// Tech stack as a brick wall, listed bottom (foundation) → top (still being built).
// Odd rows are offset by half a brick, like a running bond.
const wallRows = [
  ["Flutter", "Dart", "BLoC", "Riverpod", "MobX"],
  ["Clean Architecture", "Flutter Web", "Add-to-App"],
  ["Firebase", "REST API", "GraphQL", "WebSocket"],
  ["WebRTC", "FFmpeg / HLS", "Stripe", "CI/CD"],
  ["Integration tests", "Go", "Python"],
  ["JavaScript", "LLM / AI"],
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
    <div ref={ref} className="relative h-full flex items-end justify-center gap-4 px-8 pt-10 overflow-hidden">
      {phones.map((phone, i) => (
        <motion.div
          key={phone.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={`w-[28%] max-w-[140px] ${phone.offset}`}
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


type ChartRow = { id: string; name?: string; catKey?: string; color?: string; letter?: string };

const ourApps: Record<string, ChartRow> = {
  pulsar: { id: "pulsar", name: "PulSarBonus", catKey: "skills.catMedical", color: "#06BA00", letter: "P" },
  wow: { id: "wow", name: "WowTickets", catKey: "skills.catTravel", color: "#B632DA", letter: "W" },
  apeiron: { id: "apeiron", name: "Apeiron Space", catKey: "skills.catLifestyle", color: "#4A857C", letter: "A" },
};
// Successive chart orders: our three apps climb past placeholder rows to the top.
const chartSteps = [
  ["f1", "f2", "pulsar", "f3", "wow", "f4", "apeiron"],
  ["f1", "pulsar", "f2", "wow", "f3", "apeiron", "f4"],
  ["pulsar", "f1", "wow", "f2", "apeiron", "f3", "f4"],
  ["pulsar", "wow", "f1", "apeiron", "f2", "f3", "f4"],
  ["pulsar", "wow", "apeiron", "f1", "f2", "f3", "f4"],
];

/** App Store–style top chart (stylised) where the apps rise to the top. */
function StoreChart() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ids = chartSteps.slice(1).map((_, i) => window.setTimeout(() => setStep(i + 1), 600 + i * 620));
    return () => ids.forEach(window.clearTimeout);
  }, []);

  const order = chartSteps[step];
  const prev = chartSteps[Math.max(step - 1, 0)];
  const done = step === chartSteps.length - 1;

  return (
    <div className="w-[min(92%,420px)] rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md">
      <p className="text-[11px] font-semibold text-slate-500">App Store</p>
      <p className="mb-3 text-base font-bold text-white">{t("skills.storeTitle")}</p>
      <ol className="relative max-h-[212px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
        {order.map((id, rank) => {
          const app = ourApps[id];
          const climbing = app && prev.indexOf(id) > rank;
          return (
            <motion.li
              key={id}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`flex items-center gap-3 rounded-xl px-2 py-1.5 ${app && done ? "bg-violet-500/10" : ""}`}
            >
              <span className="w-4 text-right text-sm font-semibold tabular-nums text-slate-500">{rank + 1}</span>
              {app ? (
                <>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] text-sm font-bold text-white"
                    style={{ backgroundColor: app.color }}
                  >
                    {app.letter}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-white">{app.name}</span>
                    <span className="block text-xs text-slate-400">{t(app.catKey!)}</span>
                  </span>
                  <span className={`text-xs font-bold text-green-400 transition-opacity ${climbing ? "opacity-100" : "opacity-0"}`} aria-hidden="true">▲</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-300">{t("skills.storeGet")}</span>
                </>
              ) : (
                <>
                  <span className="h-8 w-8 shrink-0 rounded-[9px] bg-white/[0.06]" />
                  <span className="flex flex-1 flex-col gap-1.5">
                    <span className="h-2 w-2/3 rounded-full bg-white/[0.08]" />
                    <span className="h-1.5 w-1/3 rounded-full bg-white/[0.05]" />
                  </span>
                  <span className="h-6 w-16 rounded-full bg-white/[0.05]" />
                </>
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Looping showcase: the three apps → they sink into an App Store top chart where
 * they climb to the top → the chart zooms past the viewer and the apps open up again.
 */
function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<"apps" | "store">("apps");

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = window.setTimeout(() => setStage((s) => (s === "apps" ? "store" : "apps")), stage === "apps" ? 4200 : 4800);
    return () => window.clearTimeout(id);
  }, [stage, inView, reduceMotion]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div ref={ref} className="relative h-[320px] md:h-[400px] overflow-hidden">
      <AnimatePresence initial={false}>
        {stage === "apps" ? (
          <motion.div
            key="apps"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.82, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease }}
          >
            <PhoneStack />
          </motion.div>
        ) : (
          <motion.div
            key="store"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.35, filter: "blur(6px)" }}
            transition={{ duration: 0.8, ease }}
          >
            <StoreChart />
          </motion.div>
        )}
      </AnimatePresence>
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

  const showClient = reduceMotion || step <= 2;
  const showTyping = !reduceMotion && step === 1;
  const showReply = reduceMotion || step === 2;
  const fade = (visible: boolean) => ({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 8,
    scale: visible ? 1 : 0.97,
  });
  const spring = { type: "spring", stiffness: 380, damping: 30 } as const;

  return (
    <div ref={ref} className="mt-5 flex flex-col gap-2 text-sm" aria-hidden="true">
      <motion.div
        initial={false}
        animate={fade(showClient)}
        transition={spring}
        className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-white/5 border border-white/10 px-3 py-2 text-slate-300"
      >
        {t("skills.chatClient")}
      </motion.div>

      {/* The reply's box always reserves its height; the typing dots sit on top of it */}
      <div className="relative max-w-[85%] self-end">
        <motion.div
          initial={false}
          animate={fade(showReply)}
          transition={spring}
          className="rounded-2xl rounded-br-md bg-violet-600/80 px-3 py-2 text-white"
        >
          {t("skills.chatMe")}
        </motion.div>
        <motion.div
          initial={false}
          animate={fade(showTyping)}
          transition={spring}
          className="absolute right-0 top-0 flex gap-1 rounded-2xl rounded-br-md bg-violet-600/30 px-3 py-3"
        >
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className="h-1.5 w-1.5 rounded-full bg-violet-200"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}


/** Empty slot at the top of the wall; a "Your project" brick keeps dropping into it. */
function YourProjectBrick() {
  const { t } = useTranslation();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setPlaced(true);
      return;
    }
    if (!inView) return;
    const id = window.setTimeout(() => setPlaced((p) => !p), placed ? 2600 : 1400);
    return () => window.clearTimeout(id);
  }, [placed, inView, reduceMotion]);

  return (
    <span ref={ref} className="relative shrink-0 rounded-md border border-dashed border-violet-400/40" aria-hidden="true">
      {/* Invisible label sizes the slot to the brick */}
      <span className="invisible block px-2.5 py-1.5 text-xs sm:text-sm font-semibold">{t("skills.yourProject")}</span>
      <AnimatePresence>
        {placed && (
          <motion.span
            initial={{ opacity: 0, y: -36, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="absolute inset-0 grid place-items-center rounded-md border border-violet-400/60 bg-violet-600/80 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_-2px_rgba(139,92,246,0.7)]"
          >
            {t("skills.yourProject")}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

type Fall = { x: number; y: number; rotate: number; delay: number; duration: number; back: number };

// Lands with a couple of small bounces and never sinks below the floor.
function bounceOut(t: number) {
  const n = 7.5625, d = 2.75;
  if (t < 1 / d) return n * t * t;
  if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
  if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
  return n * (t -= 2.625 / d) * t + 0.984375;
}
const rnd = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * Bricks drop into place row by row, bottom-up; the top row stays unfinished.
 * Hovering the wall knocks it down into a heap at its foot; leaving rebuilds it.
 */
function BrickWall() {
  const wallRef = useRef<HTMLUListElement>(null);
  const pieces = useRef<(HTMLElement | null)[]>([]);
  const seed = useRef(0);
  const inView = useInView(wallRef, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState(false);
  const [falls, setFalls] = useState<Fall[] | null>(null);

  const collapse = () => {
    const wall = wallRef.current;
    if (!wall || reduceMotion || !inView || collapsed) return;
    const W = wall.offsetWidth;
    const H = wall.offsetHeight;
    seed.current += 1;
    const sd = seed.current * 31;
    const items = pieces.current
      .map((el, i) => (el ? { i, x0: el.offsetLeft, y0: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight } : null))
      .filter((v): v is { i: number; x0: number; y0: number; w: number; h: number } => v !== null)
      .sort((a, b) => rnd(a.i + sd) - rnd(b.i + sd));

    // Pack into layers that get narrower towards the top, overlapping like rubble.
    const layers: (typeof items)[] = [[]];
    let sum = 0;
    for (const it of items) {
      const k = layers.length - 1;
      const cap = W * Math.max(1.7 - 0.32 * k, 0.5);
      if (sum + it.w > cap && layers[k].length) {
        layers.push([]);
        sum = 0;
      }
      layers[layers.length - 1].push(it);
      sum += it.w;
    }

    const next: Fall[] = [];
    layers.forEach((layer, k) => {
      const total = layer.reduce((a, it) => a + it.w, 0);
      const span = Math.min(total, W * Math.max(0.98 - 0.15 * k, 0.35));
      const left = (W - span) / 2 + (rnd(k + sd) - 0.5) * 24;
      let cum = 0;
      layer.forEach((it) => {
        const centre = left + ((cum + it.w / 2) * span) / total;
        cum += it.w;
        const x = Math.min(Math.max(centre - it.w / 2, -8), W - it.w + 8);
        const y = H - it.h - k * it.h * 0.7 - rnd(it.i + sd + 7) * 4;
        const dy = y - it.y0;
        next[it.i] = {
          x: x - it.x0,
          y: dy,
          rotate: (rnd(it.i + sd + 3) - 0.5) * (14 + k * 8),
          delay: rnd(it.i + sd + 5) * 0.12,
          duration: 0.5 + 0.35 * Math.sqrt(Math.max(dy, 0) / H),
          back: (1 - it.y0 / H) * 0.28 + rnd(it.i + sd + 9) * 0.06,
        };
      });
    });
    setFalls(next);
    setCollapsed(true);
  };

  const rebuild = () => setCollapsed(false);

  // One element per piece: entrance drop, fall into the heap and rebuild share the same transform.
  let slot = 0;
  const piece = (entranceDelay: number) => {
    const i = slot++;
    const f = falls?.[i];
    let animate: TargetAndTransition;
    if (!inView) animate = { opacity: 0, y: -28 };
    else if (collapsed && f) {
      const ease = { duration: f.duration, delay: f.delay };
      animate = {
        opacity: 1,
        x: f.x,
        y: f.y,
        rotate: f.rotate,
        transition: {
          y: { ...ease, ease: bounceOut },
          x: { ...ease, ease: "easeOut" },
          rotate: { ...ease, ease: "easeOut" },
        },
      };
    } else {
      animate = {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: f
          ? { type: "spring" as const, stiffness: 260, damping: 24, delay: f.back }
          : { type: "spring" as const, stiffness: 520, damping: 26, delay: entranceDelay },
      };
    }
    return {
      ref: (el: HTMLElement | null) => {
        pieces.current[i] = el;
      },
      initial: { opacity: 0, y: -28 },
      animate,
    };
  };

  const brick =
    "flex-auto min-w-0 truncate rounded-md border border-white/10 bg-slate-800/90 px-2.5 py-1.5 text-center text-xs sm:text-sm text-slate-300 " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] cursor-default transition-colors duration-200 " +
    "hover:border-violet-400/50 hover:bg-violet-950 hover:text-white";
  const halfBrick = "w-4 sm:w-5 shrink-0 rounded-md border border-white/5 bg-slate-800/60";
  let order = 0;

  return (
    <ul
      ref={wallRef}
      className="relative flex flex-col-reverse gap-1.5"
      aria-label="Tech stack"
      onMouseEnter={collapse}
      onMouseLeave={rebuild}
      onClick={() => {
        // Touch screens have no hover: a tap toggles the collapse instead.
        if (window.matchMedia("(hover: none)").matches) (collapsed ? rebuild : collapse)();
      }}
    >
      {wallRows.map((row, r) => {
        const offset = r % 2 === 1;
        const isTop = r === wallRows.length - 1;
        const rowDelay = r * 0.08;
        return (
          <li key={r} className="flex gap-1.5">
            {offset && <motion.span {...piece(rowDelay)} className={halfBrick} aria-hidden="true" />}
            {row.map((tech) => (
              <motion.span
                key={tech}
                {...piece(order++ * 0.05 + rowDelay)}
                className={isTop ? brick.replace("flex-auto", "flex-none") : brick}
              >
                {tech}
              </motion.span>
            ))}
            {isTop ? (
              // Unfinished top row: the missing brick is the visitor's project
              <motion.span {...piece(order * 0.05 + rowDelay + 0.2)} className="flex shrink-0">
                <YourProjectBrick />
              </motion.span>
            ) : (
              offset && <motion.span {...piece(rowDelay)} className={halfBrick} aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ul>
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
            <AppShowcase />
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
              <BrickWall />
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

          {/* One app across Mobile, Web and TV */}
          <motion.div
            {...reveal}
            className="md:col-span-8 rounded-[2rem] overflow-hidden relative bg-slate-900/60 border border-white/5 p-8 md:p-10"
          >
            <DeviceMorph
              title={
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {t("skills.flutterSolutions")}{" "}
                  <span className="text-violet-400">{t("skills.flutterSolutionsHighlight")}</span>
                </h3>
              }
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
