import { Project } from '@/types/project';

export const hyundai: Project = {
  id: 'hyundai',
  title: 'Hyundai',
  subtitle: 'UX audit and recommendations for Hyundai Solaris launch page',
  industry: 'Automotive',
  type: 'Client Project',
  deliverables: 'UX Audit, User Research, Wireframes',
  tags: ['automotive', 'dealership', 'app', 'design'],
  hero: '/images/projects/hyundai/solaris.jpg',
  heroDetail: '/images/projects/hyundai/03.jpg',
  year: '2020',
  content: [
    {
      type: 'large-text',
      content: 'A comprehensive UX audit and redesign for the launch of the new Hyundai Solaris in Russia. The project aimed to improve retention, usability, and conversion on the promotional website by uncovering and solving key user pain points.'
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2
    },
    {
      type: 'text',
      content: 'Enhance the user experience of the Hyundai Solaris website by simplifying navigation, clarifying key features, and increasing conversions for lead generation actions such as test drives, dealer visits, and loan calculations.'
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2
    },
    {
      type: 'list',
      items: [
        'Analyzed the complete user journey, from landing to lead submission, identifying friction points in navigation and content.',
        'Conducted ~15 user interviews to observe how users interacted with the interface and where they struggled.',
        'Rebuilt the site\'s information architecture and user flow to guide visitors toward key actions.',
        'Created a detailed UX audit document with annotated wireframes, mockups, and actionable recommendations.',
        'Proposed visual and content adjustments to remove clutter and improve clarity and relevance.'
      ]
    },
    { type: 'image-full', src: '/images/projects/hyundai/path.png', alt: 'Hyundai App User Path' },
    { type: 'image-full', src: '/images/projects/hyundai/01.png', alt: 'Hyundai App Main Screen' },
    { type: 'image-full', src: '/images/projects/hyundai/02.png', alt: 'Hyundai App Example 1' },
    { type: 'image-full', src: '/images/projects/hyundai/03.png', alt: 'Hyundai App Example 2' },
    { type: 'image-full', src: '/images/projects/hyundai/01.jpg', alt: 'Hyundai App Example 3' },
    { type: 'image-full', src: '/images/projects/hyundai/02.jpg', alt: 'Hyundai App Example 4' },
    { type: 'image-full', src: '/images/projects/hyundai/comfort1.jpg', alt: 'Hyundai Comfort Feature 1' },
    { type: 'image-full', src: '/images/projects/hyundai/comfort2.jpg', alt: 'Hyundai Comfort Feature 2' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2
    },
    {
      type: 'large-text',
      content: 'UX audit and wireframes handed off to Hyundai team.'
    }
  ],
}; 