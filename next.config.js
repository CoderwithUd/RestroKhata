/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Performance
  compress: true,
  poweredByHeader: false,
  // SEO
  generateEtags: true,
};

module.exports = nextConfig;
