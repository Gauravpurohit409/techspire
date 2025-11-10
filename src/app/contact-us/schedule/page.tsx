"use client";

import { AnimatedButton } from "@/components/ui/animated/button";
import { MaskText } from "@/components/ui/animated/mask-text";
import { Calendar } from "@/components/ui/calendar";
import { NavLink } from "@/components/ui/nav-link";
import { page } from "@/components/ui/styles/page";
import TimeSlotPicker from "@/components/ui/timeslot-picker";
import { TimezoneCombobox } from "@/components/ui/timezone-box";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { addDays } from "date-fns";
import { useContactStore } from "@/lib/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import { parseTimeTo24Hour } from "@/lib/date";

const ScheduleSchema = z.object({
  date: z.date({ message: "Please select a date" }),
  time: z.string({ message: "Please select a time slot" }),
  timeZone: z.string({ message: "Please select a timezone" }),
});

type ScheduleSchema = z.infer<typeof ScheduleSchema>;

export default function ScheduleCall() {
  const [is24Hour, setIs24Hour] = useState(false);
  const { contactData, clearContactData } = useContactStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ScheduleSchema>({
    resolver: zodResolver(ScheduleSchema),
    defaultValues: {
      date: undefined,
      time: "",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });

  const selectedTimeZone = useWatch({ control, name: "timeZone" });
  const selectedDate = useWatch({ control, name: "date" });

  useEffect(() => {
    if (!contactData) {
      toast.warning("No booking data found!");
    }
  }, [contactData]);

  const onSubmit = async (data: ScheduleSchema) => {
    try {
      if (!contactData) {
        toast.error(
          "Missing contact data. Please fill the contact form first.",
        );
        return;
      }

      const datePart = data.date.toISOString().split("T")[0];
      const time24 = parseTimeTo24Hour(data.time!);

      // Use Intl to correctly convert to UTC based on timezone
      const localDateTime = new Date(`${datePart}T${time24}:00`);
      const utcStart = new Date(
        localDateTime.toLocaleString("en-US", { timeZone: data.timeZone }),
      );

      const startTimeISO = utcStart.toISOString();
      const endTimeISO = new Date(
        utcStart.getTime() + 30 * 60 * 1000,
      ).toISOString();

      const payload = {
        ...contactData,
        name: `${contactData.firstName} ${contactData.lastName}`,
        start: startTimeISO,
        end: endTimeISO,
        timeZone: data.timeZone,
      };

      const res = await fetch("/api/book-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        clearContactData();
        toast.success("Booking confirmed!", {
          description: `Your call is scheduled for ${data.date.toDateString()} at ${data.time} (${data.timeZone})`,
        });
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to schedule meeting.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div>
          <MaskText
            className={cn(page.title, "text-balance mb-0")}
            phrases={["Schedule a Call"]}
          />
          <MaskText
            className={cn("text-balance", page.description)}
            phrases={[
              "Select a date, time slot, and timezone for your appointment",
            ]}
          />
        </div>
        {/* TIMEZONE PICKER */}
        <div>
          <Controller
            control={control}
            name="timeZone"
            render={({ field: { value, onChange } }) => (
              <TimezoneCombobox
                value={value}
                onChangeAction={onChange}
                className="w-full sm:w-[260px]"
              />
            )}
          />
          {errors.timeZone && (
            <p className="text-destructive text-sm mt-2">
              {errors.timeZone.message}
            </p>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:h-[100dvh] grid md:grid-cols-2 sm:flex-row gap-8 lg:gap-12"
      >
        {/* DATE PICKER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <Calendar
                mode="single"
                selected={value}
                onSelect={(val) => val && onChange(val)}
                className="w-full"
                classNames={{
                  day_button: "text-base",
                  caption_label: "text-base md:text-lg",
                  nav: "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-end",
                  month_caption: "justify-start",
                  month: "flex flex-col w-full gap-8",
                }}
                buttonVariant="ghost"
                showOutsideDays={false}
                disabled={{ before: addDays(new Date(), 1) }}
                timeZone={selectedTimeZone}
              />
            )}
          />
          {errors.date && (
            <p className="text-destructive text-sm mt-2">
              {errors.date.message}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex flex-col space-y-6"
        >
          {/* TIME SLOT PICKER */}
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <TimeSlotPicker
                selectedDate={selectedDate}
                selectedTime={value}
                onSelectTime={onChange}
                is24Hour={is24Hour}
                onToggleFormat={() => setIs24Hour(!is24Hour)}
                timeZone={selectedTimeZone}
              />
            )}
          />
          {errors.time && (
            <p className="text-destructive text-sm mt-2">
              {errors.time.message}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-end"
          >
            <AnimatedButton type="submit" disabled={isSubmitting}>
              <NavLink
                title={isSubmitting ? "Booking..." : "Confirm Booking"}
                underline={false}
              />
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
}
