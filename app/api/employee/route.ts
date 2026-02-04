import { NextResponse } from "next/server";

export async function GET() {
  const { default: employee } = await import("../../data/employee.json");
  return NextResponse.json(employee);
}
