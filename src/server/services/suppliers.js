import { FindOneSupplier, FindSuppliers,InsertOneSupplier } from "@/data/suppliers"


export async function CreateSupplier(data) {

    if (
        !data.nomeEmpresa ||
        !data.localidade ||
        !data.email ||
        !data.telefone ||
        !data.grupo ||
        !data.usuario ||
        !data.senha
      ) {
        throw new Error("Campos obrigatórios estão faltando.");
      }
    
      try {
        return await InsertOneSupplier(data);
      } catch (error) {
        console.error("Erro no serviço CreateSupplier:", error.message);
        throw error;
      }
    
}

export async function ReadSupplier(filters) {
    try{
        return await FindSuppliers(filters)
    }catch(error){
        console.log("Erro no serviço ReadSupplier", error);
        throw new Error("Erro ao buscar fornecedores.");
    } 
}

export async function ReadOneSupplier(data) {

    const res = await FindOneSupplier(data)

    if(res === null){
        return false
    }
    return true
}