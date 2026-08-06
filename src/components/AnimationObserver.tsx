'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/*
 * Watches every [data-animate] element and adds `in-view` when it enters the
 * viewport. This is the only client JS the scroll-triggered covers need, which
 * keeps ProjectCard and friends on the server.
 *
 * LOOPING
 * An element may declare `--animate-cycle` in CSS. If it does, the class is
 * stripped and re-added on that period, restarting every CSS animation beneath
 * it from zero. Driving the loop from here rather than with
 * `animation-iteration-count: infinite` is deliberate: infinite only honours
 * `animation-delay` on the first iteration, so a staggered sequence whose steps
 * have different durations drifts out of phase from the second cycle onward.
 * Re-triggering keeps every delay and duration authored in plain seconds.
 *
 * Loops are suspended while the element is off-screen, and never start at all
 * under prefers-reduced-motion.
 */

/** Milliseconds from an element's `--animate-cycle`; 0 means "play once". */
const cycleMs = (el: Element): number => {
  const raw = getComputedStyle(el).getPropertyValue('--animate-cycle').trim();
  if (!raw) return 0;
  const value = parseFloat(raw);
  if (!Number.isFinite(value) || value <= 0) return 0;
  return raw.endsWith('ms') ? value : value * 1000;
};

const AnimationObserver = () => {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = new Map<Element, number>();

    // Ancient browser, or one that lacks IO: reveal everything rather than
    // leave it stuck in its start state.
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('in-view'));
      return;
    }

    const stop = (el: Element) => {
      const id = timers.get(el);
      if (id !== undefined) {
        clearInterval(id);
        timers.delete(el);
      }
    };

    const replay = (el: Element) => {
      el.classList.remove('in-view');
      void (el as HTMLElement).offsetWidth; // reflow — without it the class churn is coalesced
      el.classList.add('in-view');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (!entry.isIntersecting) {
            if (timers.has(el)) {
              stop(el);
              el.classList.remove('in-view');
            }
            return;
          }

          el.classList.add('in-view');
          const cycle = reduced.matches ? 0 : cycleMs(el);
          if (cycle > 0) {
            if (!timers.has(el)) {
              timers.set(el, window.setInterval(() => replay(el), cycle));
            }
          } else {
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    const scan = (root: Element | Document) => {
      if (root instanceof Element && root.matches('[data-animate]')) observer.observe(root);
      root.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    };
    scan(document);

    // Picks up anything rendered after this effect ran — client-side route
    // content, or a cover remounted by the dev sandbox's Replay button.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) scan(node as Element);
        })
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      timers.forEach((id) => clearInterval(id));
      timers.clear();
    };
  }, [pathname]);

  return null;
};

export default AnimationObserver;
