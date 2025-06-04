export type Experience = {
  title: string;
  description?: string;
  date?: string;
  datePrefix?: string;
  company?: string;
  companyPrefix?: string;
  project?: string;
  location?: string;
  imageUrl?: string;
  link?: string;
};

/**
 * PROPS
 */

export type ExperienceCardProps = {
  experience: Experience;
};

export type ArrowProps = {
  direction?: "left" | "right" | "up" | "down";
  visible?: boolean;
}