const express=require("express")
const path=require("path")
const mongoose=require("mongoose")

const app=express()

require("./model/connection")
const {StudentCollection}=require("./model/studentSchema")
const {router}=require("./routes/user")

app.use(express.json());
app.use(router)


const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  