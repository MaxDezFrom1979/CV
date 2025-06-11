import CompetencesCard from "~/components/competences-card";
import NavbarLink from "~/components/navbar-link";
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
      <span className="bg-black h-[1px] my-1 rounded-md w-[80%]" />
      <div className="flex text-2xl py-8">
        <NavbarLink className="w-30" title="Expériences" link="/experiences" />
        <NavbarLink className="w-30" title="Bénévolat" link="/benevolat" />
        <NavbarLink
          className="cursor-pointer w-30"
          title="Mon CV"
          onClick={() => {
            window.open("/CV_Maximilien_Desilets_2025.pdf", "_blank");
          }}
        />
      </div>
    </div>
  );
}
