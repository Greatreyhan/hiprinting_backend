import { prismaClient } from "../src/application/database.js"
import bcrypt from "bcrypt"

export const deleteUserTest = async () =>{
    await prismaClient.user.deleteMany({
        where:{
            email : 'test@gmail.com'
        }
    })
}

export const createUserTest = async () =>{
    await prismaClient.user.create({
        data:{
            username:"test",
            email:"test@gmail.com",
            password: await bcrypt.hash("test", 10),
            whatsapp_number:"00000",
            token: "test"
        }
    })
}

export const getUserTest = async () =>{
    return prismaClient.user.findUnique({
        where:{
            email: "test@gmail.com"
        }
    })
}