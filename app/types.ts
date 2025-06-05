export type Experience = {
  title: string;
  description?: string;
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
  technologies?: string[];
};

export type Competence = {
  title: string;
  imageUrl?: string;
};

/**
 * PROPS
 */

export type ExperienceCardProps = {
  experience: Experience;
};

export type ExperienceDetailsProps = {
  experience: Experience;
};

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
};
