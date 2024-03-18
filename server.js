const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

require("dotenv").config()

const app=express()

require("./model/connection")
const {router}=require("./routes/user")
const {registationRoute}=require("./routes/registationRoute")
const {loginRoute}=require("./routes/loginRoute")

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")  



app.get("/",(req,res)=>{
    res.render("index")
})

// routes for addEventListener,delete,find update ,by id find or delete /update
app.use(router)

// registration routs 
app.use(registationRoute)

// login routs
app.use(loginRoute)

// it handel for all other routes 
app.use("*",(req,res,next)=>{
    res.send("not rourt")
})

const port =process.env.port || 1000;
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})  