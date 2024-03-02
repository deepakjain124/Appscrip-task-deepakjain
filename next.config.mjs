/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images: {
    unoptimized:true,
    domains: ['fakestoreapi.com'],
  },
};

export default nextConfig;
