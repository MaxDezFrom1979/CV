export type Experience = {
  id: string;
  title: string;
  description?: string;
  learned?: string;
  date?: {
    prefix?: string;
    value: string;
  };
  company?: {
    prefix?: string;
    value: string;
  };
  project?: string;
  location?: string;
  imageUrl?: string;
  link?: string;
  technologies?: Competences[];
};

export interface Competence {
  title: string;
  imageUrl: string;
  type: CompetenceType;
}

/**
 * PROPS
 */

export type ExperiencesProps = {
  experienceList: Experience[];
  benevolat?: boolean;
};

export type ExperienceCardProps = {
  experience: Experience;
};

export type ExperienceDetailsProps = {
  experience: Experience;
  onArrowClick: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type ArrowProps = {
  direction?: "left" | "right" | "up" | "down";
  visible?: boolean;
};

export type PageTransitionProps = {
  enterDirection?: "left" | "right";
  exitDirection?: "left" | "right";
};

export type ContactProps = {
  close: () => void;
};

export type LinkProps = {
  title: string;
  link?: string;
  icon?: string;
  hideCircle?: boolean;
  newTab?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type CompetencesCardProps = {
  title: string;
  competences: Competence[];
};

/**
 * ENUMS
 */

export enum Competences {
  HTML5 = "HTML5",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Java = "Java",
  Python = "Python",
  Dart = "Dart",
  RISC_V = "RISC-V",
  React = "React",
  Angular = "Angular",
  VueJs = "Vue.js",
  NodeJs = "Node.js",
  ExpressJs = "Expressjs",
  P5js = "p5.js",
  TailwindCSS = "Tailwind CSS",
  Bulma = "Bulma",
  Flutter = "Flutter",
  Kotlin = "Kotlin",
  ReactNative = "React Native",
  Firebase = "Firebase",
  PostgreSQL = "PostgreSQL",
  MSSQL = "MSSQL",
  MySQL = "MySQL",
  OpenAI = "OpenAI",
  Arduino = "Arduino",
  RaspberryPi = "Raspberry Pi",
  Français = "Français",
  Anglais = "Anglais",
}

export const CompetencesALIVE = [
  Competences.TypeScript,
  Competences.React,
  Competences.TailwindCSS,
  Competences.PostgreSQL,
];

export enum CompetenceType {
  Langage = "langage",
  Web = "web",
  Mobile = "mobile",
  Bd = "bd",
  AiIot = "ai-iot",
  Langue = "langue",
}

export enum GalleryEnum {
  CRTP = "CRTP",
  LAST_SESSION = "Stage",
  ALIVE_CULTURE = "ALIVEculture",
  ALIVE_CODE = "ALIVEcode",
  AUTRES = "Autres",
  LEANE = "Leane",
}
