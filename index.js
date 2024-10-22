import mongoose from "mongoose";
import express from 'express'
const app = express()

const connectionDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Zerodha")
        console.log("connect to db");
        
    } catch (error) {
        console.log("not connect to db");
        throw error
        
    }
}
connectionDb().then(()=>{
    app.listen(4000,()=>{
        console.log("Listning port",4000);
        
    })
})