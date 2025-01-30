import { findAllBooks, insertBook } from "@/server/data/books";

export async function getAllBooks() {
  try {
    const books = await findAllBooks();
    return {
      success: true,
      data: books,
    };
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
}

export async function createBook(bookData) {
  try {
    const result = await insertBook(bookData);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw error;
  }
}
