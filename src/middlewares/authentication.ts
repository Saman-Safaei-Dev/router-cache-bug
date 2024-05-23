import { NextRequest, NextResponse } from "next/server";
import toRegExp from "@/utils/toRegExp";

const protectedRoutes = toRegExp(["/dashboard.*"]);
const protectedExceptions = toRegExp([]);
const guestRoutes = toRegExp(["/auth.*"]);

function authentication(request: NextRequest) {
  const authToken = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  if (!authToken || !authToken.value) {
    const isProtectedRoute = protectedRoutes.some(regex => regex.test(pathname));
    const isException = protectedExceptions.some(regex => regex.test(pathname));

    if (isProtectedRoute && !isException) {
      const newUrl = new URL(`/auth/signin?path=${pathname}`, request.url);
      return NextResponse.redirect(newUrl, { status: 301 });
    }
  } else if (authToken && authToken.value.trim()) {
    const isGuestRoute = guestRoutes.some(regex => regex.test(pathname));

    if (isGuestRoute) {
      const newUrl = new URL("/", request.url);
      return NextResponse.redirect(newUrl, { status: 301 });
    }
  }

  return null;
}

export default authentication;
