"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useParams } from "next/navigation";
// import { AnimatedTestimonials } from "@/components/ui/animated/testimonials";
import { FAQ } from "@/components/ui/animated/faq";
import { services } from "@/data/services";
import { CTABanner } from "@/components/sections/banner";
import { cn } from "@/lib/utils";
import { page } from "@/components/ui/styles/page";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/variants";
import { Process } from "@/components/sections/process";

export function ServiceDetail() {
  const params = useParams();
  const id = params.id;

  const serviceInfo = services.find((service) => service.name === id);

  const storyRef = useRef(null);
  const faqsRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const faqsInView = useInView(faqsRef, { once: true, margin: "-100px" });

  if (!serviceInfo) {
    return (
      <div className="flex items-center justify-center text-center text-muted-foreground">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <>
      {/* --- Story Section --- */}
      <section ref={storyRef} className="relative">
        <motion.div
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-16 lg:items-end"
        >
          <div className="md:flex-1 grid gap-6">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <span className={cn(page.subTitle, "text-muted-foreground")}>
                {serviceInfo.subtitle}
              </span>
              <h2 className={cn(page.heading, "font-bold leading-tight")}>
                {serviceInfo.title}{" "}
                <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-secondary/100 to-primary/60">
                  {serviceInfo.highlight}
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInRight} className={cn(page.content)}>
              {serviceInfo.description.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ),
              )}

              {serviceInfo.points && serviceInfo.points.length > 0 && (
                <ul className="mt-6">
                  {serviceInfo.points.map((point: string, index: number) => (
                    <li
                      key={index}
                      className={cn(page.content, "flex items-center gap-3")}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
          <div className="md:flex-1 h-max">{serviceInfo.header}</div>
        </motion.div>
      </section>

      {/* --- Process Section --- */}
      <Process {...serviceInfo.process} />

      {/* --- FAQs Section --- */}
      <section ref={faqsRef}>
        <motion.div
          initial="hidden"
          animate={faqsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className={page.title}>{serviceInfo.faqs.heading}</h2>
            <p className={page.description}>{serviceInfo.faqs.description}</p>
          </motion.div>
          <FAQ faqs={serviceInfo.faqs.items} />
        </motion.div>
      </section>

      <CTABanner
        title={serviceInfo.banner.title}
        description={serviceInfo.banner.description}
        buttonText="Let's Collaborate"
      />
    </>
  );
}
