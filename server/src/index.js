import app from "./app.js"
import dotenv from 'dotenv'
import browserEnv from 'browser-env';
browserEnv(['navigator']);

dotenv.config({
    path:'./.env'
})

const PORT=process.env.PORT||8001;

app.listen(PORT,()=>{
    console.log(`App is listning on port ${PORT}`)
})
