import { Project } from '@/types/project';
import { cloud } from './cloud';
import { hotroom } from './hotroom';
import { formengine } from './formengine';
import { pulse } from './pulse';
import { defonseca } from './defonseca';
import { bud } from './bud';
import { kfc } from './kfc';
import { illustrations } from './illustrations';
import { digital } from './digital';

export const allProjects: Project[] = [
  cloud,
  hotroom,
  formengine,
  pulse,
  defonseca,
  bud,
  kfc,
  illustrations,
  digital,
];

export const projectMap: Record<string, Project> = Object.fromEntries(
  allProjects.map((p) => [p.id, p])
);

export const archivedProjectIds = ['defonseca', 'bud', 'kfc'];

export const mainProjects = allProjects.filter(
  (p) => !archivedProjectIds.includes(p.id) && p.id !== 'illustrations' && p.id !== 'digital'
);

export const archivedProjects = allProjects.filter(
  (p) => archivedProjectIds.includes(p.id)
);

export {
  cloud,
  hotroom,
  formengine,
  pulse,
  defonseca,
  bud,
  kfc,
  illustrations,
  digital,
};
