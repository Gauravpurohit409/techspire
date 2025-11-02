import { FAQItem } from "@/types/faq";
import { FAQ } from "../ui/animated/faq";
import { page } from "../ui/styles/page";
import { cn } from "@/lib/utils";

export function FAQs({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="space-y-9">
      <div className="space-y-4 text-center">
        <h2 className={page.title}>Frequently Asked Questions</h2>
        <p className={cn(page.description, "text-balance")}>
          You have questions and we have answers. You can also contact us, we’ll
          be happy to answer any of your inquiries.
        </p>
      </div>
      <FAQ faqs={faqs} />
    </div>
  );
}
