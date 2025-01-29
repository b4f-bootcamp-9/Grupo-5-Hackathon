import { NextResponse } from 'next/server';
import { getMongoCollection } from '@/server/data/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, dia, ofertas, condicoes, evento, regras, imagem } = body;

    if (!nome || !dia || !ofertas || !condicoes || !evento || !regras || !imagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const collection = await getMongoCollection("meuBanco", "meuColecao");
    await collection.insertOne({
      nome,
      dia,
      ofertas,
      condicoes,
      evento,
      regras,
      imagem,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Dados enviados com sucesso!" });

  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ error: "Erro ao salvar os dados." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const collection = await getMongoCollection("meuBanco", "meuColecao");
    const events = await collection.find({}).toArray();

    return NextResponse.json(events);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    return NextResponse.json({ error: "Erro ao buscar os dados." }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const collection = await getMongoCollection("meuBanco", "meuColecao");
    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: "Evento deletado com sucesso!" });
  } catch (error) {
    console.error('Erro ao deletar o evento:', error);
    return NextResponse.json({ error: "Erro ao deletar o evento." }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    const collection = await getMongoCollection("meuBanco", "meuColecao");
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    return NextResponse.json({ message: "Evento atualizado com sucesso!" });
  } catch (error) {
    console.error('Erro ao atualizar o evento:', error);
    return NextResponse.json({ error: "Erro ao atualizar o evento." }, { status: 500 });
  }
}
