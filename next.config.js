/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
    @import "./src/styles/variables/all.scss";
    `,
  },
  images: {
    domains: ["images.metmuseum.org"],
  },
};

module.exports = nextConfig;
