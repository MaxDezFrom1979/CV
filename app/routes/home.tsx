import { competences } from "~/data/competences";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-xl">
      <h2 className="text-3xl font-bold">
        Allo, je m'appelle <span className="text-5xl">Maximilien</span>
      </h2>
      <p className="text-gray-700">
        Je suis un développeur full stack qui est situé à Montréal.
      </p>
      <h3 className="mt-2 text-2xl font-bold">Compétences</h3>
      <div className="grid grid-cols-4">
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
