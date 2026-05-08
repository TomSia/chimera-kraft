import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const username = body.username;
  const password = body.password;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json(
    { success: false },
    { status: 401 }
  );
}