import Image from "next/image";
import React from "react";

export default function PopularFoodCard({ data }) {
  return (
    <div className="w-full bg-white rounded-md shadow-md py-6 p-3 flex flex-col justify-center items-center gap-4">
      <Image
        src={data.image}
        alt="food pic"
        className="w-[80%]"
        // layout="fill"
      />
      <h3 className="text-xl font-bold text-center">{data.foodName}</h3>
      <small className="font-extrabold text-orange-600">
        ৳ {data.foodPrice}
      </small>
    </div>
  );
}
