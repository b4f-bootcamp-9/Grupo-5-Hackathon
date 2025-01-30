import { getMongoCollection } from "@/server/data/mongodb";

export async function findAllBooks() {
  const collection = await getMongoCollection("meuBanco", "books");
  return await collection.find({}).toArray();
}

export async function insertBook(bookData) {
  const collection = await getMongoCollection("meuBanco", "books");
  return await collection.insertOne(bookData);
}
