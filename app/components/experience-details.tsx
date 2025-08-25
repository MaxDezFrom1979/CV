import type { ExperienceDetailsProps } from "~/types";
import { getCompetencesByArray, isMobile } from "~/utils";
import CompetencesCard from "./competences-card";
import leftArrowImg from "~/assets/images/arrowleft.png";

export default function ExperienceDetails({
  experience: exp,
  onArrowClick,
}: ExperienceDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row text-xl justify-evenly w-full h-full">
      <div className="flex flex-col items-center flex-1 md:border-r">
        <div className="flex flex-row items-end">
          <button
            className="size-12 flex-none text-3xl cursor-pointer"
            onClick={onArrowClick}
          >
            <img
              className="animate-pulse"
              src={leftArrowImg}
              alt="Go back img"
            />
          </button>
          <h2 className="flex-1 text-3xl font-bold">{exp.title}</h2>
        </div>
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
      <div className="flex flex-col flex-2 relative">
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
              <p className="item-body text-gray-700 whitespace-break-spaces">
                {exp.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
