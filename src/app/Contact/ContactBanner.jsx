import Image from "next/image";
import Link from "next/link";
import { IoMailSharp } from "react-icons/io5";
import bannerImage from "../../_images/subbanner2.jpg";

export default function ContactBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Feast-Frame Contact Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex pt-[100px] flex-col justify-center items-center text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Get in Touch with Feast-Frame
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl">
          Have any questions or need support? We are here to help. Contact us
          for any inquiries.
        </p>

        {/* Call to Action Button */}
        <Link
          href="/Contact"
          className="flex items-center gap-3 px-5 py-2 rounded-md bg-red-500 hover:bg-red-700 transition duration-300"
        >
          <IoMailSharp className="text-2xl" />
          <span className="font-bold">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
