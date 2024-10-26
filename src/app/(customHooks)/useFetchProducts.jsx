"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProducts(page = 1, limit = 12) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/foods?page=${page}&limit=${limit}`
        );
        setProducts(response.data.foods);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return { products, loading, error, totalPages };
}
