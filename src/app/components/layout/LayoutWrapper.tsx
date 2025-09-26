"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Smooth Page Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className="flex-grow !p-6 !px-[5%]"
          initial={{ opacity: 0, y: 15 }}   // page hidden + neeche se
          animate={{ opacity: 1, y: 0 }}    // smooth entry
          exit={{}}                         // ❌ disable exit animation
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
