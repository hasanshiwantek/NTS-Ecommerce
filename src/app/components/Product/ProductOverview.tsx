"use client";

import React from "react";

const ProductOverview = ({ product }: { product: any }) => {
  return (
    <section className="my-8">
      <div className="max-w-full">
        {/* Main Overview Heading */}
        <h1 className="h1-primary !mb-4">Overview</h1>

        {/* Intro Paragraph */}
        <p className="p-primary !mb-6 !leading-relaxed !max-w-3xl">
          Introducing the <strong>{product?.name || "N/A"}</strong>, a versatile
          solution for your networking needs. This product is manufactured by{" "}
          <strong>{product?.brand?.name || "N/A"}</strong>, offering reliable
          performance for enterprises and organizations.
        </p>

        {/* Key Features */}
        <section className="!mb-8">
          <h2 className="!text-2xl !font-semibold !mb-3">Key Features:</h2>
          <ul className="!list-disc !list-inside !space-y-2">
            <li className="li-primary">
              <span className="!font-semibold">SKU:</span>{" "}
              {product?.sku || "N/A"}
            </li>
            <li className="li-primary">
              <span className="!font-semibold">MPN:</span>{" "}
              {product?.mpn || "N/A"}
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Brand:</span>{" "}
              {product?.brand?.name || "N/A"}
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Category:</span>{" "}
              {product?.categories?.[0]?.name || "N/A"}
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Availability:</span>{" "}
              {product?.availabilityText || "N/A"}
            </li>
            <li className="li-primary">
              <span className="!font-semibold">Weight:</span>{" "}
              {product?.dimensions?.weight
                ? `${product.dimensions.weight} lbs`
                : "N/A"}
            </li>
          </ul>
        </section>

        {/* Closing Paragraph */}
        <p className="!mb-10 !leading-relaxed p-primary">
          {product?.metaDescription ||
            product?.description ||
            "N/A description available for this product."}
        </p>

        {/* Product Details Section */}
        <section className="!mt-8 border">
          <div className="bg-[#F5F6FA] p-2">
            <h2 className="!text-2xl !font-semibold !mb-2">
              {product?.sku || "N/A"}
            </h2>
          </div>

          {/* Key-Value Details */}
          <dl className="!space-y-4 p-2">
            {[
              ["Brand", product?.brand?.name || "N/A"],
              [
                "Weight",
                product?.dimensions?.weight
                  ? `${product.dimensions.weight} lbs`
                  : "N/A",
              ],
              ["MSRP", product?.msrp ? `$${product.msrp}` : "N/A"],
              ["Price", product?.price ? `$${product.price}` : "N/A"],
              ["Condition", product?.showCondition ? "Yes" : "N/A"],
              ["Availability", product?.availabilityText || "N/A"],
              ["Stock", product?.currentStock ?? "N/A"],
            ].map(([key, value], index) => (
              <div
                key={key}
                className={`!grid !grid-cols-[200px_1fr] !items-center !p-2 ${
                  index % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <dt className="!font-medium !text-gray-700 li-primary">
                  {key}
                </dt>
                <dd className="!text-gray-900 !text-center li-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
};

export default ProductOverview;
