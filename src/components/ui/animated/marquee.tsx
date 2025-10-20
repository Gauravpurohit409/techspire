"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({
  logos,
  from,
  to,
}: {
  logos: React.FC<{ className?: string }>[];
  from: string;
  to: string;
}) {
  return (
    <div
      className={cn(
        "flex",
        "mask-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]",
        "dark:mask-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,1)_20%,rgba(255,255,255,1)_80%,rgba(255,255,255,0))]",
      )}
    >
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {logos.map((Logo, index) => (
          <Logo className="h-12 w-24 mr-20" key={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {logos.map((Logo, index) => (
          <Logo className="h-12 w-24 mr-20" key={index} />
        ))}
      </motion.div>
    </div>
  );
}
