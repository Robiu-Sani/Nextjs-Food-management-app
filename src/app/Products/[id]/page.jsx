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
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [makeOrder, setMakeOrder] = useState(false);

  // Declare fetchFoodData before useEffect
  const fetchFoodData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/foods/${id}`);
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

  const HandleCallBuy = (data) => {
    setMakeOrder(data);
  };

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ExtraBanner />
      <div className="container mx-auto px-3 py-5">
        {makeOrder ? (
          <UserInformationForm
            makeOrder={makeOrder}
            HandleCallBuy={HandleCallBuy}
          />
        ) : (
          <FoodDetails
            makeOrder={makeOrder}
            HandleCallBuy={HandleCallBuy}
            food={foodData.food}
          />
        )}
      </div>
    </div>
  );
}
