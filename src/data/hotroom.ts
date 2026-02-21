import { Project } from '@/types/project';

export const hotroom: Project = {
  id: 'hotroom',
  title: 'HotRoom',
  subtitle: 'Designed a hotel booking app from zero to shipped MVP — iOS & Android',
  cardSubtitle: 'Mobile app · Solo designer · 5 months to launch',
  role: 'Solo Product Designer',
  timeline: '5 months, from 0 to launch',
  industry: 'Hospitality',
  type: 'Mobile App',
  deliverables: 'UI/UX Design, Prototyping, UI Kit',
  tags: ['UI/UX Design', 'Mobile', 'Fintech'],
  hero: '/images/projects/hotroom/hotroom-screen1.webp',
  year: '2024',
  content: [
    {
      type: 'large-text',
      content: 'Mobile app for flexible hotel stays: book by the hour, resell unused reservations, pay in installments. Two-sided marketplace for guests and hosts.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Objective'
    },
    {
      type: 'text',
      content: 'Design a complete mobile app for a new booking model — from onboarding to payments — for both iOS and Android.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Process & Solution'
    },
    {
      type: 'list',
      items: [
        'Competitor analysis and user journey mapping for three booking types (daily, 3-hour, overnight)',
        'Full screen architecture: 40+ unique screens across guest and host flows',
        'Complex booking logic with real-time availability, pricing, and payment options',
        'Additional features: extras marketplace, auction system, installment payments',
        'UI Kit for consistent handoff and faster development'
      ]
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-hero.webp',
      alt: 'Главный экран приложения'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen2.webp',
      alt: 'Экран поиска и бронирования'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen4.webp',
      alt: 'Экран аукциона'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen5.webp',
      alt: 'Экран профиля'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Results & Impact'
    },
    {
      type: 'large-text',
      content: 'Shipped: MVP on iOS and Android. Scope: 40+ screens, full UI Kit, developer handoff.'
    }
  ]
}; 