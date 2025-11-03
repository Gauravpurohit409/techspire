import { AnimatedButton } from "@/components/ui/animated/button";
import { Marquee } from "@/components/ui/animated/marquee";
import { NavLink } from "@/components/ui/nav-link";
// import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Lavender } from "@/components/client-logos/lavender";
import { Platinum } from "@/components/client-logos/platinum";
import { Rainfall } from "@/components/client-logos/rainfall";
import { Remind } from "@/components/client-logos/remind";
import { Singularity } from "@/components/client-logos/singularity";
import { Spotify } from "@/components/client-logos/spotify";
import { Webflow } from "@/components/client-logos/webflow";
import { ArrowUpRight } from "lucide-react";
import { MaskText } from "@/components/ui/animated/mask-text";
import React from "react";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AnimatedTestimonials } from "@/components/ui/animated/testimonials";
import { Services } from "@/components/sections/services";
import { FAQs } from "@/components/sections/FAQs";
import { CTABanner } from "@/components/sections/banner";
import { Stats } from "@/components/sections/stats";
import { ParticleImage } from "@/components/ui/animated/particles";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { page } from "@/components/ui/styles/page";
import { faqs, testimonials } from "@/data";

export default function Home() {
  return (
    <>
      {/* Top container (Hero + Marquee + Services + Featured) */}
      {/* HERO */}
      <div className="grid md:grid-cols-12 gap-9">
        <div className="space-y-6 md:col-span-12 md:order-2 lg:col-span-8 lg:order-1">
          <MaskText
            className={page.subTitle}
            phrases={["Your Partner in Digital Growth"]}
          />
          <MaskText
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance"
            phrases={["We Don't Just Build Apps.", "We Build Businesses."]}
          />
          <MaskText
            className={cn("text-balance", page.content)}
            phrases={[
              "From SaaS product development to full-scale marketing strategies,",
              "We help businesses create, launch, and grow impactful digital experiences.",
              "We blend creativity, technology, and strategy to deliver results that matter",
            ]}
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AnimatedButton size="lg" asChild>
              <NavLink
                href="contact-us"
                title="Start your project"
                underline={false}
              />
            </AnimatedButton>
            <AnimatedButton size="lg" variant="soft" asChild>
              <NavLink href="/about" title="About Us" underline={false} />
            </AnimatedButton>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hidden md:flex md:justify-center md:items-center md:col-span-12 md:order-1 lg:order-2 lg:col-span-4">
          <ParticleImage />
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="w-full overflow-x-hidden">
        <Marquee
          logos={[
            Platinum,
            Lavender,
            Rainfall,
            Remind,
            Singularity,
            Spotify,
            Webflow,
          ]}
          from="0"
          to="-100%"
        />
      </div>

      {/* FEATURED PROJECTS */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-2xl">
            <span className={page.subTitle}>Our recent work</span>
            <h2 className={page.title}>Featured Projects</h2>
            <p className={page.description}>
              Innovative, scalable, and result-driven — our projects reflect how
              technology and creativity come together to solve real business
              challenges.
            </p>
          </div>
          <AnimatedButton variant="soft" size="lg" asChild>
            <Link href="work">
              <NavLink title="View All Projects" underline={false} />
              <ArrowUpRight className="w-5 h-5 text-secondary" />
            </Link>
          </AnimatedButton>
        </div>
        <FeaturedProjects />
      </div>

      {/* SERVICES */}
      <Services />

      {/* STATS */}
      <div className="space-y-6">
        <div className="text-center">
          <span className={page.subTitle}>Our Stats</span>
          <h2 className={page.title}>Numbers That Reflect Our Commitment</h2>
          <p className={cn(page.description, "max-w-4xl mx-auto")}>
            Hundreds of successful projects, satisfied clients, and global reach
            — proof that great partnerships drive lasting growth.
          </p>
        </div>
        <Stats />
      </div>

      {/* TESTIMONIALS */}
      <div className="space-y-6">
        <div className="text-center">
          <span className={page.subTitle}>What others say</span>
          <h2 className={page.title}>Voices of Trust</h2>
          <p className={cn(page.description, "max-w-2xl mx-auto")}>
            Hear directly from our clients about how our solutions helped them
            grow, innovate, and succeed. Real stories that highlight the impact
            of working with us.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <CTABanner
        title="Let’s Build Something Extraordinary Together"
        description="From stunning websites and powerful apps to impactful marketing — we craft digital experiences that help your business thrive online."
      />

      {/* FAQ */}
      <FAQs faqs={faqs} />
    </>
  );
}
