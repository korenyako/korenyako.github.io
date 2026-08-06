import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import BrandStrip from '@/components/BrandStrip';
import { allProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Anton Korenyako – Product Designer & Art Director',
  description:
    'Product designer in Turin. I design enterprise platforms, mobile apps and websites.',
};

const projects = allProjects.slice(0, 4);

export default function HomePage() {
  return (
    <Layout>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-20">
            <AnimatedHeadline />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              I design enterprise platforms, mobile apps and websites.
            </p>
          </div>

          {/* Brand Strip Section */}
          <BrandStrip />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {projects.map((project) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
