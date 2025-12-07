/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.zmtcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.zomato.com',
      },
    ],
  },
};

export default nextConfig;
