/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external image domains if needed in the future
    // Add domain names here when using external images
    remotePatterns: [],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
