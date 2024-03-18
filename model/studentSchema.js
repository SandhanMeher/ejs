const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    rollno:{
        type:String,
        require:true
    }
});
const StudentCollection=new mongoose.model("student",studentSchema);
module.exports={StudentCollection};