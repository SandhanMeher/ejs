const express=require("express")
const path=require("path")
const mongoose=require("mongoose")

const app=express()

require("./model/connection")
const {StudentCollection}=require("./model/studentSchema")
const { userInfo } = require("os")

app.use(express.json());


app.post("/user",async (req,res)=>{
    const data=new StudentCollection(req.body)
    const a= await data.save();
    console.log(`app.post("/user")`)
    res.status(200).send(a);
})

app.get("/user",async (req,res)=>{
    const students=await StudentCollection.find({});
    console.log(`app.get("/user")`)
    console.log(students)
    res.send(students);
    
})

// (async ()=>{
//     const a1=new StudentCollection({
//         "name":"a",
//         "rollno":"1"
//     })
//     const a=await a1.save();
//     console.log(a)
// })().then(()=>{
//     console.log("one record.....")
// }).catch((er)=>{
//     console.log(er);
// })


const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  