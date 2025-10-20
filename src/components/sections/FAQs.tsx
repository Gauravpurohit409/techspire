import { FAQItem } from "@/types/faq";
import { FAQ } from "../ui/animated/faq";

export function FAQs({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="space-y-9">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="leading-6 tracking-wide text-muted-foreground text-balance">
          You have questions and we have answers. You can also contact us, we’ll
          be happy to answer any of your inquiries.
        </p>
      </div>
      <FAQ faqs={faqs} />
    </div>
  );
}
