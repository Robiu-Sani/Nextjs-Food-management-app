import Image from "next/image";
import Link from "next/link";
import { IoInformationCircleSharp } from "react-icons/io5";

export default function AboutBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/65R9df9x/banner1.png"
        alt="Feast-Frame About Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex pt-[100px] flex-col justify-center items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          About Feast-Frame
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl">
          Discover our passion for delivering fresh, delicious food right to
          your door. At Feast-Frame, every meal is crafted with love and care.
        </p>

        {/* Call to Action Button */}
        <Link
          href="/About"
          className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 transition duration-300"
        >
          <IoInformationCircleSharp className="text-2xl" />
          <span className="font-bold">Learn More</span>
        </Link>
      </div>
    </div>
  );
}
