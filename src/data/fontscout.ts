import { Project } from '@/types/project';

/*
 * STUB — enough for the card to render in the grid. The case study itself still
 * needs writing: `content` below is a placeholder.
 */
export const fontscout: Project = {
  id: 'fontscout',
  title: 'FontScout',
  subtitle:
    'A browser extension that names the font under your cursor — and hands you its weight, size, colour and the file itself.',
  cardSubtitle:
    'A Chrome extension that identifies any font on a web page in one click, and lets you download it.',
  // No internal case page yet — the card goes straight to the store listing.
  cardExternalLink:
    'https://chromewebstore.google.com/detail/fontscout/jjbdoldmdagddkdhikbnhdfaacdflcfn',
  role: 'Creator, Product Designer',
  industry: 'Design Tools',
  type: 'Browser Extension',
  deliverables: 'Brand Identity, UI/UX Design',
  tags: ['Product Design', 'Branding', 'Developer Tools'],
  hero: '/images/projects/fontscout/fontscout-cover.png',
  year: '2026',
  content: [
    {
      type: 'large-text',
      content:
        'A browser extension that names the font under your cursor — and hands you its weight, size, colour and the file itself.',
    },
    {
      type: 'text',
      content: 'Case study in progress.',
    },
  ],
};
