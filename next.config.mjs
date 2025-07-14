export default {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true, // Disable image optimization for static export
  },
  output: 'export',
};
