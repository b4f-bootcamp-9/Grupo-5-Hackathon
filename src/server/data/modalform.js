import { getMongoCollection } from "@/server/data/mongodb";
import { ObjectId } from "mongodb";

export async function inserirEvento(dados) {
  const collection = await getMongoCollection("meuBanco", "events");
  return await collection.insertOne(dados);
}

export async function buscarTodosEventos() {
  const collection = await getMongoCollection("meuBanco", "events");
  return await collection.find({}).toArray();
}

export async function removerEvento(id) {
  const collection = await getMongoCollection("meuBanco", "events");
  return await collection.deleteOne({ _id: new ObjectId(id) });
}

export async function modificarEvento(id, dados) {
  const collection = await getMongoCollection("meuBanco", "events");
  return await collection.updateOne({ _id: new ObjectId(id) }, { $set: dados });
}
