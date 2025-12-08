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
      {
        protocol: 'https',
        hostname: 'media-assets.swiggy.com',
      },
    ],
  },
};

export default nextConfig;
