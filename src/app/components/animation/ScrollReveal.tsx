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

// Dynamically import framer-motion module
const useFramerMotion = async () => {
  const mod = await import("framer-motion");
  return {
    motion: mod.motion,
    useAnimation: mod.useAnimation,
    useInView: mod.useInView,
  };
};

export default function ScrollReveal({
  children,
  delay = 0.2,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [motionModule, setMotionModule] = useState<{
    motion: any;
    useAnimation: any;
    useInView: any;
  } | null>(null);

  // Load framer-motion dynamically on client
  useEffect(() => {
    let mounted = true;
    useFramerMotion().then((mod) => {
      if (mounted) setMotionModule(mod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // fallback render without animation until loaded
  if (!motionModule) return <div className={className}>{children}</div>;

  const { motion, useAnimation, useInView } = motionModule;

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
    <motion.div
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
    </motion.div>
  );
}
