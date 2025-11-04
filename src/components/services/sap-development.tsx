"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cloud, ShieldCheck } from "lucide-react";

export function SAPDevelopment() {
  return (
    <div className="flex justify-center px-0 md:px-10">
      <div className="relative mx-auto max-w-full w-5/6 sm:w-4/5 md:w-96 h-full">
        <motion.figure
          whileHover={{ scale: 1.04, y: -5 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="relative mx-auto max-w-full w-full"
        >
          <div className={cn("mx-auto z-1 max-w-full")}>
            <div className="p-3 rounded-t-lg bg-muted/50">
              <div className="bg-background rounded-t-lg w-full aspect-video flex flex-col justify-center items-center p-6 gap-6">
                <div className="text-6xl font-bold">SAP</div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2 w-4/5">
                    <div className="w-1/6 h-2 rounded-full bg-foreground/20" />
                    <div className="w-4/6 h-2 rounded-full bg-foreground/20" />
                  </div>
                  <div className="flex items-center gap-2 w-4/5">
                    <div className="w-6/12 h-2 rounded-full bg-foreground/20" />
                    <div className="w-1/12 h-2 rounded-full bg-foreground/20" />
                  </div>
                  <div className="flex items-center gap-2 w-2/5">
                    <div className="w-1/6 h-2 rounded-full bg-foreground/20" />
                    <div className="w-4/6 h-2 rounded-full bg-foreground/20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center max-w-3xl bg-foreground/20 rounded-b-lg p-4">
              <div className="w-4 h-4 rounded-full bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="mx-auto w-20 h-6 bg-muted/50" />
            <div className="mx-auto w-32 h-2 rounded-full bg-foreground/20" />
          </div>
        </motion.figure>

        <Cloud className="w-24 h-24 sm:w-32 sm:h-32 fill-muted text-muted stroke-1 absolute -top-4 -left-8 sm:-left-16" />
        <motion.div
          className="absolute bottom-6 right-6 h-20 rounded-xl bg-primary aspect-square text-2xl ring-4 ring-primary/40 border border-primary font-bold flex items-center justify-center z-10"
          animate={{
            boxShadow: [
              "0 0 0px var(--primary)",
              "0 0 15px var(--primary)",
              "0 0 0px var(--primary)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShieldCheck className="w-16 h-16 text-primary fill-primary-foreground stroke-1" />
        </motion.div>
        <figure
          className={cn(
            "absolute -top-8 -right-8",
            "w-40 z-10 max-w-full h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]",
            "dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg",
          )}
        >
          <div className="relative flex items-center max-w-full bg-foreground/10 rounded-t-lg p-2">
            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
              <span className="size-2 bg-foreground/20 rounded-full"></span>
              <span className="size-2 bg-foreground/20 rounded-full"></span>
              <span className="size-2 bg-foreground/20 rounded-full"></span>
            </div>
          </div>

          <div className="bg-muted rounded-b-lg w-full grid grid-cols-2 gap-1 p-2">
            <div className="w-full h-16 bg-background rounded" />
            <div className="space-y-1.5 w-full">
              <div className="w-full h-1 rounded-full" />
              <div className="w-full h-1 rounded-full bg-foreground/20" />
              <div className="w-4/5 h-1 rounded-full bg-foreground/20" />
              <div className="w-2/5 h-1 rounded-full bg-foreground/20" />
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
