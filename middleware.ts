import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // 本番環境ではプレビューを表示しない
  if (
    process.env.NEXT_PUBLIC_ENV === "production" &&
    request.nextUrl.pathname.startsWith("/about") &&
    request.nextUrl.pathname.endsWith("/preview")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ステージング環境ではBasic認証をかける
  if (process.env.NEXT_PUBLIC_ENV === "staging") {
    const basicAuth = request.headers.get("authorization");
    const url = request.nextUrl;
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (
        user === process.env.NEXT_BASIC_USERNAME &&
        pwd === process.env.NEXT_BASIC_PASSWORD
      ) {
        return NextResponse.next();
      }
    }
    url.pathname = "/api/auth";

    return NextResponse.rewrite(url);
  }

  return;
}
