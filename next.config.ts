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
        source: "/blog/pentest-roadmap",
        destination:
          "https://medium.com/@nabilmuhamad630/roadmap-5-tahun-menjadi-penetration-tester-andal-2025-2030-9e8c9b7e4157",
        permanent: false,
      },
      {
        source: "/blog/networking-basics",
        destination:
          "https://medium.com/@nabilmuhamad630/belajar-jaringan-dari-nol-routing-ip-dasar-pakai-cisco-packet-tracer-7e15efc94fa4",
        permanent: false,
      },
      {
        source: "/blog/koi-stealer-analysis",
        destination:
          "https://medium.com/@nabilmuhamad630/deteksi-dan-analisis-awal-infeksi-malware-win32-koi-stealer-a70f20dad0db",
        permanent: false,
      },
      {
        source: "/blog/ics-scada-security",
        destination:
          "https://medium.com/@nabilmuhamad630/keamanan-sistem-ics-scada-kenapa-penting-apa-saja-tantangannya-9511a162048e",
        permanent: false,
      },
      {
        source: "/blog/ssh-2fa",
        destination:
          "https://medium.com/@nabilmuhamad630/mengamankan-ssh-kali-linux-dengan-2fa-google-authenticator-9ece09449c8c",
        permanent: false,
      },
      {
        source: "/blog/header-brute-force",
        destination:
          "https://github.com/Aaronabil/header-brute-force-simulator",
        permanent: false,
      },
      {
        source: "/blog/ecc-web3",
        destination:
          "https://medium.com/@nabilmuhamad630/ecc-web3-cryptography-superpower-baru-di-dunia-siber-6be384163dfa",
        permanent: false,
      },
      {
        source: "/blog/dvwa-pentest",
        destination:
          "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-dvwa-activity-7343502600203378689-ve4Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU",
        permanent: false,
      },
      {
        source: "/blog/api-pentest",
        destination:
          "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-lab-api-security-testing-activity-7343873101207625728-M7s3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU",
        permanent: false,
      },
      {
        source: "/blog/metasploitable-pentest",
        destination:
          "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-metasploitable2-activity-7344582455086981122-3Xsy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU",
        permanent: false,
      },
      {
        source: "/blog/mobile-app-pentest",
        destination:
          "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-pentest-mobile-activity-7344944122614452224-19pp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU",
        permanent: false,
      },
      {
        source: "/blog/yara-sigma",
        destination:
          "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_yara-and-sigma-rule-activity-7355267705949601794-vcqK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU",
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
