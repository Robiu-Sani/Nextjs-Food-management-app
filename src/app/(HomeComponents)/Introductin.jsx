"use client";
import Image from "next/image";
import bg from "../../_images/subbanner2.jpg";
import cook from "../../_images/cook.png";
import phone from "../../_images/phone.png";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";

export default function Introduction() {
  return (
    <div className="pt-10 w-full relative overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="bg image"
        className="min-w-full z-0 absolute top-0 h-full object-cover"
        layout="fill"
      />
      <div className="min-w-full z-0 absolute top-0 h-full bg-[#0000008c]"></div>

      {/* Content */}
      <div className="container mx-auto grid z-30 relative sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3">
        {/* Left Image */}
        <div className="w-full hidden md:flex justify-center">
          <Image src={cook} alt="cook image" className="w-[70%] z-20 mx-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold z-30 text-orange-500 mb-4">
            Welcome to Our Cooking Adventure
          </h1>
          <p className=" z-30 text-white drop-shadow text-sm mb-4">
            At our kitchen, we bring together the art of cooking and the joy of
            sharing delicious meals. Whether you are a novice or an experienced
            cook, you'll find inspiration, tips, and recipes to elevate your
            culinary skills.
          </p>
          <Link
            href={"/Products"}
            className=" flex text-white justify-center items-center gap-3 px-5 p-2 rounded-md bg-orange-500 hover:bg-orange-700"
          >
            <IoFastFood />
            <span className="text-white font-bold">Order Now</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center">
          <Image
            src={phone}
            alt="phone image"
            className="w-[70%] h-auto z-20 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
