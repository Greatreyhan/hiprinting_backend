import Joi from "joi";

const registerUserValidation = Joi.object({
    username : Joi.string().max(100).required(),
    email : Joi.string().max(100).required(),
    password : Joi.string().max(100).required(),
    whatsapp_number: Joi.string().max(100).required() 
})

const loginUserValidation = Joi.object({
    email : Joi.string().max(100).required(),
    password : Joi.string().max(100).required()
})

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
    email : Joi.string().max(100).required(),
    username : Joi.string().max(100).optional(),
    password : Joi.string().max(100).optional(),
    whatsapp_number: Joi.string().max(100).optional(),
    address : Joi.string().max(255).optional()
})

const logoutUserValidation = Joi.string().max(100).required();

export {
    registerUserValidation,
    loginUserValidation,
    getUserValidation,
    updateUserValidation,
    logoutUserValidation
}