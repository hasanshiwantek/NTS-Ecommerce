"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

const LinkHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#5B5B5B] text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Left Section: Menu Icon + Dropdown */}
        <div className="relative flex items-center gap-2">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 hover:text-gray-300 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
            <span className="font-semibold !text-white">Menu</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <ul className="absolute left-0 top-8 flex flex-col bg-[#4A4A4A] text-white rounded shadow-lg w-40 z-10">
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Blog
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Right Section: Product Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/portable-storage" className="hover:text-gray-300">
              Portable Storage Drive
            </Link>
          </li>
          <li>
            <Link href="/connectors" className="hover:text-gray-300">
              Connectors
            </Link>
          </li>
          <li>
            <Link href="/power-supply" className="hover:text-gray-300">
              Power Supply
            </Link>
          </li>
          <li>
            <Link href="/charging-cables" className="hover:text-gray-300">
              Charging Cables
            </Link>
          </li>
          <li>
            <Link href="/data-cables" className="hover:text-gray-300">
              Data Cables
            </Link>
          </li>
          <li>
            <Link href="/hdmi-cables" className="hover:text-gray-300">
              HDMI Cables
            </Link>
          </li>
          <li>
            <Link href="/memory-readers" className="hover:text-gray-300">
              Memory Card Readers
            </Link>
          </li>
          <li>
            <Link href="/motherboards" className="hover:text-gray-300">
              Computer Motherboards
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LinkHeader;
