import { connectiondb } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is missing" },
      { status: 400 }
    );
  }
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(connectiondb);
  }
  try {
    const food = await foodSchema.findOne({ _id: new ObjectId(id) });

    return NextResponse.json({ exists: !!food, food });
  } catch (error) {
    console.error("Error fetching food:", error);
    return NextResponse.json(
      { error: "Failed to fetch food" },
      { status: 500 }
    );
  }
}
