import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['cdn.mezon.ai', 'cdn.mezon.vn'],
  },
};

export default nextConfig;
