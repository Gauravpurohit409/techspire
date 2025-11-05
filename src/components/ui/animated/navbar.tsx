"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { NavLink } from "../nav-link";
import { AnimatedButton } from "./button";
import { Button } from "../button";
import { TextAlignEnd, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation";
import { services } from "@/data/services";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../accordian";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "../theme-switcher";
import { Logo } from "../logo";

type Service = {
  title: string;
  href: string;
  description: string;
};

type NavLinkItem = {
  title: string;
  href?: string;
  subLinks?: Service[];
};

const navLinks: NavLinkItem[] = [
  { title: "Work", href: "/work" },
  {
    title: "Services",
    subLinks: services.map((service) => ({
      title: service.subtitle,
      href: `/services/${service.name}`,
      description: `${service.title} ${service.highlight}`,
    })),
  },
  { title: "About", href: "/about" },
];

const menuVars: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="bg-gradient-to-b from-background to-background/20 backdrop-blur-xs w-full transition-all fixed top-0 left-0 right-0 z-50 pt-4 md:pt-8 pb-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-4">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.href ? (
                    <NavigationMenuLink asChild>
                      <NavLink title={link.title} href={link.href} />
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger>
                        <p
                          className={cn(
                            link.subLinks?.[0].href.includes(
                              pathname.split("/").slice(0, -1)[1],
                            ) &&
                              "border-b border-secondary text-secondary w-max rounded-none",
                          )}
                        >
                          {link.title}
                        </p>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent asChild>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.subLinks?.map((subLink) => (
                            <NavigationMenuLink key={subLink.title} asChild>
                              <NavLink
                                title={subLink.title}
                                href={subLink.href}
                                className="items-start gap-0"
                              >
                                <p className="text-sm text-muted-foreground">
                                  {subLink.description}
                                </p>
                              </NavLink>
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeSwitcher className="hidden md:flex" />
            <AnimatedButton className="hidden md:flex" asChild>
              <NavLink
                title="Get In Touch"
                href="/contact-us"
                underline={false}
                className="!text-primary-foreground"
              />
            </AnimatedButton>
          </div>

          {/* Mobile Trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            <TextAlignEnd className="w-6 h-6" />
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 bottom-0 w-full h-dvh origin-top bg-background text-foreground p-4"
          >
            <div className="flex h-full flex-col">
              {/* Top row inside menu */}
              <div className="flex justify-between items-center">
                <Logo />
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Links with animation */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full gap-6"
              >
                <div className="flex-1 flex flex-col mt-12 gap-4">
                  {navLinks.map((link) => (
                    <div key={link.title} className="overflow-hidden">
                      <MobileNavLink {...link} onClick={toggleMenu} />
                    </div>
                  ))}
                </div>

                <div className="w-full flex justify-between p-4 border-t">
                  <div onClick={toggleMenu}>
                    <AnimatedButton size="lg" className="w-full" asChild>
                      <NavLink
                        title="Get In Touch"
                        href="/contact-us"
                        underline={false}
                      />
                    </AnimatedButton>
                  </div>
                  <ThemeSwitcher />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

const mobileLinkVars: Variants = {
  initial: {
    y: "30vh",
    transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
  },
  open: {
    y: 0,
    transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 },
  },
};

function MobileNavLink({
  title,
  href,
  subLinks,
  onClick,
}: { onClick: () => void } & NavLinkItem) {
  const pathname = usePathname();
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-base uppercase text-foreground"
    >
      <Accordion type="multiple">
        {!href ? (
          <AccordionItem value={title}>
            <AccordionTrigger className="text-base uppercase text-foreground !py-0 cursor-pointer">
              <p
                className={cn(
                  "hover:border-b hover:border-secondary",
                  subLinks?.[0].href.includes(
                    pathname.split("/").slice(0, -1)[1],
                  ) && "border-b border-secondary text-secondary w-max",
                )}
              >
                {title}
              </p>
            </AccordionTrigger>
            <AccordionContent className="pl-4 py-4 flex flex-col gap-2 text-base">
              {subLinks?.map((subLink) => (
                <div key={subLink.title} onClick={onClick}>
                  <NavLink
                    title={subLink.title}
                    href={subLink.href}
                    underline={false}
                    className="w-full"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ) : (
          <div onClick={onClick}>
            <NavLink
              title={title}
              href={href}
              underline={false}
              className="w-full"
            />
          </div>
        )}
      </Accordion>
    </motion.div>
  );
}
