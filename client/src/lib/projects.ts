// Single ordered list of case studies: drives the navbar dropdown and "next project" links.
export const projects = [
  { slug: "healthcare", name: "PulSarBonus", i18nId: "healthcare" },
  { slug: "travel", name: "WowTickets", i18nId: "travel" },
  { slug: "apeiron", name: "Apeiron Space", i18nId: "apeiron" },
  { slug: "wise", name: "Wise City", i18nId: "wise" },
  { slug: "media", name: "Tavria.TV", i18nId: "media" },
  { slug: "truefortwo", name: "True for Two", i18nId: "social" },
  { slug: "2sky", name: "2SkyMobile", i18nId: "connectivity" },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export function projectHref(slug: string) {
  return `/projects/${slug}`;
}
