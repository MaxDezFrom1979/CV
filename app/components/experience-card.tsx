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
        <p className="">{exp.date?.value}</p>
      </div>
      <div className="flex gap-2 justify-between items-center tracking-normal">
        <p className="text-lg text-gray-700">{exp.company?.value}</p>
        <p className="text-lg text-gray-700 hidden md:block">{exp.project}</p>
      </div>

      <img src={exp.imageUrl} alt={exp.title} />
    </div>
  );
}
