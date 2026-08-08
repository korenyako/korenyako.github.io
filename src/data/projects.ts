import { Project } from '@/types/project';
import { netok } from './netok';
import { kotic } from './kotic';
import { fontscout } from './fontscout';
import { cloud } from './cloud';
import { hotroom } from './hotroom';
import { formengine } from './formengine';
import { pulse } from './pulse';
import { defonseca } from './defonseca';
import { illustrations } from './illustrations';
import { digital } from './digital';

// Order drives the grids: the home page shows the first four, /portfolio shows
// all of mainProjects in this order. netok, kotic and fontscout sit last on
// purpose — their case studies are still stubs, so they stay off the home page.
export const allProjects: Project[] = [
  cloud,
  hotroom,
  formengine,
  pulse,
  defonseca,
  illustrations,
  digital,
  netok,
  kotic,
  fontscout,
];

export const projectMap: Record<string, Project> = Object.fromEntries(
  allProjects.map((p) => [p.id, p])
);

export const mainProjects = allProjects.filter(
  (p) => p.id !== 'illustrations' && p.id !== 'digital'
);

export {
  netok,
  kotic,
  fontscout,
  cloud,
  hotroom,
  formengine,
  pulse,
  defonseca,
  illustrations,
  digital,
};
