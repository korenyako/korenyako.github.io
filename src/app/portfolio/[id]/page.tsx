import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import MoreProjects from '@/components/MoreProjects';
import Testimonials from '@/components/Testimonials';
import { allProjects, projectMap } from '@/data/projects';

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectMap[params.id];
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} – Anton Korenyako`,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectMap[params.id];

  if (!project) {
    notFound();
  }

  const filteredProjects = allProjects.filter((p) => p.id !== params.id);
  const projectsToShow = filteredProjects.slice(0, 2);

  return (
    <Layout backgroundColor="#FFFFFF">
      <div className="py-16 overflow-x-hidden w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <ProjectHeader
            title={project.title}
            subtitle={project.subtitle}
            highlights={project.highlights}
            role={project.role}
            scope={project.scope}
            timeline={project.timeline}
            industry={project.industry}
            deliverables={project.deliverables}
            tags={project.tags}
            hero={project.heroDetail ?? project.hero}
            awardLogo={project.awardLogo}
            awardLink={project.awardLink}
            externalLink={project.externalLink}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4">
          <ProjectContent content={project.content} />
        </div>

        <div className="max-w-[1440px] mx-auto px-4">
          <MoreProjects projectsToShow={projectsToShow} />
        </div>
      </div>
      <div className="mt-24">
        <Testimonials />
      </div>
    </Layout>
  );
}
