"use client";
import ExtraBanner from "@/app/(ShaireComponents)/ExtraBanner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FoodDetails from "./FoodDetails";
import Loading from "@/app/(DefaultComponents)/Loading";
import axios from "axios"; // Import axios
import UserInformationForm from "./UserInformationForm";

export default function Page() {
  const { id } = useParams();
  const [foodData, setFoodData] = useState(null); // Set initial value to null for better handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Declare fetchFoodData before useEffect
  const fetchFoodData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/foods/${id}`);
      setFoodData(response.data);
    } catch (error) {
      setError("Failed to fetch food data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ExtraBanner />
      <div className="container mx-auto px-3 py-5">
        {foodData ? (
          <FoodDetails food={foodData.food} />
        ) : (
          <div className="h-[500px] flex justify-center items-center">
            <p className="text-center">No food data available</p>
          </div>
        )}
      </div>
      <UserInformationForm />
    </div>
  );
}
