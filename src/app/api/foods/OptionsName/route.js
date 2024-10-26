import { connectiondb } from "@/app/lib/db";
import { categorySchema } from "@/app/lib/categoryModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Connect to the database if not already connected
    if (!mongoose.connection.readyState) {
      await mongoose.connect(connectiondb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Fetch distinct values for category and status
    const categories = await categorySchema.distinct("category");
    const statuses = await categorySchema.distinct("status");

    // Combine category and status into a single array with labels
    const combinedFilters = [
      ...categories.map((item) => ({ name: item, type: "category" })),
      ...statuses.map((item) => ({ name: item, type: "status" })),
    ];

    // Respond with only the combined filters
    return NextResponse.json({
      filters: combinedFilters, // Array of categories and statuses only
    });
  } catch (error) {
    console.error("Error fetching categories and statuses:", error);
    return NextResponse.json(
      { error: "Failed to fetch filters" },
      { status: 500 }
    );
  }
}
