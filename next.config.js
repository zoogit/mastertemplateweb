const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://nimamaghame.com"
          }
        ]
      }
    ];
  },
  turbopack: {
    root: path.resolve(__dirname)
  }
};

module.exports = nextConfig;
