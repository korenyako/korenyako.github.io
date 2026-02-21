import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">Page not found</h1>
        <Link
          href="/"
          className="text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to home
        </Link>
      </div>
    </Layout>
  );
}
