'use client';

import { useState, type ReactNode } from 'react';

/*
 * Dev-only wrapper shared by the cover sandboxes. Replay remounts with a fresh
 * key, which gives a fresh DOM node; the layout's AnimationObserver notices it
 * and starts the sequence — and its loop — from zero.
 */
const CoverPreview = ({ children }: { children: ReactNode }) => {
  const [run, setRun] = useState(0);

  return (
    <div className="space-y-6">
      {/* Mirrors ProjectCardMedia's container exactly — same box, same hover lift. */}
      <div key={run} className="group">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-3xl">{children}</div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className="px-4 py-2 rounded-full bg-neutral-900 text-white text-sm hover:bg-neutral-700 transition-colors"
        >
          Replay
        </button>
        <span className="text-sm text-muted-foreground">run #{run + 1}</span>
      </div>
    </div>
  );
};

export default CoverPreview;
