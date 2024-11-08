import { prismaClient } from "../src/application/database.js"


export const deleteUserTest = async () =>{
    await prismaClient.user.deleteMany({
        where:{
            email : 'test@gmail.com'
        }
    })
}