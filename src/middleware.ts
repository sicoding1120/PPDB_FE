/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  username: string;
  email: string;
  role?: string;
  phone?: string;
  exp?: number;
  iat?: number;
}

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("AdminToken");

  if (!token) return NextResponse.redirect(new URL("/", req.url));

  try {
    const decoded:any = jwtDecode<JwtPayload>(token?.value as string);
    if (Date.now() >= decoded?.exp * 1000) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*"],
};
