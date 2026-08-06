import Link from 'next/link';
import type { ProjectCoverId } from '@/types/project';
import ProjectCardMedia from './ProjectCardMedia';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  cardSubtitle?: string;
  tags: string[];
  hero: string;
  heroComponent?: ProjectCoverId;
  cardExternalLink?: string;
  inDevelopment?: boolean;
  year: string;
}

const ProjectCard = ({
  id,
  title,
  subtitle,
  cardSubtitle,
  hero,
  heroComponent,
  cardExternalLink,
  inDevelopment,
}: ProjectCardProps) => {
  const body = (
    <div className="space-y-6">
      <ProjectCardMedia hero={hero} heroComponent={heroComponent} alt={title} />

      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
          {title}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {cardSubtitle || subtitle}
        </p>

        {inDevelopment && <p className="text-sm text-muted-foreground">In development</p>}
      </div>
    </div>
  );

  // Three kinds of card: a case page, a live product with no case page yet, and
  // one with neither — the last stays unclickable, so no `group` hover either.
  if (inDevelopment) {
    return <div className="block">{body}</div>;
  }

  if (cardExternalLink) {
    return (
      <a
        href={cardExternalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={`/portfolio/${id}`} className="block group">
      {body}
    </Link>
  );
};

export default ProjectCard;
