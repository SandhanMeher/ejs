const express=require("express")
const registationRoute=express.Router()

const {getDataFromRegistration,showRegistrationForm}=require("../handler/registrationHandler")


registationRoute.get("/registation",showRegistrationForm)

registationRoute.post("/registation",getDataFromRegistration)

module.exports={registationRoute}