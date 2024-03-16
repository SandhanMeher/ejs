const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express()

require("./model/connection")
const {StudentCollection}=require("./model/studentSchema")
const {router}=require("./routes/user")

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")  
app.use(router)

app.get("/",(req,res)=>{
    res.render("index",{registation:"registation"})
})

app.get("/registation",(req,res)=>{
    res.render("registation")
})

app.post("/submit",async (req,res)=>{
    const s1=new StudentCollection(req.body);
     await s1.save();

    res.render("index",{registation:"registered"})

})

app.use("*",(req,res,next)=>{
    res.send("not rourt")
})
const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  