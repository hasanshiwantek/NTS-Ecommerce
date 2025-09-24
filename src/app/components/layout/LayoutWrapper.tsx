import React from "react";
import Header from "./Header";
import Footer from "./Footer";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <Header />
      <main className="p-6">{children}</main>
      <Footer/>
    </div>
  );
};

export default LayoutWrapper;
