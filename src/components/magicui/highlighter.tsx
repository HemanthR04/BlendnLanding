"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type React from "react";

// Define available annotation actions
type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

// Custom TypeScript interface for supported props
interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  /**
   * When to start the annotation animation.
   * - "immediate": start on mount (default)
   * - "window-load": start after the window load event fires
   * - "visible": start when the element enters the viewport
   */
  trigger?: "immediate" | "window-load" | "visible";
  /** Optional delay before starting the animation (in ms). */
  delayMs?: number;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#FC4D0A", // Default brand color
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 5,
  padding = 2,
  multiline = true,
  trigger = "immediate",
  delayMs = 0,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const annotation = annotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });

      let observer: IntersectionObserver | null = null;
      let timeoutId: number | null = null;
      let hasStarted = false;

      const start = () => {
        // Avoid double-starting
        if (hasStarted) return;
        hasStarted = true;

        if (delayMs > 0) {
          timeoutId = window.setTimeout(() => {
            annotation.show();
          }, delayMs);
        } else {
          annotation.show();
        }
      };

      if (trigger === "window-load") {
        if (document.readyState === "complete") {
          start();
        } else {
          const onLoad = () => {
            start();
            window.removeEventListener("load", onLoad);
          };
          window.addEventListener("load", onLoad);
        }
      } else if (trigger === "visible") {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                start();
                if (observer) observer.disconnect();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(element);
      } else {
        // immediate
        start();
      }

      // Cleanup
      return () => {
        if (observer) observer.disconnect();
        if (timeoutId) window.clearTimeout(timeoutId);
        annotation.remove();
      };
    }
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    trigger,
    delayMs,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
