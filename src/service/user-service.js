import { registerUserValidation } from "../validation/user-validation.js"
import {validate} from "../validation/validation.js"
import {prismaClient} from "../application/database.js"
import { ResponseError } from "../error/response-error.js"
import bcrypt from "bcrypt"

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

export default{
    register
}