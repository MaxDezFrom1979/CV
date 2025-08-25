import type { Experience } from "~/types";
import brigadierImg from "app/assets/images/experiences/brigadier.png";
import bureauImg from "app/assets/images/experiences/bureau.png";
import fcsvImg from "app/assets/images/experiences/fcsv.png";
import aliveCultureImg from "app/assets/images/experiences/aliveculture.png";
import tunisieImg from "app/assets/images/experiences/tunisie.png";
import aliveCode1Img from "app/assets/images/experiences/alivecode1.png";
import { Competences, CompetencesALIVE } from "~/types";

export const experiences: Experience[] = [
  {
    title: "Développeur contractuel",
    location: "Montréal (Canada)",
    company: {
      value: "ALIVEcode",
    },
    date: {
      prefix: "à l'",
      value: "Été 2025",
    },
    technologies: [...CompetencesALIVE],
    imageUrl: "https://placehold.co/400x300",
    description: `EN COURS!!!`,
    link: "https://alivecode.ca",
  },
  {
    title: "Stagiaire en développement full stack",
    location: "Montréal (Canada)",
    company: {
      prefix: "le ",
      value: "Laboratoire de recherche informatique Maisonneuve",
    },
    project: "ALIVEcode",
    date: {
      prefix: "de ",
      value: "2024 à 2025",
    },
    technologies: [...CompetencesALIVE, Competences.OpenAI, Competences.Python],
    link: "https://alivecode.ca",
    imageUrl: aliveCode1Img,
    description: `Pendant que je faisais mon certificat en développement logiciel, j'ai eu l'opportunité de travailler sur ALIVEcode grâce au laboratoire.
      C'est une plateforme d'apprentissage active utilisée dans plusieurs cégeps et universités.
      Mon mandat était de concevoir un outil IA de conversion d'un fichier PDF en un module de cours interactif.

      Le processus était comme cela:
      1. Téléverser le PDF
      2. Extraire les images du PDF
      3. Demander à l'IA de générer une structure pour le module en mergeant les pages en activités.
      4. Demander à l'IA de convertir chaque nouvelle page en Markdown
      5. Convertir le Markdown en MDAST et créer les activités interactives`,
  },
  {
    title: "Mission en Tunisie",
    location: "Sidi Bouzid (Tunisie)",
    company: {
      prefix: "le ",
      value: "Laboratoire de recherche informatique Maisonneuve",
    },
    project: "ALIVEculture",
    date: {
      prefix: "en ",
      value: "Janvier 2025",
    },
    technologies: [
      ...CompetencesALIVE,
      Competences.Python,
      Competences.Arduino,
      Competences.RaspberryPi,
    ],
    link: "https://aliveculture.ca",
    imageUrl: tunisieImg,
    description: `Pendant que je faisais mon certificat en développement logiciel, on m'a offert de partir en mission en Tunisie pour ALIVEculture, ce que j'avais fait l'été.
    Ça m'a pris par suprise, puisque je n'avais jamais quitté le Canada auparavant. Mais j'ai accepté avec plaisir.
    J'ai passé 10 jours à Sidi Bouzid, une ville au centre de la Tunisie, où j'ai travaillé avec une équipe de l'université ISET sur le projet.
    On a déployé une serre intelligente juste à côté de l'université et on a formé les étudiants sur la création d'un capteur.
    On a aussi travailler sur la détection des maladies des plantes avec l'IA.`,
  },
  {
    title: "Stagiaire en développement full stack",
    location: "Montréal (Canada)",
    company: {
      prefix: "le ",
      value: "Laboratoire de recherche informatique Maisonneuve",
    },
    project: "ALIVEculture",
    date: {
      prefix: "à l'",
      value: "Été 2024",
    },
    technologies: [
      Competences.JavaScript,
      ...CompetencesALIVE,
      Competences.Python,
      Competences.Arduino,
      Competences.RaspberryPi,
    ],
    link: "https://aliveculture.ca",
    imageUrl: aliveCultureImg,
    description: `Juste après avoir terminé ma technique en développement d'applications Web et Mobiles, j'ai eu un stage sur ALIVEculture grâce au laboratoire.
    C'est une plateforme de serre intelligente qui permet de contrôler les paramètres d'une serre à distance.
    J'ai surtout travaillé sur le UI et UX de la plateforme, mais j'ai aussi réalisé une nouvelle fonctionnalité.
    Avec p5.js, j'ai créé une simulation d'une serre qui permet de visualiser ses données en temps réel où j'ai tout dessiné moi-même.
    
    Voici ce qu'elle contient:
    - Plusieurs tuiles comme les plantes, les chemins, les murs et les portes.
    - Des capteurs que quand tu cliques dessus, tu peux voir ses données en temps réel.
    - Des actionneurs que quand tu cliques dessus, tu peux les activer ou les désactiver.
    - Un système de grille pour placer les tuiles. Lorsqu'elle sont placées, elle changent dépendamment d'où elles sont placées.
    
      Exemples:
      Si tu places un chemin à côté d'un autre chemin, il va se connecter.
      Si tu places un mur à côté d'un autre mur en diagonal, le coin va se connecter.
      Si tu places un capteur sur une plante, il va se mettre dans la terre de la tuile.

    Créer cette simulation était un des meilleurs moments du stage.`,
  },
  {
    title: "Développeur contractuel",
    location: "Montréal (Canada)",
    company: {
      prefix: "la ",
      value: "Fondation canadienne pour la santé vasculaire",
    },
    project: "OPTI+MEDIX sondage",
    date: {
      prefix: "au ",
      value: "Printemps 2024",
    },
    technologies: [Competences.Flutter, Competences.Dart, Competences.Firebase],
    link: "https://play.google.com/store/apps/details?id=org.fcsv.optimedix.sondage&hl=fr_CA",
    imageUrl: fcsvImg,
    description: `Pour mon stage de fin de technique, j'ai eu un stage pour la fondation canadienne pour la santé vasculaire grâce au laboratoire.
    Dans ce stage, j'ai créer une application mobile et web de sondage avec la méthode DELPHI, qui est sur plusieurs itérations, pour des professionnels de la santé.
    L'application permet d'itérer son sondage en ajoutant des questions et en les modifiant pour atteindre un meilleur consensus à chaque fois.
    Pour savoir si le consensus est atteint ou non lors d'une itération, c'est avec Cronbach's alpha que j'ai calculé.
    On peut voir des graphiques à chaque itération pour voir les réponses de chaque question de manière anonyme.
    On peut aussi exporter les résultats de chaque itération en CSV et en fichier Excel.`,
  },
  {
    title: "Agent de bureau",
    location: "Montréal (Canada)",
    company: {
      prefix: "le ",
      value: "Tribunal administratif du logement",
    },
    date: {
      prefix: "à l'",
      value: "Été 2023",
    },
    imageUrl: bureauImg,
    description: `Je me cherchais un emploi d'été et je suis tombé sur une job de bureau sur Emploi Québec.
    Je me suis fait engager et j'ai travaillé comme agent de bureau à scanner et étamper des pièces d'évidence de 8h30 à 16h30.
    Ça m'a fait réalisé que j'aime travailler dans un bureau, mais pas faire des tâches autant répétitives.
    Au moins, je pouvais écouter de la musique, j'avais de l'air climatisé et des collègues sympathiques.
    Moment le plus palpitant : j'avais acheté une dizaine de Caramilk au dépanneur dans le batiment et je les ai rationnée jusqu'à la fin de l'emploi.`,
  },
  {
    title: "Brigadier à la propreté",
    location: "Montréal (Canada)",
    company: {
      prefix: "l'",
      value: "Arrondissement Rivière-des-Prairies Pointe-aux-Trembles",
    },
    date: {
      prefix: "aux ",
      value: "Étés 2021 et 2022",
    },
    imageUrl: brigadierImg,
    description: `Je me cherchais mon premier emploi d'été sur le site de la ville de Montréal.
    J'ai trouvé une job où je ramasse des déchets dans les rues de RDPAT de 6h30 à 15h30.
    J'ai fait ça pendant deux étés et ça m'a fait réaliser que j'aime travailler à l'intérieur et pas aussi tôt.
    Ça m'a permit de prendre beaucoup de photos de déchêts que je trouvais et de découvrir mon quartier.`,
  },
];
