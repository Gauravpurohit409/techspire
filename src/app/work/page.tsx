import { Metadata } from "next";
import { Work } from "./_work";

export const metadata: Metadata = {
  title: "Our Work | Techspire Hub Projects & Case Studies",
  description:
    "Explore Techspire Hub's portfolio of innovative projects — from web development and ERP systems to CRM and AI chatbot integrations. Discover how we help businesses grow through technology and creativity.",

  keywords: [
    "Techspire Hub projects",
    "case studies",
    "software development portfolio",
    "web development projects",
    "digital marketing results",
    "ERP implementation case study",
    "CRM development examples",
    "AI chatbot integration",
    "custom software work",
    "business automation solutions",
  ],

  authors: [{ name: "Techspire Hub" }],
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://techspirehub.com"),

  category: "Technology & Digital Services",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function WorkPage() {
  return <Work />;
}
