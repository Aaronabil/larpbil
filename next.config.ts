import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  async redirects() {
    return [
      {
        source: "/blog/ctf-bootcamp-id-networkers",
        destination:
          "https://drive.google.com/file/d/1l0-fMgPJtPlypjbxVF478z-LX7jEg7P6/view?usp=drive_link",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
