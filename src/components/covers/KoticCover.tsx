import type { CSSProperties } from 'react';
import './kotic-cover.css';

/*
 * Kotic brand reveal cover.
 *
 * Server component: inline SVG + CSS animations only, no animation library and
 * no client JS of its own. The shared AnimationObserver flips `.in-view` when
 * the card scrolls in, and loops it on the `--animate-cycle` period.
 *
 * GEOMETRY
 * Unlike Netok, nothing had to be rebuilt: the source artwork already ships the
 * graffiti slab and each of the five letters as separate paths, so it animates
 * piecewise as-is. Coordinates are verbatim from the splash-screen mockup.
 *
 * The viewBox is the artwork's own 443x269 box padded by 2 on every side. The
 * slab's outline sits exactly on 0..442.204 x 0..268.219, so its 3-unit stroke
 * would otherwise be clipped in half along every edge while it draws.
 */

const PADDED_VIEWBOX = '-2 -2 447 273';

/** The graffiti slab: drawn as a stroke first, then flooded with its fill. */
const SLAB =
  'M310.94 268.219L243.068 249.781L236.62 203.557L51.748 241.152L73.1067 199.921L16.7613 210.589L0 45.6733L254.079 -1.16291e-05L204.077 57.8133L344.703 -1.16291e-05L347.673 83.516L442.204 22.5054L430.061 240.643L310.94 268.219Z';

/** k, o, t, i, c — stamped in left to right. */
const LETTERS = [
  'M18.6254 59.6013L72.54 49.5L57.44 111.173L109.223 47.544C167.679 34.3147 150.659 37.1027 211.109 24.6827L82.7094 129.383L158.807 163.396L72.54 182.511L50.1027 139.199L38.0334 188.819L31.884 190.063L18.6254 59.6013Z',
  'M83.4174 217.24L140.132 107.767L235.813 67.8519L229.583 187.515L83.4174 217.24ZM155.544 161.853L189.805 155.191L204.651 114.448L168.524 128L155.544 161.853Z',
  'M211.949 102.931L203.919 146.62L244.644 137.151L258.463 236.221L301.371 247.876L276.433 133.199L314.717 123.803L307.441 95.3933L211.949 102.931Z',
  'M273.257 44.7094L327.725 31.1574L337.263 209.147L309.627 203.093L273.257 44.7094Z',
  'M388.589 187.229L415.429 178.176L413.479 226.908L322.028 248.079L346.081 104.919L422.297 55.7292L413.849 158.517L394.199 164.251L387.356 132.556L368.981 142.889L363.667 203.188L383.952 199.753L388.589 187.229Z',
];

const SLAB_COLOR = '#FF7FFE';
const LETTER_COLOR = '#FF383B';

const KoticCover = ({ className }: { className?: string }) => {
  return (
    <div className={`kotic-cover${className ? ` ${className}` : ''}`} data-animate>
      <svg
        className="kotic-cover__svg"
        viewBox={PADDED_VIEWBOX}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Kotic"
      >
        <path
          className="kotic-slab"
          d={SLAB}
          pathLength={1}
          stroke={SLAB_COLOR}
          strokeWidth={3}
          fill={SLAB_COLOR}
        />

        {LETTERS.map((d, i) => (
          <path
            key={d}
            className="kotic-letter"
            style={{ ['--kotic-i']: i } as CSSProperties}
            d={d}
            fill={LETTER_COLOR}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        ))}
      </svg>
    </div>
  );
};

export default KoticCover;
