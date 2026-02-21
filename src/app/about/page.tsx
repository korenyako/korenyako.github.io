import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'About – Anton Korenyako',
  description:
    'Product designer with 15+ years in digital. Enterprise platforms, mobile apps, brand websites.',
};

export default function AboutPage() {
  return (
    <Layout backgroundColor="#FFFFFF">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Bio Content */}
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl font-medium text-foreground font-headline">
                    About
                  </h1>

                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                      I&apos;m a product designer with 15+ years in digital. Worked with KFC, PepsiCo, Bud at Scholz &amp; Friends. Led design for an HR platform with 250K daily users (iF Design Award 2022). Recently designed an enterprise cloud platform solo over a year.
                    </p>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                      I focus on making things clear — finding structure in chaos, improving user flows, and crafting experiences that feel effortless.
                    </p>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                      I often join early-stage teams as the first (or only) designer, moving between strategy and execution. On some projects I also handle front-end code.
                    </p>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                      Based in Turin. When not designing, I&apos;m in the Alps or on a road trip with family.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="max-w-[300px] mx-auto lg:mx-0">
                  <div className="aspect-square overflow-hidden bg-neutral-100 rounded-full">
                    <img
                      src="/images/profile.jpg"
                      alt="Anton Korenyako"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
