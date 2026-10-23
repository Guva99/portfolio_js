import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/ui/navbar";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] w-full bg-slate-950 text-white">
      <Navbar />
      <main className="container mx-auto px-4 min-h-[80dvh] flex items-center">
        <div className="max-w-xl">
          <p className="text-7xl md:text-8xl font-bold text-violet-400 leading-none">404</p>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold">{t("notFound.title")}</h1>
          <p className="mt-4 text-lg text-slate-300">{t("notFound.description")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> {t("notFound.home")}
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center h-12 px-6 rounded-full border border-slate-600 text-slate-200 hover:text-white hover:border-white transition-colors"
            >
              {t("projectPage.allProjects")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
