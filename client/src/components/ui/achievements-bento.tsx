import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Rocket, Layers, Users, MonitorSmartphone, Boxes, CalendarClock, Smartphone, Laptop, Tv, Crown, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { projects } from "@/lib/projects";

/** Number that counts up once when it scrolls into view. */
function CountUp({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
      {suffix}
    </span>
  );
}

/** Advances 0..count-1 on a timer while the element is on screen. */
function useCycle(count: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [i, setI] = useState(reduceMotion ? count - 1 : 0);
  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % count), ms);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion, count, ms]);
  return [ref, i] as const;
}

type Accent = { text: string; glow: string; ring: string; soft: string };
const accents = {
  rose: { text: "text-rose-400", glow: "bg-rose-500/20", ring: "hover:border-rose-400/30", soft: "bg-rose-500/10" },
  amber: { text: "text-amber-400", glow: "bg-amber-500/20", ring: "hover:border-amber-400/30", soft: "bg-amber-500/10" },
  emerald: { text: "text-emerald-400", glow: "bg-emerald-500/20", ring: "hover:border-emerald-400/30", soft: "bg-emerald-500/10" },
  sky: { text: "text-sky-400", glow: "bg-sky-500/20", ring: "hover:border-sky-400/30", soft: "bg-sky-500/10" },
  violet: { text: "text-violet-400", glow: "bg-violet-500/20", ring: "hover:border-violet-400/30", soft: "bg-violet-500/10" },
  cyan: { text: "text-cyan-400", glow: "bg-cyan-500/20", ring: "hover:border-cyan-400/30", soft: "bg-cyan-500/10" },
} satisfies Record<string, Accent>;

function Card({
  accent,
  icon: Icon,
  text,
  visual,
  index,
  className = "",
}: {
  accent: Accent;
  icon: typeof Rocket;
  text: string;
  visual: ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/60 transition-colors duration-500 ${accent.ring} ${className}`}
    >
      {/* Accent glow that wakes up on hover */}
      <div className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`} />
      <div className="relative flex min-h-[170px] flex-1 items-center justify-center px-6 pt-6">{visual}</div>
      <div className="relative flex items-start gap-3 p-6 pt-4">
        <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${accent.soft} ${accent.text}`}>
          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-base md:text-lg font-semibold leading-snug text-slate-100">{text}</h3>
      </div>
    </motion.div>
  );
}

// Brand colour per case study, used for the dot next to each product name.
const productColors: Record<string, string> = {
  sellup: "#F06A2A",
  mubi: "#22D46B",
  healthcare: "#06BA00",
  travel: "#B632DA",
  apeiron: "#4A857C",
  wise: "#2F6FDB",
  media: "#FECB0E",
  truefortwo: "#E11D48",
  "2sky": "#0EA5E9",
};

/** 10+ apps: big counter over a drifting shelf of real products, each linking to its case. */
function AppsVisual() {
  const row = [...projects, ...projects];
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <CountUp to={10} suffix="+" className="text-6xl md:text-7xl font-bold tracking-tight text-white" />
      <div className="relative w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max gap-2.5 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <li key={i} aria-hidden={i >= projects.length || undefined}>
              <Link
                href={`/projects/${p.slug}`}
                tabIndex={i >= projects.length ? -1 : undefined}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-800/80 px-3.5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-slate-700 hover:text-white"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: productColors[p.slug] ?? "#a78bfa" }} />
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Architecture → release → support: a progress dot walks the pipeline. */
function PipelineVisual() {
  const { t } = useTranslation();
  const stages = [t("experienceSection.stages.arch"), t("experienceSection.stages.release"), t("experienceSection.stages.support")];
  const [ref, step] = useCycle(stages.length + 1, 1100);
  const reached = Math.min(step, stages.length - 1);
  return (
    <div ref={ref} className="w-full max-w-md">
      <div className="relative mx-6 h-1 rounded-full bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
          animate={{ width: `${(reached / (stages.length - 1)) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
        {stages.map((_, i) => (
          <motion.span
            key={i}
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{ left: `${(i / (stages.length - 1)) * 100}%` }}
            animate={{
              backgroundColor: i <= reached ? "rgb(251 191 36)" : "rgb(15 23 42)",
              borderColor: i <= reached ? "rgb(252 211 77)" : "rgba(255,255,255,0.2)",
              scale: i === reached ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 text-center text-xs md:text-sm font-medium">
        {stages.map((label, i) => (
          <span key={label} className={`transition-colors duration-300 ${i <= reached ? "text-amber-300" : "text-slate-500"}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Team lead: decisions travel from the lead to the three developers. */
function TeamVisual() {
  const devs = [
    { x: 30, y: 92 },
    { x: 100, y: 108 },
    { x: 170, y: 92 },
  ];
  return (
    <div className="relative h-[140px] w-[200px]">
      <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {devs.map((d, i) => {
          const path = `M100 30 Q${(100 + d.x) / 2} ${d.y - 30} ${d.x} ${d.y}`;
          return (
            <g key={i}>
              <path d={path} fill="none" stroke="rgb(52 211 153 / 0.25)" strokeWidth={1.5} strokeDasharray="3 5" />
              <path
                d={path}
                pathLength={100}
                fill="none"
                stroke="rgb(110 231 183)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray="10 90"
                style={{ animation: `packet-flow 2.4s linear ${i * 0.5}s infinite`, strokeDashoffset: 100 }}
              />
            </g>
          );
        })}
      </svg>
      <span className="absolute left-1/2 top-[30px] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_0_24px_-2px_rgba(16,185,129,0.6)] transition-transform duration-500 group-hover:scale-110">
        <Crown className="h-5 w-5" aria-hidden="true" />
      </span>
      {devs.map((d, i) => (
        <span
          key={i}
          className="absolute grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-emerald-400/30 bg-slate-800 text-emerald-300"
          style={{ left: `${(d.x / 200) * 100}%`, top: `${(d.y / 140) * 100}%` }}
        >
          <User className="h-4 w-4" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

/** Mobile + Web + TV: the highlight hops between the three screens. */
function PlatformsVisual() {
  const [ref, active] = useCycle(3, 1300);
  const items = [
    { Icon: Smartphone, label: "Mobile", size: "h-10 w-10" },
    { Icon: Laptop, label: "Web", size: "h-12 w-12" },
    { Icon: Tv, label: "TV", size: "h-12 w-12" },
  ];
  return (
    <div ref={ref} className="flex items-end gap-5">
      {items.map(({ Icon, label, size }, i) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <motion.span
            animate={{ y: active === i ? -6 : 0, opacity: active === i ? 1 : 0.45 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`relative ${active === i ? "text-sky-300" : "text-slate-400"}`}
          >
            <Icon className={size} strokeWidth={1.4} aria-hidden="true" />
            {active === i && (
              <motion.span layoutId="platform-glow" className="absolute inset-0 -z-10 rounded-full bg-sky-500/30 blur-xl" />
            )}
          </motion.span>
          <span className={`text-xs font-semibold transition-colors ${active === i ? "text-sky-300" : "text-slate-500"}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

/** Clean architecture: three layers that pull apart on hover. */
function LayersVisual() {
  const layers = [
    { label: "Presentation", cls: "bg-violet-500/25 border-violet-400/40 text-violet-200", shift: "group-hover:-translate-y-3" },
    { label: "Domain", cls: "bg-violet-500/15 border-violet-400/25 text-violet-200/90", shift: "" },
    { label: "Data", cls: "bg-violet-500/10 border-violet-400/15 text-violet-200/70", shift: "group-hover:translate-y-3" },
  ];
  return (
    <div className="flex w-full max-w-[220px] flex-col gap-1.5 [perspective:600px]">
      {layers.map((l, i) => (
        <div
          key={l.label}
          className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold tracking-wide transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:rotateX(18deg)] ${l.cls} ${l.shift}`}
          style={{ marginInline: `${i * 10}px` }}
        >
          {l.label}
        </div>
      ))}
    </div>
  );
}

/** 5+ years: counter plus a timeline from the first job to today. */
function YearsVisual() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const now = new Date().getFullYear();
  return (
    <div ref={ref} className="flex w-full flex-col items-center gap-4">
      <div className="text-center">
        <CountUp to={5} suffix="+" className="text-6xl md:text-7xl font-bold tracking-tight text-white" />
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{t("experienceSection.years")}</p>
      </div>
      <div className="w-full">
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-400"
            initial={{ width: 0 }}
            animate={{ width: inView ? "100%" : 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] tabular-nums text-slate-500">
          <span>2020</span>
          <span>{now}</span>
        </div>
      </div>
    </div>
  );
}

export function AchievementsBento() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card index={0} accent={accents.rose} icon={Rocket} className="lg:col-span-2" text={t("experienceSection.highlights.appsReleased")} visual={<AppsVisual />} />
      <Card index={1} accent={accents.cyan} icon={CalendarClock} text={t("experienceSection.experienceYears")} visual={<YearsVisual />} />
      <Card index={2} accent={accents.emerald} icon={Users} text={t("experienceSection.highlights.teamLead")} visual={<TeamVisual />} />
      <Card index={3} accent={accents.amber} icon={Layers} className="lg:col-span-2" text={t("experienceSection.highlights.projectsFromScratch")} visual={<PipelineVisual />} />
      <Card index={4} accent={accents.sky} icon={MonitorSmartphone} text={t("experienceSection.highlights.multiPlatform")} visual={<PlatformsVisual />} />
      <Card index={5} accent={accents.violet} icon={Boxes} text={t("experienceSection.highlights.cleanArch")} visual={<LayersVisual />} />
    </div>
  );
}
