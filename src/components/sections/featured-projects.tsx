"use client";

import { Project, projects } from "@/data/projects";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { page } from "../ui/styles/page";

export function FeaturedProjects() {
  const container = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center justify-center"
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

function Card({
  i,
  title,
  description,
  result,
  src,
  progress,
  range,
  targetScale,
}: Project & {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[90vh] md:h-[60vh] flex justify-center items-center sticky top-16"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative aspect-auto md:aspect-auto md:h-[350px] md:w-[768px] lg:h-[400px] lg:w-[900px] w-full rounded-lg p-6 origin-top bg-muted border"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 h-full mt-[20px]">
          <div className="md:w-[40%] h-full flex flex-col space-y-6">
            <h2 className="font-medium text-xl">{title}</h2>
            <div className="space-y-3 text-base">
              <p className={page.description}>{description}</p>
              <p className="font-medium">{`"${result}"`}</p>
            </div>
          </div>

          <div className="relative aspect-video md:w-[60%] md:aspect-auto h-full rounded-md overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
