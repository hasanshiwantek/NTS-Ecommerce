"use client";

import React, { useEffect } from "react";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ReachOutSection from "./ReachOutSection";
import FAQSection from "./FAQSection";

const ContactUs = () => {
  // Enable smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="w-full">
      {/* Row 1: Banner */}
      <ContactBanner />

      {/* Row 2: Contact Form */}
      <ContactForm />

      {/* Reach Out to Us Section */}
      <ReachOutSection />

      {/* Frequently Asked Question Section */}
      <FAQSection />
    </div>
  );
};

export default ContactUs;

