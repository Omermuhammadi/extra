import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaDetailPage } from "@/components/sections/area-detail-page";
import { areaPageMap, areaPages } from "@/lib/area-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return areaPages.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areaPageMap[slug];

  if (!area) {
    return {};
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `Commercial cleaning ${area.name}`,
      `Janitorial services ${area.name}`,
      "Office cleaning",
      "Post-construction cleaning",
      "Industrial cleaning",
    ],
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/service-areas/${area.slug}`,
      type: "website",
      images: [
        {
          url: area.image,
          alt: `Commercial cleaning in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [area.image],
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areaPageMap[slug];

  if (!area) {
    notFound();
  }

  return <AreaDetailPage area={area} />;
}
