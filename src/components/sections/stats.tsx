"use client";
import { useRef, useEffect } from "react";
import { useMotionValue, useInView, useSpring, motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { cn } from "@/lib/utils";
import { page } from "../ui/styles/page";
import { stats } from "@/data";

function AnimatedCounter({
  value,
  inView,
}: {
  value: number;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      displayValue.set(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue, displayValue]);

  return <motion.span>{displayValue}</motion.span>;
}

export function Stats() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section ref={statsRef} className="py-24 relative">
      <div>
        <motion.div
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div
                className={cn(
                  page.heading,
                  "bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/10 mb-2",
                )}
              >
                <AnimatedCounter value={stat.number} inView={statsInView} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
