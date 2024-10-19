import Image from "next/image";
import Link from "next/link";
import { IoFastFood } from "react-icons/io5";

export default function MenusBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/d1L9X11r/banner4.png"
        alt="Feast-Frame Menus Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex pt-[100px] flex-col justify-center items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to Feast-Frame
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl">
          Delicious meals delivered from our restaurant to your door. Fresh,
          hot, and ready to feast!
        </p>

        {/* Call to Action Button */}
        <Link
          href="/Products"
          className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 transition duration-300"
        >
          <IoFastFood className="text-2xl" />
          <span className="font-bold">Order Now</span>
        </Link>
      </div>
    </div>
  );
}
