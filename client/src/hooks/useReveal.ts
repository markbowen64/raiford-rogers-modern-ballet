/**
 * Editorial Performance Programme — scroll reveal hook
 * - Adds .is-visible to elements with .reveal class when they enter viewport
 * - Single observer for performance
 */
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
