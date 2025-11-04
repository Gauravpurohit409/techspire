"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatedButton } from "./animated/button";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedButton
      variant="soft"
      size="icon-lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </AnimatedButton>
  );
};

export default ThemeSwitcher;
