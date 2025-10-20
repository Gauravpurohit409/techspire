"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "StreamFlow",
    description: "A SaaS platform empowering creators worldwide",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Web App", "UI/UX", "React", "Next.js"],
  },
  {
    id: 2,
    title: "FinanceHub",
    description: "Modern banking experience for the digital age",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Fintech", "Mobile", "Security", "React Native"],
  },
  {
    id: 3,
    title: "EcoTrack",
    description: "Sustainability metrics dashboard for enterprises",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Dashboard", "Analytics", "Vue.js", "D3.js"],
  },
  {
    id: 4,
    title: "HealthConnect",
    description: "Telemedicine platform connecting patients and doctors",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Healthcare", "WebRTC", "React", "Node.js"],
  },
  {
    id: 5,
    title: "Shopify Plus",
    description: "E-commerce ecosystem with AI-powered recommendations",
    image:
      "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["E-commerce", "AI/ML", "Next.js", "Stripe"],
  },
  {
    id: 6,
    title: "EduVerse",
    description: "Interactive learning platform for modern education",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["EdTech", "Video", "React", "WebGL"],
  },
];

export default function Work() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
                  Our Work
                </span>
                <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-8 leading-tight">
                  Crafted with Precision
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/100 to-primary/60">
                    Built for Impact
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="space-y-6 text-lg leading-relaxed"
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
      <section ref={valuesRef} className="py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="group w-full relative space-y-2"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full aspect-video rounded-xl"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-muted-foreground tex-sm">
                      {project.description}
                    </p>
                  </div>
                  {/*<div className="flex gap-6">
                    {project.tags.map((tag) => (
                      <Badge key={`${project.id}-${tag}`} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>*/}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
