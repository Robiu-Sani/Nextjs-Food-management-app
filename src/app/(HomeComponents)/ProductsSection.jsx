import Link from "next/link";
import { IoFastFood } from "react-icons/io5";

export default function ProductsSection() {
  return (
    <div className="w-full bg-gray-100 py-10 px-2">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-orange-500 font-extrabold">BEST FOOD</p>
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Our Products
          </h2>

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
