const express=require("express")
const path=require("path")
const mongoose=require("mongoose")

const app=express()

require("./model/connection")
const {StudentCollection}=require("./model/studentSchema")
const {router}=require("./routes/user")

app.use(express.json());
app.use(router)
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.use("*",(req,res,next)=>{
    res.send("not rourt")
})
const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  