import { NextRequest, NextResponse } from "next/server";

import authentication from "@/middlewares/authentication";

const middlewares = [authentication];

function middleware(request: NextRequest) {
  console.log("run")
  for (const middleware of middlewares) {
    const response = middleware(request);
    if (response !== null) return response;
  }

  return NextResponse.next();
}

export default middleware;
