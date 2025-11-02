"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MaskText } from "../ui/animated/mask-text";
import { AnimatedButton } from "../ui/animated/button";
import { NavLink } from "../ui/nav-link";
import { BackgroundBeams } from "../ui/animated/background-beams";
import { cn } from "@/lib/utils";
import { page } from "../ui/styles/page";

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
      <div className="relative overflow-hidden rounded-xl border border-primary/5 p-8 sm:p-16 lg:p-20 ">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/10 opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto">
          <MaskText
            className={cn(page.heading, "text-balance")}
            phrases={[title]}
          />

          <MaskText
            className={cn(page.content, "text-balance")}
            phrases={[description]}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AnimatedButton variant="secondary" asChild>
              <NavLink
                title={buttonText}
                href="/contact-us"
                underline={false}
              />
            </AnimatedButton>
          </motion.div>
        </div>
        <BackgroundBeams />
      </div>
    </motion.div>
  );
}
