import { useState } from "react";
import ExperienceCard from "~/components/experience-card";
import { benevolat } from "~/data/benevolat";
import type { Experience } from "~/types";
import { classNames } from "~/utils";
import leftArrowImg from "~/assets/images/arrowleft.png";
import ExperienceDetails from "~/components/experience-details";

export default function Benevolat() {
  const [selected, setSelected] = useState<boolean>(false);
  const [expSelected, setExpSelected] = useState<Experience | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  return (
    <div className="relative my-4 overflow-x-clip">
      {/* Liste de bénévolat */}
      <div
        className={classNames(
          "absolute top-0 left-0 w-full bg-white transition-transform duration-500",
          "flex flex-col",
          !selected ? "translate-y-0" : "-translate-y-[120%]"
        )}
      >
        <h1 className="text-3xl font-bold mb-4">Mon bénévolat</h1>
        <div className="flex justify-evenly gap-2">
          {benevolat.map((exp, idx) => {
            return (
              <div
                className={classNames(
                  "flex flex-col justify-end h-[80vh]",
                  idx === 1 && "justify-start"
                )}
                key={idx}
              >
                <ExperienceCard
                  onClick={() => {
                    setSelected(true);
                    setExpSelected(exp);
                    setScrollY(window.scrollY);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={classNames(
                    "cursor-pointer mb-4 transition duration-500 hover:scale-105"
                  )}
                  experience={exp}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Détails de l'expérience sélectionnée */}
      <div
        className={classNames(
          "absolute top-0 left-0 bg-white transition-transform duration-500",
          "flex flex-col items-center justify-center w-full",
          selected ? "translate-y-0" : "translate-y-[120%]"
        )}
      >
        {(selected || expSelected) && (
          <>
            <button
              className="absolute top-4 left-4 text-3xl cursor-pointer"
              onClick={() => {
                setSelected(false);
                window.scrollTo({ top: scrollY, behavior: "smooth" });
                setTimeout(() => {
                  setExpSelected(null);
                }, 500);
              }}
            >
              <img
                className="rotate-120 animate-pulse"
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
