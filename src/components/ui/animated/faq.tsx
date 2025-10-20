"use client";

import { FAQItem } from "@/types/faq";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="space-y-0"
    >
      {faqs.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="border-b last:border-b-0"
        >
          <motion.button
            onClick={() => toggleItem(item.id)}
            className="w-full px-0 py-6 text-left flex items-center justify-between transition-colors duration-200 group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium pr-8 transition-colors">
              {item.question}
            </span>
            <motion.div
              animate={{
                rotate: openItems.has(item.id) ? 0 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              {openItems.has(item.id) ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Minus
                    className="w-5 h-5 text-muted-foreground"
                    strokeWidth={2}
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus
                    className="w-5 h-5 text-muted-foreground"
                    strokeWidth={2}
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.button>

          <AnimatePresence initial={false}>
            {openItems.has(item.id) && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: {
                        duration: 0.2,
                        delay: 0.05,
                      },
                    },
                  },
                  collapsed: {
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      },
                      opacity: {
                        duration: 0.15,
                      },
                    },
                  },
                }}
                style={{ overflow: "hidden" }}
              >
                <motion.div
                  variants={{
                    collapsed: { opacity: 0, y: -10 },
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        delay: 0.05,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="pb-8 pr-12"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
