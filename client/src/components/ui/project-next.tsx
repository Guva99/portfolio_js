import { Link } from "wouter";
import { ArrowRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects, projectHref } from "@/lib/projects";

export function ProjectNext({ current, next: nextSlug }: { current: string; next?: string }) {
  const { t } = useTranslation();
  const index = projects.findIndex((p) => p.slug === current);
  const next = projects.find((p) => p.slug === nextSlug) ?? projects[(index + 1) % projects.length];

  return (
    <section className="mt-24 pt-10 border-t border-white/10 grid md:grid-cols-2 gap-10 items-end">
      <Link href={projectHref(next.slug)} className="group block">
        <p className="text-sm text-slate-400 mb-2">{t("projectPage.nextProject")}</p>
        <p className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          {next.name}
          <ArrowRight className="w-7 h-7 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
        </p>
        <p className="text-slate-400 mt-1">{t(`projectPage.${next.i18nId}.badge`)}</p>
      </Link>

      <div className="md:text-right">
        <p className="text-lg text-white font-semibold mb-4">{t("projectPage.similarProject")}</p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href="https://t.me/guvva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
          >
            <Send className="w-4 h-4" aria-hidden="true" /> {t("hero.telegram")}
          </a>
          <Link
            href="/#projects"
            className="inline-flex items-center h-12 px-6 rounded-full border border-slate-600 text-slate-200 hover:text-white hover:border-white transition-colors"
          >
            {t("projectPage.allProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
