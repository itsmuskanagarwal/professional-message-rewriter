/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@tonewise/agents'],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
