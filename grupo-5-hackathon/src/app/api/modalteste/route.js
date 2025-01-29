import { NextResponse } from 'next/server';
import { getMongoCollection } from '@/data/mongodb';  // Certifique-se de que o caminho está correto

export async function POST(request) {
  try {
    const body = await request.json(); // Recebe os dados enviados via POST

    const { nome, dia, ofertas, condicoes, evento, regras, imagem } = body;

    // Verifica se todos os campos necessários foram preenchidos
    if (!nome || !dia || !ofertas || !condicoes || !evento || !regras || !imagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    // Conexão com o MongoDB e inserção dos dados
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

    // Retorna uma resposta de sucesso
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
