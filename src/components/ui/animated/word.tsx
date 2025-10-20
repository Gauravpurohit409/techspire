"use client";

import React, { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Paragraph({
  value,
  className,
  progress,
}: {
  value: string;
  className?: string;
  progress?: MotionValue<number>;
}) {
  const element = useRef(null);

  // If parent didn't pass progress, fallback to own scroll
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const effectiveProgress = progress ?? scrollYProgress;
  const words = value.split(" ");

  return (
    <p
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={effectiveProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-2 inline-block">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
