import { AboutUs } from "./_about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Techspire Hub | Your Trusted Partner in Digital Innovation",
  description:
    "Techspire Hub is a technology-driven company specializing in web development, digital marketing, and ERP solutions. Learn about our mission to empower businesses through scalable and innovative digital experiences.",

  keywords: [
    "about Techspire Hub",
    "software development company",
    "digital innovation agency",
    "technology partner",
    "web development experts",
    "ERP software company",
    "digital marketing agency",
    "Techspire Hub team",
    "custom software company",
    "IT services company",
  ],

  authors: [{ name: "Techspire Hub" }],
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://www.techspirehub.com"),
  category: "Technology & Digital Services",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
