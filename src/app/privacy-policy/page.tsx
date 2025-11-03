import { contactDetails } from "@/data";
import React from "react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { page } from "@/components/ui/styles/page";

export const metadata: Metadata = {
  title: "Privacy Policy | Techspire Hub",
  description:
    "Read Techspire Hub’s Privacy Policy to understand how we collect, use, and protect your personal information when you visit or interact with our digital platforms.",

  keywords: [
    "privacy policy",
    "data protection",
    "personal data",
    "Techspire Hub privacy",
    "cookie policy",
    "information security",
    "GDPR compliance",
  ],

  authors: [{ name: "Techspire Hub" }],
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://www.techspirehub.com"),

  alternates: {
    canonical: "https://www.techspirehub.com/privacy-policy",
  },

  category: "Legal & Compliance",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <h1 className={cn(page.heading, "mb-6")}>Privacy Policy</h1>
      <p className={cn(page.description, "mb-8")}>
        Last updated: November 2025
      </p>

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p className={page.content}>
          Techspire Hub Solution L.L.C (“we”, “our”, or “us”) values your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you visit our website or use our
          software and digital services.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          1. Information We Collect
        </h2>
        <p className={page.content}>
          We may collect personal information such as your name, email, phone
          number, company details, and project requirements when you contact us
          or use our services. We also collect non-personal data such as browser
          type, device information, and site usage analytics to improve our
          performance.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          2. How We Use Your Information
        </h2>
        <p className={page.content}>
          We use your data to provide and improve our services, communicate with
          you, and deliver tailored software solutions. We may also use your
          information for internal analytics, service updates, and marketing
          communications (only with your consent).
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          3. Data Protection & Security
        </h2>
        <p className={page.content}>
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or disclosure. Our systems use
          secure servers, encryption, and restricted access protocols.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          4. Sharing of Information
        </h2>
        <p className={page.content}>
          We do not sell or rent your personal data. We may share information
          with trusted service providers and partners only when necessary to
          deliver our services, under strict confidentiality agreements.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          5. Your Rights
        </h2>
        <p className={page.content}>
          You have the right to access, update, or delete your personal
          information. You can contact us anytime to exercise your privacy
          rights or request data removal.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          6. Cookies
        </h2>
        <p className={page.content}>
          Our website uses cookies to improve user experience and track site
          performance. You may choose to disable cookies through your browser
          settings.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          7. Updates to This Policy
        </h2>
        <p className={page.content}>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with a new “Last updated” date.
        </p>

        <h2 className="text-secondary text-lg md:text-2xl font-semibold mt-8">
          8. Contact Us
        </h2>
        <p className={page.content}>
          For any privacy-related questions or requests, contact us at{" "}
          <a
            href={`mailto:${contactDetails.mail}`}
            className="text-secondary underline"
          >
            {contactDetails.mail}
          </a>
          .
        </p>
      </div>
    </>
  );
}
