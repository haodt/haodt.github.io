/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
