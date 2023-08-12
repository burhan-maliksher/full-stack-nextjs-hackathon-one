import { db, cartTable } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async (request: Request) => {
  try {
    const res = db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  // console.log(req.quantity);
  // console.log(req.product_id);

  // generating random user id

  const uid = uuid();
  // console.log(uid);

  // storing user id in cookies
  const setCookie = cookies();

  const user_id = cookies().get("user_id");
  // console.log(user_id);

  if (!user_id) {
    setCookie.set("user_id", uid);
    // console.log(user_id);
  }

  try {
    const res = db
      .insert(cartTable)
      .values({
        user_id: cookies().get("user_id")?.value as string,
        product_id: req.product_id,
        quantity: req.quantity,
        // quantity: 1,
        // user_id: "test",
        // product_id: "testid",
        // quantity: 1,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "something went wrong" });
  }
};
