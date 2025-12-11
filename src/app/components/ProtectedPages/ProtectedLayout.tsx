"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/authSlice";


export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, expireAt } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 1. Check if user is authenticated
    if (!isAuthenticated) {
      const loginUrl = `/auth/login?redirect=${encodeURIComponent(pathname || "/checkout")}`;
      router.replace(loginUrl);
      return;
    }

  if (expireAt) {
    const now = Date.now();
    const expiryTime = new Date(expireAt).getTime();

    if (now >= expiryTime) {
      dispatch(logout());
      router.replace(`/auth/login?redirect=${encodeURIComponent(pathname || "/checkout")}`);
    } else {
      const timeout = expiryTime - now;
      const timer = setTimeout(() => {
        dispatch(logout());
        router.replace(`/auth/login?redirect=${encodeURIComponent(pathname || "/checkout")}`);
      }, timeout);

      return () => clearTimeout(timer); // Cleanup
    }
  }
  }, [isAuthenticated, expireAt, dispatch, router, pathname]);

  // Loader while redirecting
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-7 border-[#F15939] border-t-transparent rounded-full w-32 h-32 animate-spin"></div>
      </div>
    );
  }

  // Render children if authenticated
  return <>{children}</>;
}
