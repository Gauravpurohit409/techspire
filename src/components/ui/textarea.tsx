"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        `flex w-full min-h-[120px] max-h-40 rounded-none border-b border-opposite-foreground bg-transparent py-2 text-sm transition duration-400
             placeholder:text-muted-foreground focus-visible:outline-none
             disabled:cursor-not-allowed disabled:opacity-50 overflow-scroll resize-none`,
        className,
      )}
      aria-multiline="true"
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
