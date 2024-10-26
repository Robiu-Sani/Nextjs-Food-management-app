"use client";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard"; // Adjust the import path as needed
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loading from "../(DefaultComponents)/Loading"; // Adjust the import path as needed
import useCategoryData from "../(customHooks)/useCategoryData"; // Adjust the import path as needed
import axios from "axios";

export default function ShowProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const limit = 12;

  // Custom hook for fetching products based on category
  const { items, isLoading, fetchError, pageCount } = useCategoryData(
    currentPage,
    limit,
    selectedCategory
  );

  // Fetch categories from API on initial render
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/foods/OptionsName");
        const fetchedCategories = res.data.filters.filter(
          (item) => item.type === "category"
        );
        setCategories(fetchedCategories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Pagination handler
  const goToPage = (page) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  // Loading and error handling
  if (isLoading) return <Loading />;
  if (fetchError) return <p>Error loading data: {fetchError}</p>;

  return (
    <div className="container mx-auto px-2 py-10">
      {/* Search and Category Filter */}
      <div className="w-full mb-7 flex gap-5 flex-col sm:flex-row justify-start items-center">
        <input
          type="search"
          className="w-full sm:w-[350px] p-1 px-3 rounded-md outline-0 border"
          placeholder="Search Here"
        />
        <select
          className="w-full sm:w-[250px] p-1 px-3 rounded-md outline-0 border"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1); // Reset to the first page when category changes
          }}
        >
          <option value="">All Categories</option>
          {categories.map((item, idx) => (
            <option key={idx} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {items.length > 0 ? (
          items.map((product) => (
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
            currentPage === 1
              ? "text-gray-400"
              : "text-orange-500 hover:text-orange-700"
          }`}
        >
          <FaChevronLeft />
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === pageCount}
          className={`flex items-center justify-center p-2 rounded-md ${
            currentPage === pageCount
              ? "text-gray-400"
              : "text-orange-500 hover:text-orange-700"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}