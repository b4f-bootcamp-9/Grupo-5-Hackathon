const {getMongoCollection} = require("./mongodb")
const col = "users"
const db = "event"

export async function FindUser(data) {
    const collection = await getMongoCollection(db, col)
    const result = await collection.findOne({email: data.email, password: data.password})

    return result 
}
