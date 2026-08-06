export interface ContentItem {
  type: string;
  content?: string;
  level?: number;
  items?: string[];
  src?: string;
  alt?: string;
  src1?: string;
  src2?: string;
  alt1?: string;
  alt2?: string;
  text?: string;
  className?: string;
  images?: string[];
  component?: string;
  props?: any;
  link?: string;
}

/** Cards whose thumbnail is a rendered component instead of a file in public/. */
export type ProjectCoverId = 'netok' | 'kotic';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  cardSubtitle?: string;
  highlights?: string;
  role?: string;
  scope?: string;
  timeline?: string;
  industry: string;
  type: string;
  deliverables: string;
  tags: string[];
  hero: string;
  /** When set, the card renders this cover component; `hero` stays as the no-JS fallback. */
  heroComponent?: ProjectCoverId;
  heroDetail?: string;
  awardLogo?: string;
  content: ContentItem[];
  year: string;
  externalLink?: string;
  awardLink?: string;
  /** Card links straight out to the live product instead of to a case page. */
  cardExternalLink?: string;
  /** No case page and no live link yet — the card renders unclickable, with a label. */
  inDevelopment?: boolean;
}
