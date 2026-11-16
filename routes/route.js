const express=require("express")
const { Register } = require("../controller/controller")

const router=express.Router()


router.post("/create",Register)


module.exports=router

