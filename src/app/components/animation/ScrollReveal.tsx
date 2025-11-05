"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

// Dynamically import only motion.div
const MotionDiv = dynamic(
  () =>
    import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false } // client-only
);
export default function ScrollReveal({
  children,
  delay = 0.2,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const [motionModule, setMotionModule] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion").then((mod) => {
      if (mounted) setMotionModule(mod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!motionModule) return <div>{children}</div>; // fallback while loading

  const { motion, useAnimation, useInView } = motionModule;

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const directionOffset =
    direction === "up"
      ? { y: 30 }
      : direction === "down"
      ? { y: -30 }
      : direction === "left"
      ? { x: 30 }
      : { x: -30 };

  return (
    <MotionDiv
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, ...directionOffset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: "easeOut" },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </MotionDiv>
  );
}
