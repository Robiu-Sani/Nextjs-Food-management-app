import { connectiondb } from "@/app/lib/db";
import { userSchema } from "@/app/lib/usersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { email } = params;
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const user = await userSchema.findOne({ email });
  return NextResponse.json({ exists: !!user, user });
}
