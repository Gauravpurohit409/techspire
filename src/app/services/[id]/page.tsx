"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useParams } from "next/navigation";
import { AnimatedTestimonials } from "@/components/ui/animated/testimonials";
import { FAQ } from "@/components/ui/animated/faq";
import { services } from "@/data/services";
import { CTABanner } from "@/components/sections/banner";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id;

  const serviceInfo = services.find((service) => service.name === id);

  const storyRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqsRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const faqsInView = useInView(faqsRef, { once: true, margin: "-100px" });

  if (!serviceInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-muted-foreground">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto container px-8 md:px-0">
      {/* --- Story Section --- */}
      <section ref={storyRef} className="pt-32 md:pt-40 pb-16 relative">
        <motion.div
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeInLeft}>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {serviceInfo.subtitle}
              </span>
              <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-8 leading-tight">
                {serviceInfo.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/100 to-primary/60">
                  {serviceInfo.highlight}
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="space-y-6 text-lg leading-relaxed"
            >
              {serviceInfo.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- Process Section --- */}
      <section ref={processRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {serviceInfo.process.subheading}
              </span>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  {serviceInfo.process.heading}
                </h2>
                <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
                  {serviceInfo.process.description}
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="space-y-6">
                {serviceInfo.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Testimonials Section (optional) --- */}
      {serviceInfo.testimonials && (
        <section ref={testimonialsRef} className="py-32">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                What others say
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Client Success Stories
              </h2>
              <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
                Hear directly from our clients about how our solutions helped
                them grow, innovate, and succeed.
              </p>
            </motion.div>
            <AnimatedTestimonials testimonials={serviceInfo.testimonials} />
          </motion.div>
        </section>
      )}

      {/* --- FAQs Section --- */}
      <section ref={faqsRef} className="py-32">
        <motion.div
          initial="hidden"
          animate={faqsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {serviceInfo.faqs.heading}
            </h2>
            <p className="leading-6 tracking-wide text-muted-foreground text-balance">
              {serviceInfo.faqs.description}
            </p>
          </motion.div>
          <FAQ faqs={serviceInfo.faqs.items} />
        </motion.div>
      </section>

      <CTABanner
        title={serviceInfo.banner.title}
        description={serviceInfo.banner.description}
        buttonText="Let's Collaborate"
      />
    </div>
  );
}
