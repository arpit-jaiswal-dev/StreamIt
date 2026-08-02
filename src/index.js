// require("dotenv").config({path: "./.env"}); 
import dotenv from "dotenv";
dotenv.config({path: "./env"});
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import DbConnect from "./db/index.js";
import app from './app.js'
// ;( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
//         app.on("error", (error)=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch(err){
//         console.log(err);
//         throw err;
//     }
// })()

DbConnect() // this method is async so it will return a promise
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB Co nnection failed!! : ",err);
    process.exit(1);
})