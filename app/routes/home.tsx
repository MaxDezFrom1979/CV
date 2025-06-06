import CompetencesCard from "~/components/competences-card";
import {
  aiIot,
  basesDeDonnees,
  langages,
  langues,
  technologiesMobile,
  technologiesWeb,
} from "~/data/competences";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-xl">
      <h2 className="text-3xl font-bold">
        Bonjour, je m'appelle <span className="text-5xl">Maximilien</span>
      </h2>
      <p className="text-gray-700">
        Je suis un développeur full stack qui est situé à Montréal.
      </p>
      <div>
        <CompetencesCard title="Langues parlées" competences={langues} />
        <CompetencesCard title="Langages écrits" competences={langages} />
      </div>
      <div className="py-8">
        <h2 className="text-3xl font-bold">Technologies apprises</h2>
        <CompetencesCard title="Web" competences={technologiesWeb} />
        <CompetencesCard title="Mobile" competences={technologiesMobile} />
        <CompetencesCard title="Base de données" competences={basesDeDonnees} />
        <CompetencesCard title="AI/IoT" competences={aiIot} />
      </div>
    </div>
  );
}
