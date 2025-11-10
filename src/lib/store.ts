import z from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { isValidPhoneNumber } from "react-phone-number-input";
import { services } from "@/data/services";

export const ContactSchema = z
  .object({
    firstName: z.string().min(2, "Enter first name"),
    lastName: z.string().optional(),
    email: z.email().optional(),
    phone: z
      .string()
      .refine((val) => !val || isValidPhoneNumber(val), {
        message: "Enter a valid phone number",
      })
      .optional(),
    company: z.string().optional(),
    message: z.string().min(1, "Enter a message"),
    service: z
      .enum(services.map((service) => service.name) as [string, ...string[]])
      .optional(),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone number is required",
    path: ["contactInfo"],
  });

export type ContactSchema = z.infer<typeof ContactSchema>;

type ContactState = {
  contactData: ContactSchema | null;
  setContactData: (data: ContactSchema) => void;
  clearContactData: () => void;
};

export const useContactStore = create<ContactState>()(
  persist(
    (set) => ({
      contactData: null,
      setContactData: (data) => set({ contactData: data }),
      clearContactData: () => set({ contactData: null }),
    }),
    {
      name: "contact-storage",
    },
  ),
);
