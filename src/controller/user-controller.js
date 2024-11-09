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

const login = async(req,res,next) =>{
    try{
        const result = await  userService.login(req.body);
        res.status(200).json({
            status:"OK",
            message:"Successfully login as user",
            data:result
        })
    }
    catch(err){
        next(err)
    }
}

const get = async (req,res,next)=>{
    try{
        const email = req.user.email
        const result = await  userService.get(email);
        res.status(200).json({
            status:"OK",
            message:"Successfully get user data",
            data:result
        })
    }
    catch(err){
        next(err)
    }
}

const update = async (req,res,next)=>{
    try{
        const email = req.user.email
        const request = req.body
        request.email = email
        const result = await  userService.update(request);
        res.status(200).json({
            status:"OK",
            message:"Successfully update user data",
            data:result
        })
    }
    catch(err){
        next(err)
    }
}

const logout = async (req,res,next)=>{
    try{
        const email = req.user.email
        const result = await userService.logout(email)

        res.status(200).json({
            status: "OK",
            message:"Successfully logout user",
            data: result
        })
    }
    catch(err){
        next(err)
    }
}

export default{
    register,
    login,
    get,
    update,
    logout
}
