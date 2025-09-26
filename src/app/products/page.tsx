import React from "react";
import ProductCard from "../components/Product/ProductCard";
import ProductOverview from "../components/Product/ProductOverview";
import ProductFAQs from "../components/Product/ProductFAQs";
import ProductReview from "../components/Product/ProductReview";
import RelatedProduct from "../components/Home/RelatedProducts";
const page = () => {
  return (
    <div className="my-2">
      <ProductCard />
      <ProductOverview/>
      <ProductFAQs/>
      <ProductReview/>
      {/* <RelatedProduct /> */}
    </div>
  );
};

export default page;
