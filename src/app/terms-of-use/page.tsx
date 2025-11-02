import { contactDetails } from "@/data";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Techspire Hub",
  description:
    "Review Techspire Hub’s Terms of Use outlining the legal agreements, conditions, and responsibilities for using our website and digital services.",

  keywords: [
    "terms of use",
    "terms and conditions",
    "Techspire Hub legal",
    "user agreement",
    "website terms",
    "service agreement",
    "legal policies",
  ],

  authors: [{ name: "Techspire Hub" }],
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://www.techspirehub.com"),

  alternates: {
    canonical: "https://www.techspirehub.com/terms-of-use",
  },

  category: "Legal & Compliance",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function TermsOfService() {
  return (
    <section className="container mx-auto py-32">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          Welcome to Techspire Hub Solution L.L.C (“we”, “our”, or “us”). By
          accessing or using our website, software, or digital services, you
          agree to these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          1. Use of Our Services
        </h2>
        <p>
          You agree to use our services only for lawful purposes and in
          accordance with these terms. You are responsible for ensuring that
          your use complies with applicable local laws and regulations.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          2. Intellectual Property
        </h2>
        <p>
          All content, code, and materials provided by Techspire Hub Solution
          L.L.C are protected by copyright and intellectual property laws.
          Unauthorized reproduction or distribution of our materials is
          prohibited.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          3. Client Responsibilities
        </h2>
        <p>
          Clients must provide accurate information and timely feedback during
          project execution. Delays in response or approvals may affect project
          timelines and costs.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          4. Payments & Billing
        </h2>
        <p>
          Payment terms are defined in your project proposal or agreement.
          Invoices are due as stated, and work may pause or terminate if
          payments are delayed. All fees are non-refundable unless otherwise
          stated in writing.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          5. Warranties & Liability
        </h2>
        <p>
          We strive to deliver high-quality, reliable software solutions.
          However, we cannot guarantee that services will be error-free or
          uninterrupted. Our liability is limited to the amount paid for the
          specific service in question.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          6. Confidentiality
        </h2>
        <p>
          Both parties agree to keep proprietary or confidential information
          secure and not disclose it to third parties without consent, except as
          required by law.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          7. Termination
        </h2>
        <p>
          Either party may terminate the agreement with written notice. Upon
          termination, clients must pay for work completed up to that date.
          Certain clauses, such as confidentiality and intellectual property,
          will survive termination.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          8. Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. Continued use of our
          services after changes take effect constitutes acceptance of the
          revised terms.
        </p>

        <h2 className="text-secondary text-2xl font-semibold mt-8">
          9. Contact Us
        </h2>
        <p>
          For questions regarding these Terms, contact us at{" "}
          <a
            href={`mailto:${contactDetails.mail}`}
            className="text-secondary underline"
          >
            {contactDetails.mail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
