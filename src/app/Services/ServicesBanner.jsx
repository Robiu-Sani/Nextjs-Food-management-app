import Image from "next/image";
import Link from "next/link";
import { IoRestaurant } from "react-icons/io5";
import bannerImage from "../../_images/banner5.png";

export default function ServicesBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Feast-Frame Services Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex pt-[100px] flex-col justify-center items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Services at Feast-Frame
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl">
          From fast delivery to catering for your special occasions, we provide
          top-notch services to ensure every meal is a feast!
        </p>

        {/* Call to Action Button */}
        <Link
          href="/Services"
          className="flex items-center gap-3 px-5 py-2 rounded-md hover:bg-orange-800 bg-orange-600 transition duration-300"
        >
          <IoRestaurant className="text-2xl" />
          <span className="font-bold">Explore Services</span>
        </Link>
      </div>
    </div>
  );
}
