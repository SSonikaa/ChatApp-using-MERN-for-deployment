import path from "path";
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import connecttomongodb from "./db/connecttomongodb.js"
import messageRoutes from  "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

import { app,server } from "./socket/socket.js"

const PORTnew=8000
const PORT= PORTnew || 5000
dotenv.config()

const __dirname= path.resolve();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


server.listen(PORT,()=>{
    connecttomongodb(); 
    console.log(`server running ${PORT}`)
})