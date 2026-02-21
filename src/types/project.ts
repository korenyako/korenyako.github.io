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
  heroDetail?: string;
  awardLogo?: string;
  content: ContentItem[];
  year: string;
  externalLink?: string;
  awardLink?: string;
}
