"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signin(baseUrl: string, redirectPath?: string) {
  const response = await fetch(new URL("/api/auth", baseUrl), {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonResponse = (await response.json()) as {
    message: string;
    data: {
      token: string;
    };
  };

  cookies().set("token", jsonResponse.data.token, {
    secure: true,
    httpOnly: true,
    maxAge: 60 * 60,
  });
  
  redirect(redirectPath?.startsWith("/") ? redirectPath : "/");
}
