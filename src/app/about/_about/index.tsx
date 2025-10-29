"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Code,
  Rocket,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Stats } from "@/components/sections/stats";
import { CTABanner } from "@/components/sections/banner";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

interface TeamMember {
  name: string;
  src: string;
  designation: string;
  linkedin: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    designation: "Chief Executive Officer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Michael Chen",
    designation: "Chief Technology Officer",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/michaelchen",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Emily Rodriguez",
    designation: "Head of Design",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "David Kumar",
    designation: "Lead Developer",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/davidkumar",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Lisa Wang",
    designation: "Project Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/lisawang",
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "James Patterson",
    designation: "Marketing Director",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedin: "https://linkedin.com/in/jamespatterson",
    color: "from-violet-500 to-purple-500",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, embracing cutting-edge technologies to deliver solutions that set new standards.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Your success metrics are our KPIs. We're obsessed with delivering measurable impact and ROI.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "We don't just work for you—we work with you. Your vision becomes our mission.",
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description:
      "Fast iterations, continuous improvement, and adaptive strategies keep us nimble and effective.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business, goals, and challenges to understand what success looks like.",
    icon: Users,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Craft a tailored roadmap with clear milestones, timelines, and deliverables.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive, beautiful interfaces that users love and convert.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build robust, scalable solutions using industry best practices and modern tech.",
    icon: Code,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous QA ensures bug-free, secure, and performant applications.",
    icon: Zap,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Seamless deployment and post-launch support to ensure smooth operations.",
    icon: Rocket,
  },
];

export function AboutUs() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
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
          >
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInLeft}>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Our Journey
                </span>
                <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-8 leading-tight">
                  Born from
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/100 to-primary/60">
                    Passion
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="space-y-6 text-lg leading-relaxed"
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
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                What Drives Us
              </span>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Our Core Values
                </h2>
                <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
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
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                How We Work
              </span>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
                <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
                  A proven methodology that turns ambitious ideas into
                  successful products.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section ref={teamRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                The Creators
              </span>
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Meet the Team
                </h2>
                <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
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
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <Button
                          variant="outline"
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
