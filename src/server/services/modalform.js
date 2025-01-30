import {
  inserirEvento,
  buscarTodosEventos,
  removerEvento,
  modificarEvento,
} from "@/server/data/modalform";

export async function criarEvento(dadosEvento) {
  const eventoComData = {
    ...dadosEvento,
    createdAt: new Date(),
  };
  return await inserirEvento(eventoComData);
}

export async function buscarEventos() {
  return await buscarTodosEventos();
}

export async function deletarEvento(id) {
  return await removerEvento(id);
}

export async function atualizarEvento(dados) {
  const { id, ...updateData } = dados;
  return await modificarEvento(id, updateData);
}
