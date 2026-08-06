import type { Metadata } from 'next';
import CoverPreview from '../CoverPreview';
import NetokCover from '@/components/covers/NetokCover';

/*
 * Sandbox for tuning the Netok cover. Note this page IS part of the static
 * export and ships to the live site, hence the noindex.
 */
export const metadata: Metadata = {
  title: 'Netok cover — sandbox',
  robots: { index: false, follow: false },
};

export default function NetokDevPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F1] py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-2xl font-medium">Netok cover</h1>
          <p className="text-sm text-muted-foreground">
            Timings live in <code>src/components/covers/netok-cover.css</code>
          </p>
        </div>

        {/* Same grid geometry as the real project grids, so the cover is seen at true size. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <CoverPreview>
            <NetokCover className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
          </CoverPreview>
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
