import { NextRequest, NextResponse } from "next/server";
import { getStoredApiKey, proxyJson } from "@/lib/backend";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  try {
    const apiKey = await getStoredApiKey();
    if (!apiKey) {
      return NextResponse.json({ error: "未登录" }, { status: 401 });
    }

    const { sessionId } = await params;
    const response = await proxyJson(`/api/v1/conversations/${sessionId}`, {
      method: "GET",
      apiKey,
    });

    const payload = await response.json().catch(() => ({ error: "查询失败" }));
    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json({ error: "后端服务不可达" }, { status: 502 });
  }
}
