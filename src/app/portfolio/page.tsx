import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import { mainProjects, archivedProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio – Anton Korenyako',
  description:
    'Selected work from 15+ years in product design. Enterprise platforms, mobile apps, brand websites.',
};

export default function PortfolioPage() {
  return (
    <Layout backgroundColor="#FFFFFF">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-12 font-headline">Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="mt-24 mb-24">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-2 font-headline">Previous Work</h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-16">Notable past projects completed before 2022</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
              {archivedProjects.map((project) => (
                <Link href={`/portfolio/${project.id}`} key={project.id} className="block animate-fade-in">
                  <h3 className="text-xl md:text-2xl font-medium text-foreground">{project.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{project.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials />
    </Layout>
  );
}
