"use client";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { RootState } from "@/redux/store";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is authenticated
    if (isAuthenticated === false) {
      // Redirect to login page, but preserve the intended destination
      const loginUrl = `/auth/login?redirect=${encodeURIComponent(pathname || "/checkout")}`;
      router.replace(loginUrl);
    }
  }, [isAuthenticated, router, pathname]);

  // If not authenticated, show loader while redirecting
  // Don't render children until authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-7 border-[#F15939] border-t-transparent rounded-full w-32 h-32 animate-spin"></div>
      </div>
    );
  }

  // Only render children if authenticated
  return <>{children}</>;
}

