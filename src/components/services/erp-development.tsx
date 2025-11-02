"use client";
import { motion } from "framer-motion";
import {
  BadgePercent,
  BanknoteArrowUp,
  DatabaseBackup,
  MonitorCog,
  Package,
  ServerCog,
  Tag,
  UserSearch,
} from "lucide-react";

export function ERPDevelopment() {
  return (
    <div className="flex justify-center px-0 md:px-10 py-4 flex-1 h-full">
      <motion.figure
        whileHover={{ scale: 1.04, y: -5 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="relative mx-auto max-w-full w-full aspect-video"
      >
        <svg
          viewBox="0 0 521 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute inset-0"
        >
          <path
            d="M230 292C230.552 292 231 292.448 231 293V430.611L230.999 430.633C230.623 439.122 223.492 445 216.807 445H146C145.448 445 145 444.552 145 444C145 443.448 145.448 443 146 443H216.807C222.431 443 228.663 437.958 229 430.562V293C229 292.448 229.448 292 230 292ZM292 292C292.552 292 293 292.448 293 293V430.562C293.337 437.958 299.569 443 305.193 443H376C376.552 443 377 443.448 377 444C377 444.552 376.552 445 376 445H305.193C298.508 445 291.377 439.122 291.001 430.633L291 430.611V293C291 292.448 291.448 292 292 292ZM427.495 254C432.092 254 435.476 258.033 435.477 262.057V311.455C435.477 314.277 437.854 316 440.461 316H520.75C521.302 316 521.75 316.448 521.75 317C521.75 317.552 521.302 318 520.75 318H440.461C437.084 318 433.477 315.69 433.477 311.455V262.057C433.476 259.024 430.877 256 427.495 256H330.75C330.198 256 329.75 255.552 329.75 255C329.75 254.448 330.198 254 330.75 254H427.495ZM191 254C191.552 254 192 254.448 192 255C192 255.552 191.552 256 191 256H94.1162C92.4778 256 90.8773 256.453 89.7168 257.25C88.5758 258.034 87.8946 259.114 87.8945 260.455V309.057C87.8945 313.211 83.6955 317 78.4697 317H2C1.44772 317 1 316.552 1 316C1 315.448 1.44772 315 2 315H78.4697C82.8722 315 85.8945 311.845 85.8945 309.057V260.455C85.8946 258.325 87.0183 256.678 88.585 255.602C90.1324 254.539 92.144 254 94.1162 254H191ZM79.5303 128C84.6346 128 88.6512 131.892 88.6514 136.057V185.455C88.6514 186.848 89.3237 187.952 90.4131 188.741C91.5228 189.545 93.0494 190 94.6113 190H188C188.552 190 189 190.448 189 191C189 191.552 188.552 192 188 192H94.6113C92.6933 192 90.7396 191.447 89.2393 190.36C87.7186 189.259 86.6514 187.59 86.6514 185.455V136.057C86.6512 133.165 83.7064 130 79.5303 130H1C0.447715 130 0 129.552 0 129C0 128.448 0.447715 128 1 128H79.5303ZM521.5 128.5C522.052 128.5 522.5 128.948 522.5 129.5C522.5 130.052 522.052 130.5 521.5 130.5H441C438.374 130.5 436 132.215 436 135V184C436 188.006 432.598 192 428 192H331C330.448 192 330 191.552 330 191C330 190.448 330.448 190 331 190H428C431.402 190 434 186.994 434 184V135C434 130.785 437.626 128.5 441 128.5H521.5ZM213 0.5C220.416 0.5 228.567 6.30894 228.999 14.9502L229 14.9746V153.5C229 154.052 228.552 154.5 228 154.5C227.448 154.5 227 154.052 227 153.5V15.0342C226.623 7.68379 219.579 2.5 213 2.5H132.5C131.948 2.5 131.5 2.05228 131.5 1.5C131.5 0.947715 131.948 0.5 132.5 0.5H213ZM388.5 0C389.052 0 389.5 0.447715 389.5 1C389.5 1.55228 389.052 2 388.5 2H307.578C300.958 2.00022 293.879 7.18813 293.5 14.5342V153C293.5 153.552 293.052 154 292.5 154C291.948 154 291.5 153.552 291.5 153V14.4746L291.501 14.4502C291.935 5.80505 300.13 0.00021456 307.578 0H388.5Z"
            className="fill-foreground/10"
          />
        </svg>

        <motion.div
          className="w-20 h-20 rounded-xl bg-primary text-primary-foreground aspect-square text-2xl ring-4 ring-primary/40 border border-primary font-bold flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          animate={{
            boxShadow: [
              "0 0 0px var(--primary)",
              "0 0 25px var(--primary)",
              "0 0 0px var(--primary)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ERP
        </motion.div>
        <div
          className="p-4 rounded-full flex items-center gap-2 absolute -top-7 left-28 md:-top-6 md:left-52 lg:-top-7 lg:left-28
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <BanknoteArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div
          className="p-4 rounded-full flex items-center gap-2 absolute -top-7 right-28 md:-top-6 md:right-52 lg:-top-7 lg:right-28
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <ServerCog className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div
          className="p-4 rounded-full flex items-center gap-2 absolute top-11 right-8 md:top-14 md:right-28 lg:top-11 lg:right-8
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <UserSearch className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div
          className="p-4 rounded-full flex items-center gap-2 absolute top-11 left-8 md:top-14 md:left-28 lg:top-11 lg:left-8
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <MonitorCog className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div
          className="p-4 rounded-full flex items-center gap-2 absolute bottom-12 left-8 md:bottom-14 md:left-28 lg:bottom-12 lg:left-8
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <Package className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div
          className="p-4 rounded-full flex items-center gap-2 absolute bottom-12 right-8 md:bottom-14 md:right-28 lg:bottom-12 lg:right-8
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <BadgePercent className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div
          className="p-4 rounded-full flex items-center gap-2 absolute -bottom-6 left-28 md:-bottom-6 md:left-56 lg:-bottom-6 lg:left-28
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <Tag className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div
          className="p-4 rounded-full flex items-center gap-2 absolute -bottom-6 right-28 md:-bottom-6 md:right-56 lg:-bottom-6 lg:right-28
                         border border-border bg-background/10 backdrop-blur-lg shadow-lg"
        >
          <DatabaseBackup className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </motion.figure>
    </div>
  );
}
