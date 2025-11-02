import React from "react";
import { motion, useInView } from "framer-motion";
import { page } from "../ui/styles/page";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { cn } from "@/lib/utils";

type Props = {
  heading?: string;
  description: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
};

export function Process({
  heading = "Our Process",
  description,
  steps,
}: Props) {
  const processRef = React.useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <section ref={processRef} className="relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 relative"
        >
          {/* Left Sticky Header */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-5 md:sticky md:top-24 self-start h-fit"
          >
            <span className={cn(page.subTitle, "text-muted-foreground")}>
              how we work
            </span>
            <div className="space-y-4">
              <h2 className={page.title}>{heading}</h2>
              <p className={page.description}>{description}</p>
            </div>
          </motion.div>

          <div className="md:col-span-1" />

          {/* Right Scroll Column */}
          <div className="flex flex-col items-center md:col-span-6 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative w-full"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className={page.description}>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
