import { cookies } from "next/headers";

export const API_KEY_COOKIE_NAME = "aic_api_key";
export const INTERNAL_API_KEY = "key-mockui-yZaAbBcCdDeEfFgG";

export function getBackendBaseUrl() {
  return (
    process.env.BACKEND_BASE_URL ||
    "https://bluepixel.vivo.com.cn"
  );
}

export async function getStoredApiKey() {
  const cookieStore = await cookies();
  return cookieStore.get(API_KEY_COOKIE_NAME)?.value || INTERNAL_API_KEY;
}

export function buildAuthHeaders(apiKey: string, extra?: HeadersInit) {
  return {
    ...(extra || {}),
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
  };
}

export async function proxyJson(
  path: string,
  init?: RequestInit & { apiKey?: string },
) {
  const url = `${getBackendBaseUrl()}${path}`;
  const headers = new Headers(init?.headers);

  if (init?.apiKey) {
    headers.set("Authorization", `Bearer ${init.apiKey}`);
  }

  const response = await fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  });

  return response;
}
