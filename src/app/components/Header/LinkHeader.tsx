"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { fetchCategories } from "@/lib/api/category";

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

  return (
    <div className="w-[20rem] bg-white text-black border-r relative">
      {/* Column Heading */}
      <div className="px-4 py-2 font-semibold text-red-600 border-b">
        {heading}
      </div>

      <ul>
        {categories.length > 0 ? (
          categories.map((cat) => (
            <li
              key={cat.id}
              className={`flex justify-between items-center px-4 py-3 text-xl hover:bg-gray-100 cursor-pointer relative`}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link href={`/${cat.slug}`}>{cat.name}</Link>

              {cat.subcategories?.length > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}

              {/* Show only the hovered category’s nested column */}
              {activeCategory === cat.id && (
                <div className="absolute top-0 left-full flex">
                  {cat.subcategories && cat.subcategories.length > 0 ? (
                    <DropdownColumn
                      heading={cat.name}
                      categories={cat.subcategories}
                    />
                  ) : (
                    ""
                  )}
                </div>
              )}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-400 italic">Not available</li>
        )}
      </ul>
    </div>
  );
};

const LinkHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <header className="bg-[#5B5B5B] text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Left Section: Menu Button */}
        <div className="relative flex items-center gap-2 mr-5">
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
        <ul className="hidden lg:flex items-center lg:me-16 gap-8 whitespace-nowrap">
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
