import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";
export const GET = async (reequest: Request) => {
  try {
    const res = db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const POST = async (reequest: Request) => {
  const req = await reequest.json();

  // generating random user id
  const uid = uuid();
  // storing user id in cookies
  const setCookie = cookies();

  if (!cookies().has("user_id")) {
    setCookie.set("user_id", uid);
  }

  try {
    const res = db.insert(cartTable).values({
      user_id: cookies().get("user_id")?.value as string,
      quantity: 1,
      product_id: req.product_id,
    });
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};
