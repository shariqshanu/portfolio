/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolioapi.customwebsitedemo.host",
        pathname: "/storage/**",
      },

      {
        protocol: "http",
        hostname: "127.0.0.1",
      },

      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;