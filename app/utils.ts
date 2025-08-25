import { competencesMap } from "./data/competences";
import type { Competences, CompetenceType } from "./types";

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export function getCompetencesByType(type: CompetenceType) {
  return Object.values(competencesMap).filter((c) => c.type === type);
}

export function getCompetencesByArray(array: Competences[]) {
  return array.map((c) => competencesMap[c]);
}

export function isMobile() {
  return window.innerWidth < 768;
}
