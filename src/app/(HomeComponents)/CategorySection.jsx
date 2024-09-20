import Link from "next/link";
import { IoFastFood } from "react-icons/io5";
import image1 from "../../_images/Card1.jpg";
import image2 from "../../_images/card4.jpg";
import image3 from "../../_images/card5.jpg";
import image4 from "../../_images/card6.jpg";
import image5 from "../../_images/card3.webp";
import image6 from "../../_images/card8.jpeg";
import Image from "next/image";

export default function CategorySection() {
  return (
    <div className="w-full bg-gray-100 py-10 px-2">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-500 font-extrabold">BEST FOOD</p>
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Our Category
          </h2>

          <div className="container mx-auto pt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { image: image1, title: "Delicious Salad" },
              { image: image2, title: "Tasty Burgers" },
              { image: image3, title: "Sweet Desserts" },
              { image: image4, title: "Hot Pizza" },
              { image: image5, title: "Healthy Wraps" },
              { image: image6, title: "Fresh Smoothies" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group w-full overflow-hidden rounded-md"
              >
                <Image
                  src={item.image}
                  alt="category image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"/Menus"}
            className="mt-9 flex text-white justify-center items-center gap-3 px-5 p-2 rounded-md bg-orange-500 hover:bg-orange-700"
          >
            <IoFastFood />
            <span className="text-white font-bold">See All Categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
