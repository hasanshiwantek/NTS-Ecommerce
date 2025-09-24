"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import navlogo from "@/assets/navlogo.png";
import Image from "next/image";
import { FaHeadphones, FaUser, FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
const Navbar: React.FC = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [mobileOpen, setMobileOpen] = useState(false);

  const currencies = ["USD", "CAD", "EUR"];

  return (
    <header className="bg-[#484848] text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex  items-center h-20">
          {/* Left: Logo */}
          <div className="flex items-center mr-4 shrink-0 ">
            <Image
              src={navlogo}
              alt="Logo"
              width={120}
              height={120}
              objectFit="contain"
              className=" "
            />
          </div>

          {/* Center: Search */}
          <div className="relative flex-1 hidden lg:block max-w-2xl   ">
            <Input
              type="text"
              placeholder="Search products..."
              className="!w-[30rem] px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg pr-52"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button className="bg-[#F1593957] p-1 rounded-full flex items-center justify-center hover:bg-gray-800 transition">
                <Search className="w-14 h-8 text-black" />
              </button>
            </div>
          </div>

          {/* Cart (always visible) */}
          <button className="relative text-white hover:text-blue-300 transition ml-auto lg:ml-8">
            <ShoppingCart className="w-7 h-7" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Hamburger toggle (mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-4 block lg:hidden"
          >
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* Right: Currency + Account + Contact (desktop only) */}
          <section className="hidden lg:flex items-center space-x-8 ml-8">
            {/* Currency */}
            <div className="relative flex items-center space-x-2">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-6 h-6 rounded-full"
              />
              <div className="flex flex-col space-x-5">
                <p className="!text-lg !text-white">Currency</p>
                <button
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="flex items-center space-x-1 text-sm font-semibold !text-white hover:text-blue-300"
                >
                  <span className="!text-white">{currency}</span>
                  <FaChevronDown className="text-xs" />
                </button>

                {currencyOpen && (
                  <ul className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md w-28 z-50">
                    {currencies.map((c) => (
                      <li
                        key={c}
                        onClick={() => {
                          setCurrency(c);
                          setCurrencyOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center space-x-5">
              <FaUser className="h-6 w-6" />
              <div className="flex flex-col leading-tight space-x-5">
                <p className="!text-lg font-semibold !text-white">Account</p>
                <div className="flex items-center space-x-1">
                  <button className="text-base whitespace-nowrap font-medium hover:text-blue-300">
                    Sign In
                  </button>
                  <span className="!text-white">/</span>
                  <button className="text-base font-medium hover:text-blue-300">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-5">
              <FaHeadphones className="h-7 w-7" />
              <div className="flex flex-col leading-tight space-x-5">
                <p className="!text-lg font-semibold !text-white">
                  orders@newtownspares.com
                </p>
                <p className="text-sm font-semibold !text-white">
                  (209) 300 1234567
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 space-y-6">
            {/* Search (mobile) */}
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg pr-40"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button className="bg-[#F2F2F2] text-black px-3 py-1 rounded-full text-sm">
                  Nvidia
                </button>
                <button className="bg-[#F2F2F2] text-black px-3 py-1 rounded-full text-sm">
                  Western Digital
                </button>
                <button className="bg-[#F1593957] p-1 rounded-full flex items-center justify-center">
                  <Search className="w-14 h-8 text-black" />
                </button>
              </div>
            </div>

            {/* Currency */}
            <div className="flex items-center space-x-2">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-6 h-6 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs !text-gray-300">Currency</span>
                <button
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="flex items-center space-x-1 text-sm font-semibold text-white hover:text-blue-300"
                >
                  <span className="!text-white">{currency}</span>
                  <FaChevronDown className="text-xs" />
                </button>
                {currencyOpen && (
                  <ul className="absolute mt-1 bg-white text-black rounded shadow-md w-28 z-50">
                    {currencies.map((c) => (
                      <li
                        key={c}
                        onClick={() => {
                          setCurrency(c);
                          setCurrencyOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center space-x-2">
              <FaUser className="h-6 w-6" />
              <div className="flex flex-col leading-tight">
                <p className="text-sm font-semibold !text-white">Account</p>
                <div className="flex items-center space-x-1">
                  <button className="text-sm font-semibold hover:text-blue-300 !text-white">
                    Sign In
                  </button>
                  <span>/</span>
                  <button className="text-sm font-semibold hover:text-blue-300 !text-white">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-3">
              <FaHeadphones className="h-7 w-7" />
              <div className="flex flex-col leading-tight">
                <p className="text-sm font-semibold !text-white">
                  orders@newtownspares.com
                </p>
                <p className="text-sm font-semibold !text-white">(209) 300 1234567</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
