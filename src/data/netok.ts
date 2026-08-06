import { Project } from '@/types/project';

/*
 * STUB — enough for the card to render in the grid with its animated cover.
 * The case study itself still needs writing: `content` below is a placeholder.
 */
export const netok: Project = {
  id: 'netok',
  title: 'Netok',
  subtitle:
    'Designed and built a desktop network diagnostics app that replaces a drawer full of single-purpose tools with one interface.',
  cardSubtitle:
    'Brand and product design for Netok, a free desktop app that monitors your network connection. Built with Rust and Tauri.',
  // No internal case page yet — the card goes straight to the live product.
  cardExternalLink: 'https://netok.app',
  role: 'Creator, Product Designer',
  industry: 'Developer Tools',
  type: 'Desktop App',
  deliverables: 'Brand Identity, UI/UX Design, Landing Page',
  tags: ['Product Design', 'Branding', 'Desktop'],
  // Fallback thumbnail — the card renders NetokCover instead, but `hero` is what
  // the project page and any non-card surface still reads.
  hero: '/images/projects/netok/netok-lockup.svg',
  heroComponent: 'netok',
  year: '2026',
  content: [
    {
      type: 'large-text',
      content:
        'Designed and built a desktop network diagnostics app that replaces a drawer full of single-purpose tools with one interface.',
    },
    {
      type: 'text',
      content: 'Case study in progress.',
    },
  ],
};
