import React from "react";
import SignupPage from "@/app/components/Auth/Signup";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup - New Town Spares",
  description:
    "Create your account at New Town Spares to access premium services.",
  keywords: ["signup", "register", "new town spares", "create account"],
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <div>
      <SignupPage />
    </div>
  );
};

export default page;
