"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Stats } from "@/components/sections/stats";
import { CTABanner } from "@/components/sections/banner";
import { cn } from "@/lib/utils";
import { page } from "@/components/ui/styles/page";
import { Process } from "@/components/sections/process";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/variants";
import { processSteps, teamMembers, values } from "@/data/about";

export function AboutUs() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen mx-auto container px-8 md:px-0">
      {/* Our Story */}
      <section ref={storyRef} className="pt-32 md:pt-40 pb-16 relative">
        <div>
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-16 md:grid-cols-2"
          >
            <div className="md:flex-1 grid gap-6">
              <motion.div variants={fadeInLeft}>
                <span className={cn(page.subTitle, "text-muted-foreground")}>
                  Our Journey
                </span>
                <h2 className={cn(page.heading, "mt-4 mb-8")}>
                  Born from{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/100 to-primary/60">
                    Passion
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className={cn(page.content, "space-y-6")}
              >
                <p>
                  In 2015, three developers in a garage decided conventional
                  software agencies were doing it wrong. Too slow, too
                  corporate, too disconnected from what actually matters.
                </p>
                <p>
                  {`We started with a radical idea: what if we built software the
                  way we'd want it built for ourselves? Fast, transparent,
                  collaborative, and obsessed with quality.`}
                </p>
                <p>
                  {`Fast forward to today—we're a 50+ strong team working with
                  innovative companies worldwide. But our core belief hasn't
                  changed: great software comes from great partnerships.`}
                </p>
              </motion.div>
            </div>
            <Image
              src="/images/about.jpg"
              alt="team discussion"
              width="600"
              height="600"
              className="md:flex-1 h-full rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Values */}
      <section ref={valuesRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className={page.subTitle}>What Drives Us</span>
              <div className="space-y-4 text-center">
                <h2 className={page.title}>Our Core Values</h2>
                <p className={cn(page.description, "max-w-2xl mx-auto")}>
                  These principles guide every decision we make and every line
                  of code we write.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-6 bg-foreground/5 border border-border rounded-lg hover:bg-foregound/10 hover:border-foreground/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                      <p className={page.description}>{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <Process
        description="A proven methodology that turns ambitious ideas into successful products."
        steps={processSteps}
      />

      {/* Meet the Team */}
      <section ref={teamRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className={page.subTitle}>The Creators</span>
              <div className="space-y-4 text-center">
                <h2 className={page.title}>Meet the Team</h2>
                <p className={cn(page.description, "max-w-2xl mx-auto")}>
                  Talented individuals united by a passion for building
                  exceptional digital products.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="relative transition-all duration-500 overflow-hidden rounded-lg w-full aspect-[3/4] mb-6">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                      <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-foreground/90 text-background rounded-lg">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="size-6 border-none"
                          asChild
                        >
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="fill-background"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </Link>
                        </Button>
                      </div>
                      <p className="text-sm">{member.designation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Let’s Build Something Extraordinary Together"
        description="From stunning websites and powerful apps to impactful marketing — we craft digital experiences that help your business thrive online."
      />
    </div>
  );
}
