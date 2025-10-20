"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  delay?: number;
  underline?: boolean;
}

export function NavLink({
  title,
  children,
  className,
  href,
  delay = 0,
  underline = true,
}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const pathname = usePathname();
  const letters = title.split("");
  const isActive = href === pathname;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoPlay(true);
      const endTimer = setTimeout(() => setAutoPlay(false), 800);
      return () => clearTimeout(endTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = hovered || autoPlay;

  const Wrapper = href ? Link : Slot;
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper {...wrapperProps}>
      <motion.div
        className={cn(
          "relative cursor-pointer group",
          children
            ? "inline-flex items-center justify-center gap-2"
            : "inline-block",
          className,
        )}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="relative overflow-hidden w-max">
          {/* Text animation */}
          {!isActive ? (
            <>
              {/* Base text */}
              <motion.span className="inline-block">
                {letters.map((letter, index) => (
                  <motion.span
                    key={`base-${index}`}
                    className="inline-block"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-100%" },
                    }}
                    animate={shouldAnimate ? "hover" : "initial"}
                    transition={{
                      duration: 0.3,
                      ease: [0.6, 0, 0.24, 1],
                      delay: delay + index * 0.015,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>

              {/* Reveal text */}
              <motion.span className="absolute top-0 left-0">
                {letters.map((letter, index) => (
                  <motion.span
                    key={`reveal-${index}`}
                    className="inline-block"
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: 0 },
                    }}
                    animate={shouldAnimate ? "hover" : "initial"}
                    transition={{
                      duration: 0.3,
                      ease: [0.6, 0, 0.24, 1],
                      delay: delay + index * 0.015,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </>
          ) : (
            <span className="inline-block">{title}</span>
          )}

          {/* Underline animation */}
          {isActive ? (
            <div className="absolute left-0 bottom-0 h-px w-full bg-foreground" />
          ) : underline ? (
            <AnimatePresence mode="wait">
              {(hovered || autoPlay) && (
                <motion.div
                  key="underline-hover"
                  className="absolute left-0 bottom-0 h-px w-full bg-foreground"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.3,
                    ease: [0.6, 0, 0.24, 1],
                  }}
                />
              )}
            </AnimatePresence>
          ) : null}
        </div>
        {children}
      </motion.div>
    </Wrapper>
  );
}
