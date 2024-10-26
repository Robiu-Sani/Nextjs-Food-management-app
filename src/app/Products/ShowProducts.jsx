"use client";
import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loading from "../(DefaultComponents)/Loading";
import useFetchProducts from "../(customHooks)/useFetchProducts";

export default function ShowProducts() {
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const limit = 12; // Items per page

  const { products, loading, error, totalPages } = useFetchProducts(
    currentPage,
    limit
  );

  // Pagination handler
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="w-full mb-7 flex gap-5 flex-col sm:flex-row justify-start items-center">
        <input
          type="search"
          className="w-full sm:w-[350px]  p-1 px-3 rounded-md outline-0 border "
          placeholder="Search Here"
        />
        <select
          className="w-full sm:w-[250px] p-1 px-3 rounded-md outline-0 border"
          placeholder="Select A Category"
        >
          <option value="">fgd;flg</option>
          <option value="">fgd;flg</option>
          <option value="">fgd;flg</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {/* Previous Button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center p-2 rounded-md ${
            currentPage === 1 ? "text-gray-400" : "text-orange-500"
          }`}
        >
          <FaChevronLeft />
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center p-2 rounded-md ${
            currentPage === totalPages ? "text-gray-400" : "text-orange-500"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
