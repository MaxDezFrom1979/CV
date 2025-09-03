import type { ExperienceDetailsProps } from "~/types";
import { getCompetencesByArray, isMobile } from "~/utils";
import CompetencesCard from "./competences-card";
import { BackArrow } from "./back-arrow";

export default function ExperienceDetails({
  experience: exp,
  onArrowClick,
}: ExperienceDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row text-xl justify-evenly w-full h-full relative">
      <BackArrow onClick={onArrowClick} />
      <div className="flex flex-col items-center flex-1 md:border-r">
        <h2 className="flex-1 text-3xl font-bold">{exp.title}</h2>
        <p className="text-gray-700">
          J'ai travaillé pour {exp.company?.prefix}
          {exp.company?.value} {exp.date?.prefix}
          {exp.date?.value.toLowerCase()}.
        </p>
        <p className="text-gray-700">
          C'était à {exp.location}
          {exp.project && ` sur le projet ${exp.project}`}.
        </p>
        {exp.technologies && (
          <>
            <span className="bg-black h-[1px] my-4 rounded-md w-[60%]" />
            <CompetencesCard
              title="Technologies"
              competences={getCompetencesByArray(exp.technologies)}
            />
          </>
        )}
      </div>
      <div className="flex flex-col flex-2 relative p-2 text-start">
        {exp.imageUrl && (
          <img
            src={exp.imageUrl}
            alt={exp.title}
            className="absolute inset-0 w-full h-full object-contain opacity-5"
            style={{ zIndex: 0 }}
          />
        )}
        <div className="relative z-10 flex flex-col h-full">
          {exp.description && (
            <>
              {isMobile() && (
                <span className="bg-black h-[1px] my-4 rounded-md w-[60%]" />
              )}
              <h3 className="text-2xl font-bold">Description</h3>
              <p className="text-gray-700 whitespace-break-spaces">
                {exp.description}
              </p>
              <p className="mt-2 text-gray-700 font-bold whitespace-break-spaces">
                {exp.learned}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
