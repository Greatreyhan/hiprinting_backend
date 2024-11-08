import userService from "../service/user-service.js"

const register = async (req,res,next)=>{
    try{
        const result = await  userService.register(req.body);
        res.status(201).json({
            status:"OK",
            message:"Successfully create user",
            data:result
        })
    }
    catch(err){
        next(err)
    }
}

export default{
    register
}