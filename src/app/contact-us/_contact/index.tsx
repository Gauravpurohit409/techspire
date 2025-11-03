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
import { contactDetails, faqs } from "@/data";
import Link from "next/link";
import { page } from "@/components/ui/styles/page";

const chatOptions = [
  {
    src: `mailto:${contactDetails.mail}`,
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

const MotionLink = motion(Link);

export function ContactUs() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="space-y-6 text-center">
        <MaskText
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-balance"
          phrases={["Contact our team"]}
        />
        <MaskText
          className={cn(page.content, "text-balance")}
          phrases={[
            "We’d love to hear from you. Whether you’re looking to build a new SaaS product, scale your marketing efforts, or craft a custom digital solution, our team is here to help. Share your vision with us and let’s bring it to life together.",
          ]}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-32">
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
          <AnimatedButton type="submit" size="lg" disabled={isSubmitting}>
            <NavLink title="Send Message" />
          </AnimatedButton>
        </form>
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Chat with us</h2>
              <p className={page.description}>
                Speak to our friendly team via chat
              </p>
            </div>
            {chatOptions.map((opt) => (
              <MotionLink
                key={opt.title}
                href={opt.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <opt.icon className="w-4 h-4" />
                {opt.title}
              </MotionLink>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Call us</h2>
              <p className={page.description}>
                Call our team Mon-Fri from 8AM to 5PM
              </p>
            </div>
            <MotionLink
              href={`tel:${contactDetails.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneCall className="w-4 h-4" />
              {contactDetails.phone}
            </MotionLink>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Visit us</h2>
              <p className={page.description}>
                Chat to us in person at our Bengaluru office
              </p>
            </div>
            <MotionLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              {contactDetails.location}
            </MotionLink>
          </div>
        </div>
      </div>

      <FAQs faqs={faqs} />
    </>
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
