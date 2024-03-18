const bcrypt=require("bcrypt")
const {StudentCollection}=require("../model/studentSchema");

function showRegistrationForm(req,res){
    res.render("registation")
}

async function getDataFromRegistration (req,res){
    const name=req.body.name;
    const rollnoGet=req.body.rollno;
    const rollno=await bcrypt.hash(rollnoGet,10)
    
    const a= new StudentCollection({
        name,
        rollno
    })
    
     await a.save().then(()=>{

         res.render("index")
     }).catch(()=>{
        res.send("name should be unique ......")
     })

}

module.exports={
    getDataFromRegistration,
    showRegistrationForm
}