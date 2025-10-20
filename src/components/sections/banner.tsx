"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MaskText } from "../ui/animated/mask-text";
import { AnimatedButton } from "../ui/animated/button";
import { NavLink } from "../ui/nav-link";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText?: string;
}

export function CTABanner({
  title,
  description,
  buttonText = "Get Started",
}: CTABannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-xl border border-border p-12 sm:p-16 lg:p-20">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
          <MaskText
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            phrases={[title]}
          />

          <MaskText
            className="leading-6 md:leading-7 text-base md:text-lg text-balance tracking-wide text-muted-foreground"
            phrases={[description]}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AnimatedButton size="lg" asChild>
              <NavLink
                title={buttonText}
                href="/contact-us"
                underline={false}
              />
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
