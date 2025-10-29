"use client";
import { FAQs } from "@/components/sections/FAQs";
import { AnimatedButton } from "@/components/ui/animated/button";
import { MaskText } from "@/components/ui/animated/mask-text";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "@/components/ui/nav-link";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, PhoneCall } from "lucide-react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "@/data/services";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const chatOptions = [
  {
    src: "#",
    title: "Shoot us an email",
    icon: Mail,
  },
  {
    src: "#",
    title: "Message on Instgram",
    icon: Instagram,
  },
];

const ContactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.enum(services.map((service) => service.name)),
});

type ContactSchema = z.infer<typeof ContactSchema>;

export default function ContactUs() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      console.log("inside Submit");
      // setLoading(true);
      console.log({ data });
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      // setLoading(false);

      if (result.success) {
        // setSuccess(true);
        reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      // setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="mx-auto container px-8 md:px-0">
      <div className="space-y-6 text-center pt-32 md:pt-40 pb-16">
        <MaskText
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-balance"
          phrases={["Contact our team"]}
        />
        <MaskText
          className="leading-6 md:leading-7 text-base md:text-lg text-balance tracking-wide text-muted-foreground"
          phrases={[
            "We’d love to hear from you. Whether you’re looking to build a new SaaS product, scale your marketing efforts, or craft a custom digital solution, our team is here to help. Share your vision with us and let’s bring it to life together.",
          ]}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-32 py-32">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 space-y-8"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-destructive text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-destructive text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </LabelInputContainer>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input
                id="phoneNumber"
                placeholder="9848032919"
                type="text"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-destructive text-sm">
                  {errors.phone.message}
                </p>
              )}
            </LabelInputContainer>
          </div>
          <Controller
            name="service"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <LabelInputContainer>
                <Label htmlFor="service">Service</Label>
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger name={name} id="service">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem
                        key={service.name}
                        value={service.name}
                        className="capitalize"
                      >
                        {service.name.split("-").join(" ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-destructive text-sm">
                    {errors.service.message}
                  </p>
                )}
              </LabelInputContainer>
            )}
          />
          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Leave us a message"
              className="resize-none"
              {...register("message", { required: true })}
            />
          </LabelInputContainer>
          <AnimatedButton type="submit" size="lg">
            <NavLink title="Send Message" />
          </AnimatedButton>
        </form>
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Chat with us</h2>
              <p className="leading-6 text-balance tracking-wide text-muted-foreground">
                Speak to our friendly team via chat
              </p>
            </div>
            {chatOptions.map((opt) => (
              <motion.a
                key={opt.title}
                href={opt.src}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <opt.icon className="w-4 h-4" />
                {opt.title}
              </motion.a>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Call us</h2>
              <p className="leading-6 text-balance tracking-wide text-muted-foreground">
                Call our team Mon-Fri from 8AM to 5PM
              </p>
            </div>
            <motion.a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneCall className="w-4 h-4" />
              +91 9848032919
            </motion.a>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Visit us</h2>
              <p className="leading-6 text-balance tracking-wide text-muted-foreground">
                Chat to us in person at our Bengaluru office
              </p>
            </div>
            <motion.a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              100 Smith street, Bengaluru
            </motion.a>
          </div>
        </div>
      </div>

      <FAQs faqs={faqs} />
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
