"use client";

import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loading from "../(DefaultComponents)/Loading"; // Adjust path as needed
import useCategoryData from "../(customHooks)/useCategoryData"; // Adjust path as needed
import axios from "axios";
import MenousCard from "./MenousCard";

export default function ShowMenus() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 24;

  // Reference for category container
  const categoryContainerRef = useRef(null);

  // Fetch products based on current page and selected category
  const { items, isLoading, fetchError, pageCount } = useCategoryData(
    currentPage,
    limit,
    selectedCategory
  );

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

  const handleCategoryChange = (data) => {
    setSelectedCategory(data);
    setCurrentPage(1);
  };

  const scrollCategories = (direction) => {
    if (categoryContainerRef.current) {
      const scrollAmount = 100; // Adjust scroll amount as needed
      categoryContainerRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  // Filter categories based on search input
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <Loading />;
  if (fetchError) return <p>Error loading data: {fetchError}</p>;

  return (
    <div className="container mx-auto px-2 py-10">
      {/* Category Filter Dropdown with Scroll Controls */}
      <div className="relative flex items-center mb-7 px-5 gap-3">
        {/* Left Scroll Button - Fixed Position */}
        <button
          onClick={() => scrollCategories("left")}
          className="text-orange-500 absolute left-0 z-10 hover:text-orange-700"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={categoryContainerRef}
          className="w-full flex overflow-x-auto scrollbar-hide px-8 gap-3 items-center"
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-1 px-3 rounded-md border outline-0"
            placeholder="Search"
          />
          <button
            onClick={() => handleCategoryChange("")}
            className={`p-1 px-3 rounded-md border whitespace-nowrap w-[150px]`}
          >
            all item
          </button>

          {filteredCategories.map((item, idx) => (
            <button
              onClick={() => handleCategoryChange(item.name)}
              key={idx}
              className={`p-1 px-3 rounded-md border whitespace-nowrap ${
                item.name.split(" ").length > 1 ? "w-[150px]" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Scroll Button - Fixed Position */}
        <button
          onClick={() => scrollCategories("right")}
          className="text-orange-500 absolute right-0 z-10 hover:text-orange-700"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
        {items.length > 0 ? (
          items.map((product, idx) => (
            // Replace with your ProductsCard component
            <MenousCard key={idx} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
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
