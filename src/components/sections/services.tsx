"use client";

import { BentoGrid, BentoGridItem } from "../ui/animated/bento-grid";
import { cn } from "@/lib/utils";
import { page } from "../ui/styles/page";
import { services } from "@/data/services";

const classes = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

const items = services.map((service, index) => ({
  title: service.subtitle,
  description: service.description.join(" "),
  header: service.header,
  Icon: service.Icon,
  className: `md:col-span-6 ${classes[index % 4]}`,
}));

export function Services() {
  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 ">
          <span className={page.subTitle}>What we offer</span>
          <h2 className={cn(page.title, "mb-0")}>
            Services That Scale With You
          </h2>
        </div>
        <p className={page.description}>
          We build innovative, scalable, and result-driven digital solutions —
          empowering your business to grow, perform, and lead with technology.
        </p>
      </div>
      <BentoGrid className="mx-auto md:auto-rows-[30rem]">
        {items.map((item) => (
          <BentoGridItem key={item.title} {...item} />
        ))}
      </BentoGrid>
    </div>
  );
}
