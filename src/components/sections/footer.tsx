"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { AnimatedButton } from "../ui/animated/button";
import { NavLink } from "../ui/nav-link";
import Link from "next/link";
import { contactDetails } from "@/data";
import { cn } from "@/lib/utils";
import { page } from "../ui/styles/page";
import { services } from "@/data/services";

const company = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Work",
    href: "/work",
  },
  {
    title: "Reach Out",
    href: "/contact-us",
  },
];

const MotionLink = motion(Link);

export function Footer() {
  return (
    <footer>
      {/*<div className="w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent" />*/}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Link href="/" className="text-xl font-bold mb-6">
              Techspire Hub
            </Link>
            <p className={cn(page.content, "mb-8 max-w-sm")}>
              We craft digital experiences that drive growth and transform
              businesses through innovative software solutions.
            </p>
            <div className="space-y-3">
              <MotionLink
                href={`mailto:${contactDetails.mail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5" />
                <span>{contactDetails.mail}</span>
              </MotionLink>
              <MotionLink
                href={`tel:${contactDetails.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5" />
                <span>{contactDetails.phone}</span>
              </MotionLink>
              <MotionLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5" />
                <span>{contactDetails.location}</span>
              </MotionLink>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <MotionLink
                    href={`/services/${service.name}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 block white-"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.subtitle}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.title}>
                  <MotionLink
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold mb-6">{`Let's Work`}</h3>
            <AnimatedButton variant="soft" size="lg" asChild>
              <Link href="contact-us">
                <NavLink title="Start Project" underline={false} />
                <ArrowUpRight className="w-5 h-5 text-secondary" />
              </Link>
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-muted-foreground text-sm">
                © 2025 Techspire hub. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <MotionLink
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Privacy Policy
                </MotionLink>
                <MotionLink
                  href="/terms-of-use"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Terms of Service
                </MotionLink>
              </div>
            </div>

            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-medium">
                    {social.charAt(0)}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
