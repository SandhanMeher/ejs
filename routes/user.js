const express=require("express")
const router = express.Router()

const {StudentCollection}=require("../model/studentSchema")

router.use((req,res,next)=>{
    console.log("Time : ",Date.now());
    next()
})

// add user (student )
router.post("/user",async (req,res)=>{
    const data=new StudentCollection(req.body)
    const a= await data.save();
    console.log(`router.post("/user")`)
    res.status(200).send(a);
})


// get user(all students)
router.get("/user",async (req,res)=>{
    const students=await StudentCollection.find({});
    console.log(`router.get("/user")`)
    console.log(students)
    res.send(students);
    
})


// get student/user by id
router.get("/user:id",async (req,res)=>{
   try{
    const _id=req.params.id;
    console.log(_id)
    const students=await StudentCollection.findById(_id);
    console.log(`router.get("/user:id")`)
    console.log(students)
    res.status(200).send(students);
   }catch(er){
    console.log(er)
   }
})


// update user by id 
router.patch("/user:id",async (req,res)=>{
    const _id=req.params.id;
    
    const a=await StudentCollection.findByIdAndUpdate(_id,req.body,{
        new:true
    })
    console.log(a);
    res.status(200).send("updated"+a);
})

// if update the entire 
router.put("/user:id",async (req,res)=>{
    const _id=req.params.id;
    
    const a=await StudentCollection.findByIdAndUpdate(_id,req.body,{
        new:true
    })
    console.log(a);
    res.status(200).send("updated"+a);
})
// remove student from .....
router.delete("/user:id",async (req,res)=>{
    const _id=req.params.id;
    const a=await StudentCollection.findByIdAndDelete(_id);
    console.log(a)
    if(a){
        res.status(200).send("deleted"+a);
    }else{

        res.send("not present");
    }
})


module.exports={router};