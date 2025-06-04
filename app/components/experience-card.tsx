import type { ExperienceCardProps } from "~/types";
import { classNames } from "~/utils";

export default function ExperienceCard({
  experience: exp,
  onClick,
  className,
}: ExperienceCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      onClick={onClick}
      className={classNames("text-start flex flex-col w-[400px]", className)}
    >
      <div className="flex gap-2 justify-between items-center">
        <h2 className="text-xl font-bold">{exp.title}</h2>
        <p className="">{exp.date}</p>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <p className="text-lg text-gray-700">{exp.company}</p>
      </div>

      <img src={exp.imageUrl} alt="" />
    </div>
  );
}
