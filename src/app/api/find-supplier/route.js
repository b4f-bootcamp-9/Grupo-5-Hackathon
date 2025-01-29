import { ReadSupplier } from "@/services/suppliers";
import { NextResponse } from "next/server";

// src/app/api/find-supplier/route.js
export async function GET(req) {
    try {
      const url = new URL(req.url);
      const grupo = url.searchParams.get("grupo")
      const localidade = url.searchParams.get("localidade");
  
      console.log("Grupo:", grupo)
      console.log("Localidade:", localidade)
  
      const fornecedores = await ReadSupplier(grupo, localidade);
  
      return NextResponse.json({ response: fornecedores }, { status: 200 });
    } catch (error) {
      console.error("Erro na API GET:", error);
      return NextResponse.json({ error: "Erro ao buscar fornecedores." }, { status: 500 });
    }
  }
  