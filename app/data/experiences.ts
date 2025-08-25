import type { Experience } from "~/types";
import brigadierImg from "app/assets/images/experiences/brigadier.png";
import bureauImg from "app/assets/images/experiences/bureau.png";
import fcsvImg from "app/assets/images/experiences/fcsv.png";
import aliveCultureImg from "app/assets/images/experiences/aliveculture.png";
import tunisieImg from "app/assets/images/experiences/tunisie.png";
import aliveCode1Img from "app/assets/images/experiences/alivecode1.png";
import aliveCode2Img from "app/assets/images/experiences/alivecode2.png";
import { Competences, CompetencesALIVE } from "~/types";

export const experiences: Experience[] = [
  {
    id: "experience-alivecode-contractuel",
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
    imageUrl: aliveCode2Img,
    link: "https://alivecode.ca",
    description: `Sur ALIVEcode, j'ai développé une fonctionnalité de messagerie en temps réel.
Il y a des groupes et des serveurs. Les messages peuvent contenir du texte, des images, des extraits de code, etc.
On peut aussi réagir aux messages avec des émojis.
Chaque serveur est lié à un cours et les professeurs peuvent modérer les messages.`,
    learned: `J'ai appris comment faire du temps réel qui est fiable et à utiliser des librairies créées à l'interne.`,
  },
  {
    id: "experience-alivecode",
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
    description: `ALIVEcode est une plateforme d'apprentissage active utilisée dans plusieurs cégeps et universités.
Mon mandat était de concevoir un outil IA de conversion d'un fichier PDF en un module de cours interactif.
J'ai ajouter la création et l'affichage de formules KaTeX dans l'éditeur de code de la plateforme.`,
    learned: `J'ai appris à travailler avec l'IA et beaucoup de React.`,
  },
  {
    id: "experience-tunisie",
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
    description: `On m'a offert de partir en mission en Tunisie pour ALIVEculture.
Ça m'a pris par suprise, puisque je n'avais jamais quitté le Canada auparavant, mais j'ai accepté avec plaisir.
J'ai passé une semaine à Sidi Bouzid, une ville au centre de la Tunisie, où j'ai travaillé avec une équipe de l'université ISET sur le projet.
On a déployé une serre intelligente juste à côté de l'université et on a formé les étudiants sur la création d'un capteur.
On a aussi travailler sur la détection des maladies des plantes avec l'IA.
J'ai montré ma fonctionnalité aux professeurs tunisiens, ils étaient très impressionnés.`,
    learned: `J'ai appris à m'adapter à un nouvel environnement rapidement et au travail d'équipe sous pression.`,
  },
  {
    id: "experience-aliveculture",
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
      Competences.P5js,
      ...CompetencesALIVE,
      Competences.Python,
      Competences.Arduino,
      Competences.RaspberryPi,
    ],
    link: "https://aliveculture.ca",
    imageUrl: aliveCultureImg,
    description: `ALIVEculture est une plateforme de serre intelligente qui permet de contrôler les paramètres d'une serre à distance.
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
Si tu places un capteur sur une plante, il va se mettre dans la terre de la tuile.`,
    learned: `J'en ai appris beaucoup sur l'IoT.`,
  },
  {
    id: "experience-fcsv",
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
    description: `Dans ce stage, j'ai créer une application mobile et web de sondage avec la méthode DELPHI, qui est sur plusieurs itérations, pour des professionnels de la santé.
L'application permet d'itérer son sondage en ajoutant des questions et en les modifiant pour atteindre un meilleur consensus à chaque fois.
Pour savoir si le consensus est atteint ou non lors d'une itération, c'est avec Cronbach's alpha que j'ai calculé.
On peut voir des graphiques à chaque itération pour voir les réponses de chaque question de manière anonyme.
On peut aussi exporter les résultats de chaque itération en CSV et en fichier Excel.`,
    learned: `J'ai appris à collaborer avec des personnes ne connaissant pas nécessairement l'informatique.
J'ai appris comment faire une application mobile intuitive pour des utilisateurs.
J'ai aussi appris à gérer un projet de A à Z, de la conception à la livraison.`,
  },
  {
    id: "experience-bureau",
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
    description: `L'emploi consistait à scanner et étamper des pièces d'évidence de 8h30 à 16h30.
J'ai confirmé que j'aime travailler dans un bureau, de plus j'avais des collègues sympathiques.`,
    learned:
      "J'ai appris à faire attention aux détails et à être plus organisé.",
  },
  {
    id: "experience-brigadier",
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
    description: `L'emploi consistait à ramasser des déchets dans les rues de RDPAT de 6h30 à 15h30.
J'ai fait ça pendant deux étés et ça m'a fait réaliser que l'air climatisé est un privilège.`,
    learned: "J'ai appris la ponctualité et le respect envers mes supérieurs.",
  },
];
