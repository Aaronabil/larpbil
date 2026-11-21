export default function sitemap() {
  const baseUrl = (process.env.SITE_URL || "http://localhost:3000").replace(
    /\/+$/,
    ""
  );

  const routes = [
    "",
    "/projects",
    "/blog",
    "/contact",
    "/gears",
    "/setup",
    "/designs",
    "/books",
    "/movies",
    "/resume",
    "/work",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
