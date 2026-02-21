import { Project } from '@/types/project';

export const workflow: Project = {
  id: 'workflow',
  title: 'WorkFlow Engine',
  subtitle: 'Designed a sales presentation for enterprise workflow automation tool',
  cardSubtitle: 'Sales deck · Slide design for enterprise pitch',
  industry: 'Enterprise Software',
  type: 'Presentation',
  deliverables: 'Slide Deck Design, Visual Storytelling',
  tags: ['enterprise', 'automation', 'presentation', 'design', 'sales'],
  hero: '/images/projects/workflow/workflow-00.webp',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: `OptimaJet's WorkFlow Engine is a low-code .NET tool that helps developers build and manage workflow logic without complex coding. To support the enterprise sales team, I designed a clear, professional, and visually compelling sales presentation that demonstrates the product's power to automate processes and reduce development time.`,
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2,
    },
    {
      type: 'text',
      content: `Develop a modern, visually engaging presentation to help sales reps showcase WorkFlow Engine's benefits to enterprise clients and decision-makers.`,
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2,
    },
    {
      type: 'list',
      items: [
        `Collaborated with sales and product teams to align on messaging and buyer needs`,
        `Structured the narrative to highlight automation features, cost efficiency, and flexibility`,
        `Designed custom slide templates in Figma with branded UI elements and diagrams`,
        `Visualized drag-and-drop workflows, API integrations, and pricing logic`,
        `Built the final deck in both PowerPoint and Google Slides for flexible use`,
        `Iterated design based on stakeholder feedback to improve clarity and impact`,
      ],
    },
    { type: 'image-full', src: '/images/projects/workflow/workflow-05.webp', alt: 'Reporting Tools' },
    { type: 'image-full', src: '/images/projects/workflow/workflow-07.webp', alt: 'Implementation Process' },
    { type: 'image-full', src: '/images/projects/workflow/workflow-08.webp', alt: 'User Feedback' },
    { type: 'image-full', src: '/images/projects/workflow/workflow-12.webp', alt: 'User Training' },
    {
      type: 'heading',
      content: 'Results',
      level: 2,
    },
    {
      type: 'large-text',
      content: 'Delivered final deck in PowerPoint and Google Slides. Used by sales team for enterprise demos.',
    }
  ]
}; 