import { Project } from '@/types/project';

export const splyt: Project = {
  id: 'splyt',
  title: 'Splyt',
  subtitle: 'UX audit and redesign for ride-sharing app onboarding',
  industry: 'Mobility, Transportation',
  type: 'Mobile App',
  deliverables: 'UX Audit, User Research, Prototyping',
  hero: '/images/projects/splyt/splyt.webp',
  heroDetail: '/images/projects/splyt/splyt_02.jpg',
  year: '2022',
  content: [
    {
      type: 'large-text',
      content: 'Splyt is a B2B mobility platform that launched a pilot ride-hailing app and reached out for UX improvements. I was brought in early to identify usability issues and improve onboarding and match interaction flows for mobile users.'
    },
    {
      type: 'heading',
      content: 'Objective',
      level: 2
    },
    {
      type: 'text',
      content: 'Analyze and improve the onboarding flow and match card interface based on real user feedback. Reduce friction, increase clarity, and provide multiple UI concepts to support quick decision-making in a ride-sharing context.'
    },
    {
      type: 'heading',
      content: 'Process & Solution',
      level: 2
    },
    {
      type: 'list',
      items: [
        'Interviewed 10 active ride-hailing users and captured real-time app usage feedback',
        'Mapped out the key flows for onboarding and matching',
        'Identified UI issues such as poor visual hierarchy, scattered attention, and friction in first-time use',
        'Proposed two interface concepts: vertical feed and card swipe',
        'Created wireframes and interactive prototypes for both concepts',
        'Collaborated with the internal team to deliver design improvements ready for implementation',
      ]
    },
    { type: 'image-text-width', src: '/images/projects/splyt/splyt_02.jpg', alt: 'Splyt Screen 2' },
    { type: 'image-text-width', src: '/images/projects/splyt/new01.png', alt: 'Splyt Platform Overview' },
    { type: 'image-text-width', src: '/images/projects/splyt/new02.png', alt: 'Splyt Integration Flow' },
    { type: 'image-text-width', src: '/images/projects/splyt/new03.png', alt: 'Splyt Partner Dashboard' },
    { type: 'image-text-width', src: '/images/projects/splyt/splyt_03.jpg', alt: 'Splyt Screen 3' },
    {
      type: 'heading',
      content: 'Results & Impact',
      level: 2
    },
    {
      type: 'large-text',
      content: 'Redesigned onboarding and match flows implemented. App later sunsetted.'
    },
    { type: 'image-text-width', src: '/images/projects/splyt/splyt_04.jpg', alt: 'Splyt Screen 4' },
  ],
  tags: ['mobility', 'ride-sharing', 'ux', 'prototype'],
}; 