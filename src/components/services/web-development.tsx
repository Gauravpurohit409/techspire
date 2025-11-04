"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export function WebDevelopment() {
  const { theme } = useTheme();
  const image =
    theme === "dark" ? "web-development-dark.png" : "web-development-light.png";

  return (
    <div className="flex justify-center px-4 md:px-10">
      <motion.figure
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={cn(
          "mx-auto relative z-1 max-w-full h-max shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]",
          "dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg border rounded-lg border-border",
        )}
      >
        <div className="relative flex items-center max-w-3xl bg-foreground/5 rounded-t-lg py-2 px-2 sm:px-24">
          <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
            <span className="size-1 sm:size-2 bg-foreground/10 rounded-full"></span>
            <span className="size-1 sm:size-2 bg-foreground/10 rounded-full"></span>
            <span className="size-1 sm:size-2 bg-foreground/10 rounded-full"></span>
          </div>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center items-center size-full bg-background/15
                       text-[.5rem] text-muted-foreground rounded-sm sm:text-sm"
          >
            www.techspire-hub.com
          </motion.div>
        </div>

        <div className="bg-background rounded-b-lg">
          <Image
            className="max-w-full h-auto rounded-b-lg"
            src={`/images/services/${image}`}
            alt="Browser Placeholder"
            width={500}
            height={500}
          />
        </div>
      </motion.figure>
    </div>
  );
}
