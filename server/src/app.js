import express from "express"
import cors from "cors"

const app=express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// import routes from "./routes/admin.routes.js"


export default app;