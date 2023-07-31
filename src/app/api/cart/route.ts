import { db } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export default async function Get(reequest: Request) {
  const client = await db.connect();
  try {
  } catch (error) {
    console.log(error);
    return new Response("something went wrong");
  }
}
