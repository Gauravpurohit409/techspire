"use client";

import { Project, projects } from "@/data/projects";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
      className="h-screen flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative aspect-square md:aspect-auto md:h-[500px] md:w-[1000px] w-full rounded-lg p-6 origin-top bg-muted border"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 h-full mt-[50px]">
          <div className="md:w-[40%] h-full flex flex-col md:justify-between space-y-4">
            <h2 className="font-medium">{title}</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
              {/*<AnimatedButton variant="ghost">
                <NavLink title="See More" underline={false}>
                  <MoveRight className="w-4 h-4" />
                </NavLink>
              </AnimatedButton>*/}
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
