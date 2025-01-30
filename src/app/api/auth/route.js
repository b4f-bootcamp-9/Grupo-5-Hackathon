import { NextResponse } from "next/server";
import { authenticateAdmin } from "@/server/services/auth";

export async function POST(request) {
  try {
    const { email, senha } = await request.json();

    const result = await authenticateAdmin(email, senha);

    if (result.authenticated) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch (error) {
    console.error("Erro na autenticação:", error);
    return NextResponse.json(
      { error: "Erro na autenticação." },
      { status: 500 }
    );
  }
}
