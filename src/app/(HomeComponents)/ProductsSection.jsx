import Link from "next/link";
import { IoFastFood } from "react-icons/io5";
import image from "../../_images/card7.jpg";
import Image from "next/image";
import food1 from "../../_images/p1.png";
import food2 from "../../_images/p2.png";
import food3 from "../../_images/p3.png";
import food4 from "../../_images/p4.png";
import MenuCard from "../(ShaireComponents)/MenuCard";

export default function ProductsSection() {
  const foodData = [
    {
      image: food1,
      foodName: "Egg and Cucumber",
      foodPrice: 55,
      foodTitle: "Healthy Egg Salad", // Added short title
    },
    {
      image: food2,
      foodName: "Chicken Fried Rice",
      foodPrice: 180,
      foodTitle: "Tasty Fried Rice", // Added short title
    },
    {
      image: food3,
      foodName: "Chicken Leg Piece",
      foodPrice: 69,
      foodTitle: "Juicy Chicken Leg", // Added short title
    },
    {
      image: food4,
      foodName: "Chicken Pizza",
      foodPrice: 229,
      foodTitle: "Delicious Pizza", // Added short title
    },
    {
      image: food1,
      foodName: "Egg and Cucumber",
      foodPrice: 55,
      foodTitle: "Healthy Egg Salad", // Added short title
    },
    {
      image: food2,
      foodName: "Chicken Fried Rice",
      foodPrice: 180,
      foodTitle: "Tasty Fried Rice", // Added short title
    },
    {
      image: food3,
      foodName: "Chicken Leg Piece",
      foodPrice: 69,
      foodTitle: "Juicy Chicken Leg", // Added short title
    },
    {
      image: food4,
      foodName: "Chicken Pizza",
      foodPrice: 229,
      foodTitle: "Delicious Pizza", // Added short title
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-2">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-500 font-extrabold">BEST FOOD</p>
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Our Products
          </h2>
          <div className="container mx-auto px-2 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="w-full flex justify-between items-center flex-col">
              {foodData.map((item, idx) => (
                <MenuCard key={idx} data={item}></MenuCard>
              ))}
            </div>
            <div className="w-full  justify-center hidden md:flex items-center">
              <Image
                src={image}
                alt="this is an food image"
                className="h-full w-[70%]"
                // layout="fill"
              />
            </div>
            <div className="w-full flex justify-between items-center flex-col">
              {foodData.map((item, idx) => (
                <MenuCard key={idx} data={item}></MenuCard>
              ))}
            </div>
          </div>

          <Link
            href={"/Products"}
            className="mt-9 flex text-white justify-center items-center gap-3 px-5 p-2 rounded-md bg-orange-500 hover:bg-orange-700"
          >
            <IoFastFood />
            <span className="text-white font-bold">See All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
