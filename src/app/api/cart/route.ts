import { db, cartTable } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { request } from "https";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  // console.log(uid);

  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    // console.log(res);

    return NextResponse.json({ res });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  // console.log(req.quantity);
  // console.log(req.product_id);

  // generating random user id
  var uid = uuid();
  // console.log(uid);

  // storing user id in cookies
  const setCookie = cookies();

  const user_id = cookies().get("user_id")?.value;
  // console.log(user_id);

  if (!user_id) {
    setCookie.set("user_id", uid);
    // console.log(cookies().get("user_id")?.value);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: user_id as string,
      })
      .returning();
    // console.log(res);

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: "something went wrong" });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("userId") as string;
  const productId = req.searchParams.get("productId") as string;

  try {
    const res = await db
      .delete(cartTable)
      .where(
        and(eq(cartTable.user_id, uid), eq(cartTable.product_id, productId))
      );
    // .where(
    //   and(eq(cartTable.user_id, uid), eq(cartTable.product_id, productId))
    // );
    console.log(res);

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Error Something went wrong please try again",
    });
  }
};
