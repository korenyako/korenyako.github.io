import { Project } from '@/types/project';

export const pulse: Project = {
  id: 'pulse',
  title: 'Pulse',
  subtitle: 'Designed evaluation and payment modules for an HR platform with 250K daily users',
  cardSubtitle: 'HR platform · 250K daily users · iF Award 2022',
  role: 'Lead Product Designer',
  timeline: '10 months (2022)',
  industry: 'HR Tech',
  type: 'Web Platform',
  deliverables: 'UI/UX Design, Design System',
  tags: ['Web Design', 'Enterprise', 'HR Tech'],
  hero: '/images/projects/pulse/pulse-00.webp',
  heroDetail: '/images/projects/pulse/pulse.mp4',
  awardLogo: '/images/projects/pulse/if-design-award.svg',
  awardLink: 'https://ifdesign.com/en/winner-ranking/project/hr-platform-pulse/350985',
  year: '2024',
  content: [
    {
      type: 'large-text',
      content: 'Pulse is an enterprise HR platform used daily by 250,000 employees at one of Europe\'s largest banks. I led design for two modules — Employee Evaluation and Salary Payments — as part of a 25-designer team working across the platform.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Process & Solution'
    },
    {
      type: 'list',
      items: [
        'Designed two admin panels from scratch: Employee Evaluation and Salary Payments',
        'New features for document requests and holiday planning',
        'Extended the design system with components for complex HR workflows',
        'Led a team of 3 designers, coordinated with PMs and developers'
      ]
    },
    { type: 'image-full', src: '/images/projects/pulse/pulse-01.webp', alt: 'Pulse screen 01' },
    { type: 'image-full', src: '/images/projects/pulse/pulse-04.webp', alt: 'Pulse screen 04' },
    { type: 'image-full', src: '/images/projects/pulse/pulse-07.webp', alt: 'Pulse screen 07' },
    { type: 'image-full', src: '/images/projects/pulse/pulse-08.webp', alt: 'Pulse screen 08' },
    { type: 'image-full', src: '/images/projects/pulse/pulse-09.webp', alt: 'Pulse screen 09' },
    {
      type: 'heading',
      level: 2,
      content: 'Results'
    },
    {
      type: 'large-text',
      content: '2 admin panels for HR managers (evaluation campaigns, salary payments). Feature updates for 250K employees (document requests, time-off). Pulse platform received <a href="https://ifdesign.com/en/winner-ranking/project/hr-platform-pulse/350985" target="_blank" rel="noopener noreferrer">iF Design Award 2022</a> for Interfaces for Digital Media.'
    }
  ]
}; 