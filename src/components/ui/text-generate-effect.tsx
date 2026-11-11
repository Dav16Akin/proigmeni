"use client";
// Aceternity UI · Text Generate Effect, adapted for Proigmeni:
// inherits the page's type (no forced bold/size/colour), reveals once when scrolled into view,
// renders as any heading tag, and keeps the full sentence readable to screen readers.
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerBy = 0.08,
  as: Tag = "p",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerBy?: number;
  as?: "p" | "h1" | "h2" | "h3";
}) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.4 });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!inView) return;
    animate("span", { opacity: 1, filter: filter ? "blur(0px)" : "none" }, { duration, delay: stagger(staggerBy) });
  }, [inView, animate, filter, duration, staggerBy]);

  return (
    <Tag className={cn(className)} aria-label={words}>
      <motion.span ref={scope} aria-hidden className="block">
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="opacity-0" style={{ filter: filter ? "blur(10px)" : "none" }}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};
