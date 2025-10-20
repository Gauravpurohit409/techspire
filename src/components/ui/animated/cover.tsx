"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Paragraph from "./word";
import { AnimatedButton } from "./button";
import { NavLink } from "../nav-link";

export function Cover() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] overflow-hidden flex items-center justify-center"
    >
      <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y }}>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url(/background.png)]" />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      <div className="container relative z-10 text-center px-4 mx-auto">
        <div className="space-y-4">
          <Paragraph
            className="text-5xl font-medium text-balance tracking-wide"
            value="Our work isn’t just aesthetically pleasing, it’s behaviour-driven. We believe what separates a good design from a great one is its ability to solve problems. We try to design-think through everything we do at Brandemic."
          />
          <AnimatedButton size="lg" variant="secondary" asChild>
            <NavLink title="Let's Collaborate" underline={false} />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
