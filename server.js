const express=require("express")
const path=require("path")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const bcrypt=require("bcrypt")

const app=express()

require("./model/connection")
const {StudentCollection}=require("./model/studentSchema")
const {router}=require("./routes/user")

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")  
app.use(router)

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/registation",(req,res)=>{
    res.render("registation")
})

app.post("/submit",async (req,res)=>{
    const name=req.body.name;
    const rollnoGet=req.body.rollno;
    const rollno=await bcrypt.hash(rollnoGet,10)
    
    const a= new StudentCollection({
        name,
        rollno
    })
    
     await a.save()
    res.render("index")

})


app.get("/signin",(req,res)=>{
    res.render("login");
})

app.post("/login",async (req,res)=>{
    
    console.log(req.body)
    // const rollno=req.body.rollno;
    // thinking that name should be unique


    const a=await StudentCollection.findOne({
        name:req.body.name
    });
    console.log(a)
    if(a){
        const match=await bcrypt.compare(req.body.rollno,a.rollno);
        if(match){
            res.send(a);
        }else{
            res.send("password not matched")
        }
    }else{
        res.send("name matched but nott rollno")
    }
})

app.use("*",(req,res,next)=>{
    res.send("not rourt")
})
const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  