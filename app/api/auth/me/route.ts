import { NextResponse } from "next/server";
import { getStoredApiKey, INTERNAL_API_KEY } from "@/lib/backend";

export async function GET() {
  const apiKey = await getStoredApiKey();

  const parts = apiKey.split("-");
  const hintPrefix =
    parts.length >= 2 ? `${parts[0]}-${parts[1]}-` : `${apiKey.slice(0, 8)}-`;

  return NextResponse.json({
    ok: true,
    internal: apiKey === INTERNAL_API_KEY,
    key_hint: `${hintPrefix}****`,
  });
}
