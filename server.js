const express=require("express")
const app=express()
const main=require("./routers/main")
const loggerMiddleware=require("./middleware/loggerMiddleware")

app.use(loggerMiddleware)
app.use(main)


app.listen(3000,()=>{
    console.log("server started")
})