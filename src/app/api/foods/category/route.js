import { connectiondb } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(connectiondb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;
    const category = searchParams.get("category");
    const skip = (page - 1) * limit;

    const filter = {};
    if (category) filter.category = category;

    const data = await foodSchema.find(filter).skip(skip).limit(limit);
    const totalCount = await foodSchema.countDocuments(filter);

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
