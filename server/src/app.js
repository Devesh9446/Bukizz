import express from "express"
import cors from "cors"

const app=express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());


import userRoutes from "./routes/admin.routes.js"
app.use("/v1/admin",userRoutes)

export default app; 