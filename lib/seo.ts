import { siteConfig } from "@/lib/site";

export const sitewideServiceAreas = siteConfig.serviceAreaList;

export const businessAddressSchema = {
  "@type": "PostalAddress",
  addressLocality: "Chester",
  addressRegion: "PA",
  addressCountry: "US",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
