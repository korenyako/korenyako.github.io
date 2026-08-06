import type { Metadata } from 'next';
import CoverPreview from '../CoverPreview';
import KoticCover from '@/components/covers/KoticCover';

/*
 * Sandbox for tuning the Kotic cover. Note this page IS part of the static
 * export and ships to the live site, hence the noindex.
 */
export const metadata: Metadata = {
  title: 'Kotic cover — sandbox',
  robots: { index: false, follow: false },
};

export default function KoticDevPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F1] py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-2xl font-medium">Kotic cover</h1>
          <p className="text-sm text-muted-foreground">
            Timings live in <code>src/components/covers/kotic-cover.css</code>
          </p>
        </div>

        {/* Same grid geometry as the real project grids, so the cover is seen at true size. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <CoverPreview>
            <KoticCover className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
          </CoverPreview>
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
