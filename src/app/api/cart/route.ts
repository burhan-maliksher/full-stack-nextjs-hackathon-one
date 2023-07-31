import { db, cartTable } from "@/lib/drizzle";
import { NextResponse, NextRequest } from "next/server";

export const Get = async (reequest: Request) => {
  //   const client = await db.connect();
  try {
    const res = db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};
