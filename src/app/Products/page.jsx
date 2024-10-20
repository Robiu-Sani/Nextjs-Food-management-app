import React from "react";
import ProductBanner from "./ProductBanner";
import ShowProducts from "./ShowProducts";

export default function page() {
  return (
    <div className="bg-gray-100">
      <ProductBanner />
      <ShowProducts />
    </div>
  );
}
