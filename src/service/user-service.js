import { getUserValidation, loginUserValidation, logoutUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js"
import {validate} from "../validation/validation.js"
import {prismaClient} from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

const register = async (request) =>{
    const user = validate(registerUserValidation,request)

    const countUser = await prismaClient.user.count({
        where: {
            email: user.email
        }
    })

    if(countUser === 1){
        throw new ResponseError(400, "email already exists!")
    }

    user.password = await bcrypt.hash(user.password, 10)

    const result = await prismaClient.user.create({
        data: user,
        select:{
            username: true,
            email: true
        }

    })

    return result
}

const login = async (request) =>{
    const loginRequest = validate(loginUserValidation, request)

    const user = await prismaClient.user.findUnique({
        where:{
            email: loginRequest.email
        },
        select:{
            email: true,
            password: true
        }
    })

    if(!user){
        throw new ResponseError(401, "email invalid!")
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password)
    if(!isPasswordValid){
        throw new ResponseError(401, "password invalid!")
    }

    const token = uuid().toString();

    const result = await prismaClient.user.update({
        data:{
            token: token
        },
        where:{
            email : user.email
        },
        select:{
            token: true
        }
    })

    return result;

}

const get = async (email) =>{
    
    email = validate(getUserValidation, email)

    const user = await prismaClient.user.findUnique({
        where:{
            email: email
        },
        select:{
            email: true,
            username: true,
            whatsapp_number : true,
            address: true
        }
    })

    if(!user){
        throw new ResponseError(401, "Login required!")  
    }

    return user
}

const update = async (request) =>{
    const updateRequest = validate(updateUserValidation, request)

    const totalUser = await prismaClient.user.count({
        where:{
            email : updateRequest.email
        }
    })

    if(totalUser !== 1){
        throw new ResponseError(404, "User not found")
    }

    const data = {}
    if(updateRequest.username){
        data.username = updateRequest.username
    }

    if(updateRequest.password){
        data.password = await bcrypt.hash(updateRequest.password, 10)
    }

    if(updateRequest.whatsapp_number){
        data.whatsapp_number = updateRequest.whatsapp_number
    }

    if(updateRequest.address){
        data.address = updateRequest.address
    }

    const result = await prismaClient.user.update({
        where:{
            email: updateRequest.email
        },
        data: data,
        select:{
            email: true,
            username: true
        }
    })

    return result;
 }

 const logout = async (email) =>{
    email = validate(logoutUserValidation, email)

    const user = await prismaClient.user.findUnique({
        where: {
            email : email
        }
    })

    if(!user){
        throw new ResponseError(404, "User not found!")
    }

    const result = await prismaClient.user.update({
        where:{
            email: user.email
        },
        data:{
            token : null
        },
        select:{
            email : true
        }
    })

    return result
 }

export default{
    register,
    login,
    get,
    update,
    logout
}