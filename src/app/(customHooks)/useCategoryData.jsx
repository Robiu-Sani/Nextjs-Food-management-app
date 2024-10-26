import { useEffect, useState } from "react";
import axios from "axios";

const useCategoryData = (page = 1, limit = 12, category = "") => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `/api/foods?page=${page}&limit=${limit}&category=${category}`
        );
        setItems(response.data.foods);
        setPageCount(response.data.totalPages);
      } catch (err) {
        setFetchError("Failed to fetch items");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, limit, category]);

  return { items, isLoading, fetchError, pageCount };
};

export default useCategoryData;
