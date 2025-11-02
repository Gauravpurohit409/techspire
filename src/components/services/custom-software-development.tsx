"use client";
import { BatteryLow, Signal, Triangle, Wifi } from "lucide-react";
import { motion } from "framer-motion";

export function CustomSoftwareDevelopment() {
  return (
    <div className="flex justify-center px-0 md:px-10">
      <motion.figure
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative mx-auto max-w-full md:w-72 h-auto"
      >
        <div className="p-1.5 pb-0 bg-foreground/5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] rounded-3xl rounded-b-none">
          <div className="w-16 h-5 rounded-full bg-background/80 absolute top-5 left-1/2 -translate-x-1/2 z-10" />
          <div className="w-full h-full bg-foreground/5 p-4 rounded-t-[1.25rem] space-y-6">
            <div className="flex justify-between items-center text-muted-foreground">
              <p className="text-sm font-medium">9:41</p>
              <div className="flex items-center gap-2">
                <Signal className="w-4 h-4" />
                <Wifi className="w-4 h-4" />
                <BatteryLow className="w-4 h-4" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-2 gap-y-4">
              <div className="space-y-1 text-xs">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center
                             ring-4 ring-primary/40 border border-primary"
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
                  <Triangle className="w-5 h-5 stroke-0 fill-primary-foreground" />
                </motion.div>
                <p className="capitalize">Next App</p>
              </div>
              {[
                "photos",
                "camera",
                "mail",
                "clock",
                "maps",
                "weather",
                "home",
                "podcasts",
                "figma",
                "contacts",
                "fitness",
              ].map((app) => (
                <div key={app} className="space-y-1 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-foreground/5 to-foreground/[2.5%]" />
                  <p className="text-xs text-muted-foreground capitalize">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
}
