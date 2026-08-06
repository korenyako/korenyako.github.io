import type { CSSProperties } from 'react';
import './netok-cover.css';

/*
 * Netok brand reveal cover.
 *
 * Server component: pure inline SVG + CSS animations, no animation library and
 * no client JS of its own. The only JS involved is the shared AnimationObserver,
 * which flips `.in-view` on the root once the card scrolls into view.
 *
 * GEOMETRY — rebuilt, not copied.
 * The white mark in public/images/projects/netok/netok-logo.svg is a single
 * merged <path> of five sub-paths, so it cannot be animated piecewise. It was
 * measured off that file and rebuilt below out of separately animatable
 * primitives:
 *
 *   - node centres sit at 301.9415 / 722.0575 on both axes (1024 grid)
 *   - nodes are RINGS: sub-path 0 traces their outer circles at r = 129.9434,
 *     sub-paths 1-4 wind the opposite way to punch holes at r = 68.108. That
 *     is a stroked circle of centreline radius 99.026 and width 61.835.
 *   - the three N edges are strokes of the same width 61.835, ending on the
 *     ring CENTRELINE (r = 99.026) rather than at the node centre: a line run
 *     centre-to-centre would paint a bar straight through the open hole.
 *
 * Ending exactly on the centreline is what makes the round cap safe. The stroke
 * width equals the ring's thickness, so the cap's radius (30.9175) is half the
 * annulus: from r = 99.026 it reaches out to 129.9434 and in to 68.108, landing
 * on both rims at once. It is therefore painted over entirely by the ring and
 * cannot spill into the hole. Verified — rasterising this with round vs. butt
 * caps yields byte-identical masks. Round is kept for the moving tip during the
 * draw; the cap is invisible in the final frame either way.
 *
 * Verified by rasterising this rebuild against the original at 2048x2048 and
 * diffing: 0.122% of the mark area differs, all of it single-pixel antialiasing
 * along the rims. No crossfade to the original path is needed.
 */

// 1024 grid -> the 60x60 mark box the lockup uses.
const MARK_SCALE = 60 / 1024;

const NEAR = 301.9415;
const FAR = 722.0575;
const RING_R = 99.026; // ring centreline radius
const STROKE = 61.835; // stroke width — rings and edges alike
const INSET = RING_R / Math.SQRT2; // diagonal shortening, per axis

/** Nodes in reveal order — the order the edges are then drawn in. */
const NODES = [
  { cx: NEAR, cy: FAR }, // bottom-left  — the pen starts here
  { cx: NEAR, cy: NEAR }, // top-left
  { cx: FAR, cy: FAR }, // bottom-right
  { cx: FAR, cy: NEAR }, // top-right
];

/** Edges, drawn in sequence: up the left stem, down the diagonal, up the right stem. */
const EDGES = [
  `M${NEAR} ${FAR - RING_R}L${NEAR} ${NEAR + RING_R}`,
  `M${NEAR + INSET} ${NEAR + INSET}L${FAR - INSET} ${FAR - INSET}`,
  `M${FAR} ${FAR - RING_R}L${FAR} ${NEAR + RING_R}`,
];

/** Letter outlines lifted verbatim from netok-lockup.svg (already in lockup space). */
const LETTERS = [
  'M82.0879 45.9999V16.9599H88.1359V19.3119H89.6719C90.3439 18.3199 91.2559 17.5519 92.4079 17.0079C93.5919 16.4639 94.8879 16.1919 96.2959 16.1919C98.3119 16.1919 100.04 16.6399 101.48 17.5359C102.92 18.4319 104.04 19.7119 104.84 21.3759C105.64 23.0399 106.04 25.0239 106.04 27.3279V45.9999H99.9919V28.8639C99.9919 26.5919 99.4799 24.8639 98.4559 23.6799C97.4639 22.4959 95.9919 21.9039 94.0399 21.9039C92.0879 21.9039 90.6159 22.4959 89.6239 23.6799C88.6319 24.8639 88.1359 26.5919 88.1359 28.8639V45.9999H82.0879Z',
  'M117.489 28.4799H134.529L132.513 31.1199C132.513 27.9839 131.953 25.6159 130.833 24.0159C129.745 22.3839 128.113 21.5679 125.937 21.5679C123.633 21.5679 121.857 22.4159 120.609 24.1119C119.361 25.8079 118.737 28.1919 118.737 31.2639C118.737 34.5599 119.361 37.0879 120.609 38.8479C121.857 40.5759 123.697 41.4399 126.129 41.4399C127.633 41.4399 128.961 41.0719 130.113 40.3359C131.265 39.5679 132.241 38.4799 133.041 37.0719H138.753C138.241 39.0879 137.377 40.8319 136.161 42.3039C134.977 43.7439 133.521 44.8639 131.793 45.6639C130.097 46.4319 128.193 46.8159 126.081 46.8159C123.297 46.8159 120.913 46.2079 118.929 44.9919C116.977 43.7439 115.473 41.9679 114.417 39.6639C113.393 37.3279 112.881 34.5279 112.881 31.2639C112.881 28.1599 113.409 25.4879 114.465 23.2479C115.553 21.0079 117.073 19.2799 119.025 18.0639C120.977 16.8159 123.281 16.1919 125.937 16.1919C128.465 16.1919 130.625 16.7679 132.417 17.9199C134.241 19.0719 135.617 20.7679 136.545 23.0079C137.505 25.2159 137.985 27.9039 137.985 31.0719C137.985 31.4879 137.969 31.9039 137.937 32.3199C137.937 32.7039 137.921 33.0879 137.889 33.4719H117.489V28.4799Z',
  'M156.059 9.4719V16.9599H169.019V22.5279H156.059V36.3039C156.059 37.9039 156.379 39.1359 157.019 39.9999C157.659 40.8319 158.603 41.2479 159.851 41.2479C161.131 41.2479 162.139 40.7839 162.875 39.8559C163.643 38.9279 164.203 37.4719 164.555 35.4879H169.931C169.771 39.1679 168.795 41.9839 167.003 43.9359C165.243 45.8559 162.795 46.8159 159.659 46.8159C156.555 46.8159 154.171 45.9199 152.507 44.1279C150.843 42.3039 150.011 39.7439 150.011 36.4479V22.5279H143.963V16.9599H150.011V9.4719H156.059Z',
  'M188.628 46.8159C185.908 46.8159 183.54 46.1919 181.524 44.9439C179.54 43.6959 177.988 41.9359 176.868 39.6639C175.78 37.3599 175.236 34.6399 175.236 31.5039C175.236 28.3679 175.78 25.6639 176.868 23.3919C177.988 21.0879 179.54 19.3119 181.524 18.0639C183.54 16.8159 185.908 16.1919 188.628 16.1919C191.38 16.1919 193.748 16.8159 195.732 18.0639C197.716 19.3119 199.252 21.0879 200.34 23.3919C201.46 25.6639 202.02 28.3679 202.02 31.5039C202.02 34.6399 201.46 37.3599 200.34 39.6639C199.252 41.9359 197.716 43.6959 195.732 44.9439C193.748 46.1919 191.38 46.8159 188.628 46.8159ZM188.628 41.2479C190.964 41.2479 192.788 40.3999 194.1 38.7039C195.412 36.9759 196.068 34.5759 196.068 31.5039C196.068 28.3999 195.412 25.9999 194.1 24.3039C192.788 22.5759 190.964 21.7119 188.628 21.7119C186.292 21.7119 184.468 22.5759 183.156 24.3039C181.844 25.9999 181.188 28.3999 181.188 31.5039C181.188 34.5759 181.844 36.9759 183.156 38.7039C184.468 40.3999 186.292 41.2479 188.628 41.2479Z',
  'M226.813 45.9999L214.909 31.8879L227.341 16.9599H234.589L222.301 31.6479L234.397 45.9999H226.813ZM210.541 45.9999V5.2959H216.589V45.9999H210.541Z',
];

const idx = (i: number) => ({ ['--netok-i']: i } as CSSProperties);

const NetokCover = ({ className }: { className?: string }) => {
  return (
    <div className={`netok-cover${className ? ` ${className}` : ''}`} data-animate>
      {/*
        viewBox is the 235x60 lockup box padded vertically to 96, so the mark has
        room to sit enlarged and centred before it settles left. Padding it here
        rather than growing the mark keeps the element's size fixed from frame
        one — nothing about this animation can shift layout.
      */}
      <svg
        className="netok-cover__svg"
        viewBox="0 -18 235 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Netok"
      >
        <g className="netok-mark">
          {/*
            bbox anchor. `transform-box: fill-box` measures the group's live
            bounding box, which would otherwise shrink while the disc and nodes
            scale up and drag the transform origin with it. This pins the box to
            the mark's design square so the origin stays at its centre.
          */}
          <rect x="0" y="0" width="60" height="60" fill="none" />

          <g transform={`scale(${MARK_SCALE})`}>
            <circle className="netok-disc" cx="512" cy="512" r="496" fill="#3CB57F" />

            {/* Edges sit under the nodes: a growing stroke tip emerges from inside a ring. */}
            <g
              className="netok-edges"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={STROKE}
              strokeLinecap="round"
            >
              {EDGES.map((d) => (
                <path key={d} className="netok-edge" d={d} pathLength={1} />
              ))}
            </g>

            <g fill="none" stroke="#FFFFFF" strokeWidth={STROKE}>
              {NODES.map((n, i) => (
                <circle
                  key={`${n.cx}-${n.cy}`}
                  className="netok-node"
                  style={idx(i)}
                  cx={n.cx}
                  cy={n.cy}
                  r={RING_R}
                />
              ))}
            </g>
          </g>
        </g>

        <g fill="#FFFFFF">
          {LETTERS.map((d, i) => (
            <path key={d} className="netok-letter" style={idx(i)} d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default NetokCover;
