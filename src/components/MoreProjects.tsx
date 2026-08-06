import Link from 'next/link';
import { Project } from '@/types/project';
import ProjectCardMedia from './ProjectCardMedia';

interface MoreProjectsProps {
  projectsToShow: Project[];
}

const MoreProjects = ({ projectsToShow }: MoreProjectsProps) => {
  return (
    <div className="mt-32 pt-16 border-t border-border">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground">Other Projects</h2>
        <Link
          href="/portfolio"
          className="block group animate-fade-in"
        >
          <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">See all</h3>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsToShow.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="block group">
            <div className="space-y-6">
              <ProjectCardMedia
                hero={project.hero}
                heroComponent={project.heroComponent}
                alt={project.title}
              />

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
