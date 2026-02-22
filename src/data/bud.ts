import { Project } from '@/types/project';

export const bud: Project = {
  id: 'bud',
  title: 'Bud',
  subtitle: 'AR app concept for merchandisers — pilot project for AB InBev',
  cardSubtitle: 'AR merchandising app · Pilot for AB InBev · Scholz & Friends',
  industry: 'Retail',
  type: 'Mobile App',
  deliverables: 'UX/UI Design, Prototyping, AR Development',
  tags: ['retail', 'ar', 'mobile', 'merchandising'],
  hero: '/images/projects/bud/bud_05.jpg',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: 'An augmented reality tablet app that helps merchandisers place promotional signs, stands, and displays in real retail environments. Developed as a pilot project for AB InBev (Bud brand) to improve merchandising efficiency across 50,000+ points of sale in Russia.'
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2
    },
    {
      type: 'text',
      content: 'Design a simple and effective AR experience for Bud merchandisers, allowing them to preview and arrange promotional assets in physical store environments using iPads. The solution had to support onboarding, item recognition, and 3D visualization, all tailored to real-world workflows.'
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2
    },
    {
      type: 'list',
      items: [
        'Researched the workflow of Bud merchandisers through interviews and field visits to retail locations.',
        'Photographed actual store layouts to simulate placement scenarios and collaborated with 3D designers to model real promotional assets.',
        'Designed key UX flows and wireframes for placing, editing, and confirming promo items in AR.',
        'Created onboarding and instructional UI to prevent confusion between similar promo materials.',
        'Built a functional prototype and worked closely with iOS developers during implementation.'
      ]
    },
    { type: 'image-text-width', src: '/images/projects/bud/bud_02.jpg', alt: 'Bud AR App Example 1' },
    { type: 'image-text-width', src: '/images/projects/bud/bud_03.jpg', alt: 'Bud AR App Example 2' },
    { type: 'image-text-width', src: '/images/projects/bud/bud_07.jpg', alt: 'Bud AR App Example 4' },
    { type: 'image-text-width', src: '/images/projects/bud/bud_08.jpg', alt: 'Bud AR App Example 5' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2
    },
    {
      type: 'large-text',
      content: 'Pilot prototype tested internally. Did not proceed to production.'
    }
  ],
}; 