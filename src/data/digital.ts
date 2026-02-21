import { Project } from '@/types/project';

export const digital: Project = {
  id: 'digital',
  title: 'Digital Experience',
  subtitle: 'Innovative Digital Solutions',
  industry: 'Digital Technology',
  type: 'Client Project',
  deliverables: 'Digital Strategy, UX/UI Design, Development',
  tags: ['digital', 'technology', 'innovation', 'design'],
  hero: '/images/projects/digital/01.png',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: 'A comprehensive digital experience project that combines cutting-edge technology with user-centered design to create innovative solutions for modern businesses.'
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2
    },
    {
      type: 'text',
      content: 'Develop a suite of digital solutions that enhance user engagement and drive business growth through innovative technology and design.'
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2
    },
    {
      type: 'list',
      items: [
        'Conducted extensive user research and market analysis',
        'Developed a comprehensive digital strategy',
        'Created intuitive and engaging user interfaces',
        'Implemented cutting-edge technologies and features',
        'Ensured seamless integration across platforms'
      ]
    },
    { type: 'image-text-width', src: '/images/projects/digital/01.png', alt: 'Digital Experience Overview' },
    { type: 'image-text-width', src: '/images/projects/digital/02.png', alt: 'User Interface Design' },
    { type: 'image-text-width', src: '/images/projects/digital/03.png', alt: 'Technology Implementation' },
    { type: 'image-text-width', src: '/images/projects/digital/04.png', alt: 'Platform Integration' },
    { type: 'image-text-width', src: '/images/projects/digital/05.png', alt: 'Final Solution' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2
    },
    {
      type: 'large-text',
      content: 'The digital solutions successfully transformed the client\'s business operations, resulting in increased user engagement, improved efficiency, and significant business growth.'
    }
  ]
}; 