import { Project } from '@/types/project';

export const formengine: Project = {
  id: 'formengine',
  title: 'FormEngine',
  subtitle: 'Product website for open-source React form builder — designed and coded from scratch',
  cardSubtitle: 'Product website · Design and code by one person',
  role: 'Designer & Developer (solo)',
  timeline: '2024 — ongoing',
  industry: 'Developer Tools',
  type: 'Product Website',
  deliverables: 'UI/UX Design, Front-end Code (React + Vite)',
  scope: 'Design + front-end code',
  tags: ['react', 'developer tools', 'open-source', 'design', 'code'],
  hero: '/images/projects/formengine/1.gif',
  year: '2024',
  externalLink: 'https://formengine.io',
  content: [
    {
      type: 'large-text',
      content: 'Product website for an open-source React form library used by Bosch, Philips, Dell, and Novartis. I did both design and front-end development.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'The challenge'
    },
    {
      type: 'text',
      content: 'FormEngine is an open-source React form builder used by Bosch, Philips, Dell, and Novartis. The team needed a product website that matched the quality of their enterprise clients. They were looking for a designer — I proposed to deliver both design and a working site, no developer needed.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'What I built'
    },
    {
      type: 'text',
      content: '<strong>Full website from Figma to production, solo.</strong> Designed the UI concept, then built the entire front-end myself. No handoff, no coordination overhead, no "it looks different from the mockup" problems.'
    },
    {
      type: 'text',
      content: '<strong>Live component demos embedded in the site.</strong> FormEngine components render directly on the page — visitors can interact with the actual library, not static screenshots. This required integrating the library into the site\'s build pipeline.'
    },
    {
      type: 'text',
      content: '<strong>Real-time GitHub data.</strong> Star count, version, and contributors pulled from the GitHub API and displayed live. Stargazers section updates automatically.'
    },
    {
      type: 'text',
      content: '<strong>Migrated from React + Vite to Next.js</strong> for better SEO and server-side rendering.'
    },
    { type: 'image-full', src: '/images/projects/formengine/1.gif', alt: 'FormEngine homepage', link: 'https://formengine.io/' },
    { type: 'image-full', src: '/images/projects/formengine/2.gif', alt: 'FormEngine pricing', link: 'https://formengine.io/react-form-builder-library/pricing/' },
    { type: 'image-full', src: '/images/projects/formengine/3.gif', alt: 'FormEngine documentation', link: 'https://formengine.io/react-form-library/' },
    {
      type: 'heading',
      level: 2,
      content: 'Results'
    },
    {
      type: 'large-text',
      content: 'Designed, built, deployed, and later migrated — one person, end to end.'
    }
  ]
};
