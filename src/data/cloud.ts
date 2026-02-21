import { Project } from '@/types/project';

export const cloud: Project = {
  id: 'cloud',
  title: 'Ncloud',
  subtitle: 'Designed an enterprise cloud platform solo — from zero to launched MVP in one year',
  cardSubtitle: 'B2B platform · Solo designer · From 0 to launch',
  role: 'Solo Product Designer',
  timeline: '1 year, from 0 to launch',
  industry: 'Cloud Infrastructure',
  type: 'Enterprise Web App',
  deliverables: 'UX/UI Design, Prototyping, UI Kit',
  tags: ['cloud', 'enterprise', 'platform', 'design system'],
  hero: '/images/projects/cloud/ncloud-00.webp',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: 'B2B platform for managing servers, virtual machines, storage, and networking across multiple data centers. Enterprise clients, complex billing logic, role-based access for teams.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Objective'
    },
    {
      type: 'text',
      content: 'Build a complete design system and ship MVP with no prior research, no existing UI, and no other designers on the team.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Process & Solution'
    },
    {
      type: 'list',
      items: [
        'Information architecture for 50+ screens across resource management, billing, and admin panels',
        'Complex configurators (rack rental, virtual data center) with real-time pricing and availability feedback',
        'UI Kit with reusable components for consistent development and faster handoff',
        'Interactive prototypes for stakeholder validation before development',
        'Dashboards for resource monitoring and cost tracking',
        'Role-based admin panels for enterprise team management'
      ]
    },
    // Все изображения кроме hero
    { type: 'image-full', src: '/images/projects/cloud/ncloud-01.webp', alt: 'Ncloud screen 01' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-07.webp', alt: 'Ncloud screen 07' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-08.webp', alt: 'Ncloud screen 08' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-14.webp', alt: 'Ncloud screen 14' },
    {
      type: 'heading',
      level: 2,
      content: 'Results & Impact'
    },
    {
      type: 'large-text',
      content: 'Shipped: MVP with 50+ screens, full UI Kit, interactive prototypes. Timeline: 12 months from kickoff to production.'
    }
  ]
}; 