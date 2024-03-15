const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student",).then(()=>{
    console.log("connecten .....")
}).catch((er)=>{
    console.log(er)
})