import type { ExperienceDetailsProps } from "~/types";
import bgImg from "~/assets/images/details.png";

export default function ExperienceDetails({
  experience: exp,
}: ExperienceDetailsProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        aspectRatio: "16/9",
      }}
    >
      <div className="flex flex-col items-center text-xl w-[45%]">
        <h2 className="text-3xl font-bold">{exp.title}</h2>
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
            <div>
              <p className="text-2xl font-bold">Technologies</p>
              {exp.technologies.map((t, idx) => {
                return (
                  <span className="text-gray-700 " key={idx}>
                    {t}
                    {t != exp.technologies![exp.technologies!.length - 1] &&
                      ", "}
                  </span>
                );
              })}
            </div>
          </>
        )}
        {exp.description && (
          <>
            <span className="bg-black h-[1px] my-4 rounded-md w-[60%]" />
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="text-gray-700 whitespace-break-spaces">
              {exp.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
