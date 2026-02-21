import { Project } from '@/types/project';
import { cloud } from './cloud';
import { hotroom } from './hotroom';
import { formengine } from './formengine';
import { pulse } from './pulse';
import { workflow } from './workflow';
import { pay2day } from './pay2day';
import { defonseca } from './defonseca';
import { grab } from './grab';
import { bud } from './bud';
import { kfc } from './kfc';
import { splyt } from './splyt';
import { hyundai } from './hyundai';
import { illustrations } from './illustrations';
import { digital } from './digital';

export const allProjects: Project[] = [
  cloud,
  hotroom,
  formengine,
  pulse,
  workflow,
  pay2day,
  defonseca,
  grab,
  bud,
  kfc,
  splyt,
  hyundai,
  illustrations,
  digital,
];

export const projectMap: Record<string, Project> = Object.fromEntries(
  allProjects.map((p) => [p.id, p])
);

export const archivedProjectIds = ['workflow', 'pay2day', 'defonseca', 'grab', 'bud', 'kfc', 'splyt', 'hyundai'];

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
  workflow,
  pay2day,
  defonseca,
  grab,
  bud,
  kfc,
  splyt,
  hyundai,
  illustrations,
  digital,
};
