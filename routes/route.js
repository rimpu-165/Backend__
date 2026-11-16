const express=require("express")
const { Register, Login } = require("../controller/controller")

const router=express.Router()


router.post("/create",Register)

router.post("/login",Login)


module.exports=router

