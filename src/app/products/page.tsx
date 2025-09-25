import React from "react";
import ProductCard from "../components/Product/ProductCard";
import ProductOverview from "../components/Product/ProductOverview";
const page = () => {
  return (
    <div className="my-2">
      <ProductCard />
      <ProductOverview/>
    </div>
  );
};

export default page;
