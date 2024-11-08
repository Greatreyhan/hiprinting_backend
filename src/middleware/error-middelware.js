import { ResponseError } from "../error/response-error.js";
// import {ValidationError} from  "joi"

const errorMiddleware = async (err,req,res,next) =>{

    if(!err) {
        next();
        return;
    }

    if(err instanceof ResponseError){
        console.log(err)
        res.status(err.status).json({
            status:"Failed",
            message:err.message,
            data:{}
        }).end();
    }
    else{
        console.log(err)
        res.status(500).json({
            status:"Failed",
            message:err.message,
            data:{}
        }).end()
    }
}

export{
    errorMiddleware
}