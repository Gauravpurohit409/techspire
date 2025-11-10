"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonGroup } from "./button-group";
import { page } from "./styles/page";

interface TimeSlot {
  time12h: string;
  time24h: string;
}

interface TimeSlotPickerProps {
  selectedDate: Date | undefined;
  selectedTime: string | null; // always stored as 24h format internally
  onSelectTime: (time24h: string) => void;
  is24Hour: boolean;
  onToggleFormat: () => void;
  timeZone: string;
}

const MotionButton = motion(Button);

const generateTimeSlots = (timeZone: string): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 21;

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const date = new Date();
      date.setHours(hour, minute, 0, 0);

      const formatter12h = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone,
      });

      const formatter24h = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      });

      slots.push({
        time12h: formatter12h.format(date).toLowerCase(),
        time24h: formatter24h.format(date),
      });
    }
  }

  return slots;
};

const TimeSlotPicker = ({
  selectedDate,
  selectedTime,
  onSelectTime,
  is24Hour,
  onToggleFormat,
  timeZone,
}: TimeSlotPickerProps) => {
  const timeSlots = generateTimeSlots(timeZone);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[date.getDay()]} ${date.getDate().toString().padStart(2, "0")}`;
  };

  // Get display text based on selected 24h time
  const formatDisplayTime = (time24h: string) => {
    const [hour, minute] = time24h.split(":").map(Number);
    const date = new Date();
    date.setHours(hour, minute);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !is24Hour,
      timeZone,
    })
      .format(date)
      .toLowerCase();
  };

  const getEndTime = (time24h: string) => {
    if (!time24h) return "";
    const [hour, minute] = time24h.split(":").map(Number);
    const date = new Date();
    date.setHours(hour, minute + 30);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !is24Hour,
      timeZone,
    })
      .format(date)
      .toLowerCase();
  };

  const currentRange =
    selectedTime &&
    `${formatDisplayTime(selectedTime)} – ${getEndTime(selectedTime)}`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h3 className={page.content}>
            {selectedDate ? formatDate(selectedDate) : "Select a date"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {currentRange ? currentRange : "Select a time slot"}
          </p>
        </div>
        <ButtonGroup>
          <Button
            type="button"
            size="sm"
            variant={!is24Hour ? "default" : "outline"}
            onClick={() => !is24Hour || onToggleFormat()}
          >
            12h
          </Button>
          <Button
            type="button"
            size="sm"
            variant={is24Hour ? "default" : "outline"}
            onClick={() => is24Hour || onToggleFormat()}
          >
            24h
          </Button>
        </ButtonGroup>
      </div>

      <ScrollArea className="lg:h-[500px] h-96 pr-3">
        <div className="space-y-2">
          {timeSlots.map((slot, index) => {
            const isSelected = selectedTime === slot.time24h;
            const displayTime = is24Hour ? slot.time24h : slot.time12h;

            return (
              <MotionButton
                key={slot.time24h}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
                type="button"
                onClick={() => onSelectTime(slot.time24h)} // always store 24h
                variant={isSelected ? "default" : "outline"}
                className={cn("w-full")}
              >
                {displayTime}
              </MotionButton>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TimeSlotPicker;
