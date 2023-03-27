/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "http://meljaraks/github.io" : "",
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
