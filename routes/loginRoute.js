const express=require("express")
const loginRoute=express.Router();

const{showloginEjs,loginHandler}=require("../handler/loginHandler")




loginRoute.get("/login",showloginEjs)

loginRoute.post("/login",loginHandler)

module.exports={loginRoute}