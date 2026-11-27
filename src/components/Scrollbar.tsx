import { useCallback, useEffect, useRef, useState } from "react";

const BAR_HEIGHT_DESKTOP = 25;
const BAR_HEIGHT_MOBILE = 10;

/**
 * Custom scrollbar (native scrollbar is hidden). Green bar mirrors scroll
 * progress; the bar can be dragged and the track can be clicked.
 */
export function Scrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [maxTop, setMaxTop] = useState(0);
  const dragging = useRef(false);
  const barHeight = useRef(BAR_HEIGHT_DESKTOP);

  const measure = useCallback(() => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const trackH = window.innerHeight;
    barHeight.current =
      window.innerWidth <= 800 ? BAR_HEIGHT_MOBILE : BAR_HEIGHT_DESKTOP;
    setMaxTop(Math.max(0, trackH - barHeight.current));
    setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const scrollToProgress = useCallback((p: number) => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const clamped = Math.max(0, Math.min(1, p));
    window.scrollTo({ top: clamped * scrollable, behavior: "instant" as ScrollBehavior });
  }, []);

  // drag support
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const p = (e.clientY - rect.top - barHeight.current / 2) / (rect.height - barHeight.current);
      scrollToProgress(p);
    };
    const onPointerUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [scrollToProgress]);

  return (
    <div className="scrollbar" aria-hidden="true">
      <div
        ref={trackRef}
        className="scrollbar__track"
        onPointerDown={(e) => {
          if (e.target === barRef.current) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const p = (e.clientY - rect.top) / rect.height;
          scrollToProgress(p);
        }}
      >
        <div
          ref={barRef}
          className="scrollbar__bar"
          style={{ transform: `translateY(${progress * maxTop}px)` }}
          onPointerDown={(e) => {
            e.stopPropagation();
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          }}
        />
      </div>
    </div>
  );
}
