import type { ExperienceCardProps } from "~/types";

export default function ExperienceDetails({
  experience: exp,
}: ExperienceCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col items-center justify-evenly text-xl">
      <h2 className="text-3xl font-bold">{exp.title}</h2>
      <p>
        J'ai travaillé pour {exp.companyPrefix}
        {exp.company} {exp.datePrefix}
        {exp.date?.toLowerCase()}.
      </p>
      <p>
        C'était à {exp.location}
        {exp.project && ` sur le projet ${exp.project}`}.
      </p>
      <span className="bg-black h-[1px] my-4 w-full rounded-md" />
      <p className="text-gray-700 whitespace-break-spaces">{exp.description}</p>
    </div>
  );
}
