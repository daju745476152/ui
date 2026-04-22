import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { API_KEY_COOKIE_NAME } from "@/lib/backend";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(API_KEY_COOKIE_NAME);
  return NextResponse.json({ ok: true });
}
