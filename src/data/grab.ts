import { Project } from '@/types/project';

export const grab: Project = {
  id: 'grab',
  title: 'Grab',
  subtitle: 'Feature concept for Southeast Asia\'s super app — research to prototype',
  cardSubtitle: 'Feature concept · Research & prototype · Grab',
  industry: 'Mobility, Travel',
  type: 'Concept Project, Feature Design',
  deliverables: 'User Research, User Flows, Wireframes, Prototypes',
  tags: ['mobility', 'travel', 'ux', 'concept', 'prototype'],
  hero: '/images/projects/grab/grab-unsplash.jpg',
  heroDetail: '/images/projects/grab/grab-01.webp',
  year: '2023',
  content: [
    {
      type: 'large-text',
      content: `Grab is Southeast Asia's leading super app for ride-hailing and mobile payments. I was invited to ideate a new feature that could expand their transportation services. Working closely with the Grab team, I developed a concept for an in-app sightseeing experience that would let users discover local attractions during or between rides.`,
    },
    { type: 'image-text-width', src: '/images/projects/grab/grab-unsplash.jpg', alt: 'Обложка проекта Grab' },
    {
      type: 'heading',
      content: 'Objective',
      level: 2,
    },
    {
      type: 'text',
      content: `Explore and prototype a new feature idea that enables Grab users to book short sightseeing tours in Singapore using the existing ride-hailing flow. Deliver a clear concept to support decision-making on whether to develop and launch it.`,
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2,
    },
    {
      type: 'list',
      items: [
        `Conducted user interviews to understand motivations and expectations`,
        `Created personas to capture behavioral differences between tourist types`,
        `Identified an opportunity to introduce local attraction stops into Grab's ride service`,
        `Designed user flows for both spontaneous and planned sightseeing routes`,
        `Integrated the new feature into the existing ride-hailing experience`,
        `Created wireframes, mockups, and an interactive prototype in Marvel`,
        `Delivered the full concept within a tight deadline`,
      ],
    },
    { type: 'image-text-width', src: '/images/projects/grab/persona_1.jpg', alt: 'Persona 1' },
    { type: 'image-text-width', src: '/images/projects/grab/persona_2.jpg', alt: 'Persona 2' },
    { type: 'image-text-width', src: '/images/projects/grab/userflow.jpg', alt: 'User Flow' },
    { type: 'image-text-width', src: '/images/projects/grab/poi.png', alt: 'POI' },
    { type: 'image-text-width', src: '/images/projects/grab/userflow_1.jpg', alt: 'User Flow 1' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2,
    },
    {
      type: 'large-text',
      content: 'Delivered concept and prototype for feature evaluation. Not shipped — helped team decide without full development cost.',
    },
    { type: 'image-text-width', src: '/images/projects/grab/onboarding.jpg', alt: 'Onboarding' },
  ],
};