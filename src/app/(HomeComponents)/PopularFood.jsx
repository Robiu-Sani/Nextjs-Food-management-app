"use client";
import Link from "next/link";
import PopularFoodCard from "../(ShaireComponents)/PopularFoodCard";
import food1 from "../../_images/p1.png";
import food2 from "../../_images/p2.png";
import food3 from "../../_images/p3.png";
import food4 from "../../_images/p4.png";
import { IoFastFood } from "react-icons/io5";

export default function PopularFood() {
  const foodData = [
    {
      image: food1,
      foodName: "Egg and Cucumber",
      foodPrice: 55,
    },
    {
      image: food2,
      foodName: "Chicken Fried Rice",
      foodPrice: 180,
    },
    {
      image: food3,
      foodName: "Chicken Leg Piece",
      foodPrice: 69,
    },
    {
      image: food4,
      foodName: "Chicken Pizza",
      foodPrice: 229,
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-2">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-500 font-extrabold">BEST FOOD</p>
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Popular Food Items
          </h2>
          <div className="max-w-[1200px] grid grid-cols-2 mt-9 sm:grid-cols-4 gap-3 justify-center items-center">
            {foodData.map((item, idx) => (
              <PopularFoodCard key={idx} data={item} />
            ))}
          </div>
          <Link
            href={"/Products"}
            className="mt-9 flex text-white justify-center items-center gap-3 px-5 p-2 rounded-md bg-orange-500 hover:bg-orange-700"
          >
            <IoFastFood />
            <span className="text-white font-bold">Order Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
