import express  from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log(`server connected at ${PORT}`);
    }
})