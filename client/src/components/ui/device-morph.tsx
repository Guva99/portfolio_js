import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Smartphone, Globe, Tv } from "lucide-react";
import { useTranslation } from "react-i18next";
import tavriaMobile from "@/assets/images/tavria/mobile.webp";
import tavriaWeb from "@/assets/images/tavria/web.webp";
import tavriaTv from "@/assets/images/tavria/tv.webp";

type DeviceId = "mobile" | "web" | "tv";

const devices: { id: DeviceId; label: string; icon: typeof Tv; src: string }[] = [
  { id: "mobile", label: "Mobile", icon: Smartphone, src: tavriaMobile },
  { id: "web", label: "Web", icon: Globe, src: tavriaWeb },
  { id: "tv", label: "TV", icon: Tv, src: tavriaTv },
];

const spring = { type: "spring", stiffness: 170, damping: 24 } as const;

/** Frame geometry for each device, derived from the available stage size. */
function frameFor(id: DeviceId, stageW: number, stageH: number) {
  if (id === "mobile") {
    const h = Math.min(stageH - 12, 340);
    return { width: Math.round(h * 0.47), height: h, borderRadius: 28, bezel: 6 };
  }
  if (id === "web") {
    const w = Math.min(stageW, 500, (stageH - 8) / 0.62);
    return { width: Math.round(w), height: Math.round(w * 0.62), borderRadius: 12, bezel: 0 };
  }
  // TV leaves room for its stand
  const w = Math.min(stageW, 500, (stageH - 28) / 0.5625);
  return { width: Math.round(w), height: Math.round(w * 0.5625), borderRadius: 8, bezel: 6 };
}

/**
 * One Tavria.TV app flowing between phone, browser and TV frames — the same
 * product on every screen. Auto-advances while visible; the tabs switch it by hand.
 */
export function DeviceMorph({ title }: { title: ReactNode }) {
  const { t } = useTranslation();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [size, setSize] = useState({ w: 380, h: 250 });
  const [index, setIndex] = useState(2);
  const [pausedUntil, setPausedUntil] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setSize({ w: entry.contentRect.width, h: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil) return;
      setIndex((i) => (i + 1) % devices.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion, pausedUntil]);

  const device = devices[index];
  const frame = frameFor(device.id, size.w, size.h);
  const isWeb = device.id === "web";
  const isTv = device.id === "tv";

  return (
    <div className="grid h-full items-center gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
      <div className="flex flex-col gap-6">
        {title}
        <div role="group" aria-label={t("skills.deviceSwitch")} className="flex w-fit gap-1 rounded-full border border-white/10 bg-slate-950/60 p-1">
          {devices.map((d, i) => {
            const active = i === index;
            const Icon = d.icon;
            return (
              <button
                key={d.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setIndex(i);
                  setPausedUntil(Date.now() + 8000);
                }}
                className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${active ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                {active && <motion.span layoutId="device-tab" transition={spring} className="absolute inset-0 rounded-full bg-violet-600" />}
                <Icon className="relative h-3.5 w-3.5" aria-hidden="true" />
                <span className="relative">{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div ref={stageRef} className="relative flex w-full items-center justify-center h-[300px] md:h-[360px]">
        <div className="flex flex-col items-center">
          <motion.div
            initial={false}
            animate={{ width: frame.width, height: frame.height, borderRadius: frame.borderRadius, padding: frame.bezel }}
            transition={spring}
            className="relative bg-slate-800 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
          >
            <motion.div
              initial={false}
              animate={{ borderRadius: Math.max(frame.borderRadius - frame.bezel, 4) }}
              transition={spring}
              className="relative flex h-full w-full flex-col overflow-hidden bg-slate-950"
            >
              {/* Browser chrome */}
              <motion.div
                initial={false}
                animate={{ height: isWeb ? 18 : 0, opacity: isWeb ? 1 : 0 }}
                transition={spring}
                className="flex shrink-0 items-center gap-1 bg-slate-800 px-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                <span className="ml-2 h-2 flex-1 max-w-[50%] rounded-full bg-white/10" />
              </motion.div>

              <div className="relative flex-1">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={device.id}
                    src={device.src}
                    alt={`Tavria.TV — ${device.label}`}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Phone notch */}
            <motion.span
              initial={false}
              animate={{ opacity: device.id === "mobile" ? 1 : 0 }}
              className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-800"
            />
          </motion.div>

          {/* TV stand */}
          <motion.div
            initial={false}
            animate={{ opacity: isTv ? 1 : 0, scaleX: isTv ? 1 : 0.4, height: isTv ? 14 : 0 }}
            transition={spring}
            className="flex w-40 flex-col items-center"
          >
            <span className="h-2.5 w-3 bg-slate-700" />
            <span className="h-1 w-24 rounded-full bg-slate-700" />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
