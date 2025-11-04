"use client";

import React, { useEffect, useState } from "react";

interface AOSWrapperProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-left";
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  easing?: any; // custom easing
  className?: string;
}

const defaultAnimations = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in"];

const AOSWrapper: React.FC<AOSWrapperProps> = ({
  children,
  animation,
  delay = 0,
  duration = 1000,
  offset = 120,
  once = true,
  easing = "ease-out-cubic",
  className = "",
}) => {
  const [aosLoaded, setAosLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import AOS only on client side for better performance
    const loadAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        // Load CSS dynamically to reduce initial bundle size
        if (typeof window !== "undefined" && !document.getElementById("aos-styles")) {
          const link = document.createElement("link");
          link.id = "aos-styles";
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/aos@2.3.4/dist/aos.css";
          document.head.appendChild(link);
        }
        
        AOS.init({
          duration,
          offset,
          once,
          easing,
        });
        AOS.refresh();
        setAosLoaded(true);
      } catch (error) {
        console.error("Failed to load AOS:", error);
      }
    };
    
    loadAOS();
  }, [duration, offset, once, easing]);

  // If no animation is specified, pick a random one from defaults
  const finalAnimation = animation || defaultAnimations[Math.floor(Math.random() * defaultAnimations.length)];

  return (
    <div
      data-aos={finalAnimation}
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
