"use client";
import { FAQs } from "@/components/sections/FAQs";
import { AnimatedButton } from "@/components/ui/animated/button";
import { MaskText } from "@/components/ui/animated/mask-text";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/ui/nav-link";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
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
import { contactDetails, faqs, socials } from "@/data";
import Link from "next/link";
import { page } from "@/components/ui/styles/page";
import { Instagram } from "@/components/socials/instagram";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "sonner";
import { useState } from "react";

const chatOptions = [
  {
    src: `mailto:${contactDetails.mail}`,
    title: "Shoot us an email",
    icon: Mail,
  },
  {
    src: socials.instagram,
    title: "Message on Instgram",
    icon: Instagram,
  },
];

export const ContactSchema = z
  .object({
    firstName: z.string().min(2, "Enter first name"),
    lastName: z.string().optional(),
    email: z.email("Enter a valid email").optional(),
    phone: z
      .string()
      .refine((val) => !val || isValidPhoneNumber(val), {
        message: "Enter a valid phone number",
      })
      .optional(),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    service: z
      .enum(services.map((service) => service.name) as [string, ...string[]])
      .optional(),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone number is required",
    path: ["contactInfo"],
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
        toast.success("Mail sent!");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-8">
          <MaskText
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-balance tracking-tight"
            phrases={["Let's Create Something Epic Together."]}
          />
          <div className="space-y-12">
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
                  className="group w-max flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <opt.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
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
                className="w-max flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
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
                className="w-max flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4" />
                {contactDetails.location}
              </MotionLink>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative space-y-8 p-6 bg-foreground text-opposite-foreground rounded-lg rounded-b-none"
        >
          <div className="absolute -bottom-8 left-0 translate-y-[100%] w-full z-[2]">
            <svg viewBox="0 0 840 10" className="w-full">
              <path
                d="m802 0 19 10 19-10h-38ZM763 0l19.5 10L802 0h-39ZM725 0h38l-19 10-19-10ZM687 0l19 10 19-10h-38ZM648 0h39l-19.5 10L648 0ZM611 0l18.5 10L648 0h-37ZM573 0h38l-19 10-19-10ZM535 0l19 10 19-10h-38ZM496 0h39l-19.5 10L496 0ZM458 0l19 10 19-10h-38ZM420 0h38l-19 10-19-10ZM381 0l19.5 10L420 0h-39ZM343 0h38l-19 10-19-10ZM305 0l19 10 19-10h-38ZM267 0h38l-19 10-19-10ZM229 0l19 10 19-10h-38ZM191 0h38l-19 10-19-10ZM153 0l19 10 19-10h-38ZM115 0h38l-19 10-19-10ZM76 0l19.5 10L115 0H76ZM38 0h38L57 10 38 0ZM38 0 19 10 0 0h38Z"
                className="fill-foreground"
              />
            </svg>
          </div>
          <MaskText
            className={cn(page.heading, "text-balance")}
            phrases={["Enter your contact details."]}
          />
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer
              label="First Name"
              id="firstName"
              error={errors.firstName?.message}
            >
              <Input
                id="firstName"
                type="text"
                {...register("firstName", { required: true })}
              />
            </LabelInputContainer>
            <LabelInputContainer
              label="Last Name"
              id="lastName"
              error={errors.lastName?.message}
            >
              <Input id="lastName" type="text" {...register("lastName")} />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer
              id="email"
              label="Email Address"
              error={errors.email?.message}
            >
              <Input id="email" type="email" {...register("email")} />
            </LabelInputContainer>
            <Controller
              control={control}
              name="phone"
              render={({ field: { name, value, onChange } }) => (
                <LabelInputContainer
                  label="Phone number"
                  id="phoneNumber"
                  error={errors.phone?.message}
                >
                  <PhoneInput
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="!w-full"
                  />
                </LabelInputContainer>
              )}
            />
          </div>
          <Controller
            name="service"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <LabelInputContainer
                label="Service"
                id="service"
                error={errors.service?.message}
              >
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger
                    name={name}
                    id="service"
                    className="capitalize w-full"
                  >
                    <SelectValue />
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
              </LabelInputContainer>
            )}
          />
          <LabelInputContainer
            label="Message"
            id="message"
            error={errors.message?.message}
          >
            <Textarea
              id="message"
              className="resize-none"
              {...register("message", { required: true })}
            />
          </LabelInputContainer>
          <div className="flex justify-end">
            <AnimatedButton type="submit" size="lg" disabled={isSubmitting}>
              <NavLink title={isSubmitting ? "Sending..." : "Send Message"} />
            </AnimatedButton>
          </div>
        </form>
      </div>

      <FAQs faqs={faqs} />
    </>
  );
}

export const LabelInputContainer = ({
  label,
  id,
  children,
  error,
  className,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: focused || filled ? -20 : 0,
          scale: focused || filled ? 0.9 : 1,
          color: focused ? "var(--secondary)" : "var(--opposite-foreground)",
          x: id === "phoneNumber" ? 55 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute top-2.5 pointer-events-none origin-left text-sm font-medium"
      >
        {label}
      </motion.label>

      <div
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          const target = e.currentTarget.querySelector(
            "input, textarea, select",
          ) as
            | HTMLInputElement
            | HTMLTextAreaElement
            | HTMLSelectElement
            | null;
          setFilled(Boolean(target?.value));
        }}
      >
        {children}
      </div>

      <motion.span
        initial={false}
        animate={{
          scaleX: focused ? 1 : 0,
          backgroundColor: "var(--secondary)",
        }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left rounded-full"
      />

      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
};
