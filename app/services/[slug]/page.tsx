import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/sections/service-detail-page";
import { servicePageMap, servicePages } from "@/lib/service-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageMap[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.name,
      `${service.shortName} Delaware County PA`,
      `${service.shortName} Chester PA`,
      "Commercial cleaning services",
      "Request a site quote",
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "article",
      images: [
        {
          url: service.image,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePageMap[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
