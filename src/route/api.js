import express from "express"
import userController from "../controller/user-controller.js"
import {authMiddleware} from  "../middleware/auth-middleware.js"

const userRouter = new express.Router()
userRouter.use(authMiddleware);
userRouter.get('/api/users', userController.get)
userRouter.patch('/api/users', userController.update)
userRouter.delete('/api/users', userController.logout)

export {
    userRouter
}