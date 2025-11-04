"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  );
}

const SmoothScrollContext = createContext<Lenis | null>(null);
export function useSmoothScroller() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();

    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState ?? 0);
        lenisRef.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
