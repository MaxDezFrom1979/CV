import { useEffect, useRef, useState } from "react";
import Arrow from "~/components/arrow";
import ExperienceCard from "~/components/experience-card";
import type { Experience, ExperiencesProps } from "~/types";
import ExperienceDetails from "~/components/experience-details";
import { useLocation, useNavigate } from "react-router";

export default function Experiences({
  experienceList,
  benevolat,
}: ExperiencesProps) {
  const [lastExperience, setLastExperience] = useState<Experience | null>(null);
  const [hideList, setHideList] = useState<boolean>(false);
  const [expSelected, setExpSelected] = useState<Experience | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = location.search.split("=")[1];
    if (!title) return;
    const exp = experienceList.find(
      (e) => encodeURIComponent(e.title) === title
    );
    if (!exp) return;
    setExpSelected(exp);
    setHideList(true);
  }, []);

  useEffect(() => {
    setLastExperience(experienceList[experienceList.length - 1]);
  }, [experienceList]);

  function onExperienceClick(exp: Experience) {
    divRef.current && setScrollY(divRef.current.scrollTop);
    setExpSelected(exp);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHideList(true);
    navigate(`/${benevolat ? "benevolat" : "experiences"}?exp=${exp.title}`);
  }

  function onArrowClick() {
    setHideList(false);
    setExpSelected(null);
    window.scrollTo({ top: scrollY, behavior: "smooth" });
    navigate(`/${benevolat ? "benevolat" : "experiences"}`);
  }

  return (
    <div className="flex flex-col my-4 overflow-x-clip" ref={divRef}>
      {/* Liste des expériences */}
      <div className="w-full bg-white flex flex-col">
        {!expSelected && (
          <h1 className="text-3xl font-bold mb-4">
            {benevolat ? "Mon bénévolat" : "Mes expériences"}
          </h1>
        )}
        <div className="flex flex-col justify-center items-center">
          {!hideList &&
            experienceList.map((exp, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center gap-4"
                >
                  {idx % 2 === 1 && (
                    <Arrow direction="left" visible={lastExperience != exp} />
                  )}
                  <ExperienceCard
                    onClick={() => onExperienceClick(exp)}
                    className="cursor-pointer mb-4 transition duration-500 hover:scale-105"
                    key={idx}
                    experience={exp}
                  />
                  {idx % 2 === 0 && <Arrow visible={lastExperience != exp} />}
                </div>
              );
            })}
        </div>
      </div>

      {/* Détails de l'expérience sélectionnée */}
      <div className="bg-white flex flex-col items-center justify-center w-full">
        {expSelected && (
          <ExperienceDetails
            experience={expSelected}
            onArrowClick={onArrowClick}
          />
        )}
      </div>
    </div>
  );
}
