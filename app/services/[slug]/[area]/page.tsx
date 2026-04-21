import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceAreaDetailPage } from "@/components/sections/service-area-detail-page";
import { getServiceAreaPage, serviceAreaPages } from "@/lib/service-area-pages";

type PageProps = {
  params: Promise<{ slug: string; area: string }>;
};

export async function generateStaticParams() {
  return serviceAreaPages.map((page) => ({
    slug: page.serviceSlug,
    area: page.areaSlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, area } = await params;
  const page = getServiceAreaPage(slug, area);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [
      `${page.service.shortName} ${page.area.name}`,
      page.service.name,
      `Commercial cleaning ${page.area.name}`,
      "Request a site quote",
    ],
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.path,
      type: "article",
      images: [
        {
          url: page.image,
          alt: page.heroTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default async function LocalServiceAreaPage({ params }: PageProps) {
  const { slug, area } = await params;
  const page = getServiceAreaPage(slug, area);

  if (!page) {
    notFound();
  }

  return <ServiceAreaDetailPage page={page} />;
}

