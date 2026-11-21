export default function robots() {
  const baseUrl = (process.env.SITE_URL || "http://localhost:3000").replace(
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
