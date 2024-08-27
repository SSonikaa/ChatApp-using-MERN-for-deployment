import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connecttomongodb =async()=>{
    try {
        const uri= "mongodb+srv://dpsvnson2003:Sonik%4007@cluster0.g3nvurt.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";
        
        await mongoose.connect(uri)
        console.log("connected to mongodb")
        
    } catch (error) {
        console.log("error connecting to mongodb",error.message)
        
    }
}
export default connecttomongodb;

