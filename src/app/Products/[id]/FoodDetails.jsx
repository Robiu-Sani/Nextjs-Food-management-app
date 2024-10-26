import Image from "next/image";
import React from "react";

export default function FoodDetails({ food, HandleCallBuy, makeOrder }) {
  return (
    <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 gap-6  overflow-hidden">
      <div className="w-full">
        <Image
          src={food?.image}
          alt={food?.name}
          width={400}
          height={400}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-between px-6 py-5 text-gray-800">
        <h2 className="text-2xl font-bold text-orange-600 mb-3">
          {food?.name}
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-4">
          {food?.description || "No description available for this item."}
        </p>
        <p className="text-md font-semibold">
          <span className="text-orange-600">Category:</span>{" "}
          {food?.category || "Not specified"}
        </p>
        <p className="text-md font-semibold">
          <span className="text-orange-600">Original Price:</span> $
          {food?.prevPrice?.toFixed(2) || "0.00"}
        </p>
        <p className="text-md font-semibold">
          <span className="text-orange-600">Discount:</span>{" "}
          {food?.discount || "0"}%
        </p>
        <p className="text-xl font-bold text-green-600">
          Price Now: ${food?.price?.toFixed(2) || "0.00"}
        </p>

        <div className="w-full grid grid-cols-2 mt-5 gap-3">
          <button className="w-full rounded-md border font-medium p-2 border-orange-500 text-sm bg-white text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-200">
            Add to Cart
          </button>
          <button
            onClick={() => HandleCallBuy(!makeOrder)}
            className="w-full rounded-md border text-center font-medium p-2 bg-orange-500 text-sm border-orange-500 hover:bg-orange-600 text-white transition-all duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            **Enjoy free shipping on orders above $50. Limited-time offer!
          </p>
          <p className="text-sm text-gray-500 mt-1">
            **This product is eligible for our return policy within 30 days of
            purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
