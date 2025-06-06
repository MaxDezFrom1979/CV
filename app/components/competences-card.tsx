import type { CompetencesCardProps } from "~/types";

export default function CompetencesCard({
  competences,
  title,
  className,
}: CompetencesCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {competences.map((competence, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <h4 className="text-lg font-bold">{competence.title}</h4>
              <img src={competence.imageUrl} alt={competence.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
