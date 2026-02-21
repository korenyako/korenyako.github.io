import { Project } from '@/types/project';

export const formengine: Project = {
  id: 'formengine',
  title: 'FormEngine',
  subtitle: 'Product website for open-source React form builder — designed and coded from scratch',
  cardSubtitle: 'Product website · End-to-end · Design & code',
  role: 'Designer & Developer',
  timeline: '2 months',
  industry: 'Developer Tools',
  type: 'Product Website',
  deliverables: 'UI/UX Design, Front-end Code (React + Vite)',
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
      content: 'Process & Solution'
    },
    {
      type: 'list',
      items: [
        'Designed UI concept in Figma: navigation, components, illustrations',
        'Built the entire front-end in React + Vite + Tailwind CSS',
        'Interactive elements: live code snippets, syntax highlighting, copy function',
        'GitHub API integration: real-time star count, version, contributors',
        'Responsive design for all screen sizes'
      ]
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
      content: 'Live website: <a href="https://formengine.io" target="_blank" rel="noopener noreferrer">formengine.io</a>. Solo project — design and code by one person.'
    }
  ]
};
