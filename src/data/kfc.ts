import { Project } from '@/types/project';

export const kfc: Project = {
  id: 'kfc',
  title: 'KFC',
  subtitle: 'Website redesign concept for KFC Russia — personalization based on real user data',
  cardSubtitle: 'Website redesign concept · Scholz & Friends',
  industry: 'Food, QSR',
  type: `Corporate Website, Personalization Platform`,
  deliverables: `UX Research, Personas, User Flows, Wireframes, Mockups`,
  tags: ['food', 'qsr', 'website', 'personalization', 'ux', 'wireframes'],
  hero: '/images/projects/kfc/cover.png',
  heroDetail: '/images/projects/kfc/1400.png',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: `KFC is a dominant player in Russia's fast food market, with over 960 restaurants and the second-highest sales growth globally after China. However, its existing website was outdated and ineffective in converting visitors into customers. At LETO agency, I led the redesign of the new KFC website, with a strong focus on mobile experience and real-time content personalization based on user data.`,
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2,
    },
    {
      type: 'text',
      content: `Redefine the user experience of the KFC website to deliver personalized, conversion-oriented content across devices, based on behavioral data, location, weather, and time of day.`,
    },
    { type: 'image-text-width', src: '/images/projects/kfc/persona_01.jpg', alt: 'KFC Persona 1' },
    { type: 'image-text-width', src: '/images/projects/kfc/persona_02.jpg', alt: 'KFC Persona 2' },
    { type: 'image-text-width', src: '/images/projects/kfc/persona_03.jpg', alt: 'KFC Persona 3' },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2,
    },
    {
      type: 'list',
      items: [
        `Analyzed Google Analytics data to identify user behavior and drop-off points`,
        `Designed and distributed a custom Google Forms survey to gather more insights`,
        `Conducted internal interviews with frequent KFC visitors to map expectations and scenarios`,
        `Defined four key customer groups and designed user flows for each`,
        `Created personas, wireframes, and final mockups based on segmentation`,
        `Integrated external APIs and internal datasets to enable real-time dynamic content`,
        `Designed a mobile-first layout, with a modular grid system for fast performance and content clarity`,
        `Personalized banners and menu blocks by user profile: age, gender, time, device, region, weather`,
      ],
    },
    { type: 'image-text-width', src: '/images/projects/kfc/03.png', alt: 'KFC Screen 1' },
    { type: 'image-text-width', src: '/images/projects/kfc/05.png', alt: 'KFC Screen 3' },
    { type: 'image-text-width', src: '/images/projects/kfc/06.png', alt: 'KFC Screen 4' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2,
    },
    {
      type: 'large-text',
      content: 'Redesign concept based on real analytics and user research. Presented to client, not implemented.',
    },
  ],
}; 