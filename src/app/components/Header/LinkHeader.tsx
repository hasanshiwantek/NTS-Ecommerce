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
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    <div className="xl:w-[25.8rem] 2xl:w-[34.2rem]  bg-white text-black border-r relative">
      {/* Column Heading (static, no animation) */}
      <div className="px-4 py-2 h3-secondary !text-[#F15939] border-b">
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
            <Link href={`/category/${cat.slug}`}  onClick={() => setIsOpen(false)}>
            <motion.li
              key={cat.id}
              variants={listVariants}
              className="flex justify-between items-center px-4 py-3 h4-regular hover:bg-gray-100 hover:border-l-2 border-[#F15939] cursor-pointer relative"
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {cat.name}

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
                         setIsOpen={setIsOpen}
                        heading={cat.name}
                        categories={cat.subcategories}
                      />
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            </Link>
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
      <nav
        className="w-full flex items-center justify-start 
                  gap-4 lg:gap-2 xl:gap-8 2xl:gap-0 
                  px-4 sm:px-6 md:px-10 lg:px-[2%] xl:px-[5%] 2xl:px-32 
                  py-2 sm:py-3 
                  relative 2xl:max-w-[1920px] xl:h-[56px] 2xl:h-[56px] lg:[h-56px] h-max"
      >
        {/* Left Section: Menu Button */}
        <div
          className="relative flex items-center 
                 gap-1 sm:gap-2 md:gap-3 lg:gap-4 mr-2 sm:mr-4 md:mr-6 lg:mr-8"
          ref={menuRef}
        >
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 sm:gap-2 hover:text-gray-300 focus:outline-none"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 2xl:w-[20px] 2xl:h-[20px] text-[#F2F2F2]" />
            <span className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-[20px] font-normal text-[#F2F2F2]">
              Menu
            </span>
            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 2xl:w-[20px] 2xl:h-[20px] transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mega Menu */}
          {isOpen && (
            <div className="absolute left-0 top-10 flex bg-white shadow-xl border z-50">
              <DropdownColumn
                setIsOpen={setIsOpen}
                heading="All Categories"
                categories={categories}
              />
            </div>
          )}
        </div>

        {/* Right Section: Static Links */}
        <ul
          className="hidden lg:flex items-center 
                   gap-4 md:gap-6 xl:gap-8 
                   whitespace-nowrap 
                   text-sm sm:text-base md:text-sm lg:text-[1rem] xl:text-xl nav-fix 2xl:text-[20px] font-normal"
        >
          <li className="text-[#F2F2F2]">
            <Link href="/portable-storage" className="hover:text-gray-300">
              Portable Storage Drive
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/connectors" className="hover:text-gray-300">
              Connectors
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/power-supply" className="hover:text-gray-300">
              Power Supply
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/charging-cables" className="hover:text-gray-300">
              Charging Cables
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/data-cables" className="hover:text-gray-300">
              Data Cables
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/hdmi-cables" className="hover:text-gray-300">
              HDMI Cables
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
            <Link href="/memory-readers" className="hover:text-gray-300">
              Memory Card Readers
            </Link>
          </li>
          <li className="text-[#F2F2F2]">
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
