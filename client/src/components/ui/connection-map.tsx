import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import bentoMap from "@/assets/images/bento-map.webp";

// Coordinates are in the map image's own pixel space (1569×773), so the overlay
// stays glued to the USA / Germany / Russia labels baked into the image at any card size.
const W = 1569;
const H = 773;
const nodes = [
  { id: "us", x: 192, y: 470 },
  { id: "de", x: 788, y: 596 },
  { id: "ru", x: 1322, y: 422 },
];
const links = [
  { d: "M192 470 Q490 290 788 596", duration: 3.2, delay: 0 },
  { d: "M788 596 Q1055 360 1322 422", duration: 2.6, delay: 0.9 },
  { d: "M1322 422 Q757 90 192 470", duration: 4.2, delay: 1.7 },
];

const zones = [
  { key: "skills.cityNY", tz: "America/New_York" },
  { key: "skills.cityBerlin", tz: "Europe/Berlin" },
  { key: "skills.cityMoscow", tz: "Europe/Moscow" },
];

function useNow(intervalMs: number) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function ConnectionMap() {
  const { t, i18n } = useTranslation();
  const now = useNow(30_000);

  return (
    <div className="absolute inset-0">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <image href={bentoMap} width={W} height={H} opacity={0.6} />

        {links.map((link) => (
          <g key={link.d}>
            {/* Faint route */}
            <path d={link.d} fill="none" stroke="rgb(167 139 250 / 0.28)" strokeWidth={3} strokeDasharray="4 12" strokeLinecap="round" />
            {/* Travelling packet */}
            <path
              d={link.d}
              pathLength={100}
              fill="none"
              stroke="rgb(196 181 253)"
              strokeWidth={6}
              strokeLinecap="round"
              strokeDasharray="9 91"
              filter="url(#packet-glow)"
              style={{ animation: `packet-flow ${link.duration}s linear ${link.delay}s infinite`, strokeDashoffset: 100 }}
            />
          </g>
        ))}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={11}
              fill="none"
              stroke="rgb(167 139 250)"
              strokeWidth={3}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `node-ping 2.4s ease-out ${i * 0.8}s infinite`,
              }}
            />
            <circle cx={node.x} cy={node.y} r={9} fill="rgb(196 181 253)" />
          </g>
        ))}
      </svg>

      <div className="absolute top-6 left-6 right-6">
        <h3 className="max-w-[220px] text-xl font-bold leading-tight text-white drop-shadow-md">{t("skills.timezone")}</h3>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
          {zones.map(({ key, tz }) => (
            <li key={tz} className="tabular-nums">
              <span className="text-slate-500">{t(key)}</span>{" "}
              <span className="text-slate-200">
                {new Intl.DateTimeFormat(i18n.language, { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(now)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
