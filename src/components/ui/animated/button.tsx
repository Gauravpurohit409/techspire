"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AnimatedButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="inline-block"
    >
      <Button {...props} className={className}>
        {children}
      </Button>
    </motion.div>
  );
}
