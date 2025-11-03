"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { page } from "@/components/ui/styles/page";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/variants";

export function Work() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Our Story */}
      <section ref={storyRef} className="relative">
        <div>
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInLeft}>
                <span className={cn(page.subTitle, "text-muted-foreground")}>
                  Our Work
                </span>
                <h2 className={cn(page.heading, "mt-4 mb-8")}>
                  Crafted with Precision
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary/100 to-primary/60">
                    Built for Impact
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className={cn(page.content, "space-y-6")}
              >
                <p>
                  We build impactful digital products that solve real problems.
                  Each project is a collaboration focused on innovation,
                  precision engineering, and measurable results that drive
                  business growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="group w-full relative space-y-2 overflow-hidden"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={`/images/${project.src}`}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full aspect-video object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
