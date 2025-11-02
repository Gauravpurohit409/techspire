import { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceDetail } from "./_service";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.name === params.id);

  if (!service) {
    return {
      title: "Service Not Found | Techspire Hub",
      description: "The service you are looking for does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const serviceTitle = `${service.subtitle} | Techspire Hub`;
  const serviceDescription = `${service.description.join(" ")}. ${service.points.join(" ")}`;

  const keywords = [
    `${service.title}`,
    `${service.highlight}`,
    `${service.subtitle}`,
    "Techspire Hub",
    "digital solutions",
    "software development",
    "web development",
    "ERP software",
    "custom applications",
    ...service.points,
  ];

  const url = `https://www.techspirehub.com/services/${service.name}`;

  return {
    title: serviceTitle,
    description: serviceDescription,
    keywords,
    authors: [{ name: "Techspire Hub" }],
    creator: "Techspire Hub",
    publisher: "Techspire Hub",

    openGraph: {
      title: serviceTitle,
      description: serviceDescription,
      url,
      siteName: "Techspire Hub",
      locale: "en_US",
      type: "article",
    },

    category: "Technology & Digital Services",
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export default function ServicePage() {
  return <ServiceDetail />;
}
