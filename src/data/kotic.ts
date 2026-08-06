import { Project } from '@/types/project';

/*
 * STUB — enough for the card to render in the grid with its animated cover.
 * The case study itself still needs writing: `content` below is a placeholder.
 */
export const kotic: Project = {
  id: 'kotic',
  title: 'Kotic',
  subtitle:
    'A combat sports encyclopedia for phones — fight calendar, fighter database and disciplines in one place, instead of one app per sport.',
  cardSubtitle:
    'Brand and product design for Kotic, a mobile app that tracks fighters, events and results across boxing, MMA, Muay Thai and grappling.',
  // Nothing to link to yet — neither a case page nor a shipped app.
  inDevelopment: true,
  role: 'Creator, Product Designer',
  industry: 'Sports',
  type: 'Mobile App',
  deliverables: 'Brand Identity, UI/UX Design',
  tags: ['Product Design', 'Branding', 'Mobile'],
  // The card renders KoticCover instead, but `hero` is what the project page
  // and any non-card surface still reads. Needs a real image.
  hero: '/placeholder.svg',
  heroComponent: 'kotic',
  year: '2026',
  content: [
    {
      type: 'large-text',
      content:
        'A combat sports encyclopedia for phones — fight calendar, fighter database and disciplines in one place, instead of one app per sport.',
    },
    {
      type: 'text',
      content: 'Case study in progress.',
    },
  ],
};
