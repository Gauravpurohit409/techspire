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

const testimonials = [
  {
    quote:
      "The web development team delivered a platform that not only looks amazing but also performs flawlessly. Our new site is fast, secure, and adaptable to our growing needs. It feels like they truly understood our vision and brought it to life in a way that exceeded expectations.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The custom app they built for us has completely transformed how we operate. From intuitive design to seamless functionality, everything works perfectly. Our customers love the improved experience, and internally, it has streamlined our workflows in ways we didn’t think possible.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Their UI design team took our product to the next level. The interfaces they created are not only visually stunning but also incredibly easy to use. Feedback from our users has been overwhelmingly positive, and we’ve seen a measurable increase in engagement since launch.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Their digital marketing expertise has been a real game-changer for us. Campaigns are now reaching the right audiences and driving meaningful engagement. The growth in leads and conversions has been remarkable, and it’s clear their strategies are backed by data and creativity.",
    name: "James Kim",
    designation: "Marketing Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "What sets this team apart is their ability to deliver across multiple services. From building our platform to optimizing campaigns, they’ve been a true partner in helping us scale. The consistency, reliability, and impact of their work make them invaluable to our growth journey.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "What industries do you specialize in?",
    answer:
      "We’ve worked across a wide range of industries including e-commerce, SaaS, healthcare, finance, and education. Our flexible approach ensures that we can tailor digital solutions to meet the specific needs of your business and audience.",
  },
  {
    id: "faq-2",
    question: "How long does it take to develop a website or app?",
    answer:
      "Project timelines vary depending on scope and complexity. On average, a standard website may take 4–6 weeks, while custom app development can range from 8–16 weeks. We always provide clear project milestones and regular updates.",
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. Beyond launch, we offer comprehensive support packages that include updates, performance monitoring, and feature enhancements. Our goal is to ensure your digital product continues to evolve with your business.",
  },
  {
    id: "faq-4",
    question: "What makes your digital marketing different?",
    answer:
      "Our campaigns are data-driven and personalized, focusing on delivering measurable results. From SEO and PPC to content and social media, we craft strategies that drive engagement and growth, not just traffic.",
  },
  {
    id: "faq-5",
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in integrating new solutions with existing CRMs, ERPs, and third-party APIs. Our team ensures a seamless transition with minimal disruption to your business operations.",
  },
  {
    id: "faq-6",
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form or schedule a consultation. We’ll discuss your goals, challenges, and requirements, then outline a tailored roadmap to get your project moving.",
  },
];

export default function Home() {
  return (
    <div className="pt-32 md:pt-40 space-y-20 md:space-y-40">
      {/* Top container (Hero + Marquee + Services + Featured) */}
      <div className="mx-auto container px-8 md:px-0 space-y-20 md:space-y-40">
        {/* HERO */}
        <div className="grid md:grid-cols-12 gap-9">
          <div className="space-y-6 md:col-span-6 lg:col-span-8">
            <MaskText
              className="text-base md:text-lg tracking-tight font-medium"
              phrases={["Your Partner in Digital Growth"]}
            />
            <MaskText
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-balance"
              phrases={["We Don't Just Build Apps.", "We Build Businesses."]}
            />
            <MaskText
              className="leading-6 md:leading-7 text-base md:text-lg text-balance tracking-wide text-muted-foreground"
              phrases={[
                "From SaaS product development to full-scale marketing strategies,",
                "We help businesses create, launch, and grow impactful digital experiences.",
                "We blend creativity, technology, and strategy to deliver results that matter",
              ]}
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AnimatedButton size="lg" asChild>
                <NavLink title="Start your project" underline={false} />
              </AnimatedButton>
              <AnimatedButton size="lg" variant="soft" asChild>
                <NavLink title="About Us" underline={false} />
              </AnimatedButton>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hidden md:block md:col-span-6 lg:col-span-4">
            {/*<PixelatedCanvas
              src="/logo.png"
              width={400}
              height={400}
              cellSize={1}
              dotScale={0.2}
              shape="circle"
              dropoutStrength={0.6}
              interactive
              distortionStrength={160}
              distortionRadius={100}
              distortionMode="swirl"
              followSpeed={0.5}
              jitterStrength={4}
              jitterSpeed={100}
              sampleAverage
              tintStrength={0.2}
              className="!w-full !h-full"
            />*/}
            <ParticleImage src="/logo.png" />
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
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Our recent work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="leading-6 text-balance tracking-wide text-muted-foreground">
                Innovative, scalable, and result-driven — our projects reflect
                how technology and creativity come together to solve real
                business challenges.
              </p>
            </div>
            <AnimatedButton
              size="lg"
              variant="soft"
              className="w-full sm:w-auto"
            >
              <NavLink title="View All Projects" underline={false}>
                <ArrowUpRight className="w-4 h-4 text-secondary" />
              </NavLink>
            </AnimatedButton>
          </div>
          <FeaturedProjects />
        </div>

        {/* SERVICES */}
        <Services />

        {/* STATS */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Our Stats
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Numbers That Reflect Our Commitment
            </h2>
            <p className="leading-6 text-balance tracking-wide text-muted-foreground max-w-4xl mx-auto">
              Hundreds of successful projects, satisfied clients, and global
              reach — proof that great partnerships drive lasting growth.
            </p>
          </div>
          <Stats />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mx-auto container px-8 md:px-0 space-y-6">
        <div className="text-center">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            What others say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Voices of Trust
          </h2>
          <p className="max-w-2xl mx-auto leading-6 tracking-wide text-muted-foreground">
            Hear directly from our clients about how our solutions helped them
            grow, innovate, and succeed. Real stories that highlight the impact
            of working with us.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <div className="mx-auto container px-8 md:px-0">
        <CTABanner
          title="Let’s Build Something Extraordinary Together"
          description="From stunning websites and powerful apps to impactful marketing — we craft digital experiences that help your business thrive online."
        />
      </div>

      {/* FAQ */}
      <div className="mx-auto container px-8 md:px-0">
        <FAQs faqs={faqs} />
      </div>
    </div>
  );
}
