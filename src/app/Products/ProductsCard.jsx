import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({ product }) {
  return (
    <div className="w-full relative bg-white rounded-md shadow-md p-3 flex flex-col justify-between items-center gap-2">
      <div className="w-[80%] h-[100px] sm:h-[130px] rounded-lg overflow-hidden">
        <Image
          src={product?.image ?? "https://i.postimg.cc/7h5ctSsS/images.png"}
          alt={product?.name ?? "food"}
          className="w-auto h-[100%]"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-2 right-2 p-1 text-[10px] font-medium text-white bg-orange-500 rounded-md shadow-md">
        {product?.discount}% off
      </div>
      <h3 className="font-bold">{product?.name ?? "Not Found"}</h3>
      <div className="flex w-full justify-between items-center">
        <del className="text-gray-400 text-sm">${product?.prevPrice}</del>
        <small>
          price : <strong>${product?.price}</strong>
        </small>
      </div>
      <div className="w-full grid grid-cols-2 gap-2">
        <button className="w-full rounded-md border font-medium p-1 border-orange-500 text-sm bg-white text-orange-500 hover:text-white hover:bg-orange-500">
          Add Cart
        </button>
        <Link
          href={`/Products/${product?._id}`}
          className="w-full rounded-md border text-center font-medium p-1 bg-orange-500 text-sm border-orange-500 hover:bg-orange-600 text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
