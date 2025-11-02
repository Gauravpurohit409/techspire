"use client";
import {
  Heart,
  ImageIcon,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp,
  User2,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";

export function DigitalMarketing() {
  return (
    <div className="flex justify-center px-0 md:px-10">
      <motion.figure
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative mx-auto max-w-full w-5/6 sm:w-4/5 md:w-96 h-auto"
      >
        <div className="relative bg-foreground/5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] rounded-lg">
          <div className="px-6 py-4 flex items-center gap-4 border-b">
            <div className="flex items-center justify-center p-1 rounded-full bg-primary/40">
              <User2 className="w-4 h-4" />
            </div>
            <p className="text-muted-foreground">Company Name</p>
          </div>
          <div className="w-full h-40 bg-gradient-to-b from-foreground/10 to-foreground/5 p-6 flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-muted-foreground stroke-1" />
          </div>
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full flex items-center gap-2 absolute top-8 -left-6 sm:-left-12
                        border border-border bg-background/10 backdrop-blur-lg"
          >
            <Users2 className="w-5 h-5" />
            <p className="text-muted-foreground">2.1K</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full flex items-center gap-2 absolute top-12 -right-6 sm:-right-16
                              border border-border bg-background/10 backdrop-blur-lg shadow-lg"
          >
            <ThumbsUp className="w-5 h-5" />
            <p className="text-muted-foreground">20K</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-3 rounded-full flex items-center gap-2 absolute top-0 right-8
                              border border-border bg-background/10 backdrop-blur-lg shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            <p className="text-muted-foreground">10K</p>
          </motion.div>
          <div className="px-6 py-4 flex items-center justify-between gap-4 border-t">
            <div className="flex items-center gap-4">
              <Heart className="w-4 h-4 stroke-primary fill-primary" />
              <MessageCircle className="w-4 text-muted-foreground" />
              <Send className="w-4 text-muted-foreground" />
            </div>
            <svg
              className="w-4 h-4 stroke-muted-foreground fill-transparent"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </div>
          <div className="px-6 py-4 flex items-center gap-4 border-t">
            <User2 className="w-4 text-muted-foreground" />
            <div className="space-y-2 w-full">
              <div className="w-4/5 h-2 rounded-full bg-foreground/10" />
              <div className="w-3/5 h-2 rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
}
