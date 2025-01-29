import { ReadOneSupplier } from "@/services/suppliers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const res = await ReadOneSupplier(data);

  if (res === false) {
    return NextResponse.json({ response: "ERROR" }, { status: 401 });
  }

  return NextResponse.json({ response: "SUCESSO" }, { status: 200 });
}
