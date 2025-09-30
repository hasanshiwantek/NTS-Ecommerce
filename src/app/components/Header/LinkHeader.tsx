"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { fetchCategories } from "@/lib/api/category";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories: Category[];
}

const DropdownColumn = ({
  heading,
  categories,
}: {
  heading: string;
  categories: Category[];
}) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Variants for list animation
  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-[20rem] bg-white text-black border-r relative">
      {/* Column Heading (static, no animation) */}
      <div className="px-4 py-2 font-semibold text-red-600 border-b">
        {heading}
      </div>

      {/* Animated List */}
      <motion.ul
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
      >
        {categories.length > 0 &&
          categories.map((cat) => (
            <motion.li
              key={cat.id}
              variants={listVariants}
              className="flex justify-between items-center px-4 py-3 text-lg hover:bg-gray-100 cursor-pointer relative"
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link href={`/${cat.slug}`}>{cat.name}</Link>

              {cat.subcategories?.length > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}

              {/* Child dropdown stays same */}
              <AnimatePresence>
                {activeCategory === cat.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-full flex"
                  >
                    {cat.subcategories.length > 0 ? (
                      <DropdownColumn
                        heading={cat.name}
                        categories={cat.subcategories}
                      />
                    ) : (
                      null
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
      </motion.ul>
    </div>
  );
};
const LinkHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
 const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <header className="bg-[#5B5B5B] text-white">
  <nav className="w-full flex items-center justify-between px-16 lg:px-32 py-3 relative">
    {/* Left Section: Menu Button */}
    <div
      className="relative flex flex-1 items-center gap-2 mr-5"
      ref={menuRef}
    >
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

      {/* Mega Menu */}
      {isOpen && (
        <div className="absolute left-0 top-10 flex bg-white shadow-xl border z-50">
          <DropdownColumn heading="All Categories" categories={categories} />
        </div>
      )}
    </div>

    {/* Right Section: Static Links */}
    <ul className="hidden lg:flex flex-1 items-center gap-8 whitespace-nowrap">
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
