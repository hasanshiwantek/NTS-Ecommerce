import React from "react";
import ProductCard from "../components/Product/ProductCard";
import ProductOverview from "../components/Product/ProductOverview";
import ProductFAQs from "../components/Product/ProductFAQs";
const page = () => {
  return (
    <div className="my-2">
      <ProductCard />
      <ProductOverview/>
      <ProductFAQs/>
    </div>
  );
};

export default page;
