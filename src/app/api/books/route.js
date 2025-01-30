import { NextResponse } from "next/server";
import { getAllBooks, createBook } from "@/server/services/books";

export async function GET() {
  try {
    const result = await getAllBooks();

    return NextResponse.json(result.data);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return NextResponse.json(
      { error: "Erro ao buscar livros." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const bookData = await request.json();
    const result = await createBook(bookData);

    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    return NextResponse.json(
      { error: "Erro ao criar livro." },
      { status: 500 }
    );
  }
}
