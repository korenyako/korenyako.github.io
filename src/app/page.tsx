import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import BrandStrip from '@/components/BrandStrip';
import { allProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Anton Korenyako – Product Designer & Art Director',
  description:
    'Designing clear, intuitive digital experiences for startups and global teams. From early MVPs to full-scale platforms.',
};

const projects = allProjects.slice(0, 4);

export default function HomePage() {
  return (
    <Layout backgroundColor="#FFFFFF">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-20">
            <AnimatedHeadline />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              I design and build digital products — enterprise platforms, mobile apps, websites.
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
