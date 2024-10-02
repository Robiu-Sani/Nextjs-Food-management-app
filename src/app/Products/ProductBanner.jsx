import Image from "next/image";
import bannerImage from "../../_images/banner2.jpg";
import { IoFastFood } from "react-icons/io5";
import Link from "next/link";

export default function ProductBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Feast-Frame Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Banner Text */}
      <div className="absolute inset-0 flex pt-[100px] flex-col justify-center items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to Feast-Frame
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl">
          Delicious meals delivered from our restaurant to your door. Fresh,
          hot, and ready to feast!
        </p>
        <Link
          href={"/Products"}
          className=" flex text-white justify-center mb-5 items-center gap-3 px-5 p-2 rounded-md bg-orange-500 hover:bg-orange-700"
        >
          <IoFastFood />
          <span className="text-white font-bold">Order Now</span>
        </Link>
      </div>
    </div>
  );
}
