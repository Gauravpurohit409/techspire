"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function MaskText({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "0%" });

  const variants = {
    initial: { y: "100%" },
    enter: { y: "0" },
  };

  return (
    <div ref={body} className={className}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden m-0">
            <motion.h1
              custom={index}
              variants={variants}
              transition={{
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * index,
              }}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.h1>
          </div>
        );
      })}
    </div>
  );
}
