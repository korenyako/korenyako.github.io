import { Project } from '@/types/project';

export const cloud: Project = {
  id: 'cloud',
  title: 'Ncloud',
  subtitle: 'Designed an enterprise cloud platform from zero to production as a solo designer.',
  cardSubtitle: 'Cloud infrastructure platform · Solo designer · 50+ screens from zero',
  role: 'Solo Product Designer',
  timeline: '12 months, from zero to launch',
  industry: 'Cloud Infrastructure',
  type: 'Enterprise Web App',
  deliverables: 'UX/UI Design, Prototyping, UI Kit',
  scope: '50+ screens, UI kit, 3 data center regions',
  tags: ['cloud', 'enterprise', 'platform', 'design system'],
  hero: '/images/projects/cloud/ncloud-00.webp',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: 'Designed an enterprise cloud platform from zero to production as a solo designer.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'The challenge'
    },
    {
      type: 'text',
      content: 'A B2B platform for managing servers, virtual machines, storage, and networking across data centers in Switzerland, Germany, and Luxembourg. Enterprise clients, complex billing, role-based access. When I joined — no admin panel, no designs, no design system. I was the only designer, working with a product manager who provided domain knowledge.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'What I designed'
    },
    {
      type: 'text',
      content: '<strong>Resource pool monitoring with instant problem detection.</strong> The admin\'s main task is spotting trouble fast. I designed a color-coded system: green numbers mean resources are fine, red means at capacity, yellow flags warn before things break. Each pool also shows a lifecycle timeline — created, unpaid, will be suspended, will be deleted — so admins see not just the current state but what happens next.'
    },
    {
      type: 'text',
      content: '<strong>Configurators with inline validation.</strong> Virtual Data Center setup has many interdependent parameters — CPU, RAM, multiple storage volumes, networking. Instead of validating at the end and forcing users to backtrack, I placed warnings directly at the problem field: "storage is full, add more to avoid service disruption." Users fix issues in context, not after the fact.'
    },
    {
      type: 'text',
      content: '<strong>Rack rental configurator.</strong> Location selection across three data centers (each with different available tiers), then rack size, depth, and dedicated power. Side-by-side comparison when renting multiple racks.'
    },
    {
      type: 'text',
      content: '<strong>Billing system.</strong> Transaction history, expense breakdown by category, bonus tracking, bank transfer handling with document uploads.'
    },
    {
      type: 'text',
      content: '<strong>Full UI kit</strong> with reusable components for developer handoff.'
    },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-01.webp', alt: 'Ncloud screen 01' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-07.webp', alt: 'Ncloud screen 07' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-08.webp', alt: 'Ncloud screen 08' },
    { type: 'image-full', src: '/images/projects/cloud/ncloud-14.webp', alt: 'Ncloud screen 14' },
    {
      type: 'heading',
      level: 2,
      content: 'Results'
    },
    {
      type: 'large-text',
      content: 'Shipped: MVP with 50+ screens, full UI kit. 12 months from zero to production, solo designer.'
    }
  ]
}; 