const { ObjectId } = require("mongodb")
const {getMongoCollection} = require("./mongodb")
const col = "suppliers"
const db = "event"

async function InsertOneSupplier(obj){
    try{
        obj._id = new ObjectId()
        const collection = await getMongoCollection(db, col)
        const result = await collection.insertOne(obj)
        console.log(result.insertedId);

        return result.insertedId 
    } catch(error) {
        console.error("Erro ao inserir fornecedor:", error);
        throw new Error("Erro ao inserir fornecedor.");
    }
   
}
async function FindSuppliers({grupo,localidade}) {
    try{
        const collection = await getMongoCollection(db, col)

        const query = {}
        if(grupo) query.grupo = grupo
        if(localidade) query.localidade = localidade

        return await collection.find(query).toArray()
    }catch(error){
        console.log("Erro ao buscar fornecedores: ", error);
        throw new Error("Erro ao buscar fornecedores")
        
    }

}
 async function FindOneSupplier(data) {
    try {
        const collection = await getMongoCollection(db, col);
        const result = await collection.findOne({email: data.email, senha: data.senha});
    
        if (!result) {
          console.log("Nenhum fornecedor encontrado com as credenciais fornecidas.");
        }
    
        return result;
      } catch (error) {
        console.error("Erro ao buscar fornecedor:", error);
        throw new Error("Erro ao buscar fornecedor.");
      }
}


module.exports =  {InsertOneSupplier, FindSuppliers, FindOneSupplier}