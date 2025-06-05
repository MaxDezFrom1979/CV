import { useState } from "react";
import Arrow from "~/components/arrow";
import ExperienceCard from "~/components/experience-card";
import { experiences } from "~/data/experiences";
import type { Experience } from "~/types";
import { classNames } from "~/utils";
import leftArrowImg from "~/assets/images/arrowleft.png";
import ExperienceDetails from "~/components/experience-details";

export default function Experiences() {
  const lastExperience = experiences[experiences.length - 1];
  const [hideList, setHideList] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [expSelected, setExpSelected] = useState<Experience | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  return (
    <div className="relative my-4 overflow-x-clip">
      {/* Liste des expériences */}
      <div
        className={classNames(
          "absolute top-0 left-0 w-full bg-white transition-all duration-500",
          "flex flex-col",
          !selected ? "translate-y-0" : "translate-y-full"
        )}
      >
        <h1 className="text-3xl font-bold mb-4">Mes expériences</h1>
        <div className="flex flex-col justify-center items-center">
          {!hideList &&
            experiences.map((exp, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center gap-4"
                >
                  {idx % 2 === 1 && (
                    <Arrow direction="left" visible={lastExperience != exp} />
                  )}
                  <ExperienceCard
                    onClick={() => {
                      setSelected(true);
                      setExpSelected(exp);
                      setScrollY(window.scrollY);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setTimeout(() => {
                        setHideList(true);
                      }, 500);
                    }}
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
      <div
        className={classNames(
          "absolute top-0 left-0 bg-white transition-all duration-500",
          "flex flex-col items-center justify-center w-full",
          selected ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        {(selected || expSelected) && (
          <>
            <button
              className="absolute top-4 left-4 text-3xl cursor-pointer"
              onClick={() => {
                setSelected(false);
                setHideList(false);
                window.scrollTo({ top: scrollY, behavior: "smooth" });
                setTimeout(() => {
                  setExpSelected(null);
                }, 500);
              }}
            >
              <img
                className="rotate-300"
                src={leftArrowImg}
                alt="Go back img"
              />
            </button>
            {expSelected && <ExperienceDetails experience={expSelected} />}
          </>
        )}
      </div>
    </div>
  );
}
