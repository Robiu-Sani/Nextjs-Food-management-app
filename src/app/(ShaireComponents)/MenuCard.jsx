"use client";

import Image from "next/image";

export default function MenuCard({ data }) {
  return (
    <div className="w-full my-2 flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={data.image}
          alt="this is product image"
          className="w-[60px] h-[60px] rounded-full"
          // layout="fill"
        />
        <div className="">
          <h3 className="text-xl font-bold">{data.foodName}</h3>
          <small className="text-sm text-gray-600">{data.foodTitle}</small>
        </div>
      </div>
      <h3 className="text-md font-bold text-orange-600">৳ {data.foodPrice}</h3>
    </div>
  );
}
