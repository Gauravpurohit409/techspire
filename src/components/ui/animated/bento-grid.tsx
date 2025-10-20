"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border transition duration-200 hover:shadow-xl py-4",
        "relative overflow-hidden bg-gradient-to-t from-white/5 to-white/0 lg:h-auto cursor-pointer",
        className,
      )}
    >
      <div className="px-4 space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <div className="text-xl font-semibold">{title}</div>
        </div>

        <p className="font-normal text-muted-foreground tracking-wide leading-7">
          {description}
        </p>
      </div>
      {header}
    </div>
  );
};
