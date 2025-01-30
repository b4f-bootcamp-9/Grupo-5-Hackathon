import { getMongoCollection } from "@/server/data/mongodb";

export async function findAdminByCredentials(email, senha) {
  const collection = await getMongoCollection("meuBanco", "admin");
  return await collection.findOne({ email, senha });
}
