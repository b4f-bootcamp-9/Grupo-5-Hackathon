const { FindUser } = require("@/data/users");

export async function ReadUser(data) {

    const res = await FindUser(data)

    if(res === null){
        return false
    }
    return true
}

