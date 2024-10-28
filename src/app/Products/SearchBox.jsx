"use client";
import { useState } from "react";

export default function SearchBox({ categories, handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full relative sm:w-[350px] flex flex-col gap-4">
      <input
        type="search"
        className="w-full p-1 rounded-md border outline-0 px-4"
        placeholder="Search Here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Timeout allows button clicks to register
      />

      {isFocused && (
        <div className="w-full p-2 border flex flex-col rounded-md shadow-xl bg-white absolute top-12 z-50">
          <button
            className="w-full text-left p-1 border-b"
            onMouseDown={() => handleSearch("")} // Use onMouseDown to prevent onBlur
          >
            All Categories
          </button>

          {filteredCategories.map((item, idx) => (
            <button
              onMouseDown={() => handleSearch(item.name)} // Use onMouseDown to prevent onBlur
              className={`w-full text-left p-1 ${
                idx < filteredCategories.length - 1 ? "border-b" : ""
              }`}
              key={idx}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
