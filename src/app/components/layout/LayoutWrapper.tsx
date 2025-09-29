import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
