"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  const radius = 120; // increase/decrease to control glow radius
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #4B6CB7,
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/textarea rounded-lg p-[2px] transition duration-300"
    >
      <textarea
        ref={ref}
        className={cn(
          `shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)] flex w-full min-h-[120px] rounded-md border-none bg-background px-3 py-2 text-sm transition duration-400
             resize-none group-hover/textarea:shadow-none placeholder:text-muted-foreground
             focus-visible:ring-[2px] focus-visible:ring-border focus-visible:outline-none
             disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_rgba(255,255,255,0.1)]`,
          className,
        )}
        {...props}
      />
    </motion.div>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
