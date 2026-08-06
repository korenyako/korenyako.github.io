/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages has no redirect config, and the only redirect it performs on
  // its own is directory -> directory-with-slash. With `false` the export emits
  // portfolio.html, so /portfolio works but /portfolio/ 404s with no way to fix
  // it. With `true` it emits portfolio/index.html: /portfolio/ is served and
  // /portfolio gets a 301 to it, so both forms resolve.
  trailingSlash: true,
};

export default nextConfig;
