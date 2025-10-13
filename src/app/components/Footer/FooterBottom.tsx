"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCategories } from "@/lib/api/category";
import Image from "next/image";
interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories?: Category[];
}

const FooterBottom = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data); // ✅ fill the variable
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    loadCategories();
  }, []); // ✅ run once on mount

  return (
    <footer className="bg-[#484848] text-white w-full mx-auto">
      {/* 🔹 Newsletter Section */}
      <section className="bg-[#585858] flex justify-center items-center h-auto min-h-[10rem]">
        <div
          className="
        w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[85%]
        2xl:max-w-[90%] 
        mx-auto 
        px-4 sm:px-6 lg:px-8 xl:px-10 
        flex flex-col md:flex-row items-center justify-between
      "
        >
          <div className="text-center md:text-left w-full md:w-[60%] 2xl:max-w-[50%]">
            <h4 className="h1-secondary-medium !text-white">
              Subscribe to our Newsletter
            </h4>
            <p className="!text-gray-300 h6-regular">
              Get the latest updates on new products and upcoming sales
            </p>
          </div>

          <form className="w-full md:w-[40%] 2xl:max-w-[45%] flex items-center mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-white text-[#333] bg-white focus:outline-none rounded-md text-sm md:text-base"
            />
            <button
              type="submit"
              className="btn-primary !p-2 !rounded-sm w-[30%] md:w-[25%] max-w-[9rem]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 🔹 Dynamic Categories Section */}
      <section
        className="
      w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[85%] 
      2xl:max-w-[90%] 
      mx-auto 
      px-4 sm:px-6 lg:px-8 xl:px-10 
      py-16
    "
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map((category) => (
            <nav key={category.id} aria-label={category.name}>
              <h4 className="h5-bold !text-[#FFFFFF] mb-4 uppercase">
                {category.name}
              </h4>
              <ul className="h5-regular !text-[#FFFFFF] flex flex-col xl:gap-3 2xl:gap-4">
                {category.subcategories?.length ? (
                  category.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/category/${sub.slug}`}
                        className="hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href={`/category/${category.slug}`}
                      className="hover:text-white"
                    >
                      {category.name}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>
      </section>

      <div className="w-full max-w-[90%] h-[0.125rem] bg-[#585858] mx-auto"></div>

      {/* 🔹 Info Section (static content) */}
      <section
        className="
      w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[85%]
      2xl:max-w-[90%] 
      mx-auto 
      px-4 sm:px-6 lg:px-8 xl:px-10 
      py-16
    "
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <nav aria-label="Customer Services">
            <h4 className="h5-bold !text-[#FFFFFF] mb-4">Customer Services</h4>
            <ul className="flex flex-col xl:gap-3 2xl:gap-4 h5-regular !text-[#FFFFFF]">
              <li>
                <Link href="/privacyPolicy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/shippingPolicy">Shipping policy</Link>
              </li>
              <li>
                <Link href="/returnPolicy">Return policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms and conditions</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="My Account">
            <h4 className="h5-bold !text-[#FFFFFF] mb-4">My Account</h4>
            <ul className="flex flex-col xl:gap-3 2xl:gap-4 h5-regular !text-[#FFFFFF]">
              <li>
                <Link href="/login">Sign in</Link>
              </li>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
              <li>
                <Link href="/cart">My cart</Link>
              </li>
            </ul>
          </nav>

          <section aria-label="Contact Us">
            <h4 className="h5-bold !text-[#FFFFFF] mb-4">Contact Us</h4>
            <ul className="flex flex-col xl:gap-3 2xl:gap-4 h5-regular !text-[#FFFFFF]">
              <li>
                <a href="mailto:contact@newtownspares.com">
                  contact@newtownspares.com
                </a>
              </li>
              <li>
                <a href="tel:+4122123345677">+41 22 123345677</a>
              </li>
            </ul>
          </section>

          <address className="not-italic">
            <h4 className="h5-bold !text-[#FFFFFF] mb-4">Address</h4>
            <p className="h5-regular !text-[#FFFFFF]">
              123 Lakeview Avenue, Zurich
            </p>
            <p className="h5-regular !text-[#FFFFFF]">Switzerland</p>
          </address>
        </div>
      </section>

      {/* 🔹 Bottom Bar */}
      <div className="h5-regular flex items-center justify-between bg-[#585858] min-h-[4.5rem] px-[5%]">
        {/* Center Content */}
        <p className="!text-white text-center flex-1">
          &copy; New Town Spares {new Date().getFullYear()}. All rights
          reserved.
        </p>

        {/* Right Content */}
        <p className="flex items-center gap-2 h5-regular !text-white ml-auto">
          <span>Join Us</span>
          <Image
            src="/footer-logo.png"
            alt="Join Us Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
