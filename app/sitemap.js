export default function sitemap() {
  const baseUrl = "https://www.balniketan.ind.in"; // change to your domain

  const routes = [
    "",
    "/about",
    "/activities",
    "/contact",
    "/facilities",
    "/faculty",
    "/gallery",
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return staticPages;
}