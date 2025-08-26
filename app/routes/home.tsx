import CompetencesCard from "~/components/competences-card";
import { CompetenceType } from "~/types";
import { getCompetencesByType } from "~/utils";

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
        <CompetencesCard
          title="Langues parlées"
          competences={getCompetencesByType(CompetenceType.Langue)}
        />
        <CompetencesCard
          title="Langages écrits"
          competences={getCompetencesByType(CompetenceType.Langage)}
        />
      </div>
      <div className="py-8">
        <h2 className="text-3xl font-bold">Technologies apprises</h2>
        <CompetencesCard
          title="Web"
          competences={getCompetencesByType(CompetenceType.Web)}
        />
        <CompetencesCard
          title="Mobile"
          competences={getCompetencesByType(CompetenceType.Mobile)}
        />
        <CompetencesCard
          title="Base de données"
          competences={getCompetencesByType(CompetenceType.Bd)}
        />
        <CompetencesCard
          title="AI/IoT"
          competences={getCompetencesByType(CompetenceType.AiIot)}
        />
      </div>
    </div>
  );
}
