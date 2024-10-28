import Image from "next/image";
import React from "react";

export default function MenousCard({ product }) {
  return (
    <div className="w-full p-2 rounded-md border flex justify-between items-center gap-2">
      <div className="h-[80px] flex justify-center items-center w-[80px] rounded-full overflow-hidden">
        <Image
          src={product?.image ?? "https://i.postimg.cc/7h5ctSsS/images.png"}
          alt={product?.name ?? "food"}
          className="w-auto h-[100%]"
          width={80}
          height={80}
        />
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="">
          <h3 className="font-bold">{product?.name ?? "Not Found"}</h3>
          <p>{product?.description ?? "Not Found"}</p>
        </div>
        <small className="font-bold text-orange-500">
          price : <strong>${product?.price}</strong>
        </small>
      </div>
    </div>
  );
}
