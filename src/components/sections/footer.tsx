"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { AnimatedButton } from "../ui/animated/button";
import { NavLink } from "../ui/nav-link";

const services = [
  "Web Development",
  "App Development",
  "UI Design",
  "Digital Marketing",
];

const company = ["About Us", "Our Work", "Process", "Careers"];

export function Footer() {
  return (
    <footer>
      {/*<div className="w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent" />*/}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl font-bold mb-6">Techspire Hub</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-sm">
              We craft digital experiences that drive growth and transform
              businesses through innovative software solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>hello@softwareco.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.a>
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
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
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
            <AnimatedButton size="lg" variant="outline" className="group">
              <NavLink title="Start Project" underline={false}>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </NavLink>
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
                © 2024 SoftwareCo. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Terms of Service
                </motion.a>
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
