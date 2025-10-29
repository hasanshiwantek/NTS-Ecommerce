"use client";
import React, { useEffect, useState, useRef } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import navlogo from "@/assets/navlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaHeadphones, FaUser, FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import GlobalSearchBar from "./GlobalSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import {
  fetchCurrencies,
  setSelectedCurrency,
} from "@/redux/slices/currencySlice";
const Navbar: React.FC = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const auth = useAppSelector((state: RootState) => state?.auth);
  const currencyRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { currencies, status, selectedCurrency } = useAppSelector(
    (state: RootState) => state.currency
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCurrencies());
    }
  }, [status, dispatch]);

  // const currencies: ("USD" | "EUR" | "CAD")[] = ["USD", "EUR", "CAD"];
  const router = useRouter();
  const handleLogout = () => {
    const confirm = window.confirm("Confirm Logout?");
    if (!confirm) {
      return;
    } else {
      dispatch(logout());
      toast.success("Logged out successfully!");
      router.replace("/auth/login");
    }
  };
  // const currencies = ["USD", "CAD", "EUR"];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#484848] text-white shadow-md sticky top-0 z-50">
      <nav className="w-full">
        <div
          className="
        flex items-center justify-between lg:justify-center
        gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10
        h-16 sm:h-20 lg:h-24 xl:h-32 2xl:h-[124px]
        w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-28
      "
        >
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href={"/"}>
              <div className="relative w-32 h-7 sm:w-40 sm:h-8 md:w-44 md:h-9 lg:w-48 lg:h-10 xl:w-56 xl:h-12 2xl:w-[253.48px] 2xl:h-[48px]">
                <Image
                  src={navlogo}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Center: Search (Desktop only) */}

          <div
            className="
    relative hidden lg:block 
    flex-1 max-w-[60%] xl:max-w-[40rem] 2xl:max-w-[695.52px] 2xl:mx-8
  "
          >
            {/* <div
            className="
    relative hidden lg:block 
    flex-1 max-w-[60%] xl:max-w-[40rem] 2xl:max-w-[695.52px] 2xl:mx-8
  "
          >
            <input
              type="text"
              placeholder="Search products..."
              className="
      w-full px-4 md:px-5 lg:px-6 
      py-2 md:py-2.5 lg:py-3 
      rounded-full bg-white text-gray-800 
      focus:outline-none focus:ring-2 focus:ring-orange-400 
      text-sm sm:text-base lg:text-lg
      h-10 sm:h-12 md:h-12 lg:h-14 xl:h-[60px] 2xl:h-[64px]
      pr-12 sm:pr-16 md:pr-20 lg:pr-24 2xl:pr-52
    h6-medium-color
    "
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <button
                className="
        bg-[#F1593957] rounded-full
        w-8 h-8            
        sm:w-9 sm:h-9       
        md:w-10 md:h-6    
        lg:w-16 lg:h-10    
        xl:w-24 xl:h-16     
        2xl:w-[88px] 2xl:h-[46px] 
        flex items-center justify-center
      "
              >
                <Search
                  className="
          w-4 h-4 
          sm:w-5 sm:h-5 
          md:w-6 md:h-6 
          lg:w-7 lg:h-7 
          xl:w-8 xl:h-8 
          2xl:w-[23.7px] 2xl:h-[23.7px]
          text-black 
        "
                />
              </button>
            </div>
          </div> */}

            <GlobalSearchBar />
          </div>

          {/* Right Section (Desktop only) */}
          <section className="hidden lg:flex items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            <div className="relative flex items-center gap-1 sm:gap-2">
              <img
                src="/usa-logo.png"
                alt="US Flag"
                className="
              w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-[40px] 2xl:h-[40px]
              rounded-full
            "
              />
              <div className="flex flex-col leading-tight relative">
                <p className="text-[16px] text-[#EDEDED] font-normal">
                  Currency
                </p>

                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-1 text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:text-blue-300"
                >
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[20px]">
                    {selectedCurrency}
                  </span>
                  <FaChevronDown className="text-xs" />
                </button>

                {open && (
                  <div
                    className="absolute top-12 mt-1 bg-white shadow-lg rounded-md max-h-64 overflow-y-auto w-36 z-10"
                    ref={currencyRef}
                  >
                    {currencies?.map((c) => (
                      <div
                        key={c?.code}
                        className="px-3 py-2 text-black hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          dispatch(setSelectedCurrency(c?.code));
                          setOpen(false);
                        }}
                      >
                        {c?.code} - {c?.rate?.toFixed(2)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center gap-1 sm:gap-2">
              <img
                src="/human-icon.png"
                alt="Account"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-[40px] 2xl:h-[40px]"
              />
              <div className="flex flex-col leading-tight">
                <p className="text-[16px] text-[#EDEDED] font-normal ">
                  {auth?.user
                    ? `${auth?.user?.firstName} ${auth?.user?.lastName}`
                    : "Account"}
                </p>
                <div className="flex items-center gap-1">
                  {auth?.isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-[20px] font-semibold hover:text-blue-300"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href={"/auth/login"}>
                        <button className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-[20px] font-semibold hover:text-blue-300">
                          Sign In
                        </button>
                      </Link>
                      <span>/</span>
                      <Link href={"/auth/signup"}>
                        <button className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-[20px] font-semibold hover:text-blue-300">
                          Register
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-1 sm:gap-2">
              <img
                src="/headphone-icon.png"
                alt="Support"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-[40px] 2xl:h-[40px]"
              />
              <div className="flex flex-col leading-tight">
                <p className="text-[16px] text-[#EDEDED] font-normal ">
                  orders@newtownspares.com
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-[20px] font-semibold">
                  (209) 300 1234567
                </p>
              </div>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-white hover:text-blue-300 transition"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-[37px] 2xl:h-[37px]" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] sm:text-xs xl:text-base rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {cart?.length || 0}
              </span>
            </Link>
          </section>

          {/* Mobile Right: Cart + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Cart */}
             <Link
              href="/cart"
              className="relative text-white hover:text-blue-300 transition"
            >
            <button className="relative text-white hover:text-blue-300 transition">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart?.length || 0}
              </span>
            </button>
            </Link>
            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 space-y-4 px-4 pb-6">
            {/* Search */}

            <div className="relative w-full">
              <MobileSearchBar />
            </div>

            {/* Currency */}
            <div className="flex items-center gap-2">
              <img
                src="/usa-logo.png"
                alt="US Flag"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-300">Currency</span>
                <button
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="flex items-center gap-1 text-sm font-semibold hover:text-blue-300"
                >
                  <span>{selectedCurrency}</span>
                  <FaChevronDown className="text-xs" />
                </button>
              </div>
            </div>

            {/* Account */}
            <div className="flex items-center gap-2">
              <FaUser className="h-5 w-5 sm:w-6 sm:h-6" />
              <div className="flex flex-col leading-tight">
                <p className="text-xs sm:text-sm font-semibold">Account</p>
                <div className="flex items-center gap-1">
                  <Link href={"/auth/login"}>
                    <button className="text-xs sm:text-sm font-semibold hover:text-blue-300">
                      Sign In
                    </button>
                  </Link>
                  <span>/</span>
                  <Link href={"/auth/signup"}>
                    <button className="text-xs sm:text-sm font-semibold hover:text-blue-300">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2">
              <FaHeadphones className="h-5 w-5 sm:w-6 sm:h-6" />
              <div className="flex flex-col leading-tight">
                <p className="text-xs sm:text-sm font-semibold">
                  orders@newtownspares.com
                </p>
                <p className="text-xs sm:text-sm font-semibold">
                  (209) 300 1234567
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
