// require("dotenv").config({path: "./.env"}); 
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import DbConnect from "./db/index.js";
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

DbConnect();