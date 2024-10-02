import { connectiondb } from "@/app/lib/db";
import { userSchema } from "@/app/lib/usersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const data = await userSchema.find();
  console.log(data);
  return NextResponse.json({ route: data });
}

export async function POST(request) {
  const signUpData = await request.json();
  await mongoose.connect(connectiondb, { useNewUrlParser: true });
  const postData = new userSchema(signUpData);
  const result = await postData.save();
  return NextResponse.json({ result, success: true });
}
