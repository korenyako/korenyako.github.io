import { Project } from '@/types/project';

export const hotroom: Project = {
  id: 'hotroom',
  title: 'HotRoom',
  subtitle: 'Designed a hotel booking app with an unconventional model — hourly stays, auction pricing, and reservation resale — from zero to shipped MVP.',
  cardSubtitle: 'Hotel booking app · 3 booking types in one flow · Solo designer',
  role: 'Solo Product Designer',
  timeline: '5 months, from zero to launch',
  industry: 'Hospitality',
  type: 'Mobile App',
  deliverables: 'UI/UX Design, Prototyping, UI Kit',
  scope: 'iOS & Android, 3 booking types, 40+ screens',
  tags: ['UI/UX Design', 'Mobile', 'Fintech'],
  hero: '/images/projects/hotroom/hotroom-screen1.webp',
  year: '2024',
  content: [
    {
      type: 'large-text',
      content: 'Designed a hotel booking app with an unconventional model — hourly stays, auction pricing, and reservation resale — from zero to shipped MVP.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'The challenge'
    },
    {
      type: 'text',
      content: 'Not a typical booking app. HotRoom combines three different booking models in one interface — daily, 3-hour, and overnight stays — plus lets guests resell reservations and pay in installments. Two-sided marketplace for guests and hosts. The UX challenge: making these very different flows feel like one coherent app, not three separate products stitched together.'
    },
    {
      type: 'heading',
      level: 2,
      content: 'What I designed'
    },
    {
      type: 'text',
      content: '<strong>Unified booking flow with a tab switcher.</strong> Three booking types (Daily, 3-Hour, Overnight) accessible through a single top-level switch. Each type changes the form below — hourly booking shows time slots, overnight highlights the discount, daily is the standard flow. The structure stays consistent so users don\'t get lost when switching.'
    },
    {
      type: 'text',
      content: '<strong>Auction system for resale.</strong> Guests can resell their bookings to other users. I designed the auction flow — setting a starting price (with a recommended price hint from analytics), end date, and auto-sell option. Unusual for hospitality, no established UX patterns to reference.'
    },
    {
      type: 'text',
      content: '<strong>Flexible payment options.</strong> Three payment methods in one checkout: pay in full, installments (with a clear schedule showing dates and amounts), or pay at check-in. Each had different UI implications — installments needed to show the split clearly so users wouldn\'t be surprised.'
    },
    {
      type: 'text',
      content: '<strong>Host side.</strong> Listing creation, pricing, amenities, board options — a separate set of flows within the same app.'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-hero.webp',
      alt: 'HotRoom app screens'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen2.webp',
      alt: 'HotRoom booking flow'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen4.webp',
      alt: 'HotRoom auction system'
    },
    {
      type: 'image-full',
      src: '/images/projects/hotroom/hotroom-screen5.webp',
      alt: 'HotRoom host profile'
    },
    {
      type: 'heading',
      level: 2,
      content: 'Results'
    },
    {
      type: 'large-text',
      content: 'Shipped: MVP on iOS and Android. 40+ screens across guest, host, and marketplace flows.'
    }
  ]
}; 