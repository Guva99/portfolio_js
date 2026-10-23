import { useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { projects } from "@/lib/projects";

// Keeps the browser tab title in sync with the current route and language.
export function DocumentTitle() {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const name = t("hero.name");
    const slug = location.startsWith("/projects/") ? location.slice("/projects/".length) : null;
    const project = projects.find((p) => p.slug === slug);

    let page: string | null = null;
    if (project) page = project.name;
    else if (slug === "smarthome") page = t("meta.smartHome");
    else if (location === "/experience") page = t("meta.experience");
    else if (location === "/technologies") page = t("meta.technologies");
    else if (location !== "/") page = t("meta.notFound");

    document.title = page ? `${page} — ${name}` : `${name} — ${t("hero.role")}`;
  }, [location, t, i18n.language]);

  return null;
}
