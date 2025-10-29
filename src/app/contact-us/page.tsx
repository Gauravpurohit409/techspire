import { Metadata } from "next";
import { ContactUs } from "./_contact";

export const metadata: Metadata = {
  title: "Contact Techspire Hub | Let's Build Your Next Digital Project",
  description:
    "Get in touch with Techspire Hub for web development, digital marketing, ERP software, and custom software solutions. Let's collaborate to turn your business ideas into impactful digital experiences.",

  keywords: [
    "contact Techspire Hub",
    "get in touch",
    "software company contact",
    "digital marketing consultation",
    "web development inquiry",
    "ERP software demo",
    "custom software quote",
    "technology partner contact",
    "project consultation",
  ],

  authors: [{ name: "Techspire Hub" }],
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://www.techspirehub.com"),
  alternates: {
    canonical: "https://www.techspirehub.com/contact",
  },

  category: "Technology & Digital Services",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
