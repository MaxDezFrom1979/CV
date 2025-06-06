import type { Experience } from "~/types";
import guepeImg from "~/assets/images/benevolat/guepe.png";
import afpadImg from "~/assets/images/benevolat/afpad.png";
import codemtlImg from "~/assets/images/benevolat/codemtl.png";

export const benevolat: Experience[] = [
  {
    title: "Bénévole",
    location: "Montréal (Canada)",
    company: {
      value: "Fondation pour les élèves de Montréal",
      prefix: "la ",
    },
    date: {
      prefix: "à l'",
      value: "Été 2025",
    },
    link: "https://codemtl.org",
    imageUrl: codemtlImg,
    description: `J'ai eu l'opportunité de représenter Code MTL lors du festival Eureka 2025.
    J'ai montré à des jeunes de 6-12 ans le logiciel Scratch et les ai incités à aimer la programmation.`,
  },
  {
    title: "Bénévole ponctuel",
    location: "Montréal (Canada)",
    company: {
      prefix: "l'",
      value: "Association des familles de personnes assasinées ou disparues",
    },
    date: {
      prefix: "de ",
      value: "2016 à 2020",
    },
    link: "https://afpad.ca",
    imageUrl: afpadImg,
    description: `Ma mère travaillait pour l'AFPAD et j'ai eu la chance de l'accompagner pour aider à plusieurs tâches diverses.
    J'ai fait de l'entrée de données, du déchiquetage et de l'archivage quand j'étais au bureau.
    J'ai aidé dans quelques événements organisés.
    J'ai aussi fait du montage vidéo pour Mardi je donne en Novembre 2020.`,
  },
  {
    title: "Assistant naturaliste",
    location: "Montréal (Canada)",
    company: {
      prefix: "le ",
      value: "Camp GUEPE",
    },
    date: {
      prefix: "aux ",
      value: "Étés 2017, 2018 et 2019",
    },
    link: "https://www.guepe.qc.ca",
    imageUrl: guepeImg,
    description: `J'étais aller à ce camp quand j'étais jeune et j'ai eu la chance de revenir comme assistant naturaliste.
      J'ai aidé les moniteurs à organiser des activités pour les enfants, à les surveiller et à leur enseigner la nature.
      J'y suis retourné pendant 3 étés consécutifs.`,
  },
];
