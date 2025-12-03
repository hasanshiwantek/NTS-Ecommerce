// app/my-account/layout.tsx
import React from "react";
import MyAccountTabs from "../components/layout/MyAccountLayoutWrapper";


const MyAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Client component for breadcrumb + tabs */}
      <MyAccountTabs />

      {/* Tab content */}
      <div>{children}</div>
    </div>
  );
};

export default MyAccountLayout;
