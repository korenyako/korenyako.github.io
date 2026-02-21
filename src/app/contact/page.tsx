import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Contact – Anton Korenyako',
  description:
    'Get in touch with Anton Korenyako. Available for new design projects and collaborations.',
};

export default function ContactPage() {
  return (
    <Layout backgroundColor="#FFFFFF">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="py-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-medium text-foreground font-headline">
                  Get in touch
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  I&apos;m always interested in new opportunities and collaborations.
                  Feel free to reach out if you&apos;d like to work together.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-medium text-foreground">Email</h2>
                  <a
                    href="mailto:anton.korenyako@gmail.com"
                    className="text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    anton.korenyako@gmail.com
                  </a>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-medium text-foreground">LinkedIn</h2>
                  <a
                    href="https://www.linkedin.com/in/korenyako/"
                    className="text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/korenyako/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
