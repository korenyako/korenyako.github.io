import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  cardSubtitle?: string;
  tags: string[];
  hero: string;
  year: string;
}

const ProjectCard = ({ id, title, subtitle, cardSubtitle, tags, hero, year }: ProjectCardProps) => {
  return (
    <Link href={`/portfolio/${id}`} className="block group">
      <div className="space-y-6">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-3xl">
          {hero.endsWith('.mp4') ? (
            <video
              src={hero}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <img
              src={hero}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
            {title}
          </h3>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {cardSubtitle || subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
