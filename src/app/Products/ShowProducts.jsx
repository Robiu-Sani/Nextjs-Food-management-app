"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // React Icons
import Loading from "../(DefaultComponents)/Loading";

export default function ShowProducts() {
  // State to store fetched products and pagination
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12; // Items per page

  // Fetch data from the API when the component mounts or page changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/foods?page=${currentPage}&limit=${limit}`
        );
        setProducts(response.data.foods);
        setTotalPages(response.data.totalPages); // Get the total number of pages
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]); // Re-fetch when page changes

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
