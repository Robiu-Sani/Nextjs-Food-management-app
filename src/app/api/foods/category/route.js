import { connectiondb } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Connect to MongoDB if not already connected
    if (!mongoose.connection.readyState) {
      await mongoose.connect(connectiondb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Extract search parameters from the request URL
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;
    const category = searchParams.get("category");

    const skip = (page - 1) * limit;

    // Log the search parameters for debugging
    console.log("Search Params: ", { page, limit, category });

    // Define the filter for the query
    const filter = category ? { category } : {};

    // Fetch data with pagination and filtering
    const data = await foodSchema.find(filter).skip(skip).limit(limit);
    const totalCount = await foodSchema.countDocuments(filter);

    // Log the data being sent back
    console.log("Fetched Foods Data: ", data);

    return NextResponse.json({
      foods: data,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalItems: totalCount,
      hasSearchParams: Boolean(category),
    });
  } catch (error) {
    console.error("Error fetching foods data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
