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
      {
        source: "/blog/ics-security-deep-dive",
        destination:
          "https://drive.google.com/file/d/18vtfc8yLixPElKBXlcqV8e2UrcTXDakD/view?usp=drive_link",
        permanent: false,
      },
      {
        source: "/blog/methodology-bug-bounty",
        destination:
          "https://drive.google.com/file/d/1nw9cXyGj3P8SHc2ayBmA5XJahtOnMs1u/view",
        permanent: false,
      },
      {
        source: "/blog/manual-vs-automation",
        destination:
          "https://drive.google.com/file/d/1_evz6Y_xUqvvQlTQedShKnKqWYuK6g5u/view",
        permanent: false,
      },
      {
        source: "/blog/red-teaming",
        destination:
          "https://drive.google.com/file/d/1_Yqz82rKHQ_J_iOw3n2PztEcu7iETZ-a/view",
        permanent: false,
      },
      {
        source: "/blog/reverse-engineering",
        destination:
          "https://drive.google.com/file/d/1jR6X6RHA1HIKck8S3q37QdhfuOPpeKpQ/view?usp=sharing",
        permanent: false,
      },
      {
        source: "/blog/wazuh-tuning",
        destination:
          "https://drive.google.com/file/d/1IJfJ7SUBwHvHqkNPubsQ5wxQQ9HFC4fs/view?usp=sharing",
        permanent: false,
      },
      {
        source: "/blog/ctf-playit",
        destination:
          "https://drive.google.com/file/d/1lcFiaitn3mdoJ-jnEWAbMOG7KAcHKzf9/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
