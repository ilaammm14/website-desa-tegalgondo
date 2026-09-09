import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    // TODO: Ganti dengan URL resmi website setelah deploy
    sitemap: "https://tegalgondo.desa.id/sitemap.xml",
  };
}
