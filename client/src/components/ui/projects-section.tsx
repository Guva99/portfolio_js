import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/ui/project-card";
import sellupDashboard from "@/assets/images/sellup/dashboard.webp";
import mubiDesktop from "@/assets/images/mubi/desktop.webp";
import pulsarImage from "@/assets/images/pulsar-bonus.webp";
import wowImage from "@/assets/images/wowtickets/main.webp";
import apeironImage from "@assets/image_1770921547262.webp";
import tavriaImage from "@assets/image_1770932932101.webp";
import trueForTwoImage from "@assets/Group_1_1770974052433.webp";
import twoSkyImage from "@assets/image_1770975442018.webp";

interface ProjectItem {
  id: string;
  product: string;
  titleKey: string;
  descKey: string;
  tech: string[];
  link: string;
  image: string;
  imagePosition?: string;
  /** Deep brand tone for the gradient and bright brand tone for accents (HSL triplets). */
  theme: string;
  accent: string;
  wide?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "sellup", product: "SellUp", titleKey: "nav.commerce", descKey: "projects.sellup.description",
    tech: ["Go", "Python", "JavaScript", "AI"], link: "/projects/sellup",
    image: sellupDashboard, imagePosition: "top", theme: "20 65% 16%", accent: "20 87% 56%", wide: true,
  },
  {
    id: "mubi", product: "MUBI", titleKey: "nav.logistics", descKey: "projects.mubi.description",
    tech: ["Next.js", "Barcode scanner", "SellUp"], link: "/projects/mubi",
    image: mubiDesktop, imagePosition: "90% center", theme: "148 55% 12%", accent: "145 72% 48%",
  },
  {
    id: "healthcare", product: "PulSarBonus", titleKey: "nav.healthcare", descKey: "projects.healthcare.description",
    tech: ["Flutter", "MobX", "Maps"], link: "/projects/healthcare",
    image: pulsarImage, imagePosition: "78% center", theme: "120 60% 11%", accent: "118 100% 40%",
  },
  {
    id: "travel", product: "WowTickets", titleKey: "nav.travel", descKey: "projects.travel.description",
    tech: ["Flutter", "BLoC", "Clean Architecture"], link: "/projects/travel",
    image: wowImage, imagePosition: "center top", theme: "287 50% 16%", accent: "287 69% 60%",
  },
  {
    id: "smarthome", product: "Apeiron Space · Wise City", titleKey: "nav.smartHome", descKey: "projects.smarthome.description",
    tech: ["Flutter", "WebSockets", "IoT"], link: "/projects/smarthome",
    image: apeironImage, imagePosition: "center", theme: "185 45% 12%", accent: "172 40% 55%",
  },
  {
    id: "media", product: "Tavria.TV", titleKey: "nav.media", descKey: "projects.media.description",
    tech: ["Flutter", "Smart TV", "HLS"], link: "/projects/media",
    image: tavriaImage, imagePosition: "left top", theme: "42 55% 12%", accent: "47 99% 53%",
  },
  {
    id: "social", product: "True for Two", titleKey: "nav.social", descKey: "projects.social.description",
    tech: ["Flutter", "Firebase", "Riverpod"], link: "/projects/truefortwo",
    image: trueForTwoImage, imagePosition: "35% center", theme: "237 45% 18%", accent: "237 91% 75%",
  },
  {
    id: "connectivity", product: "2SkyMobile", titleKey: "nav.connectivity", descKey: "projects.connectivity.description",
    tech: ["Flutter", "Flutter Web", "Stripe"], link: "/projects/2sky",
    image: twoSkyImage, imagePosition: "70% center", theme: "225 55% 16%", accent: "217 91% 60%",
  },
];

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("projects.title")} <span className="text-cyan-400">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={project.wide ? "lg:col-span-2" : undefined}
            >
              <ProjectCard
                href={project.link}
                imageUrl={project.image}
                imagePosition={project.imagePosition}
                title={project.product}
                subtitle={t(project.titleKey)}
                description={t(project.descKey)}
                tech={project.tech}
                cta={t("projects.viewCase")}
                themeColor={project.theme}
                accentColor={project.accent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
