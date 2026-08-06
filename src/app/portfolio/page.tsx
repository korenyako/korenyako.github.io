import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import { mainProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio – Anton Korenyako',
  description:
    'Selected work from 15+ years in product design. Enterprise platforms, mobile apps, brand websites.',
};

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-12 font-headline">Portfolio</h1>
          {/* mb-24 carries the bottom spacing the removed "Earlier work" block used to provide. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {mainProjects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <Testimonials />
    </Layout>
  );
}
