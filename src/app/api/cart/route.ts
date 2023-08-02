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
  console.log(req.quantity);

  // generating random user id
  const uid = uuid();
  // storing user id in cookies
  const setCookie = cookies();

  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookie.set("user_id", uid);
  }

  try {
    const res = db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        // quantity: req.quantity,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    // console.log(error);
    // return NextResponse.json({ error, message: "something went wrong" });
  }
};
