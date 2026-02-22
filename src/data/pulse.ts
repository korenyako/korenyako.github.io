import { Project } from '@/types/project';

export const pulse: Project = {
  id: 'pulse',
  title: 'Pulse',
  subtitle: 'Designed evaluation campaigns and salary payments admin panels from scratch for Sberbank\'s enterprise HR platform.',
  cardSubtitle: 'HR platform for 250K daily users (iF Design Award 2022)',
  role: 'Lead Product Designer (team of 3)',
  timeline: '10 months, 2022',
  industry: 'HR Tech',
  type: 'Web Platform',
  deliverables: 'UI/UX Design, Design System',
  scope: '2 admin panels, design system components, 250K daily users',
  tags: ['Web Design', 'Enterprise', 'HR Tech'],
  hero: '/images/projects/pulse/pulse-00.webp',
  heroDetail: '/images/projects/pulse/pulse.mp4',
  awardLogo: '/images/projects/pulse/if-design-award.svg',
  awardLink: 'https://ifdesign.com/en/winner-ranking/project/hr-platform-pulse/350985',
  year: '2024',
  content: [
    {
      type: 'large-text',
      content: 'Designed evaluation campaigns and salary payments admin panels from scratch for Sberbank\'s enterprise HR platform.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'The challenge'
    },
    {
      type: 'text',
      content: 'HR administrators needed to run company-wide evaluation campaigns — from setting criteria and rating scales to launching reviews across thousands of employees. No tool existed inside the platform. No prior designs, no established patterns in the design system for this type of workflow. I had to understand the entire domain of employee evaluation from zero. Each product had its own PM, analyst, and dev team working in 2-week sprints.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'What I designed'
    },
    {
      type: 'text',
      content: '<strong>Step-by-step wizard for campaign setup.</strong> An evaluation campaign has many moving parts — criteria, scales, department limits, participant groups, timelines. Instead of dumping everything on one screen, I broke the setup into a guided multi-step flow.'
    },
    {
      type: 'text',
      content: '<strong>Configurable rating scales.</strong> Admins could choose between letters (A–E), numbers, stars, or binary — and preview how ratings would appear to employees before launching.'
    },
    {
      type: 'text',
      content: '<strong>Custom evaluation criteria.</strong> Beyond mandatory "goal completion," admins could add criteria with descriptions and indicators, each rated separately.'
    },
    {
      type: 'text',
      content: '<strong>Department-level limits</strong> based on headcount to prevent grade inflation.'
    },
    {
      type: 'text',
      content: '<strong>Salary Payments admin panel</strong> — a separate module for HR managers to manage payment workflows.'
    },
    {
      type: 'text',
      content: '<strong>Feature updates for 250K employees:</strong> document requests, holiday planning.'
    },
    {
      type: 'text',
      content: '<strong>New design system components</strong> for multi-step configuration flows, reused across other Pulse products.'
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
      content: '2 admin panels shipped. Evaluation wizard became the standard pattern for complex setup flows across Pulse. The platform received <a href="https://ifdesign.com/en/winner-ranking/project/hr-platform-pulse/350985" target="_blank" rel="noopener noreferrer">iF Design Award 2022</a> — I contributed as part of the design team.'
    }
  ]
}; 