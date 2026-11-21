export default function robots() {
  const baseUrl = (process.env.SITE_URL || "https://larpbil.vercel.app").replace(
    /\/+$/,
    ""
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
