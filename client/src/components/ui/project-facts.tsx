import { useTranslation } from "react-i18next";

type Facts = Partial<Record<"role" | "period" | "platforms" | "result", string>>;

const factOrder = [
  { key: "role", labelKey: "projectPage.factRole" },
  { key: "period", labelKey: "projectPage.factPeriod" },
  { key: "platforms", labelKey: "projectPage.factPlatforms" },
  { key: "result", labelKey: "projectPage.factResult" },
] as const;

export function ProjectFacts({ id, accent }: { id: string; accent: string }) {
  const { t } = useTranslation();
  const value = t(`projectPage.${id}.facts`, { returnObjects: true });
  const facts: Facts = value && typeof value === "object" ? (value as Facts) : {};
  const items = factOrder.filter(({ key }) => facts[key]);

  if (items.length === 0) return null;

  return (
    <dl
      className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 border-t-2 pt-6"
      style={{ borderTopColor: accent }}
    >
      {items.map(({ key, labelKey }) => (
        <div key={key} className={key === "result" ? "col-span-2 lg:col-span-1" : undefined}>
          <dt className="text-sm text-slate-400 mb-1">{t(labelKey)}</dt>
          <dd className={key === "result" ? "text-white font-semibold leading-snug" : "text-white leading-snug"}>
            {facts[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
