import { NextResponse } from "next/server";
import {
  criarEvento,
  buscarEventos,
  deletarEvento,
  atualizarEvento,
} from "@/server/services/modalform";

export async function POST(request) {
  try {
    const body = await request.json();

    if (
      !body.nome ||
      !body.dia ||
      !body.ofertas ||
      !body.condicoes ||
      !body.evento ||
      !body.regras ||
      !body.imagem
    ) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    await criarEvento(body);
    return NextResponse.json({ message: "Dados enviados com sucesso!" });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return NextResponse.json(
      { error: "Erro ao salvar os dados." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const events = await buscarEventos();
    return NextResponse.json(events);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os dados." },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await deletarEvento(id);
    return NextResponse.json({ message: "Evento deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar o evento:", error);
    return NextResponse.json(
      { error: "Erro ao deletar o evento." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    await atualizarEvento(body);
    return NextResponse.json({ message: "Evento atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar o evento:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar o evento." },
      { status: 500 }
    );
  }
}
