import { connectiondb } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Connect to the database
    if (!mongoose.connection.readyState) {
      await mongoose.connect(connectiondb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Parse URL for query parameters (pagination params)
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;
    const skip = (page - 1) * limit;

    // Fetch paginated data from the database
    const data = await foodSchema.find().skip(skip).limit(limit);
    const totalCount = await foodSchema.countDocuments();

    // Respond with the paginated data and pagination information
    return NextResponse.json({
      foods: data,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalItems: totalCount,
    });
  } catch (error) {
    console.error("Error fetching foods data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
