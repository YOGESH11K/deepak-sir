import { useEffect, useRef, useState } from "react";

/** Returns a ref + boolean that flips true once the element enters view. */
export function useInView<T extends HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const ref = useRef<T>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [inView, setInView] = useState(reduceMotion);
  const once = options?.once ?? true;
  const threshold = options?.threshold ?? 0.18;
  const rootMargin = options?.rootMargin ?? "0px";

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin, reduceMotion]);

  return { ref, inView };
}
