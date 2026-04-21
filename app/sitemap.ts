import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
import { areaPages } from "@/lib/area-pages";
import { serviceAreaPages } from "@/lib/service-area-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/about",
    "/contact",
    "/service-areas",
    "/how-quotes-work",
  ];
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);
  const areaRoutes = areaPages.map((area) => `/service-areas/${area.slug}`);
  const localServiceRoutes = serviceAreaPages.map((page) => page.path);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...localServiceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route.startsWith("/services/") || route.startsWith("/service-areas/")
          ? "weekly"
          : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/services/") || route.startsWith("/service-areas/")
          ? 0.9
          : 0.8,
  }));
}
